"use client";

import { Chip } from "@mui/material";

export default function Filter({ subjects, updateSubjects }) {
  const handleClick = (event) => {
    const selectedSubject = event.target.innerText;
    if (selectedSubject === "Todos") {
      updateSubjects([]);
      return;
    }
    if (subjects.includes(selectedSubject)) {
      updateSubjects(subjects.filter((sub) => sub !== selectedSubject));
    } else {
      updateSubjects([...subjects, selectedSubject]);
    }
  };

  return (
    <>
      <Chip
        label={"Todos"}
        variant={subjects.length < 1 ? "filled" : "outlined"}
        onClick={handleClick}
      />
      <Chip
        label={"Desenvolvimento de Jogos"}
        variant={
          subjects.includes("Desenvolvimento de Jogos") ? "filled" : "outlined"
        }
        onClick={handleClick}
      />
      <Chip
        label={"Design de Jogos"}
        variant={subjects.includes("Design de Jogos") ? "filled" : "outlined"}
        onClick={handleClick}
      />
      <Chip
        label={"Computação Gráfica"}
        variant={
          subjects.includes("Computação Gráfica") ? "filled" : "outlined"
        }
        onClick={handleClick}
      />
      <Chip
        label={"Inovação"}
        variant={subjects.includes("Inovação") ? "filled" : "outlined"}
        onClick={handleClick}
      />
    </>
  );
}
