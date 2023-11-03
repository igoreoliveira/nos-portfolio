"use client";

import { Chip } from "@mui/material";

export default function Filter() {
  return (
    <>
      <Chip
        label={"Todos"}
        variant="outlined"
        onClick={() => console.log("click")}
      />
      <Chip
        label={"Desenvolvimento de Jogos"}
        variant="outlined"
        onClick={() => console.log("click")}
      />
      <Chip
        label={"Design de Jogos"}
        variant="outlined"
        onClick={() => console.log("click")}
      />
      <Chip
        label={"Computação Gráfica"}
        variant="outlined"
        onClick={() => console.log("click")}
      />
      <Chip
        label={"Inovação"}
        variant="outlined"
        onClick={() => console.log("click")}
      />
    </>
  );
}
