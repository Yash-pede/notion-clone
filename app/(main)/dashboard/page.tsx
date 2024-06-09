import CreateWorkspace from "@/components/workspace/CreateWorkspace";
import db from "@/lib/supabase/db";
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

  if (!workspace) return <CreateWorkspace user={user} />;
  else redirect(`/dashboard/${workspace.id}`);
};

export default Dashboard;
