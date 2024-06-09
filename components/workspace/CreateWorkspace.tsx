import React from "react";
import { AuthUser } from "@supabase/supabase-js";

import DashBoardSetup from "../dashboard-setup/dashboard-setup";

import { getUserSubscriptionStatus } from "@/lib/supabase/queryies";

type Props = { user: AuthUser };

const CreateWorkspace = async (props: Props) => {
  const { data: subscription, error: subscriptionError } =
    await getUserSubscriptionStatus(props.user.id);

  if (subscriptionError) return;

  return (
    <div className="w-full h-screen grid place-items-center">
      <DashBoardSetup subscription={subscription} user={props.user} />
    </div>
  );
};

export default CreateWorkspace;
