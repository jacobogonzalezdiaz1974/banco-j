import HeaderBox from "@/components/HeaderBox";
import RecentTransactions from "@/components/RecentTransactions";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getAccount, getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";

import React from "react";

type SearchParamProps = {
  searchParams: { id?: string; page?: string };
};

const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
  const currentPage = Number(page as string) || 1;
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({ userId: loggedIn.$id });
  if (!accounts) return;
  const accounstData = accounts?.data;
  const appwriteItemId = (id as string) || accounstData[0]?.appwriteItemId;
  const account = await getAccount({ appwriteItemId });
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions"
          />
          <TotalBalanceBox
            accounts={accounstData}
            totalBanks={accounts?.totalBanks}
            totalCurrentBalance={accounts?.totalCurrentBalance}
          />
        </header>
        <RecentTransactions
          accounts={accounstData}
          transactions={accounts?.transactions}
          appwriteItemId={appwriteItemId}
          page={currentPage}
        />
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={account?.transactions}
        banks={accounstData?.slice(0, 2)}
      />
    </section>
  );
};

export default Home;
