"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navbarRef = useRef(null);

  useEffect(() => {
    const timelineSlidingText = gsap.timeline({
      scrollTrigger: {
        trigger: navbarRef.current,
        start: "0%",
        end: "80%",
        scrub: 1,
      },
    });

    const timelineLogo = gsap.timeline({
      scrollTrigger: {
        trigger: navbarRef.current,
        start: "0%",
        end: "60%",
        scrub: 1,
      },
    });

    const timelineBox = gsap.timeline({
      scrollTrigger: {
        trigger: navbarRef.current,
        start: "0%",
        end: "80%",
        scrub: 1,
      },
    });

    timelineSlidingText.fromTo(".sliding-text", { y: 0 }, { y: -400 });

    const breakpoint = [window.matchMedia("(min-width: 768px)")];

    if (breakpoint[0].matches) {
      timelineLogo.fromTo(
        ".logo",
        { scale: 6 },
        { scale: 1, top: "1.3rem", left: "5rem", x: "50%", y: "50%" }
      );
      timelineBox.fromTo(
        ".square",
        { left: "70%" },
        { left: "100%", opacity: 0, rotation: 90 }
      );
    } else {
      timelineLogo.fromTo(
        ".logo",
        { scale: 3 },
        { scale: 1, top: "1.3rem", left: "1.25rem", x: "50%", y: "50%" }
      );
      timelineBox.fromTo(
        ".square",
        { left: "60%" },
        { left: "70%", opacity: 0, rotation: 90 }
      );
    }

    const timelinePinPage = gsap.timeline({
      scrollTrigger: {
        trigger: navbarRef.current,
        start: "0%",
        end: "300%",
        scrub: 1,
        pin: true,
        pinSpacing: false,
      },
    });
  }, []);

  return (
    <>
      <div className="w-20 h-20 md:w-40 md:h-40 bg-slate-700 absolute top-3/4 left-3/4 square"></div>
      <section className="home h-screen" ref={navbarRef}>
        <nav className="flex items-center justify-between py-4 px-5 md:px-20 bg-white">
          <h1 className="sliding-text">
            <Link href="/">
              Ewerton
              <br />
              Full Stack Developer
            </Link>
          </h1>
          <ul className="md:flex hidden">
            <li>
              <Link className="ml-10 lg:ml-20 underline" href="#me">
                About Me
              </Link>
            </li>
            <li>
              <Link className="ml-10 lg:ml-20 underline" href="#projects">
                Projects
              </Link>
            </li>
          </ul>
        </nav>
        <h2 className="logo">Devton</h2>
      </section>
    </>
  );
}
