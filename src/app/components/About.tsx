"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function About() {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image="/static/images/igao.jpeg"
        alt="Imagine Cup"
      />
      <CardHeader
        title="Igor Esteves de Oliveira"
        subheader="Gostoso desde 93"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Desenvolvedor de produtos digitais com formação multidisciplinar.
          Graduado em Ciência da Computação pela Universidade Federal do ABC
          (UFABC, Santo André, SP - 2011 a 2017), com período sanduíche na
          University of Houston (Houston, TX - 2014). Atualmente, trabalhando
          como Tech Lead do time de conteúdo e soluções para web na Omelete
          Company. Estudando gerenciamento de pessoas em times de
          desenvolvimento de tecnologia e processos de inovação com ênfase em
          impacto social.
        </Typography>
      </CardContent>
    </Card>
  );
}
