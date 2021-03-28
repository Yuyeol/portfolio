import React from "react";
import styled from "styled-components";
import blog from "assets/blog.png";
import movie from "assets/movie.png";
import mall from "assets/mall.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .title {
    font-size: 50px;
    margin-bottom: 15px;
    color: navy;
    font-weight: 600;
  }
  .port-box {
    width: 800px;
    height: 400px;
    border-radius: 30px;
    display: flex;
    justify-content: space-around;
    padding: 20px 0;
    border: 0.3px solid rgba(118, 146, 180, 0.1);
    box-shadow: 15px 15px 15px rgba(118, 146, 180, 0.18);
    .port {
      border-radius: 20px;
      padding: 15px;
      border: 0.3px solid rgba(118, 146, 180, 0.1);
      box-shadow: 5px 5px 5px rgba(118, 146, 180, 0.18);
      .img-box {
        img {
          width: 200px;
          border-radius: 15px;
        }
      }
      .port-title {
        margin-top: 10px;
        font-size: 28px;
        font-weight: 600;
        color: #7b9acc;
        text-align: center;
      }
      .btn-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        a {
          text-align: center;
          margin-top: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 160px;
          height: 40px;
          font-size: 24px;
          font-weight: 600;
          color: grey;
          border: 3px solid rgba(118, 146, 180, 0.18);
          border-radius: 15px;
          text-decoration: none;
          &:hover {
            color: white;
            background-color: #7b9acc;
            transition: 0.3s all ease;
          }
        }
      }
    }
  }
`;

const App = () => {
  return (
    <Container>
      <div className="title">Portfolio</div>
      <div className="port-box">
        <div className="port">
          <div className="img-box">
            <img src={blog} alt="blog" />
          </div>
          <div className="port-title">개인 블로그</div>
          <div className="btn-box">
            <a className="btn-port" href="https://github.com/Yuyeol/blog-react">
              포트폴리오
            </a>
            <a
              className="btn-page"
              href="https://yuyeol.github.io/blog-react/#/"
            >
              페이지
            </a>
          </div>
        </div>
        <div className="port">
          <div className="img-box">
            <img src={movie} alt="movie" />
          </div>
          <div className="port-title">무비포스터 뷰어</div>
          <div className="btn-box">
            <a
              className="btn-port"
              href="https://github.com/Yuyeol/themovie-react"
            >
              포트폴리오
            </a>
            <a
              className="btn-page"
              href="https://yuyeol.github.io/themovie-react/#/"
            >
              페이지
            </a>
          </div>
        </div>
        <div className="port">
          <div className="img-box ">
            <img src={mall} alt="mall" />
          </div>
          <div className="port-title">쇼핑몰 클론코딩</div>
          <div className="btn-box">
            <a
              className="btn-port"
              href="https://github.com/Yuyeol/fashion-mall-ff"
            >
              포트폴리오
            </a>
            <a
              className="btn-page"
              href="https://yuyeol.github.io/fashion-mall-ff/"
            >
              페이지
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default App;
