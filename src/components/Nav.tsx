"use client";

// import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import Link from "next/link";
import { useRef, useState } from "react";
import { LuCircleDotDashed } from "react-icons/lu";

const Nav = () => {
  const navBodyRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const mm = gsap.matchMedia();
  const openNav = () => {
    mm.add("(min-width:1200px)", () => {
      const tl = gsap.timeline();
      gsap.to(overlayRef.current, {
        opacity: 1,
        height: "100vh",
        width: "100vw",
        duration: 0.0002,
        delay: 0,
        position: "fixed",
      });
      tl.to(navBodyRef.current, {
        height: "200vh",
        width: "200vh",
        duration: 0.5,
        delay: 0,
        ease: "none",
      });
      tl.fromTo(
        ".navLink",
        {
          top: "100%",
          left: "20%",
          duration: 0.5,
          opacity: 0.2,
          ease: "power2.inOut",
          stagger: 0.2,
          delay: 0.2,
        },
        {
          top: "0",
          left: "0",
          duration: 0.5,
          opacity: 1,
          ease: "power2.inOut",
          stagger: 0.2,
          delay: 0.2,
        }
      );
    });
    mm.add("(min-width:800px) and  (max-width:1199px)", () => {
      const tl = gsap.timeline();
      gsap.set(".overFlowClass", {
        // translateY: "-10rem",
        translateX: "50vw",
        fontSize: "5.5rem",
        height: "5.5rem",
        width: "150vw",
        // backgroundColor: "gold",
      });
      gsap.set(navBodyRef.current, {
        left: "-100%",
        bottom: "-100%",
      });
      gsap.to(overlayRef.current, {
        opacity: 1,
        height: "100vh",
        width: "100vw",
        duration: 0.0002,
        delay: 0,
        position: "fixed",
      });
      tl.to(navBodyRef.current, {
        height: "200vh",
        width: "200vw",
        duration: 0.5,
        delay: 0,
        ease: "none",
      });
      tl.fromTo(
        ".navLink",
        {
          top: "100%",
          left: "20%",
          duration: 0.5,
          opacity: 0.2,
          ease: "power2.inOut",
          stagger: 0.2,
          delay: 0.2,
        },
        {
          top: "0",
          left: "0",
          duration: 0.5,
          opacity: 1,
          ease: "power2.inOut",
          stagger: 0.2,
          delay: 0.2,
        }
      );

      setIsOpen(true);
    });
    mm.add("(min-width:300px) and  (max-width:799px)", () => {
      const tl = gsap.timeline();
      gsap.set(navBodyRef.current, {
        left: "-100%",
        bottom: "-100%",
      });
      gsap.set(".overFlowClass", {
        translateY: "-10rem",
        translateX: "50vw",
        fontSize: "4rem",
        height: "4rem",
        width: "150vw",
        // backgroundColor: "gold",
      });
      gsap.to(overlayRef.current, {
        opacity: 1,
        height: "100vh",
        width: "100vw",
        duration: 0.0002,
        delay: 0,
        position: "fixed",
      });
      tl.to(navBodyRef.current, {
        height: "165vh",
        width: "200vw",
        duration: 0.5,
        delay: 0,
        ease: "none",
      });
      tl.fromTo(
        ".navLink",
        {
          top: "100%",
          left: "20%",
          duration: 0.5,
          opacity: 0.2,
          ease: "power2.inOut",
          stagger: 0.2,
          delay: 0.2,
        },
        {
          top: "0",
          left: "0",
          duration: 0.5,
          opacity: 1,
          ease: "power2.inOut",
          stagger: 0.2,
          delay: 0.2,
        }
      );

      setIsOpen(true);
    });
  };
  const closeNav = () => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".navLink",
      {
        top: "0",
        left: "0",
        duration: 1,
        opacity: 0.2,
        ease: "power2.inOut",
        stagger: 0.2,
        delay: 0.2,
      },
      {
        top: "100%",
        left: "20%",
        duration: 0.5,
        opacity: 0.2,
        ease: "power2.inOut",
        stagger: 0.2,
        delay: 0.2,
      }
    );

    gsap.to(overlayRef.current, {
      opacity: 0,
      height: 0,
      width: 0,
      duration: 1,
      delay: 0,
    });
    tl.to(navBodyRef.current, {
      height: 0,
      width: 0,
      duration: 1,
      delay: 0,
    });
    setIsOpen(false);
  };
  return (
    <>
      <div
        onClick={() => {
          closeNav();
        }}
        ref={overlayRef}
        className="top-0 left-0
            h-0 w-0
            opacity-0
            overflow-hidden
            bg-primary/20
        z-[1000]
        "
      />
      <button
        className="fixed bottom-2 left-2 size-10 group z-[1001]"
        onClick={() => {
          if (isOpen) {
            closeNav();
          } else {
            openNav();
          }
        }}
      >
        <LuCircleDotDashed
          className={`size-full ${isOpen ? "text-orange-400" : "text-accent"}`}
        />
      </button>
      <div
        ref={navBodyRef}
        className="
                fixed
                -bottom-[100%]

                -left-[50%]

                bg-accent
                rounded-full
                z-[1000]
                text-primary
                "
      >
        <div
          className="h-80 w-[45vw]  translate-x-[115%] translate-y-[95%]
                font-bebas text-8xl
                uppercase

                "
        >
          <div>
            <div className=" overFlowClass relative  overflow-hidden h-28 text-nowrap">
              <span className="navLink absolute top-0 left-0">
                <Link href={""}>HOME</Link>
              </span>
            </div>
            <div className=" overFlowClass relative  overflow-hidden h-28 text-nowrap">
              <span className="navLink absolute top-0 left-0">
                <Link href={""}>Our team</Link>
              </span>
            </div>
            <div className=" overFlowClass relative  overflow-hidden h-28 text-nowrap">
              <span className="navLink absolute top-0 left-0">
                <Link href={""}>Reach us</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
