import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

export const ReactCurousel = () => {
  //styled component for Navbar
  const Main = styled(Carousel.Caption)`
    font-family: samsung400;
    color: black;
    margin-left: 35%;
    text-align: left;
    top: 30px;
    width: 50%;
    & h1 {
      font-family: SamsungSharpSans;
      font-size: 46px;
    }
    & a {
      font-weight: 700;
      font-size: 13px;
      text-decoration: none;
      color: black;
    }
    & a:hover {
      border-bottom: 2px solid black;
    }
    & Button {
      height: 35px;
      width: 120px;
      background-color: black;
      border-radius: 20px;
      border: transparent;
      color: white;
      font-weight: 700;
      font-size: 13px;
      margin-left: 15px;
    }
    & Button:hover {
      opacity: 75%;
    }
    & Button > a{
      color:white;
      text-decoration:none;
    }
  `;

  const SubMain = styled(Carousel)`
    & .carousel-control-prev-icon,
    .carousel-control-next-icon {
      padding: 10%;
      border-radius: 50%;
      background-color: black;
    }
    & .carousel-indicators > Button {
      width: 15%;
      background-color: black;
      height: 2px;
    }
  `;

  return (
    <div>
      <SubMain>
        <Carousel.Item interval={5000}>
          <video
            loop
            autoPlay
            muted
            style={{ width: "100%", height: "100%" }}
            className="d-block w-100"
          >
            <source
              src="https://images.samsung.com/is/content/samsung/assets/in/2202/pcd/smp/Home_B0_KV_Main-KV_1440x640_pc.mp4"
              type="video/mp4"
            />
          </video>
          <Main>
            <h1>
              Introducing
              <br />
              Galaxy S22 Series
            </h1>
            <p>Get additional benefits worth ₹ 19000</p>
            <Link to={"/"}>Learn More</Link>
            <button><Link to={"/mobilesDetail/6245aa95302d60cadb16648d"}>Buy now</Link></button>
          </Main>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://images.samsung.com/is/image/samsung/assets/in/2108/pfs/PFS_COMBO_KV_Main-KV_1440X640_LTR.jpg?$ORIGIN_JPG$"
            alt="Second slide"
          />
          <Main>
            <h1>
              Galaxy Z
              <br />
              Fold3 | Flip3 5G
            </h1>
            <p>Unfold your world</p>
            <Link to={"/"}>Learn More</Link>
            <button><Link to={"/mobilesDetail/62457d8f302d60cadb166485"}>Buy now</Link></button>
          </Main>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.samsung.com/is/image/samsung/assets/in/9260_A52s-Launch-EStore_Desktop_1440x640.jpg?imwidth=768"
            alt="Third slide"
          />
          <Main style={{ marginLeft: "-5%" }}>
            <h1>Galaxy A52s 5G</h1>
            <p>Snapdragon 778G | 120Hz sAMOLED | 5G Guarantee</p>
            <Link to={"/"}>Learn More</Link>
            <button><Link to={"/mobilesDetail/6245bbfb302d60cadb166499"}>Buy now</Link></button>
          </Main>
        </Carousel.Item>
      </SubMain>
    </div>
  );
};
