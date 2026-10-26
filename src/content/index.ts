import type { Locale } from "@/lib/i18n";
import { pt } from "./pt";
import { en } from "./en";

export type { Dictionary } from "./pt";

const dictionaries = { pt, en } as const;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

export type { Locale } from "@/lib/i18n";
