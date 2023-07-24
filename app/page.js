import { AdsBanners, Footer, HeroHeader, JobSuggestion, NewJobs, TopMenu,SearchPart } from "./components/landingPage";


export default function Home() {
  return (
    <>
      <div class="min-h-screen   px-4">
        <TopMenu />
        {/* <HeroHeader /> */}
        <SearchPart/>
        <JobSuggestion />
        <AdsBanners />
        <NewJobs />
        <Footer />
      </div>
    </>
  );
}
