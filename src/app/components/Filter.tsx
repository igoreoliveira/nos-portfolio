"use client";

import { Chip } from "@mui/material";
import { styled } from "@stitches/react";

const FilterWrapper = styled("div", {
  width: "100%",
  display: "flex",
  padding: "24px",
  gap: "8px",
});

const FilterChip = styled(Chip, {
  color: "#5d3b14",
  borderColor: "#5d3b143d",
});

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
    <FilterWrapper>
      <FilterChip
        label={"Todos"}
        variant={subjects.length > 0 ? "filled" : "outlined"}
        onClick={handleClick}
      />
      <FilterChip
        label={"Desenvolvimento de Jogos"}
        variant={
          subjects.includes("Desenvolvimento de Jogos") ? "outlined" : "filled"
        }
        onClick={handleClick}
      />
      <FilterChip
        label={"Design de Jogos"}
        variant={subjects.includes("Design de Jogos") ? "outlined" : "filled"}
        onClick={handleClick}
      />
      <FilterChip
        label={"Computação Gráfica"}
        variant={
          subjects.includes("Computação Gráfica") ? "outlined" : "filled"
        }
        onClick={handleClick}
      />
      <FilterChip
        label={"Inovação"}
        variant={subjects.includes("Inovação") ? "outlined" : "filled"}
        onClick={handleClick}
      />
    </FilterWrapper>
  );
}
