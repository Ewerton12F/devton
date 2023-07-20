import Link from "next/link";
import React from "react";

export default function Projects() {
  return (
    <section className="h-screen bg-teal-800 text-white flex items-start justify-center flex-col px-5 md:px-20">
      <h2 className="text-5xl leading-snug">Projects</h2>
      <Link href="/">Doctor&#39;s Website</Link>
    </section>
  );
}
