"use client";

import { Chip } from "@mui/material";
import { styled } from "@stitches/react";

const FilterWrapper = styled("div", {
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
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
        variant={!subjects.length ? "filled" : "outlined"}
        onClick={handleClick}
      />
      <FilterChip
        label={"Inovação"}
        variant={subjects.includes("Inovação") ? "filled" : "outlined"}
        onClick={handleClick}
      />
      <FilterChip
        label={"Impacto Social"}
        variant={subjects.includes("Impacto Social") ? "filled" : "outlined"}
        onClick={handleClick}
      />
      <FilterChip
        label={"Gestão de Pessoas"}
        variant={subjects.includes("Gestão de Pessoas") ? "filled" : "outlined"}
        onClick={handleClick}
      />
      <FilterChip
        label={"Desenvolvimento de Software"}
        variant={
          subjects.includes("Desenvolvimento de Software")
            ? "filled"
            : "outlined"
        }
        onClick={handleClick}
      />
      <FilterChip
        label={"Web"}
        variant={subjects.includes("Web") ? "filled" : "outlined"}
        onClick={handleClick}
      />
      <FilterChip
        label={"Saúde"}
        variant={subjects.includes("Saúde") ? "filled" : "outlined"}
        onClick={handleClick}
      />
      <FilterChip
        label={"Educação"}
        variant={subjects.includes("Educação") ? "filled" : "outlined"}
        onClick={handleClick}
      />
      <FilterChip
        label={"Arte e Cultura"}
        variant={subjects.includes("Arte e Cultura") ? "filled" : "outlined"}
        onClick={handleClick}
      />
      <FilterChip
        label={"Desenvolvimento de Jogos"}
        variant={
          subjects.includes("Desenvolvimento de Jogos") ? "filled" : "outlined"
        }
        onClick={handleClick}
      />
      <FilterChip
        label={"Design de Jogos"}
        variant={subjects.includes("Design de Jogos") ? "filled" : "outlined"}
        onClick={handleClick}
      />
      <FilterChip
        label={"Computação Gráfica"}
        variant={
          subjects.includes("Computação Gráfica") ? "filled" : "outlined"
        }
        onClick={handleClick}
      />
    </FilterWrapper>
  );
}
