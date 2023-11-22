import React, { useState } from "react";

export const ActorContext = React.createContext(null);

const ActorContextProvider = (props) => {
  const [favorites, setFavorites] = useState([]);

  const addToActorFavorites = (actors) => {
    let newFavorites = [...favorites];
    if (!favorites.includes(actors.id)) {
      newFavorites.push(actors.id);
    }
    setFavorites(newFavorites);
    console.log(newFavorites);
  };

  const removeFromFavorites = (actors) => {
    setFavorites(favorites.filter((mId) => mId !== actors.id));
  };

  return (
    <ActorContext.Provider
      value={{
        favorites,
        addToActorFavorites,
        removeFromFavorites,
      }}
    >
      {props.children}
    </ActorContext.Provider>
  );
};

export default ActorContextProvider;