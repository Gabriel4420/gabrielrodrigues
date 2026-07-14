"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { usePreferences } from "@/contexts/PreferencesContext";

const contactLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gabriel442021/",
    icon: FaLinkedinIn,
  },
  {
    label: "GitHub",
    href: "https://www.github.com/Gabriel4420",
    icon: FaGithub,
  },
  {
    label: "E-mail",
    href: "mailto:gabriel_rodrigues_perez@hotmail.com",
    icon: AiOutlineMail,
  },
  {
    label: "Linktree",
    href: "https://linktr.ee/gabriel4420",
    icon: BsFillPersonLinesFill,
  },
];

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { t } = usePreferences();

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -15% 0px", threshold: 0.2 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="w-full overflow-hidden px-4 py-24 sm:px-6 lg:min-h-screen lg:px-8"
      data-visible={isVisible}
      id="contact"
      ref={sectionRef}
    >
      <div className="contact-reveal mx-auto flex w-full max-w-[1240px] flex-col gap-12">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#3ddb80]">
            {t("contact.kicker")}
          </p>
          <h2 className="mt-4 text-4xl leading-tight text-gray-800 sm:text-5xl">
            {t("contact.title")}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            {t("contact.intro")}
          </p>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="contact-reveal-item flex min-h-[420px] flex-col justify-between rounded-[28px] border border-white/80 bg-white/55 p-6 shadow-[0_24px_80px_rgba(31,41,55,0.12)] backdrop-blur sm:p-8 lg:p-10">
            <div>
              <span className="inline-flex w-fit items-center rounded-full border border-[#3ddb80]/30 bg-[#3ddb80]/10 px-4 py-2 text-sm font-semibold text-[#259b5d]">
                {t("contact.open")}
              </span>

              <h3 className="mt-8 max-w-2xl text-3xl leading-tight text-gray-800 sm:text-4xl">
                {t("contact.build")}
              </h3>

              <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600">
                {t("contact.detail")}
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                className="flex min-h-12 items-center justify-center rounded-full bg-[#1f2937] px-12 py-3 text-[12px] font-bold uppercase tracking-[0.16em] text-white shadow-lg shadow-gray-400/40 transition duration-300 ease-out hover:-translate-y-1 hover:bg-[#3ddb80] hover:text-gray-900 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#3ddb80]/35"
                href="mailto:gabriel_rodrigues_perez@hotmail.com"
              >
                {t("contact.email")}
              </a>

              <p className="text-sm leading-6 text-gray-500">
                {t("contact.reply")}
              </p>
            </div>
          </div>

          <aside className="contact-reveal-item flex flex-col justify-between rounded-[28px] bg-[#1f2937] p-6 text-white shadow-[0_24px_80px_rgba(31,41,55,0.2)] sm:p-8">
            <div className="flex flex-col items-center text-center">
              <div className="contact-float rounded-full bg-[#3ddb80]/20 p-3 ring-1 ring-white/10">
                <Image
                  alt="Gabriel Rodrigues Perez"
                  className="h-44 w-44 rounded-full border-4 border-white object-cover shadow-2xl sm:h-52 sm:w-52"
                  height={208}
                  priority
                  src="/assets/perfil.jpg"
                  width={208}
                />
              </div>

              <h3 className="mt-7 text-2xl text-white">Gabriel Rodrigues</h3>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#3ddb80]">
                {t("contact.role")}
              </p>
              <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
                {t("contact.stack")}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {contactLinks.map(({ href, icon: Icon, label }) => (
                <a
                  aria-label={label}
                  className="group flex min-h-20 items-center justify-between rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-sm font-semibold text-white transition duration-300 ease-out hover:-translate-y-1 hover:border-[#3ddb80]/50 hover:bg-[#3ddb80] hover:text-gray-900 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#3ddb80]/35"
                  href={href}
                  key={label}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  target={href.startsWith("http") ? "_blank" : undefined}
                >
                  <span>{label}</span>
                  <Icon
                    aria-hidden="true"
                    className="text-2xl transition duration-300 group-hover:scale-110"
                  />
                </a>
              ))}
            </div>
          </aside>
        </div>

        <div className="contact-reveal-item flex justify-center">
          <a
            aria-label={t("contact.top")}
            className="rounded-full bg-white/70 p-4 text-[#3ddb80] shadow-lg shadow-gray-400/40 ring-1 ring-white/80 transition duration-300 ease-out hover:-translate-y-1 hover:bg-[#3ddb80] hover:text-gray-900 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#3ddb80]/35"
            href="#"
          >
            <HiOutlineChevronDoubleUp aria-hidden="true" size={30} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
