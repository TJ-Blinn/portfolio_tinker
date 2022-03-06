import React from "react";
import styled from "@emotion/styled";
import blogs from "../data/blogs";
import Title from "./Title";
import { MainLayout, InnerLayout } from "../styles/layouts";

function BlogsPage() {
  // console.log("inside component");
  return (
    <MainLayout>
      <BlogsStyled>
        <Title title={"Blogs"} span={"Blogs"} />
        <InnerLayout className="blog">
          {blogs.map((blog) => {
            return (
              <div key={blog.id} className={"blog-item"}>
                <div className="image">
                  <img src={blog.image} alt="" width="500" height="400" />
                </div>
                <div className="title">
                  <a href={blog.link}>{blog.title}</a>
                </div>
              </div>
            );
          })}
        </InnerLayout>
      </BlogsStyled>
    </MainLayout>
  );
}

const BlogsStyled = styled.div`
  .blog {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;
    .blog-item {
      background-color: var(--background-dark-grey);
      padding: 1rem 1rem;
    }
    .image {
      width: 100%;
      height: 90%;
      overflow: hidden;
    }
    img {
      width: 100%;
      height: 90%;
      object-fit: cover;
      transition: all 0.4s ease-in-out;
      &:hover {
        cursor: pointer;
        transform: scale(1.1);
      }
    }
  }
  .title {
    a {
      font-size: 1.5rem;
      padding: 0.5rem 0;
      color: var(--color-white);
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      &:hover {
        color: var(--primary-color);
      }
    }
  }
`;

export default BlogsPage;
