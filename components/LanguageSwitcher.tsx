"use client";

import { usePathname, useRouter } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

import { Locale, locales } from "@/lib/content";

type Props = Readonly<{
  locale: Locale;
}>;

const flags: Record<Locale, string> = {
  fr: "/flags/fr.svg",
  en: "/flags/en.svg",
};

const labels: Record<Locale, string> = {
  fr: "Français",
  en: "English",
};

export default function LanguageSwitcher({ locale }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  function onChange(newLocale: Locale) {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  }

  return (
    <Select value={locale} onValueChange={onChange}>
      <SelectTrigger className="w-[140px] flex items-center gap-2">
        <img
          src={flags[locale]}
          alt={labels[locale]}
          className="w-5 h-4 rounded-[2px] border border-border object-cover"
        />
        <span className="text-sm">{labels[locale]}</span>
      </SelectTrigger>

      <SelectContent
        position="popper"
        side="bottom"
        align="end"
        className="w-[140px]"
      >
        {locales.map((loc) => (
          <SelectItem key={loc} value={loc}>
            <div className="flex items-center gap-2">
              <img
                src={flags[loc]}
                alt={labels[loc]}
                className="w-5 h-4 rounded-[2px] border border-border object-cover"
              />
              <span>{labels[loc]}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
