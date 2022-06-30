import * as React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid"

export const Cards = () => {
  const [cards, setCards] = React.useState([]);

  const getCards = async () => {
    let res = await fetch("http://localhost:3000/Cards");
    let data = await res.json();
    console.log(data);
    setCards(data);
  };

  React.useEffect(() => {
    getCards();
  }, []);

  return (
    <>
      {cards.map((item) => {
        return (
        

            <Grid sx={{ maxWidth: 345, padding: "20px", alignItems: "center"}}  key={item.id}>
              <CardActionArea sx={{ display: "flex", flexDirection:"column", alignItems: "center" }} >
                <CardMedia
                  component="img"
                  height="130"
                  image={item.Imgurl}
                  alt="cards"
                  sx={{ width: "220px" }}
                />
                <CardContent sx={{ backgroundColor:"#fff", padding: "20px" }} >
                  <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: "bolder", textAlign:"left", lineHeight:"1.5" , fontSize:"20px" }}>
                    { item.title }
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize:"16px", fontWeight: "500", textAlign:"left" }} >
                    {item.des}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Grid>
          
        );
      })}
    </>
  );
};
