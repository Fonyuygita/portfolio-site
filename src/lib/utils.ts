import { DataStoreItem } from "@/app/types";
import { chatDataStore } from "@/data/chatStore";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const findRelevantResponse = (
  input: string
): DataStoreItem | undefined => {
  const normalizedInput = input.toLowerCase();
  return chatDataStore.find((item) =>
    item.triggers.some((trigger) =>
      normalizedInput.includes(trigger.toLowerCase())
    )
  );
};
