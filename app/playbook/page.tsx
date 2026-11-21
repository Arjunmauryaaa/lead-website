import type { Metadata } from "next";
import { playbook } from "@/lib/playbook";
import PlaybookGate from "@/components/PlaybookGate";

export const metadata: Metadata = {
  title: "The 2026 Digital Marketing Playbook | Arjunta",
  description: playbook.subtitle,
  alternates: { canonical: "/playbook" },
};

export default function PlaybookPage() {
  return (
    <main>
      <PlaybookGate />
    </main>
  );
}
