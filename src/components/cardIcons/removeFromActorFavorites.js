import React, { useContext } from "react";
import { ActorContext } from "../../contexts/actorContext";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const RemoveFromActorFavoritesIcon = ({ actors }) => {
  const context = useContext(ActorContext);

  const handleRemoveFromFavorites = (e) => {
    e.preventDefault();
    context.removeFromFavorites(actors);
  };
  return (
    <IconButton
      aria-label="Remove from favorites"
      onClick={handleRemoveFromFavorites}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromActorFavoritesIcon;