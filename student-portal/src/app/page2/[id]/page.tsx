import ConnectMe from "../components/ConnectMe";
import Education from "../components/Education";
import Endorsements from "../components/Endorsements";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Journey from "../components/Journey";
import ProfileCard from "../components/ProfileCard";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import VisualResume from "../components/VisualResume";



export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="max-w-full">
        <ProfileCard id={params.id} />
        <Skills />
        <Journey />
        <Projects />
        <Education />
        <VisualResume />
        <Endorsements />
        <ConnectMe />
      </main>
      <Footer />
    </div>
  );
}
