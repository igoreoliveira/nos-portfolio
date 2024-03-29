"use client";

import ProjectSection from "./components/Projects";
import About from "./components/About";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { projects } from "./mock";
import { useState } from "react";
import { styled } from "@stitches/react";

const Container = styled("div", {
  padding: "24px",
  paddingTop: "0",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  maxWidth: "750px",
  display: "flex",
  flexDirection: "column",
  borderLeft: "1px solid #5d3b143d",
  borderRight: "1px solid #5d3b143d",
});

const Spacer = styled("div", {
  marginTop: "24px",
  width: "90%",
  height: "1px",
  background: "#5d3b143d",
});

const ProjectsWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});

export default function Home() {
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const updateSubjects = (updatedSubjects: string[]) => {
    setSelectedSubjects(updatedSubjects);
  };

  const activeProjects =
    selectedSubjects.length > 0
      ? projects.filter((project) =>
          project.relatedFields.some((r) => selectedSubjects.includes(r))
        )
      : projects;

  return (
    <Container>
      <Header />
      <About />
      <Spacer />
      <Filter subjects={selectedSubjects} updateSubjects={updateSubjects} />
      <ProjectsWrapper>
        {activeProjects.map((project) => (
          <ProjectSection project={project} />
        ))}
      </ProjectsWrapper>
      <Contact />
      <Footer />
    </Container>
  );
}
