import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  href: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
}

const Button = ({ href, variant = "primary", children }: ButtonProps) => {
  const baseClasses =
    "grid h-[60px] w-[180px] place-items-center rounded-[16px] font-amiri text-[15px] transition duration-300 sm:w-[200px] sm:text-[25px]";
  const variantClasses =
    variant === "primary"
      ? "bg-[#365F36] text-white hover:bg-[#2e502e]"
      : "border border-[#365F36] text-[#365F36] hover:bg-[#365F36] hover:text-white";

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses}`}>
      {children}
    </Link>
  );
};

export default Button;
