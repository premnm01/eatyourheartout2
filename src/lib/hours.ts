import { useEffect, useState } from "react";

const TZ = "America/Los_Angeles";
const WEEKDAYS = new Set(["Mon", "Tue", "Wed", "Thu", "Fri"]);
const OPEN_MINUTES = 10 * 60;       // 10:00 AM
const CLOSE_MINUTES = 14 * 60 + 30; // 2:30 PM

export function isOpenNow(): boolean {
  const now = new Date();
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TZ,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(now);

  const weekday = parts.find((p) => p.type === "weekday")?.value ?? "";
  const hour = parseInt(parts.find((p) => p.type === "hour")?.value ?? "0", 10);
  const minute = parseInt(parts.find((p) => p.type === "minute")?.value ?? "0", 10);
  const total = hour * 60 + minute;

  return WEEKDAYS.has(weekday) && total >= OPEN_MINUTES && total < CLOSE_MINUTES;
}

export function useIsOpen(): boolean | null {
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    setOpen(isOpenNow());
    const id = setInterval(() => setOpen(isOpenNow()), 60_000);
    return () => clearInterval(id);
  }, []);

  return open;
}
