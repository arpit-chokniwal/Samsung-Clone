import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
export const Mobile = () => {
  //styled component for Navbar

  const Main = styled(Carousel.Caption)`

    font-family: samsung400;
    color: black;
    text-align: left;
    top: 10px;
    width: 100%;
    margin: auto;
    & h1 {
      font-family: SamsungSharpSans;
      font-size: 26px;
    }
    & a {
      font-weight: 700;
      font-size: 11px;
      text-decoration: none;
      color: black;
    }
    & a:hover {
      border-bottom: 2px solid black;
    }
    & Button {
      height: 30px;
      width: 100px;
      background-color: black;
      border-radius: 15px;
      border: transparent;
      color: white;
      font-weight: 700;
      font-size: 11px;
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
    width: 743px;
    height: 418px;
    margin:auto;
  & .carousel-control-prev-icon,
  .carousel-control-next-icon {
    padding: 10%;
    border-radius: 50%;
    background-color: transparent;
    color: transparent;
  }
  & .carousel-indicators > Button {
      
          
    width: 5%;
    background-color: black;
    height: 1px;
  }
    & .carousel-indicators {
        bottom: 95%;
    }
  `;

  

  return (
    <div>
      <SubMain >
        <Carousel.Item  >
        <img
        className="d-block w-100"
        src="https://images.samsung.com/is/image/samsung/assets/in/S22_Base-Plus_MobileMarketing_743x418.jpg?$743_418_PNG$"
        alt="Second slide"
      />
        <Main>
            <h1>
              Introducing Galaxy S22 | S22+
            </h1>
            <p>Get Galaxy Buds2 at ₹ 2999*</p>
            <Link to={"/"}>Learn More</Link>
            <button><Link to={`/mobilesOverview`}>Buy now</Link></button>
          </Main>  
      
        </Carousel.Item>
        <Carousel.Item  >
          <img
            className="d-block w-100"
            src="https://images.samsung.com/is/image/samsung/assets/in/2203/home/HOME_IM-KV_PC_B_743X418.jpg?$743_418_PNG$"
            alt="Second slide"
          />
          <Main>
            <h1>
              Galaxy A53 5G
            </h1>
            <p>Starting ₹ 31499*</p>
            <Link to={"/"}>Learn More</Link>
            <button><Link to={`/mobilesOverview`}>Buy now</Link></button>
          </Main> 
       
        </Carousel.Item>
        <Carousel.Item  >
          <img
            className="d-block w-100"
            src="https://images.samsung.com/is/image/samsung/assets/in/home/HOME_COMBO_KV_IM_KV_743X418.jpg?$743_418_PNG$"
            alt="Third slide"
          />
         <Main>
            <h1>
              Galaxy Tab S8 | S8+ | S8 Ultra
            </h1>
            <p>Additional ₹ 10000 instant cashback*  | 50% off on Keyboard Cover</p>
            <Link to={"/"}>Learn More</Link>
            <button><Link to={`/mobilesOverview`}>Buy now</Link></button>
          </Main> 
        </Carousel.Item>


        <Carousel.Item  >
        <img
        className="d-block w-100"
        src="https://images.samsung.com/is/image/samsung/assets/in/Q2B2_MobileMarketing_743x418.jpg?$743_418_PNG$"
        alt="Second slide"
      />
      <Main style={{top: "270px", color:"white"}}>
            <h1>
              Galaxy Z Fold3 | Flip3 5G
            </h1>
            <p>Additional upgrade bonus up to ₹ 10000 | ₹ 7000 cashback* on HDFC and ICICI bank cards</p>
            <Link to={"/"}>Learn More</Link>
            <button><Link to={`/mobilesOverview`}>Buy now</Link></button>
          </Main> 
         
        </Carousel.Item>

        
        <Carousel.Item  >
        <img
        className="d-block w-100"
        src="https://images.samsung.com/is/image/samsung/assets/in/M33-mobile_marketing-743x418.jpg?$743_418_PNG$"
        alt="Second slide"
      />

      <Main style={{top: "270px", color:"white"}}>
            <h1>
              Galaxy M33 5G
            </h1>
            <p>'M up for it all</p>
            <Link to={"/"}>Learn More</Link>
            <button><Link to={`/mobilesOverview`}>Buy now</Link></button>
          </Main> 
         

        </Carousel.Item>



      </SubMain>
      <br /><br />
    </div>
  );
};