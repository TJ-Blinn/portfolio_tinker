import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/layouts";
import ReviewItem from "./ReviewItem";
import Title from "./Title";

function ReviewsSection() {
  return (
    <ReviewsStyled>
      <Title title={"Reviews"} span={"Reviews"} />
      <InnerLayout>
        <div className="reviews">
          <ReviewItem
            text={
              "Praesent sed cursus metus. Aliquam efficitur leo viverra, convallis justo eu, porta lectus. Nulla commodo commodo ligula vitae feugiat. Nullam id libero est."
            }
          />

          <ReviewItem
            text={
              "Praesent sed cursus metus. Aliquam efficitur leo viverra, convallis justo eu, porta lectus. Nulla commodo commodo ligula vitae feugiat. Nullam id libero est. Maecenas pharetra diam in elit cursus molestie. Duis varius risus quis ullamcorper placerat. Vivamus et dignissim tellus. Proin dui lorem, efficitur in sollicitudin quis, pretium sed lacus. Donec sem justo, sollicitudin nec ullamcorper a, blandit vitae ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sed maximus nunc. Praesent tristique laoreet lacus, sit amet convallis mi facilisis eu."
            }
          />
        </div>
      </InnerLayout>
    </ReviewsStyled>
  );
}

const ReviewsStyled = styled.section`
  .reviews {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
    @media screen and (max-width: 650px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default ReviewsSection;
