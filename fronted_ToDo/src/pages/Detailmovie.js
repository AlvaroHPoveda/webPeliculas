import React from "react";
import { useParams } from "react-router-dom";

const Detailmovie = () => {
  const params = useParams();
  return <h1>{params.movieId}</h1>;
};

export default Detailmovie;
