import { useEffect, useState } from "react";
// import axios from "axios";
import { fetchData } from "../services/starwars-api";
import Card from "./starwarsCard";

function Cards() {
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetchData();
        setCardList(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="planets-div">
      {cardList.map((card, index) => {
        const {
          name,
          rotation_period,
          orbital_period,
          diameter,
          climate,
          gravity,
          terrain,
          surface_water,
          population,
          residents,
        } = card;

        return (
          <Card
            name={name}
            roation_period={rotation_period}
            orbital_period={orbital_period}
            diameter={diameter}
            climate={climate}
            gravity={gravity}
            terrain={terrain}
            surface_water={surface_water}
            population={population}
            residents={residents}
            key={index}
          />
        );
      })}
    </div>
  );
}
export default Cards;
