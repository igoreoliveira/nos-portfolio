"use client";

import ProjectSection from "./components/Projects";
import About from "./components/About";
import Header from "./components/Header";
import Filter from "./components/Filter";
import { projects } from "./mock";
import { useState } from "react";

export default function Home() {
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const updateSubjects = (updatedSubjects: []) => {
    setSelectedSubjects(updatedSubjects);
  };

  const activeProjects =
    selectedSubjects.length > 0
      ? projects.filter((project) =>
          project.relatedFields.some((r) => selectedSubjects.includes(r))
        )
      : projects;

  return (
    <div>
      <Header />
      <About />
      <Filter subjects={selectedSubjects} updateSubjects={updateSubjects} />
      <div>
        {activeProjects.map((project) => (
          <ProjectSection project={project} />
        ))}
      </div>
    </div>
  );
}
