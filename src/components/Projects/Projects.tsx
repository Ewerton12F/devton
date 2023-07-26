import Link from "next/link";
import Image from "next/image";
import React from "react";
import {
  IconBrandDjango,
  IconBrandGithub,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
} from "@tabler/icons-react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="h-fit bg-teal-800 text-white flex items-start justify-center flex-col px-5 md:px-20 gap-20 py-20"
    >
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-7">
          <h2 className="text-4xl leading-snug">Projects</h2>
          <div>
            <h3 className="text-2xl my-5">This Website</h3>
            <div className="flex flex-col lg:flex-row lg:gap-10">
              <Image src="/mobile-devton.png" alt="" width={320} height={480} />
              <div>
                <p className="my-5">
                  Personal website that showcases my projects.
                </p>
                <h4 className="text-xl my-3">Technologies:</h4>
                <ul>
                  <li className="flex gap-2">
                    <IconBrandReact size={22} stroke={2} />
                    <p>React</p>
                  </li>
                  <li className="flex gap-2">
                    <IconBrandTypescript size={22} stroke={2} />
                    <p>TypeScript</p>
                  </li>
                  <li className="flex gap-2">
                    <IconBrandTailwind size={22} stroke={2} />
                    <p>Tailwind</p>
                  </li>
                  <li className="flex gap-2">
                    <IconBrandDjango size={22} stroke={2} />
                    <p>Django</p>
                  </li>
                </ul>
                <ul>
                  <h4 className="text-xl my-3">Github Repositories:</h4>
                  <li className="flex gap-2">
                    <IconBrandGithub size={22} stroke={2} />
                    <Link
                      target="_blank"
                      className="underline pointer"
                      href="https://github.com/Ewerton12F/devton-django"
                    >
                      Django Repository
                    </Link>
                  </li>
                  <li className="flex gap-2">
                    <IconBrandGithub size={22} stroke={2} />
                    <Link
                      target="_blank"
                      className="underline pointer"
                      href="https://github.com/Ewerton12F/devton"
                    >
                      React Repository
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl my-5">Doctor&#39;s Website (PT/BR)</h3>
            <div className="flex flex-col lg:flex-row lg:gap-10">
              <Image src="/mobile-robson.png" alt="" width={320} height={480} />
              <div>
                <p className="my-5">
                  Personal website that showcases the Doctor&#39;s services, and
                  it includes a blog.
                </p>
                <h4 className="text-xl">Link:</h4>
                <Link
                  target="_blank"
                  className="underline pointer"
                  href="https://www.robsonbatista.com/"
                >
                  www.robsonbatista.com
                </Link>
                <h4 className="text-xl my-3">Technologies:</h4>
                <ul>
                  <li className="flex gap-2">
                    <IconBrandReact size={22} stroke={2} />
                    <p>React</p>
                  </li>
                  <li className="flex gap-2">
                    <IconBrandTypescript size={22} stroke={2} />
                    <p>TypeScript</p>
                  </li>
                  <li className="flex gap-2">
                    <IconBrandTailwind size={22} stroke={2} />
                    <p>Tailwind</p>
                  </li>
                  <li className="flex gap-2">
                    <IconBrandDjango size={22} stroke={2} />
                    <p>Django</p>
                  </li>
                </ul>
                <ul>
                  <h4 className="text-xl my-3">Github Repositories:</h4>
                  <li className="flex gap-2">
                    <IconBrandGithub size={22} stroke={2} />
                    <Link
                      target="_blank"
                      className="underline pointer"
                      href="https://github.com/Ewerton12F/teste-server"
                    >
                      Django Repository
                    </Link>
                  </li>
                  <li className="flex gap-2">
                    <IconBrandGithub size={22} stroke={2} />
                    <Link
                      target="_blank"
                      className="underline pointer"
                      href="https://github.com/Ewerton12F/test-website"
                    >
                      React Repository
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-7">
          <h2 className="text-4xl leading-snug">Future Projects</h2>
          <div>
            <h3 className="text-2xl my-5">Organity App</h3>
            <div className="flex flex-col lg:flex-row lg:gap-10">
              <Image src="/on-progress.png" alt="" width={320} height={480} />
              <div>
                <p className="my-5">
                  This is a productivity app that can be used to manage your
                  time. It provides an easy way to track your daily progress and
                  gain perspective on your tasks.
                </p>
                <h4 className="text-xl my-3">Technologies:</h4>
                <ul>
                  <li className="flex gap-2">
                    <IconBrandReact size={22} stroke={2} />
                    <p>React</p>
                  </li>
                  <li className="flex gap-2">
                    <IconBrandTypescript size={22} stroke={2} />
                    <p>TypeScript</p>
                  </li>
                  <li className="flex gap-2">
                    <IconBrandTailwind size={22} stroke={2} />
                    <p>Tailwind</p>
                  </li>
                  <li className="flex gap-2">
                    <IconBrandDjango size={22} stroke={2} />
                    <p>Django</p>
                  </li>
                </ul>
                <ul>
                  <h4 className="text-xl my-3">Github Repositories:</h4>
                  <li className="flex gap-2">
                    <IconBrandGithub size={22} stroke={2} />
                    <Link
                      target="_blank"
                      className="underline pointer"
                      href="https://github.com/Ewerton12F/organity-django"
                    >
                      Django Repository (on progress)
                    </Link>
                  </li>
                  <li className="flex gap-2">
                    <IconBrandGithub size={22} stroke={2} />
                    <Link
                      target="_blank"
                      className="underline pointer"
                      href="https://github.com/Ewerton12F/organity-django"
                    >
                      React Repository (on progress)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
