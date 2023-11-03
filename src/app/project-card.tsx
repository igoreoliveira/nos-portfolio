'use client'

import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Chip, Divider } from '@mui/material';
import { styled } from '@stitches/react';



export default function Project() {
  const [expanded, setExpanded] = React.useState(false);
  const ChipWrapper = styled('div', {backgroundColor: 'red'})
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title="Título do meu projeto"
        subheader="01/02/2023 - 10/10/2024"
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/imagine-cup.jpg"
        alt="Imagine Cup"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>

        <Typography variant="body2" color="text.secondary">
         <strong>Links relacionados:</strong>
        </Typography>

        <Typography variant="body2" color="text.secondary">
         <strong>Colaboradores:</strong>
        </Typography>

        <Typography variant="body2" color="text.secondary">
         <strong>Entidades:</strong>
        </Typography>

        <Divider/>
        <ChipWrapper>
          <Chip label="Design de jogos" variant="outlined" />
          <Chip label="Design" variant="outlined" />
          <Chip label="Computação Gráfica" variant="outlined" />
          <Chip label="Inovação" variant="outlined" />
          <Chip label="Programação" variant="outlined" />
        </ChipWrapper>

      </CardContent>

    </Card>
  );
}