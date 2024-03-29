"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@stitches/react";
import { Divider } from "@mui/material";

const Intro = styled("div", { flex: "1" });
const Info = styled("div", { flex: "1" });
const ContactContainer = styled(Card, {
  marginTop: "24px",
  display: "flex",
  justifyContent: "space-around",
  background: "#fff9f2",
  color: "#5d3b14",
  width: "100%",
});

export default function Contact() {
  return (
    <ContactContainer id="contato" variant="outlined">
      <CardHeader title="Contato" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          E-mail: igoreoliveira@gmail.com
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Linkedin: <a href="https://www.linkedin.com/in/igoreoliveira/" target="blank"> igoreoliveira </a>
        </Typography>
      </CardContent>
    </ContactContainer>
  );
}
