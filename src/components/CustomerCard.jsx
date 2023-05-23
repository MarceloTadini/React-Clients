import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


import { red } from '@mui/material/colors';


function CustomersCard({name, lastName, email, avatar}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title={name}
        subheader={lastName}
      >
        
      </CardHeader>
      <CardMedia
        component="img"
        height="194"
        src={avatar}
        alt="Paella dish"
      />
      <EditIcon button/>
      <DeleteIcon button/>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {email}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CustomersCard