import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className=" top-0 z-50 h-20 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-full max-w-screen-xl items-center justify-between px-4 sm:px-8 ">
        {/* Logo - Right aligned */}
        <Link href="/" className="shrink-0 transition-opacity hover:opacity-80">
          <Image
            src="/logo.svg"
            alt="نجاة Logo"
            width={100}
            height={100}
            className="h-auto w-24 object-contain"
            priority
          />
        </Link>

        {/* Navigation Links - Centered */}
        <nav className="hidden flex-1 justify-center gap-12 md:flex   ">
          <NavLink href="/">الرئيسية</NavLink>
          <NavLink href="/stories">القصص</NavLink>
          <NavLink href="/add-story">أضف قصتك</NavLink>
        </nav>

        {/* Join Button - Left aligned */}
        <div className="shrink-0">
          <NavLink href="/contact">انضم إلينا</NavLink>
        </div>
      </div>
    </header>
  );
};

// Reusable navigation link component
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="text-2xl font-bold text-primary transition-colors hover:text-primary-dark"
  >
    {children}
  </Link>
);

export default Header;