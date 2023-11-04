"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@stitches/react";



const Info = styled("div", { flex: "1" });
const ContactContainer = styled(Card, {
  marginTop: "24px",
  display: "flex",
  justifyContent: "space-around",
  background: "#fff9f2",
  color: "#5d3b14",
  width: "100%"
});

export default function Footer() {
  return (
    <ContactContainer id="footer" variant="outlined">
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Esse portfólio foi criado na aplicação <strong> Nós Portfólio</strong>, desenvolvida em Next.js e React, e que tem seu código-fonte aberto, ainda nos estágios iniciais de desenvolvimento, disponível em: <a href="https://github.com/igoreoliveira/nos-portfolio" target="blank">https://github.com/igoreoliveira/nos-portfolio</a>.
        </Typography>
      </CardContent>
    </ContactContainer>
  );
}
