"use client";

import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { SiGnuprivacyguard, SiXdadevelopers } from "react-icons/si";
import { MdOutlineEmail, MdForkRight } from "react-icons/md";
import {
  BsEmojiSmileUpsideDown,
  BsEmojiSurprise,
  BsEmojiWink,
  BsEmojiSunglasses,
  BsEmojiDizzy,
  BsEmojiAstonished,
} from "react-icons/bs";
import { LuGlobe, LuSun, LuMoon } from "react-icons/lu";
import { FiGithub, FiGitlab, FiShield } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function Page() {
  const icons = [
    BsEmojiDizzy,
    BsEmojiAstonished,
    BsEmojiSmileUpsideDown,
    BsEmojiSurprise,
    BsEmojiWink,
    BsEmojiSunglasses,
  ];

  const [darkMode, setDarkMode] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const handleContextmenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextmenu);
    return function cleanup() {
      document.removeEventListener("contextmenu", handleContextmenu);
    };
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="select-none flex min-h-screen items-center justify-center bg-[#e5e5e5] p-4 transition-colors duration-300 dark:bg-neutral-900">
      <div
        className={`w-full max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] xl:max-w-[50vw] transition-opacity duration-1000 ease-in-out ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <div className="grid grid-cols-3 gap-3 xs:grid-cols-4 sm:grid-cols-4 sm:gap-4 md:grid-cols-6 lg:grid-cols-8">
          <div className="group aspect-square rounded-3xl bg-black p-2 transition-all duration-300 hover:scale-105 dark:bg-white dark:text-black sm:p-4 cursor-help">
            <div className="flex h-full items-center justify-center">
              <span className="text-2xl text-white dark:text-black font-serif transition-transform duration-300 group-hover:rotate-12 sm:text-4xl">
                :)
              </span>
            </div>
          </div>

          <div
            onClick={toggleDarkMode}
            className="group aspect-square rounded-full bg-white p-2 transition-all duration-300 hover:bg-gray-100 hover:shadow-lg dark:bg-neutral-800 dark:hover:bg-zinc-700 sm:p-4 cursor-pointer"
          >
            <div className="flex h-full items-center justify-center text-white">
              {darkMode ? (
                <LuMoon className="h-8 w-8 transition-transform duration-300 group-hover:rotate-90" />
              ) : (
                <LuSun className="text-black h-8 w-8 transition-transform duration-300 group-hover:rotate-90" />
              )}
            </div>
          </div>

          <div className="group aspect-square rounded-full bg-white transition-all hover:scale-110 dark:bg-neutral-800">
            <Link
              href="https://github.com/oishine"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative h-full w-full">
                <Image
                  src="/assets/oishine.svg"
                  alt="oishine"
                  fill
                  className="object-contain rounded-full transition-opacity group-hover:opacity-80 dark:invert"
                />
              </div>
            </Link>
          </div>

          <div className="group p-4 col-span-3 aspect-[3/3] rounded-3xl bg-white transition-all duration-300 hover:scale-105 dark:bg-neutral-800 xs:col-span-4 xs:aspect-[2/1] sm:col-span-2 sm:row-span-2 sm:aspect-square sm:p-4">
            <div className="relative h-full w-full cursor-cell">
              <Image
                src="/assets/oi.svg"
                alt="me"
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
                fill
                className="object-contain rounded-xl transition-opacity duration-300 group-hover:opacity-90 dark:invert"
              />
              <div className="absolute bottom-0 left-0 p-2 sm:p-4">
                <h3 className="text-xs text-white font-medium transition-colors duration-300 group-hover:text-red-300 dark:text-white dark:group-hover:text-red-400 sm:text-sm">
                  neroices...
                </h3>
                <p className="text-[10px] text-gray-400 transition-colors duration-300 group-hover:text-red-400 dark:text-gray-400 dark:group-hover:text-red-300 sm:text-xs">
                  ねろ
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-3 md:aspect-[2/1] lg:aspect-[2/1] xl:aspect-[2/1] rounded-3xl bg-red-600 p-4 transition-all duration-300 hover:bg-red-700 hover:shadow-lg dark:bg-red-800 dark:hover:bg-red-900 xs:col-span-2 xs:row-span-2 xs:aspect-square sm:col-span-2">
            <div className="h-full overflow-hidden text-white font-mono text-xs flex-grow overflow-y-auto xl:-mt-0 scrollbar-hide">
              the days of life pass away like clouds, so do good while you are
              alive.
            </div>
          </div>

          <div className="relative aspect-square rounded-full bg-white transition-all duration-300 hover:scale-105 dark:bg-neutral-800 overflow-hidden">
            <div className="absolute inset-1 flex items-center justify-center cursor-wait">
              <div className="flex animate-bounce-marquee">
                {[...icons, ...icons].map((Icon, index) => (
                  <Icon key={index} className="text-5xl mx-20" />
                ))}
              </div>
            </div>
          </div>

          <div className="group aspect-square rounded-full bg-white p-2 transition-all duration-300 hover:scale-110 dark:bg-neutral-800 sm:p-4">
            <Link
              href="https://x.com/letsmakeices"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex h-full items-center justify-center text-black dark:text-white">
                <FaXTwitter className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" />
              </div>
            </Link>
          </div>

          <div className="group aspect-square bg-white rounded-3xl transition-all duration-300 hover:shadow-lg dark:bg-neutral-800 hover:scale-105">
            <div className="flex h-full w-full items-center justify-center cursor-help">
              <span className="font-serif animate-bounce text-lg font-bold text-black dark:text-white">
                {"|ω･)ﾉ"}
              </span>
            </div>
          </div>

          <div className="group aspect-square rounded-full bg-black text-white hover:text-black hover:bg-white p-2 transition-all duration-300 hover:shadow-lg dark:bg-white dark:hover:bg-neutral-800 dark:hover:text-white dark:text-black sm:p-4">
            <Link
              href="mailto:git@slce.moe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex h-full items-center justify-center">
                <MdOutlineEmail className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" />
              </div>
            </Link>
          </div>

          <div className="col-span-3 md:w-50 sm:w-50 aspect-[4/1] rounded-full bg-black p-5 transition-all duration-300 hover:bg-neutral-800 hover:shadow-lg  dark:hover:bg-neutral-300 sm:p-4 xs:aspect-[3/1] hover:scale-105 cursor-grab dark:bg-white">
            <div className="flex h-full w-full items-center justify-center">
              <span className="font-mono font-bold text-m text-pink-500 dark:text-pink-600">
                {">"}
                <span className="text-white dark:text-black">./hello</span>
                <span className="inline-block w-2 h-3 ml-1 bg-gray-500 animate-pulse"></span>
              </span>
            </div>
          </div>

          <div className="group col-span-2 aspect-[2/1] rounded-3xl bg-white dark:bg-neutral-800 hover:scale-105 transition-all duration-300 hover:bg-gray-900 hover:shadow-lg dark:hover:bg-neutral-700 flex items-center justify-center">
            <div className="relative h-full w-full cursor-cell">
              <Image
                src="/assets/tree.webp"
                alt="neroices"
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
                fill
                className="object-cover rounded-3xl group-hover:opacity-80"
              />
            </div>
          </div>

          <div className="grid aspect-square grid-cols-2 gap-1">
            {[
              { Icon: FiShield, link: "https://nextdns.io/?from=bskxrt52" },
              {
                Icon: SiGnuprivacyguard,
                link: "https://keys.openpgp.org/vks/v1/by-fingerprint/DA88956A14A8224FC7D0C1ABB2AC74F978F9A703",
              },
              {
                Icon: SiXdadevelopers,
                link: "https://xdaforums.com/m/neroices.10996241",
              },
              { Icon: LuGlobe, link: "https://slce.moe" },
            ].map(({ Icon, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex aspect-square items-center justify-center rounded-xl bg-[#d1d1d1] transition-all duration-300 hover:bg-gray-300 dark:bg-neutral-700 dark:hover:bg-neutral-600"
              >
                <Icon className="h-3 w-3 transition-transform duration-300 group-hover:scale-125 dark:text-white sm:h-5 sm:w-5" />
              </a>
            ))}
          </div>

          <div className="col-span-3 aspect-[2/1] rounded-3xl bg-white p-4 transition-all duration-300 hover:shadow-lg dark:bg-neutral-800 dark:text-white xs:col-span-2 xs:row-span-2 xs:aspect-square sm:col-span-2">
            <div className="h-full flex flex-col w-full px-4">
              <div className="flex-grow overflow-y-auto sm:-mt-4 xl:-mt-0 scrollbar-hide">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem className="AccordionItem" value="item-1">
                    <AccordionTrigger className="text-m transition-colors duration-300 hover:text-gray-600 dark:hover:text-gray-200">
                      who are you?
                    </AccordionTrigger>
                    <AccordionContent className="text-xs">
                      a human, nothing else.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem className="AccordionItem" value="item-2">
                    <AccordionTrigger className="text-m transition-colors duration-300 hover:text-gray-600 dark:hover:text-gray-200">
                      how can i reach you?
                    </AccordionTrigger>
                    <AccordionContent className="text-xs">
                      carrier pigeons are unreliable, so try to click that
                      email, or x icon.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem className="AccordionItem" value="item-3">
                    <AccordionTrigger className="text-m transition-colors duration-300 hover:text-gray-600 dark:hover:text-gray-200">
                      are you a coffee or tea person?
                    </AccordionTrigger>
                    <AccordionContent className="text-xs">
                      none of em :))
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem className="AccordionItem" value="item-4">
                    <AccordionTrigger className="text-m transition-colors duration-300 hover:text-gray-600 dark:hover:text-gray-200">
                      any last words of wisdom?
                    </AccordionTrigger>
                    <AccordionContent className="text-xs">
                      with hardship comes ease.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>

          <div className="group aspect-square rounded-full bg-white p-2 transition-all duration-300 hover:scale-110 dark:bg-neutral-800 sm:p-4">
            <Link
              href="https://github.com/neroices"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex h-full items-center justify-center space-x-1">
                <FiGithub className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" />
              </div>
            </Link>
          </div>

          <div className="group aspect-square rounded-full bg-white p-2 transition-all duration-300 hover:shadow-lg dark:bg-neutral-800 sm:p-4">
            <Link
              href="https://gitlab.com/neroices"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex h-full items-center justify-center text-black dark:text-white">
                <FiGitlab className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" />
              </div>
            </Link>
          </div>

          <div className="group aspect-square rounded-full bg-red-500 p-2 transition-all duration-300 hover:bg-red-600 hover:shadow-lg dark:bg-red-800 dark:hover:bg-red-900 sm:p-4">
            <Link
              href="https://github.com/sponsors/neroices"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex h-full items-center justify-center">
                <FaRegHeart className="h-8 w-8 text-white transition-transform duration-300 group-hover:scale-110" />
              </div>
            </Link>
          </div>
        </div>

        <div className="mt-4 flex justify-between font-mono text-xs tracking-wider text-gray-800 transition-colors duration-300 dark:text-gray-200 sm:mt-8 sm:text-sm">
          <span>&copy; 2025</span>
          <Link
            href="#"
            className="font-bold underline hover:text-gray-500 dark:hover:text-gray-400"
          >
            <div className="flex items-center">
              <MdForkRight />
              coming soon
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
