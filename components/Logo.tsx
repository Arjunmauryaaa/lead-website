import Link from "next/link";
import { brand } from "@/lib/content";

export default function Logo() {
  return (
    <Link href="/" className="logo" aria-label={`${brand.name} home`}>
      <span className="logo__mark" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span className="logo__word">{brand.name}</span>
    </Link>
  );
}
