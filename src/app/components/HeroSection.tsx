import Button from "../components/Button";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center bg-cover bg-center pb-32 sm:pb-44">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4">
        <h2 className="mt-8 text-center font-amiri text-2xl leading-8 text-primary sm:mt-12 md:text-3xl md:leading-9">
          أهلا بك في منصة نجاة - منصة لمشاركة القصص
        </h2>

        <h1 className="mt-4 text-center font-amiri text-3xl leading-[3rem] text-primary sm:mt-6 sm:text-4xl sm:leading-[4rem] md:text-5xl md:leading-[5rem]">
          لا يمكن للكلمات أن تصف الحقيقة بأكملها، لكن الأصوات لا تموت أبدًا.
        </h1>

        <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:gap-6">
          <Button href="/add-story" variant="primary">
            أضف قصتك
          </Button>
          <Button href="/stories" variant="secondary">
            تصفح القصص
          </Button>
        </div>
      </div>
    </section>
  );
}
