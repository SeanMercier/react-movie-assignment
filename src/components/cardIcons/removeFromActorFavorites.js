import React, { useContext } from "react";
import { ActorContext } from "../../contexts/actorContext";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const RemoveFromActorFavoritesIcon = ({ actor, onRemove }) => {
  const handleRemoveFromFavorites = (e) => {
    e.preventDefault();
    onRemove();
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