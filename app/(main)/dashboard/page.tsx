import DashBoardSetup from "@/components/dashboard-setup/dashboard-setup";
import db from "@/lib/supabase/db";
import { getUserSubscriptionStatus } from "@/lib/supabase/queryies";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const Dashboard = async (props: Props) => {
  const supabase = createServerComponentClient({ cookies: cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return;

  const workspace = await db.query.workspaces.findFirst({
    where: (workspace, { eq }) => eq(workspace.workspace_owner, user.id),
  });
  const { data: subscription, error: subscriptionError } =
    await getUserSubscriptionStatus(user.id);
    
  if (subscriptionError) return;

  if (!workspace)
    return (
      <div className="w-full h-screen grid place-items-center">
        <DashBoardSetup subscription={subscription} user={user} />
      </div>
    );
  redirect(`/dashboard/${workspace.id}`);
};

export default Dashboard;
