import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

export const HomeAppliances = () => {
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
    & button > a{
      text-decoration:none;
      color:white;
    }
    
  `;
  const SubMain = styled(Carousel)`
  & .carousel-indicators {
    bottom: 610px;
}

    & .carousel-control-prev-icon,
    .carousel-control-next-icon {
      padding: 10%;
      border-radius: 50%;
      background-color: transparent;
      color: transparent;
    }
    & .carousel-indicators > Button {
      width: 12%;
      background-color: grey;
      height: 2px;
    }
  `;
  return (
    <div>
      <SubMain >
        <Carousel.Item   >
        <img
        className="d-block w-100"
        src="https://images.samsung.com/is/image/samsung/assets/in/9938_Bespoke_Banner_1440x810_1029.jpg?$1440_810_JPG$"
        alt="Second slide"
      />
          <Main  style={{ margin: "39% 20% 20% 17%"  }}>
            <h1 >
            BESPOKE Refrigerators
            </h1>
            
            <p style={{lineHeight:"20px",marginLeft:'24%' }} >Designed for you, by you</p>
            <Link to={"/"} style={{ marginLeft:'24%' }}  >Learn More</Link>
            <button><Link to={"*"}>Buy Now</Link></button>
          </Main>
        </Carousel.Item>


        <Carousel.Item   >
        <img
        className="d-block w-100"
        src="https://images.samsung.com/is/image/samsung/assets/in/7909_Curd-Maestro_Samsung.com_1440x810.jpg?$1440_810_JPG$"
        alt="Second slide"
      />
          <Main  style={{ margin: "39% 20% 20% 25%"  }}>
            <h1>
            Curd Maestro
            </h1>
            
            <p style={{ lineHeight:"20px",marginLeft:'5%' }} >Makes tasty and hygienic curd</p>
            <Link to={"/"} style={{ marginLeft:'8%' }}  >Learn More</Link>
            <button><Link to={"*"}>Buy Now</Link></button>
          </Main>
        </Carousel.Item>


        <Carousel.Item   >
        <img
        className="d-block w-100"
        src="https://images.samsung.com/is/image/samsung/assets/in/new-9650_Dishwasher_KV_Banner_1440x810.jpg?$1440_810_JPG$"
        alt="Second slide"
      />
          <Main  style={{ margin: "39% 20% 20% 18%"  }}>
            <h1 style={{ color:'white'  }}>
            IntensiveWash Dishwasher
            </h1>
            
            <p style={{ lineHeight:"20px",marginLeft:'15%' ,color:'white' }} >
            Eliminates up to 99.9% food bacteria*</p>
            <Link to={"/"} style={{ marginLeft:'18%' ,color:'white'  } }  >Learn More</Link>
            <button style={{ backgroundColor:'white' ,color:'black'  } } ><Link style={{ color:'black'} } to={"*"}>Buy Now</Link></button>
          </Main>
        </Carousel.Item>

        <Carousel.Item   >
        <img
        className="d-block w-100"
        src="https://images.samsung.com/is/image/samsung/assets/in/11166_Dotcom_Windfree_AC_Banner_1440x8101.jpg?$1440_810_JPG$"
        alt="Second slide"
      />
          <Main  style={{ margin: "39% 20% 20% 25%"  }}> 
            <h1  style={{ color:'white', fontSize:'48px'  }}>
            WindFree
            </h1>
            <p  style={{ color:'white', marginLeft:'5%' }}>Powerful and gentle cooling</p>
            <button  style={{ backgroundColor:'white' ,color:'black' ,marginLeft:'8%' } } ><Link style={{ color:'black'} } to={"*"}>Buy Now</Link></button>
          </Main>
        </Carousel.Item>

      </SubMain>
    </div>
  );
};