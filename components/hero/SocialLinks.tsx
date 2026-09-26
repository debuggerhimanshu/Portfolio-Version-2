"use client";

import { useState } from "react";

type SocialLink = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/debuggerhimanshu",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="social-icon"
      >
        <path
          fill="currentColor"
          d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.28-1.7-1.28-1.7-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18A10.9 10.9 0 0 1 12 6.02c.97 0 1.94.13 2.85.38 2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.67.41.35.78 1.04.78 2.1v3.1c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="social-icon"
      >
        <path
          fill="currentColor"
          d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.48v6.27ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45H7.1V8.99H3.54v11.46ZM22.22 0H1.78C.8 0 0 .8 0 1.78v20.44C0 23.2.8 24 1.78 24h20.44c.98 0 1.78-.8 1.78-1.78V1.78C24 .8 23.2 0 22.22 0Z"
        />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/creative.him",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="social-icon"
      >
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle
          cx="12"
          cy="12"
          r="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle
          cx="17.5"
          cy="6.5"
          r="1.2"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "Email",
    href: "mailto:your@email.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="social-icon"
      >
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="m4 7 8 6 8-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const characters =
  "!@#$%^&*()_+-=[]{}<>?/\\|~ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function scrambleText(text: string) {
  return text
    .split("")
    .map(() => characters[Math.floor(Math.random() * characters.length)])
    .join("");
}

function ScrambleButton({
  link,
}: {
  link: SocialLink;
}) {
  const [label, setLabel] = useState(link.name);

  const handleEnter = () => {
    let iteration = 0;

    const interval = setInterval(() => {
      setLabel(
        link.name
          .split("")
          .map((char, index) => {
            if (index < iteration) return char;

            return characters[
              Math.floor(Math.random() * characters.length)
            ];
          })
          .join("")
      );

      iteration += 1 / 2;

      if (iteration >= link.name.length) {
        clearInterval(interval);
        setLabel(link.name);
      }
    }, 45);
  };

  const handleLeave = () => {
    setLabel(link.name);
  };

  return (
    <a
      href={link.href}
      target={link.name === "Email" ? undefined : "_blank"}
      rel={link.name === "Email" ? undefined : "noopener noreferrer"}
      className="scramble-button"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      aria-label={link.name}
    >
      <span className="social-icon-wrapper">
        {link.icon}
      </span>

      <span className="social-label">
        {label}
      </span>
    </a>
  );
}

export default function SocialLinks() {
  return (
    <div className="social-links">
      {socialLinks.map((link) => (
        <ScrambleButton
          key={link.name}
          link={link}
        />
      ))}
    </div>
  );
}