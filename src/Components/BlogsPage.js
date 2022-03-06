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
        <InnerLayout>
          {blogs.map((blog) => {
            return (
              <div key={blog.id}>
                <div className="image">
                  <img src={blog.image} alt="" width="500" height="400" />
                </div>
                <div className="title">
                  <h4>{blog.title}</h4>
                </div>
              </div>
            );
          })}
        </InnerLayout>
      </BlogsStyled>
    </MainLayout>
  );
}

const BlogsStyled = styled.div``;

export default BlogsPage;
