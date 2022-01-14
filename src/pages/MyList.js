import styled from "@emotion/styled";
import React from "react";
import { Container, Header } from "../components";

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 20px 0 0 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  column-gap: 50px;
  row-gap: 20px;

  @media (max-width: 420px) {
    grid-template-columns: auto auto;
    column-gap: 15px;
  }
`;

const PosterWrapper = styled.a`
  overflow: hidden;
  color: #fff;
  text-decoration: none;
`;

const NoPoster = styled.div`
  border-radius: 10px;
  background-color: #fff;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;

  @media (max-width: 420px) {
    height: 200px;
    width: 100%;
  }
`;

const NoPosterText = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: #000;
`;

const MovieTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0px;
`;

const MovieYear = styled.p`
  font-size: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0px;
`;

const MovieType = styled.p`
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0px;
`;

function MyList(props) {
  const cookies = JSON.parse(localStorage.getItem("List Movie"));
  return (
    <>
      <Header />
      <Container>
        <Title>My List</Title>
        <Grid>
          {cookies?.map((film, i) => {
            return (
              <PosterWrapper
                href={`/detail-page/${film.imdbID}`}
                onClick={() => console.log("Test")}
                key={i}
              >
                {film.Poster !== "N/A" ? (
                  <img className="image" src={film.Poster} alt={`img-${i}`} />
                ) : (
                  <NoPoster>
                    <NoPosterText>No Poster</NoPosterText>
                  </NoPoster>
                )}
                <MovieTitle>{film.Title}</MovieTitle>
                <MovieYear>{film.Year}</MovieYear>
                <MovieType>{film.Type}</MovieType>
              </PosterWrapper>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}

export default MyList;
