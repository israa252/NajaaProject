import Link from "next/link";

const Button = ({
    href,
    variant = "primary",
    children,
  }: {
    href: string;
    variant?: "primary" | "secondary";
    children: React.ReactNode;
  }) => (
    <Link
      href={href}
      className={`
        grid h-[60px] w-[180px] place-items-center rounded-[16px] 
        font-amiri text-[15px] transition duration-300 sm:w-[200px] sm:text-[25px]
        ${
          variant === "primary"
            ? "bg-primary text-black hover:bg-primary-dark"
            : "border border-primary text-primary hover:bg-primary hover:text-black"
        }
      `}
    >
      {children}
    </Link>
  );
  
 export default Button;  