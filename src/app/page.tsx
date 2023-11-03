import ProjectSection from "./components/Projects";
import About from "./components/About";
import Header from "./components/Header";
import Filter from "./components/Filter";
import { projects } from "./mock";

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Filter />
      <div>
        {projects.map((project) => (
          <ProjectSection project={project} />
        ))}
      </div>
    </div>
  );
}
