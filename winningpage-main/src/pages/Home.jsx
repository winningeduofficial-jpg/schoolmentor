import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#F8F7F3] pt-[84px]">
        <section className="flex min-h-[calc(100vh-84px)] items-center justify-center px-4">
          <img
            src="/images/schoolmentor-coming-soon.png"
            alt="나의 입시파트너 스쿨멘토 Coming Soon"
            className="max-h-[calc(100vh-110px)] w-auto max-w-full object-contain"
          />
        </section>
      </main>
    </>
  );
}
