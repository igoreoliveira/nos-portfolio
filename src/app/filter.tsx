'use client'

import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Chip, Divider } from '@mui/material';


export default function Project() {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Card sx={{ maxWidth: 345 }}>

        <div>
          <Chip label="Design de jogos" variant="outlined" />
          <Chip label="Design" variant="outlined" />
          <Chip label="Computação Gráfica" variant="outlined" />
          <Chip label="Inovação" variant="outlined" />
          <Chip label="Programação" variant="outlined" />
        </div>



    </Card>
  );
}