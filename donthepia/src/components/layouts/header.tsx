"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";

import Container from "../common/container";
import Menu from "./menu";
import { NAVIGATION } from "./navigation";

export default function Header() {
  const pathname = usePathname();
  // const [isStickyHeader, setStickyHeader] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // useLayoutEffect(() => {
  //   if (window.scrollY > 0) {
  //     setStickyHeader(true);
  //   }
  //   document.addEventListener("scroll", () => {
  //     if (window.scrollY > 0) {
  //       setStickyHeader(true);
  //     } else {
  //       setStickyHeader(false);
  //     }
  //   });
  //   return () => document.removeEventListener("scroll", () => {});
  // }, []);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setMobileMenuOpen(false);
      window.requestAnimationFrame(() => window.scrollTo(0, 0));
    }
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  }, [mobileMenuOpen]);

  const onChangeMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  return (
    <header
      className={clsx(
        "inset-x-0 top-0 z-50 transition-colors duration-200 bg-black"
      )}
    >
      <Container>
        <nav
          className="flex items-center justify-between py-8"
          aria-label="Global"
        >
          <Link className="hidden md:block" href="/">
            <Image
              loading="eager"
              priority
              src={"/logo-donthepia.webp"}
              alt="what-happened-logo"
              width={211}
              height={26}
            />
          </Link>

          <Menu
            isOpen={mobileMenuOpen}
            onChangeMobileMenu={onChangeMobileMenu}
          />
          <Link className="block md:hidden" href="/">
            <Image
              loading="eager"
              priority
              src={"/logo-donthepia.webp"}
              alt="what-happened-logo"
              width={120}
              height={28}
            />
          </Link>
          <div className="flex">
            <ul
              className={clsx(
                "hidden items-center md:gap-x-4 lg:gap-x-10 whitespace-nowrap text-white md:static md:flex md:h-auto md:flex-row md:bg-transparent md:px-0 md:pt-0",
                {
                  "absolute left-0 right-0 top-[54px] !flex h-screen flex-col bg-black px-4 pt-4":
                    mobileMenuOpen,
                }
              )}
            >
              {NAVIGATION.map((item) => {
                return (
                  <li
                    className={clsx(
                      "relative w-full whitespace-nowrap border-b border-b-white py-2.5 text-sm text-left uppercase md:border-none md:py-0 md:uppercase md:underline-offset-[7px] after:md:absolute after:md:-bottom-0.5 after:md:left-0 after:md:h-0.5 after:md:w-0 after:md:bg-white after:md:transition-all after:md:duration-300 after:md:hover:w-full",
                      {
                        "md:underline": pathname === item.href,
                      }
                    )}
                    key={item.href}
                  >
                    <Link href={item.href}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex gap-2 md:gap-8">
            <Image
              src="/ic-language.webp"
              alt="ic-language"
              width={27}
              height={27}
              className="object-contain"
            />
            <div className="rounded-full bg-[#f1302f] py-3 px-6 flex gap-2">
              <p className="text-base text-[#0d0d0d] font-semibold whitespace-nowrap">
                NFT 구매
              </p>
              <Image
                src="/arrow-right.webp"
                alt="arrow-right"
                width={12}
                height={12}
                className="object-contain"
              />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
