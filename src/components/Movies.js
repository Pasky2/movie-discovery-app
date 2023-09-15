import React from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Movies = ({ movie }) => {
  return (
    <div>
      <Card>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} className="img-fluid" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
    </div>
  );
};

export default Movies;
