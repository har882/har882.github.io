import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

const BlogsCards = (props) => {
  return (
    <a
      className="blog-link"
      href={props.link}
      target="_blank"
      rel="noreferrer"
      style={{ fontSize: "1.0rem" }}
    >
      <Card className="blog-card-view">
        <Card.Img variant="top" src={props.imgPath} className="blog-img" />
        <Card.Footer>
          {/* <i className="fas fa-external-link-square-alt">&nbsp;</i> */}
          {props.title}

          <p style={{ marginBlockEnd: "0em" }}>{props.site}</p>
        </Card.Footer>
      </Card>
    </a>
  );
};

export default BlogsCards;
