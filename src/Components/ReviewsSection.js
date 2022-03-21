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
              "Meow all night having their mate disturbing sleeping humans need to check on human, have not seen in an hour might be dead oh look, human is alive, hiss at human, feed me. Claw drapes cough furball for sleep claws in the eye of the beholder."
            }
          />

          <ReviewItem
            text={
              "Curl up and sleep on the freshly laundered towels oooo! dangly balls! jump swat swing flies so sweetly to the floor crash move on wash belly nap but jumps off balcony gives owner dead mouse at present then poops in litter box snatches yarn and fights with dog cat chases laser then plays in grass finds tiny spot in cupboard and sleeps all day jumps in bathtub and meows when owner fills food dish the cat knocks over the food dish cat slides down the water slide and into pool and swims even though it does not like water and poop in litter box."
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
