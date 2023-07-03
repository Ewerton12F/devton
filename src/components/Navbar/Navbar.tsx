import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div>
        <Link href="/">DevTon</Link>
      </div>
      <div>
        <Link href="#">Projects</Link>
        <Link href="#">What&#39;s next</Link>
      </div>
    </nav>
  );
}
