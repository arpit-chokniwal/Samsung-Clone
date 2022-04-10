import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navbar = () => {
    
  //styled component for Navbar
  const Main = styled.div`
    background-color: #f7f7f7;
    height: 53px;
    font-family: samsung400;
    padding-left: 25%;
    padding-right: 25%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 7;
    border-top: 1px solid #c6c6c6;
    border-bottom: 1px solid #c6c6c6;

    & a {
      text-decoration: none;
      padding: 2%;
      font-size: 13px;
      color: black;
    }
  `;
  return (
    <Main>
      <Link to={"/mobiles"}>Galaxy Z</Link>
      <Link to={"/mobiles"}>Galaxy S</Link>
      <Link to={"/mobiles"}>Galaxy Note</Link>
      <Link to={"/mobiles"}>Galaxy A</Link>
      <Link to={"/mobiles"}>Galaxy M</Link>
      <Link to={"/mobiles"}>Compare</Link>
      <Link to={"/mobiles"}>Accessories</Link>
    </Main>
  );
};
