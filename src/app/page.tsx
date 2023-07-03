import Image from "next/image";
import Link from "next/link";

export default function Home(): JSX.Element {
  return (
    <main
      id="hello"
      className="flex min-h-screen flex-col items-center justify-center gap-10 my-10 mx-5 text-center"
    >
      <h1 className="text-4xl">
        Hello! <br /> I&#39;m Ewerton!
      </h1>
      <div className="flex flex-col items-center justify-center gap-5">
        <p>This is my first project</p>
        <Link
          href="https://www.robsonbatista.com/"
          className="flex items-center justify-center"
        >
          <Image
            className="w-3/4 md:hidden rounded-lg ring ring-blue-700 ring-offset-4"
            src="/mobile-robsonbatista.com.png"
            alt="website-landing-page"
            width={700}
            height={700}
          />
          <Image
            className="w-3/4 hidden md:block rounded-lg ring ring-blue-700 ring-offset-4"
            src="/robsonbatista.com.png"
            alt="website-landing-page"
            width={700}
            height={700}
          />
        </Link>
        <p>This page will be updated very soon! Comeback later</p>
      </div>
    </main>
  );
}
