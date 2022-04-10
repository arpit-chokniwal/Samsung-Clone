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
      font-size: 13px;
      text-decoration: none;
      color: black;
    }
    & a:hover {
      border-bottom: 2px solid black;
    }
    & button {
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
    & button:hover {
      opacity: 75%;
    }
    
  `;
  const SubMain = styled(Carousel)`
    & .carousel-control-prev-icon,
    .carousel-control-next-icon {
      padding: 10%;
      border-radius: 50%;
      background-color: black;
    }
    & .carousel-indicators > button {
      width: 15%;
      background-color: black;
      height: 2px;
    }
  `;
  
  return (
    <div>
      <SubMain >


        <Carousel.Item interval={1500}>
        <img
        className="d-block w-100"
        src="https://images.samsung.com/is/image/samsung/assets/in/Freestyle_1440x640_new1.jpg?imwidth=768"
        alt="Second slide"
      />
          <Main  style={{ margin: "50px -8%" }}>
            <h1 >
              The Freestyle
            </h1>
            
            <p style={{ lineHeight:"20px" }} >Change the way you play <br/> Free carry case worth  ₹5900*</p>
            <Link to={"/"} >Learn More</Link>
            <button>Pre-book now</button>
          </Main>
        </Carousel.Item>

        
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="https://images.samsung.com/is/image/samsung/assets/in/Galaxy_Book2_Series_banner_1440x6401.jpg?imwidth=768"
            alt="Third slide"
          />
          <Main style={{ margin: "150px -5%" }}>
            <h1>Galaxy Book 2 Series <br/> The New Way To PC</h1>
            <p>Pre Book Offer Are Live</p>
            <Link to={"/"}>Learn More</Link>
            <button>Buy now</button>
          </Main>
        </Carousel.Item>


        <Carousel.Item  interval={1500}  >
        <img
        className="d-block w-100"
        src="https://images.samsung.com/is/image/samsung/assets/in/11166_Dotcom_Windfree_AC_Banner_1440x6401.jpg?imwidth=768"
        alt="Second slide"
      />
          <Main  > 
            <h1  style={{ color:'white'}}>
            WindFree
            </h1>
            <p  style={{ color:'white', marginLeft:'2%' }}>Powerful and gentle cooling</p>
            <button  style={{ backgroundColor:'white' ,color:'black'  } } >Buy Now </button>
          </Main>
        </Carousel.Item>


        <Carousel.Item  interval={1500}>
        <img
        className="d-block w-100"
        src="https://images.samsung.com/is/image/samsung/assets/in/11316-S22-Ultra-1TB_Banners_1440x640_updated_disclaimer.jpg?imwidth=768"
        alt="Second slide"
      />
          <Main style={{
            margin:'150px 0% 0% 460px'
          }}>
            <h1 >
              Galaxy s22 Ultra, 1ITB
            </h1>
            <p>Available exclusively on Samsung.com<br/>
            Get Watch4 at ₹ 2999* </p>
            <Link to={"/"}>Learn More</Link>
            <button>Pre-book now</button>
          </Main>
        </Carousel.Item>


      </SubMain>
    </div>
  );
};