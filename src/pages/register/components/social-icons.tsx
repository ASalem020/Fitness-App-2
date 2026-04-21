import { useTranslations } from "use-intl";

const socialLogins = [
  {
    name: "Facebook",
    icon: (
      <svg
        className="w-5 h-5 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M9.19795 21.5H13.198V13.4901H15.8021L16.2021 9.50977H13.198V7.51978C13.198 6.94971 13.198 6.50977 14.198 6.50977H16.2021V2.56006C15.7621 2.50024 14.7021 2.40991 13.5021 2.40991C11.0021 2.40991 9.19795 3.90991 9.19795 6.70996V9.50977H7.19795V13.4901H9.19795V21.5Z" />
      </svg>
    ),
  },
  {
    name: "Google",
    icon: (
      <svg
        className="w-5 h-5 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12.24 10.285V14.4h6.8c-.6 3.53-3.13 5.43-6.8 5.43-4.15 0-7.31-3.39-7.31-7.715 0-4.325 3.16-7.715 7.31-7.715 2.09 0 3.73.81 4.95 2.025l3.295-3.13C18.28 1.08 15.65 0 12.24 0 5.63 0 0 5.63 0 12c0 6.37 5.63 12 12.24 12 4.15 0 7.82-1.92 10.15-4.8 2.22-3 2.61-6.72 2.61-8.12 0-.39-.03-.78-.11-1.15H12.24z" />
      </svg>
    ),
  },
  {
    name: "Apple",
    icon: (
      <svg
        className="w-5 h-5 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M11.6453 3.52002C12.2155 2.82224 12.5936 1.84912 12.4836 0.880127C11.6416 0.914271 10.6305 1.43981 10.0245 2.14620C9.48937 2.76868 9.02271 3.74415 9.15783 4.69534C10.0963 4.76740 11.0347 4.25049 11.6453 3.52002ZM12.7836 4.76101C11.4116 4.76101 10.3343 5.58434 9.68233 5.58434C9.01566 5.58434 8.08441 4.88766 6.87771 4.88766C5.30232 4.88766 2.83441 6.26227 2.83441 9.48530C2.83441 12.6373 4.84271 17.5583 6.36531 19.7437C7.11161 20.8115 7.97116 22.0123 9.12328 21.9702C10.2307 21.9242 10.654 21.2582 12.0163 21.2582C13.3616 21.2582 13.7512 21.9702 14.9255 21.9479C16.1423 21.9242 16.8906 20.8536 17.6253 17.7892C18.4716 16.5353 18.8216 15.3113 18.8413 15.2508C18.815 15.2390 16.4253 14.3313 16.4029 11.5363C16.3793 9.16726 18.3243 8.04630 18.4113 7.99630C17.2916 6.37433 15.5816 6.17309 14.9703 6.14677C13.3843 6.01256 12.3331 4.76101 12.7836 4.76101V4.76101Z" />
      </svg>
    ),
  },
];

export default function SocialIcons() {
  const t = useTranslations("register.form");

  return (
    <div className="social-icons">
      {/* Or Separator */}
      <div className="w-full flex items-center justify-center before:content-[''] before:flex-1 before:h-px before:bg-gray-500 after:content-[''] after:flex-1 after:h-px after:bg-gray-500 gap-4 text-gray-400">
        {t("divider")}
      </div>

      {/* Social Icons */}
      <div className="flex gap-4 items-center justify-center mt-2 mb-2">
        {socialLogins.map((social) => (
          <div
            key={social.name}
            className="w-12 h-12 flex items-center justify-center bg-[#242424] rounded-full cursor-pointer hover:bg-slate-900 transition-colors border border-gray-700"
          >
            {social.icon}
          </div>
        ))}
      </div>
    </div>
  );
}
