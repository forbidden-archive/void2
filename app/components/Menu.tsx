import Link from "next/link";

export default function Menu() {
  return (
    <header className="menu">
      <Link href="/">VOID</Link>
      <nav>
        <Link href="/log">LOG</Link>
        <Link href="/network">NETWORK</Link>
        <Link href="/proposal">PROPOSAL</Link>
      </nav>
    </header>
  );
}
