"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Chip, Divider } from "@mui/material";
import { styled } from "@stitches/react";

const ChipWrapper = styled("div", {
  paddingTop: "24px",
  gap: "8px",
  display: "flex",
  justifyContent: "center",
});

const CardProject = styled(Card, {
  borderColor: "#5d3b143d",
});

export default function Project({ project }) {
  return (
    <CardProject variant="outlined">
      <CardHeader
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
      <CardContent>
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

        <Divider />

        {project.relatedFields && (
          <ChipWrapper>
            {project.relatedFields?.map((field) => (
              <Chip label={field} variant="outlined" />
            ))}
          </ChipWrapper>
        )}
      </CardContent>
    </CardProject>
  );
}
