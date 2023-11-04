"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Chip, Divider } from "@mui/material";
import { styled } from "@stitches/react";

const primaryColor = "#5d3b14";

const ChipWrapper = styled("div", {
  gap: "8px",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
});

const CardProject = styled(Card, {
  borderColor: "#5d3b143d",
  maxWidth: "100%",
});

const ContentWrapper = styled(CardContent, {
  color: primaryColor,
  background: "#fff9f2ab",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

export default function Project({ project }) {
  return (
    <CardProject id="projetos" variant="outlined">
      <CardHeader
        style={{ color: primaryColor, background: "#fff9f2ab" }}
        title={project.title}
        subheader={`${project.dates.start} - ${
          project.dates.end || "atualmente"
        }`}
      />
      <CardMedia
        component="img"
        height="194"
        image={project.image.src}
        alt={project.image.alt}
      />
      <ContentWrapper>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>

        {project.relatedLinks && (
          <Typography variant="body2" color="text.secondary">
            <strong>Links relacionados:</strong>
            {project.relatedLinks?.map((link) => (
              <a href={link?.url} target="blank">
                {" "}
                {link?.title}{" "}
              </a>
            ))}
          </Typography>
        )}

        {project.colaborators && (
          <Typography variant="body2" color="text.secondary">
            <strong>Colaboradores:</strong>
            {project.colaborators && ` ${project.colaborators.join(", ")}`}
          </Typography>
        )}

        {project.organization && (
          <Typography variant="body2" color="text.secondary">
            <strong>Entidade: </strong> {project.organization}
          </Typography>
        )}

        {project.relatedFields && (
          <>
            <Divider />
            <ChipWrapper>
              {project.relatedFields?.map((field) => (
                <Chip label={field} variant="outlined" />
              ))}
            </ChipWrapper>
          </>
        )}
      </ContentWrapper>
    </CardProject>
  );
}
