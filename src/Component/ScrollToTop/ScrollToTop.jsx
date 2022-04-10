import React, { useEffect, useState } from "react";
import { ArrowUp } from 'react-bootstrap-icons';
import styled from "styled-components";

export const ScrollToTop = () => {
  const Main = styled.div`
    position: fixed;
    bottom: 2em;
    right: 1em;
    background-color: transparent;
    @media (max-width: 900px) {
      display: none;
    }
  `;

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () =>
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return isVisible ? (
    <Main>
      <a href="#top">
        <ArrowUp color="white" size={50} style={{backgroundColor:"#7b7b7b", padding:"20%", borderRadius:"50%"}}/>
      </a>
    </Main>
  ) : null;
};
