import * as React from "react";
import { ResultTrendprops } from "../../interface/api";
import imdb from '../../assets/imdb.webp'

import {
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Avatar,
  Card,
  CardHeader,
  Button,
  IconButton,
 
} from "@mui/material";

import  { IconButtonProps } from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import { Share, Favorite } from "@mui/icons-material";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

export default function CardResult({ results}: ResultTrendprops) {
  const [expanded, setExpanded] = React.useState(false);
  const {title, vote, date, poster}=results



  const formatDate = (date: string | undefined) => {
    date = date?.split("-").reverse().join("/");
    return date;
  };
  const voteToFixed=vote.toFixed(2)

  return (
    <Card sx={{ width: 350, m: 0.4,p:.4, fontSize: 14 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[300], fontSize: 12, p:.3 }} aria-label="recipe">
          {voteToFixed}/10
          </Avatar>
        }
      />

      <CardMedia
        component="img"
        height="194"
        image={`https://image.tmdb.org/t/p/w300/${poster? poster :imdb}`}
        alt={title}
      />
      <CardContent>
        <Typography variant="h5" color="text.secondary">
          {title}
        </Typography>
      </CardContent>

      <CardContent>
        <Typography paragraph>{formatDate(date)}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <Share />
        </IconButton>
        <Button size="small">plus de Deails</Button>
      </CardActions>
    </Card>
  );
}
