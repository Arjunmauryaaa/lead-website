"use client";

import { useEffect, useState } from "react";
import { clocks } from "@/lib/content";

function fmt(tz: string, d: Date) {
  return new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: tz }).format(d);
}
function isOpen(tz: string, d: Date) {
  const parts = new Intl.DateTimeFormat("en-US", { hour: "numeric", hour12: false, weekday: "short", timeZone: tz }).formatToParts(d);
  const h = Number(parts.find((p) => p.type === "hour")?.value ?? 0);
  const wd = parts.find((p) => p.type === "weekday")?.value ?? "";
  return h >= 9 && h < 18 && wd !== "Sat" && wd !== "Sun";
}

export default function Clocks() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 15000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="wrap clocks reveal" aria-label="Local time in our client markets">
      {clocks.map((c) => {
        const open = now ? isOpen(c.tz, now) : false;
        return (
          <div className="clock" key={c.tz}>
            <span className="clock__city">
              <i className={open ? "on" : ""} aria-hidden="true" />
              {c.city}
            </span>
            <b suppressHydrationWarning>{now ? fmt(c.tz, now) : "--:--"}</b>
          </div>
        );
      })}
    </div>
  );
}
