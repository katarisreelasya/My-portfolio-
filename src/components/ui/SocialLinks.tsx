import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

const links = [
  { label: "GitHub", href: profile.github, Icon: Github, external: true },
  { label: "LinkedIn", href: profile.linkedin, Icon: Linkedin, external: true },
  { label: "Email", href: `mailto:${profile.email}`, Icon: Mail, external: false },
];

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {links.map(({ label, href, Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-sky2/60 text-sky2 transition-all duration-300 hover:bg-sky2 hover:text-bg hover:shadow-[0_0_20px_#38BDF8]"
          >
            <Icon size={17} />
          </a>
        </li>
      ))}
    </ul>
  );
}
