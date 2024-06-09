import db from "./db";
import { Subscription } from "./db.types";

export const getUserSubscriptionStatus = async (userId: string) => {
  try {
    const data = await db.query.subscriptions.findFirst({
      where(fields, operators) {
        return operators.eq(fields.user_id, userId);
      },
    });

    if (data) return { data: data as Subscription, error: null };
    else return { data: null, error: null };
  } catch (error) {
    console.log(error);

    return { data: null, error: `error ${error}` };
  }
};
