import { files } from "@/migrations/schema";
import db from "./db";
import { Subscription } from "./db.types";
import {validate} from "uuid"
import { eq } from "drizzle-orm";

export const getUserSubscriptionStatus = async (userId: string) => {
  try {
    const data = await db.query.subscriptions.findFirst({
      where(fields, operators) {
        return operators.eq(fields.userId, userId);
      },
    });

    if (data) return { data: data as Subscription, error: null };
    else return { data: null, error: null };
  } catch (error) {
    return { data: null, error: `error ${error}` };
  }
};

export const getFiles = async (folderId: string) => {
  const isValid = validate(folderId);
  if (!isValid) return { data: null, error: "Error" };
  try {
    const results = (await db
      .select()
      .from(files)
      .orderBy(files.created_at)
      .where(eq(files.folder_id, folderId))) as File[] | [];
    return { data: results, error: null };
  } catch (error) {
    console.log(error);
    return { data: null, error: "Error" };
  }
};
