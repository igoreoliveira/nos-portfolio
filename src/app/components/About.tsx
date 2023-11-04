"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "../../../stitches.config";

const Intro = styled("div", {
  flex: "1",
  variants: {
    direction: {
      vertical: {
        maxHeight: "unset",
      },
      horizontal: {
        maxHeight: "300px",
      },
    },
  },
});
const Info = styled("div", { flex: "1" });
const CardContainer = styled(Card, {
  display: "flex",
  background: "#fff9f2",
  color: "#5d3b14",
  border: "none",
  borderRadius: "0",

  variants: {
    direction: {
      vertical: {
        flexDirection: "column",
      },
      horizontal: {
        flexDirection: "row",
      },
    },
  },
});

const CardMainHeader = styled(CardHeader, {
  paddingBottom: "0",

  variants: {
    direction: {
      vertical: {
        paddingTop: "24px",
      },
      horizontal: {
        paddingTop: "0",
      },
    },
  },
});

export default function About() {
  return (
    <CardContainer
      id="sobre"
      direction={{
        "@initial": "horizontal",
        "@bp1": "vertical",
      }}
      variant="outlined"
    >
      <Intro
        direction={{
          "@initial": "horizontal",
          "@bp1": "vertical",
        }}
      >
        <CardMedia
          component="img"
          height="194"
          image="/static/images/igao2.jpg"
          alt="Igor Esteves"
        />
      </Intro>
      <Info>
        <CardMainHeader
          direction={{
            "@initial": "horizontal",
            "@bp1": "vertical",
          }}
          title="Igor Esteves de Oliveira"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Desenvolvedor de produtos digitais com formação multidisciplinar.
            Graduado em Ciência da Computação pela Universidade Federal do ABC
            (UFABC, Santo André, SP - 2011 a 2017), com período sanduíche na
            University of Houston (Houston, Texas - 2014), financiado pelo programa
            Ciência sem Fronteiras. Atualmente, trabalhando como Tech Leader do
            time de conteúdo e soluções para web na Omelete Company. Estudando
            gerenciamento de pessoas em times de desenvolvimento de tecnologia e
            processos de inovação com ênfase em impacto social.
          </Typography>
        </CardContent>
      </Info>
    </CardContainer>
  );
}
