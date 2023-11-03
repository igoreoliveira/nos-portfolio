import ProjectSection from "./components/Projects";
import About from "./components/About";
import Header from "./components/Header";
import Filter from "./components/Filter";

const projects = [
  {
    title: "aaaaaa",
    dates: { start: "01/01/2011", end: "01/01/2017" },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo at lectus fermentum tincidunt.",
    image: { src: "/static/images/imagine-cup.jpg", alt: "Alt text da imagem" },
    relatedLinks: [
      { title: "Test", url: "https://www.omelete.com.br" },
      { title: "Google", url: "https://www.google.com" },
    ],
    colaborators: ["João Paulo Gois", "Eliabe Castro"],
    organization: null,
    relatedFields: [
      "Design de jogos",
      "Design",
      "Computação Gráfica",
      "Inovação",
      "Programação",
    ],
  },
  {
    title: "bbbbbbb",
    dates: { start: "01/01/2015", end: "" },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo at lectus fermentum tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo at lectus fermentum tincidunt.",
    image: { src: "/static/images/imagine-cup.jpg", alt: "Alt text da imagem" },
    relatedLinks: null,
    colaborators: null,
    organization: "UFABC - Universidade Federal do ABC",
    relatedFields: [],
  },
];

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
