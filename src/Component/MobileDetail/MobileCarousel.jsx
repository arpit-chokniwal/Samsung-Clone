import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

export const MobileCurousel = ({detailImage}) => {
  //styled component for Navbar
  const SubMain = styled(Carousel)`
        height:420px;
    & .carousel-control-prev-icon,
    .carousel-control-next-icon {
      padding: 10%;
      border-radius: 50%;
      background-color: black;
    }
    & .carousel-indicators > Button {
      width: 5%;
      background-color: black;
      height: 2px;
    }
  `;
  return (
    <div>
      <SubMain>
        {detailImage && detailImage.map((el)=>
          <Carousel.Item interval={2000}>
          <img
              className="d-block w-100"
              src={el}
              alt="Second slide"
              height={"450px"}
            />
          </Carousel.Item>
        )}
        
      </SubMain>
    </div>
  );
};


