import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';

interface PostProps {
  imageUrl: string;
  title: string;
  foodType: string;
}

const Post: React.FC<PostProps> = ({ imageUrl, title, foodType }) => {
  return (
    <Card sx={{ width: 300, mx: 'auto', my: 2 }}>
      <CardHeader
        title={title}
        subheader={foodType}
        titleTypographyProps={{ fontWeight: 'bold' }}
        subheaderTypographyProps={{ color: 'text.secondary' }}
      />
      <CardMedia
        component="img"
        height="140" // Ajustamos la altura para que la imagen sea más baja
        image={imageUrl}
        alt={title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {foodType}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <IconButton aria-label="me gusta">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="comentarios">
          <CommentIcon />
        </IconButton>
        <IconButton aria-label="compartir">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
