import React from "react";
import { getTrendingMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import MovieList from "../components/movieList";
import PageTemplate from "../components/templateMovieListPage";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";

const TrendingMoviesPage = () => {
  const { data, error, isLoading, isError } = useQuery("trending", getTrendingMovies);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const trendingMovies = data.results;
  const favorites = trendingMovies.filter((m) => m.favorite);
  localStorage.setItem("favorites", JSON.stringify(favorites));

  const mustWatch = trendingMovies.filter((m) => m.mustWatch);
  localStorage.setItem("mustWatch", JSON.stringify(mustWatch));

  return (
    <PageTemplate
      movies={trendingMovies}
      title="Trending Movies"
      action={(movie) => <AddToFavoritesIcon movie={movie} />}
    />
  );
};

export default TrendingMoviesPage;