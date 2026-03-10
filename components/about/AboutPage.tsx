"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { LucideIcon } from "lucide-react";
import { Code2, Crown, Server, Smartphone } from "lucide-react";
import styles from "./AboutPage.module.css";

type TeamMember = {
  role: string;
  name: string;
  icon: LucideIcon;
  bg: string;
  iconColor: string;
  stats: Array<{ label: string; value: string; color?: string }>;
};

const teamMembers: TeamMember[] = [
  {
    role: "Founder & CEO",
    name: "Vansham",
    icon: Crown,
    bg: "#1E4FFF",
    iconColor: "#ffffff",
    stats: [
      { label: "Vision", value: "100%", color: "#22E584" },
      { label: "Strategy", value: "90%" }
    ]
  },
  {
    role: "Co-Founder & Tech",
    name: "Nitesh",
    icon: Code2,
    bg: "#22E584",
    iconColor: "#0A122A",
    stats: [
      { label: "Coding", value: "98%" },
      { label: "Logic", value: "95%" }
    ]
  },
  {
    role: "Product Design",
    name: "Aryan",
    icon: Smartphone,
    bg: "#3EDBFF",
    iconColor: "#0A122A",
    stats: [
      { label: "UI/UX", value: "90%", color: "#1E4FFF" },
      { label: "Creativity", value: "85%" }
    ]
  },
  {
    role: "Blockchain Dev",
    name: "Dev",
    icon: Server,
    bg: "#FF0055",
    iconColor: "#ffffff",
    stats: [
      { label: "Solidity", value: "92%" },
      { label: "Security", value: "96%" }
    ]
  }
];

export default function AboutPage() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = wrapperRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        .from('[data-anim="about-nav"]', { y: -30, opacity: 0, duration: 0.6 })
        .from('[data-anim="about-hero"]', { y: 24, opacity: 0, duration: 0.65 }, "-=0.3")
        .from('[data-anim="mission"]', { y: 24, opacity: 0, rotate: -1.5, duration: 0.65 }, "-=0.25");

      gsap.utils.toArray<HTMLElement>('[data-anim="member-card"]').forEach((card, index) => {
        gsap.from(card, {
          y: 36,
          opacity: 0,
          duration: 0.55,
          delay: index * 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%"
          }
        });
      });

      gsap.from('[data-anim="about-footer"]', {
        y: 24,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '[data-anim="about-footer"]',
          start: "top 90%"
        }
      });
    }, root);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className={styles.page} ref={wrapperRef}>
      <div className={styles.container}>
        <nav className={styles.nav} data-anim="about-nav">
          <Link href="/" className={styles.logo}>
            <div className={styles.logoBox} />
            Ping2Pay
          </Link>
          <Link href="/" className={styles.back}>
            Back to Home
          </Link>
        </nav>

        <section className={styles.aboutHero} data-anim="about-hero">
          <h1>
            We are bridging <span>Chains</span> <br />
            to connect <i>Change.</i>
          </h1>
          <p>
            We believe payments should be as simple as a text message. No gas fees, no wallet
            addresses, no headaches. Just pure connection.
          </p>
        </section>

        <section className={styles.missionBox} data-anim="mission">
          <h2>The Mission</h2>
          <p>
            There are 2 billion people on WhatsApp and only 300 million in Crypto. The gap isn&apos;t
            technology; it&apos;s usability.
            <br />
            <br />
            <strong>Ping2Pay</strong> exists to close that gap. We are building the infrastructure
            that makes blockchain invisible, so the value becomes visible.
          </p>
        </section>

        <section className={styles.teamSection}>
          <h2 className={styles.teamTitle}>Know the Builders</h2>
          <div className={styles.teamGrid}>
            {teamMembers.map((member) => {
              const Icon = member.icon;
              return (
                <div key={member.name} className={styles.charCard} data-anim="member-card">
                  <div className={styles.charImgBox} style={{ background: member.bg }}>
                    <Icon size={64} color={member.iconColor} className={styles.charAvatar} />
                  </div>
                  <div className={styles.charInfo}>
                    <span className={styles.charRole}>{member.role}</span>
                    <h3 className={styles.charName}>{member.name}</h3>

                    {member.stats.map((stat) => (
                      <div key={stat.label} className={styles.statRow}>
                        <span>{stat.label}</span>
                        <div className={styles.progressBar}>
                          <div
                            className={styles.progressFill}
                            style={{ width: stat.value, background: stat.color }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      <footer className={styles.footer} data-anim="about-footer">
        © 2026 Ping2Pay. Built for the Public.
      </footer>
    </div>
  );
}
