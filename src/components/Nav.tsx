"use client";

// import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import Link from "next/link";
import { useRef, useState } from "react";
import { LuCircleDotDashed } from "react-icons/lu";
import mediaQueries from "../utils/mediaQueries";

const Nav = () => {
  const navBodyRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const openNav = () => {
    const mm = gsap.matchMedia();

    mediaQueries.forEach(
      ({
        navHeight,
        navWidth,
        navTranslateX,
        navLinkTranslateX,
        navLinkTranslateY,
        linkFontSize,
        linkHeight,
        mqCondition,
      }) => {
        mm.add(`${mqCondition}`, () => {
          const tl = gsap.timeline();
          gsap.to(overlayRef.current, {
            opacity: 1,
            height: "100vh",
            width: "100vw",
            duration: 0.0002,
            delay: 0,
            position: "fixed",
            overflow: "visible",
          });
          gsap.set(navBodyRef.current, {
            translateX: navTranslateX,
            overflow: "visible",
          });
          gsap.set(".navLink", {
            translateX: navLinkTranslateX,
            translateY: navLinkTranslateY,
            // overflow: "visible",
            fontSize: linkFontSize,
          });
          gsap.set(".lineHeight", {
            height: linkHeight,
          });
          tl.to(navBodyRef.current, {
            height: navHeight, //change
            width: navWidth, //change
            duration: 0.9,
            delay: 0,
            ease: "none",
          });
          tl.fromTo(
            ".navLink",
            {
              top: "400%",
              left: "250%",
              duration: 0.8,
              opacity: 0.2,
              ease: "power2.inOut",
              stagger: 0.2,
              delay: 0.2,
            },
            {
              top: "0",
              left: "0",
              duration: 0.8,
              opacity: 1,
              ease: "power2.inOut",
              stagger: 0.2,
              delay: 0.2,
            }
          );
        });
      }
    );
    setIsOpen(true);
  };
  const closeNav = () => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".navLink",
      {
        top: "0",
        left: "0",
        duration: 0.8,
        opacity: 0.2,
        ease: "power2.inOut",
        stagger: 0.2,
        delay: 0.2,
      },
      {
        top: "400%",
        left: "250%",
        duration: 0.8,
        opacity: 0.2,
        ease: "power2.inOut",
        stagger: 0.2,
        delay: 0,
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
                -bottom-[50%]
                -left-[100%]
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
            <div className="lineHeight relative text-nowrap overflow-visible ">
              <span className="navLink absolute top-0 left-0">
                <Link href={""}>HOME</Link>
              </span>
            </div>
            <div className="lineHeight relative text-nowrap overflow-visible ">
              <span className="navLink absolute top-0 left-0">
                <Link href={""}>Our team</Link>
              </span>
            </div>
            <div className="lineHeight relative text-nowrap overflow-visible ">
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
