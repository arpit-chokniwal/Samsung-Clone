import { Link } from "react-router-dom";
import styled from "styled-components";

export const ImageLoaded = ({image,title,description,top,color,margin}) => {
  const Main = styled.div`
    width:50%;
    font-family: samsung400;
    color: ${color};
    margin-left: ${margin};
    text-align: left;
    position:absolute;
    top: ${top};

    & h1 {
      font-family: SamsungSharpSans;
      font-size: 46px;
    }
    & button {
      height: 35px;
      width: 100px;
      background-color: ${color};
      border-radius: 20px;
      border: transparent;
      color: ${color === "black" ? "white" : "black"};
      font-weight: 700;
      font-size: 13px;
      margin-left: 15px;
    }
    & button:hover {
      opacity: 75%;
    }
    & a{
      color:${color === "black" ? "white" : "black"};
      text-decoration:none;
    }
  `;

  return (
    <div>
      <div>
        <img 
          src={image}
          alt={title}
          width={"100%"}
        />
        <Main>
          <h1>{title}</h1>
          <br />
          <p>{description}</p>
          <br />
          <button><Link to={"/mobiles"}>See all</Link></button>
        </Main>
      </div>
    </div>
  );
};
