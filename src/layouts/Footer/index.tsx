"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { CopyrightOutlined } from "@ant-design/icons";

import { useIsMounted } from "@/hooks/useIsMounted";

// import TwitterLogo from "@/assets/logo-twitter.png";
// // import DiscordLogo from "@/assets/logo-discord.png";
// import TelegramLogo from "@/assets/logo-telegram.png";
// import MediumLogo from "@/assets/logo-medium.png";
import { montserrat } from "@/utils/font";

import AppLogo from "@/assets/logo-app.png";

import "./style.css";

interface Props {}

const pairAddress = "";

const AppFooter: React.FC<Props> = () => {
  if (!useIsMounted) {
    return null;
  }

  return (
    <footer
      className={clsx("app-footer bg-dark-primary", montserrat.className)}
    >
      <div className="app-footer-wrapper">
        <div className="all-reserved order-1 sm:order-0">
          <div className="app-footer-title">
            <Image
              src={AppLogo}
              alt="app-logo"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full flex items-center my-2 text-slate-500">
            <div className="sm:ml-2 text-xs font-semibold">
              Copyright{" "}
              <CopyrightOutlined className="mx-1" style={{ fontSize: "1em" }} />{" "}
              2023. All rights reserved.
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 flex order-0 sm:order-1">
          <div className="w-auto">
            <div className="text-2xl font-bold">Links</div>
            <div className="flex flex-col mt-4 font-semibold">
              <Link
                href="https://t.me/TwisterCashAI_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="w-auto hover:text-secondary"
              >
                dApp
              </Link>
              <Link
                href="https://twister-cash.gitbook.io/twister-cash"
                target="_blank"
                rel="noopener noreferrer"
                className="w-auto hover:text-secondary my-2"
              >
                Whitepaper
              </Link>
              <Link
                // href={`http://dextools.io/app/ether/pair-explorer/${pairAddress}`}
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-auto hover:text-secondary"
              >
                Chart
              </Link>
            </div>
          </div>

          <div className="w-auto ml-6 sm:ml-10">
            <div className="text-2xl font-bold">Socials</div>
            <div className="flex flex-col mt-4 font-semibold">
              <Link
                href="https://x.com/twistererc20"
                target="_blank"
                rel="noopener noreferrer"
                className="w-auto hover:text-secondary"
              >
                Twitter / X
              </Link>
              <Link
                href="https://medium.com/@TwisterCash"
                target="_blank"
                rel="noopener noreferrer"
                className="w-auto hover:text-secondary my-2"
              >
                Medium
              </Link>
              <Link
                href="https://t.me/TwisterERC20"
                target="_blank"
                rel="noopener noreferrer"
                className="w-auto hover:text-secondary"
              >
                Telegram
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
