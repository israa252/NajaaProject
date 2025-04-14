import Link from "next/link";

const ShareStory = () => {
  return (
    <section className="relative w-full h-[300px] sm:h-[400px] lg:h-[468px] bg-cover bg-center overflow-hidden">
      {/* Design Element 1 */}
      <div className="absolute left-[-12.13%] right-[53.03%] top-[-30.34%] bottom-[120.94%] border border-dashed border-[#365F36] transform matrix-[0.73_0.69_-0.8_0.59_0_0]" />

      {/* Main Title: قصتك تستحق أن تُروى! */}
      <h2 className="absolute left-1/2 -translate-x-1/2 top-[40px] sm:top-[72px] w-full max-w-[90%] sm:max-w-[388px] text-center text-[#365F36] font-amiri text-[32px] sm:text-[40px] lg:text-[48px] leading-[40px] sm:leading-[46px]">
        قصتك تستحق أن تُروى!
      </h2>

      {/* Description */}
      <p className="absolute left-1/2 -translate-x-1/2 top-[120px] sm:top-[166px] w-full max-w-[90%] sm:max-w-[683px] text-center text-[#0F2212] font-amiri font-bold text-[20px] sm:text-[24px] lg:text-[32px] leading-[30px] sm:leading-[40px] lg:leading-[50px] tracking-[0.03em]">
        اكتب قصتك، شاركها مع العالم، وكن صوتًا للأمل والتحدي أنت أقوى مما تظن،
        وقصتك هي الدليل
      </p>

      {/* Add Story Button */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[200px] sm:top-[280px] w-full max-w-[150px] sm:max-w-[200px] h-[50px] sm:h-[60px]">
        <Link
          href="/add-story"
          className="w-full h-full bg-[#365F36] rounded-[12px] sm:rounded-[16px] flex items-center justify-center"
        >
          <span className="text-[20px] sm:text-[24px] lg:text-[28px] leading-[20px] text-white font-amiri font-normal">
            شاركنا قصتك
          </span>
        </Link>
      </div>
    </section>
  );
};

export default ShareStory;