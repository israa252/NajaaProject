import Link from "next/link"
import Image from "next/image"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"

const socialLinks = [
  { href: "#", icon: <FaFacebookF />, label: "Facebook" },
  { href: "#", icon: <FaTwitter />, label: "Twitter" },
  { href: "#", icon: <FaInstagram />, label: "Instagram" },
  { href: "#", icon: <FaLinkedinIn />, label: "LinkedIn" },
]

const quickLinks = [
  { href: "/story/write", text: "اكتب قصتك" },
  { href: "/stories", text: "القصص المنشورة" },
  { href: "/privacy-policy", text: "سياسة الخصوصية" },
]

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#365F36] px-4 sm:px-6 md:px-8 py-8 md:py-10">
      {/* Main content */}
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4">
          {/* Logo and slogan - Order changes on mobile */}
          <div className="flex flex-col items-center md:items-start order-2 md:order-1 mt-6 md:mt-0">
            <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] relative">
              <Image src="/footer.svg" alt="Logo" fill className="object-contain" />
            </div>
            <h2 className="text-[24px] md:text-[32px] font-amiri text-white text-center md:text-right mt-3">
              صوتك، قصتك، أثرُك!
            </h2>
          </div>

          {/* Links section - Order changes on mobile */}
          <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-12 md:gap-16 text-white order-1 md:order-2">
            {/* Quick links */}
            <div className="text-center md:text-right">
              <h3 className="font-amiri font-bold text-[20px] md:text-[24px] mb-3">روابط سريعة</h3>
              <ul className="font-amiri text-[16px] md:text-[20px]">
                {quickLinks.map((link) => (
                  <li key={link.href} className="mb-2">
                    <Link href={link.href} className="hover:underline">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact section */}
            <div className="text-center md:text-right">
              <h3 className="font-amiri font-bold text-[20px] md:text-[24px] mb-3">تواصل معنا</h3>
              <div className="flex justify-center md:justify-start gap-4 text-white text-[18px] md:text-[20px]">
                {socialLinks.map(({ href, icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    {icon}
                  </a>
                ))}
              </div>
              <p className="font-amiri text-[16px] md:text-[20px] mt-4">Email: support@najaah.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-white font-amiri text-[12px] tracking-[-0.03em] text-center mt-8 pt-4 border-t border-white/20">
        حقوق النشر © 2025 نجاة – جميع الحقوق محفوظة.
      </div>
    </footer>
  )
}

export default Footer

