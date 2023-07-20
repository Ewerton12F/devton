import Link from "next/link";

export default function Footer() {
  return (
    <footer className="h-52 bg-slate-700 text-white flex items-center justify-between px-5 md:px-20">
      <div>
        <Link href="/">DevTon</Link>
      </div>
      <ul className="">
        <li>
          <Link className="ml-10" href="#">
            Whatsapp
          </Link>
        </li>
        <li>
          <Link className="ml-10" href="#">
            Github
          </Link>
        </li>
      </ul>
    </footer>
  );
}
