import { AdsBanners, Footer, HeroHeader, JobSuggestion, NewJobs, TopMenu } from "./components/landingPage";


export default function Home() {
  return (
    <>
      <div class="min-h-screen bg-gray-300  px-4">
        <TopMenu />
        <HeroHeader />
        <JobSuggestion />
        <AdsBanners />
        <NewJobs />
        <Footer />
      </div>
    </>
  );
}
