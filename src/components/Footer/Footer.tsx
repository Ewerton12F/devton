import Link from "next/link";

export default function Footer() {
  return (
    <footer className="h-52 bg-slate-700 text-white flex items-center justify-between px-5 md:px-20">
      <div>
        <Link className="underline" href="/">
          DevTon
        </Link>
      </div>
      <ul className="flex gap-5">
        <li>
          <Link
            target="_blank"
            className="underline"
            href="https://wa.me//5584988633633"
          >
            Whatsapp
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            className="underline"
            href="https://github.com/Ewerton12f"
          >
            Github
          </Link>
        </li>
      </ul>
    </footer>
  );
}
