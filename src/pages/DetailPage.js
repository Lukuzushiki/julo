import styled from "@emotion/styled";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Header } from "../components";
import axios from "../configs/axios";

const MovieTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 20px 0 0 0;
`;

const MovieGenre = styled.h1`
  font-size: 14px;
  margin: 0;
`;

const NewSection = styled.div`
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 20px 0 0 0;
`;

const LikedButton = styled.button`
  background: #f5c518;
  border-radius: 999px;
  padding: 10px 20px;
  margin-top: 10px;
  font-size: 16px;
  border: 0;
  font-weight: bold;

  &:hover {
    background: #ffffff;
  }

  &:focus {
    background: #333333;
    color: #fff;
  }
`;

const MyListLink = styled.a`
  background: #f5c518;
  border-radius: 999px;
  padding: 10px 20px;
  margin-top: 10px;
  margin-left: 20px;
  font-size: 16px;
  border: 0;
  font-weight: bold;
  color: #000;
  text-decoration: none;

  &:hover {
    background: #ffffff;
  }

  &:focus {
    background: #333333;
    color: #fff;
  }
`;

function DetailPage(props) {
  const params = useParams();
  const cookies = JSON.parse(localStorage.getItem("List Movie"));
  const [filmDetails, setFilmDetails] = useState();
  const [favourite, setFavourite] = useState(cookies);
  const getMoviesDetails = useCallback(() => {
    axios
      .get(`/?i=${params.id}&apikey=f37b3276`)
      .then((response) => {
        setFilmDetails(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [params]);

  const checkIsFavourite = favourite?.some(
    (x) => x.Title === filmDetails?.Title
  );

  const addMovieACtions = (event) => {
    if (cookies?.length > 0) {
      cookies.push(filmDetails);
      localStorage.setItem("List Movie", JSON.stringify(cookies));
    } else {
      localStorage.setItem("List Movie", JSON.stringify([filmDetails]));
    }
    setFavourite(JSON.parse(localStorage.getItem("List Movie")));
  };

  const removeMovieActions = () => {
    const getIndex = cookies.findIndex((x) => x.Title === filmDetails?.Title);
    localStorage.setItem(
      "List Movie",
      JSON.stringify(cookies.splice(getIndex, cookies?.length - 1))
    );
    setFavourite(cookies.splice(getIndex, cookies.length - 1));
  };

  useEffect(() => {
    getMoviesDetails();
  }, [getMoviesDetails]);
  return (
    <>
      <Header />
      <Container>
        <div>
          <img src={filmDetails?.Poster} alt={`img`} />
        </div>
        <LikedButton
          onClick={checkIsFavourite ? removeMovieActions : addMovieACtions}
        >
          {checkIsFavourite ? "Remove From Favourite" : "Add To My Favourite"}
        </LikedButton>
        <MyListLink href="/my-list">My List</MyListLink>
        <MovieTitle>{filmDetails?.Title}</MovieTitle>
        <MovieGenre>{filmDetails?.Genre}</MovieGenre>
        <MovieGenre>{filmDetails?.Released}</MovieGenre>
        <NewSection>Artist:</NewSection>
        <MovieGenre>{filmDetails?.Actors}</MovieGenre>
        <NewSection>Plot:</NewSection>
        <MovieGenre>{filmDetails?.Plot}</MovieGenre>
      </Container>
    </>
  );
}

export default DetailPage;
