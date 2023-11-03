'use client'

import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Chip, Divider } from '@mui/material';
import { styled } from '@stitches/react';



export default function Project({project}) {
  const [expanded, setExpanded] = React.useState(false);
  const ChipWrapper = styled('div', {backgroundColor: 'red'});
  const endDate = project.dates.end ? (project.dates.end) : "atualmente";
  const dateString = project.dates.start + " - " +  endDate;
 
  const relatedLinks = project.relatedLinks? [] :  null;
  relatedLinks? project.relatedLinks.forEach((link) => {
    if (link.url && link.title) {
      relatedLinks.push (
        <a href={link.url} target="blank"> {link.title} </a>
      )
    }
  }): null ;

  const relatedFields = project.relatedFields? [] :  null;
  relatedFields? project.relatedFields.forEach((field) => {

      relatedFields.push(<Chip label={field} variant="outlined" />);
       
  }): null ;

  const colaborators = project.colaborators? " " + project.colaborators.join(', ') : null;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={project.title}
        subheader={dateString}
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

        {relatedLinks? 
          <Typography variant="body2" color="text.secondary">
            <strong>Links relacionados:</strong>
            {relatedLinks}
          </Typography>
          : null
        }

        { colaborators? 
          <Typography variant="body2" color="text.secondary">
            <strong>Colaboradores:</strong>
            {colaborators}
          </Typography>
          : null
        }

        { project.organization ? 
          (<Typography variant="body2" color="text.secondary">
            <strong>Entidade: </strong> {project.organization}
          </Typography>) 
          : null
        } 

        <Divider/>

        {relatedFields? 
          <ChipWrapper>
            {relatedFields}
          </ChipWrapper>
          : null
        } 

      </CardContent>

    </Card>
  );
}