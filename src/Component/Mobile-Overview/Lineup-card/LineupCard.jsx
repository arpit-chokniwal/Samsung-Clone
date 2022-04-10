import styled from "styled-components";
import { Heart, CircleFill,HeartFill } from "react-bootstrap-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

export const LineupCard = ({id,cardWidth,productName,cardImage,colorImage,newBadge,price,discount,colors,storage}) => {
  
  const [imageUrl, setImageUrl] = useState(cardImage[0]);

  const [mobileColor, setmobileColor] = useState(colors[0]);
  const [mobilePrice, setmobilePrice] = useState(price[0]);
  const [heartColor, setheartColor] = useState("black");

  const Main = styled.div`
    height: 600px;
    width: ${cardWidth !== undefined ? cardWidth : "250px"};
    margin: auto;
    border-radius: 20px;
    background-color:white;

    & .badge {
      height: 8%;
      width: 100%;
    }
    & .imageDiv {
      height: 40%;
    }
    & .textDiv p:nth-child(1) {
      font-family: SamsungSharpSans;
      font-size: 15px;
    }
    & .textDiv p:nth-child(2) {
      font-family: samsung400;
      font-size: 11px;
    }
    & .textDiv p:nth-child(5) {
      font-family: samsung700;
      font-size: 17px;
    }
    & .textDiv p:nth-child(6) span:nth-child(1) {
      font-family: samsung400;
      text-decoration: line-through;
      font-size: 11px;
    }
    & .textDiv p:nth-child(6) span:nth-child(2) {
      font-family: samsung700;
      color: #3193f6;
      font-size: 11px;
    }
    & .radiobtnDiv{
      width:60%;
      display:flex;
      margin:auto;
      justify-content:space-around;
      cursor: pointer;
    }
    & .ram{
      margin:3%;

    }
    & .emiDes{
      width:90%;
      margin:auto;
    }
    & .buyNow {
      height: 35px;
      width: 65%;
      background-color: black;
      border-radius: 20px;
      border: transparent;
      color: white;
      font-weight: 700;
      font-size: 13px;
      margin: auto;
    }
    & .buyNow:hover {
      opacity: 75%;
    }
    & .buyNow > a{
      color:white;
      text-decoration:none;
    }
  `;

  //function for image interval
  let a;
  let i = 0;
  const imageInterval = (e) => {
    a = setInterval(() => {
      e.target.src = cardImage[i];
      i++;
      if (i === 6) {
        i = 0;
      }
    }, 400);
  };

  const clearImageInterval = (e) => {
    clearInterval(a);
    i = 0;
    e.target.src = cardImage[i];
  };

  //change product color
  const handleChange = (image,MobColor) => {
    setImageUrl(image);
    setmobileColor(MobColor)
  };

  //change product price
  const handlePrice = (Price) => {
    setmobilePrice(Price);
  };

  //calculate emi
  const emi = Math.floor(mobilePrice*(14.99/365)*((1+(14.99/365))**24)/((1+(14.99/365))**24)-1);
  return (
    <Main>
      <div className="badge">
        {newBadge === "true"? <span
          class="w3-badge w3-blue"
          style={{
            borderRadius: "10px",
            padding: "2% 3%",
            float: "left",
            marginLeft: "5%",
            marginTop: "5%",
          }}
        >
          New
        </span> : <></>}
        
        {heartColor === "black"? <Heart
          color={heartColor}
          size={20}
          onClick={(e)=>{setheartColor(e.target.color = "red")}}
          style={{ float: "right", marginRight: "5%", marginTop: "5%",cursor:"pointer" }}
        /> : <HeartFill
        color={heartColor}
        size={20}
        onClick={(e)=>{setheartColor(e.target.color = "black")}}
        style={{ float: "right", marginRight: "5%", marginTop: "5%",cursor:"pointer" }}
      />}
        
        
      </div>
      <div className="imageDiv">
        <img
          onMouseOver={(e) => imageInterval(e)}
          onMouseOut={clearImageInterval}
          src={imageUrl}
          alt="Not available"
        />
      </div>
      <div className="textDiv">
        <p>{productName}</p>
        <p>Color : {mobileColor}</p>
        <div className="radiobtnDiv">
          <CircleFill color={colors[0]} onClick={()=>{handleChange(colorImage[0],colors[0])}} style={{border:"1px solid black",borderRadius:"50%"}}/>
          <CircleFill color={colors[1] === undefined ? "white" : colors[1]} onClick={()=>{if(colorImage[1] !== undefined) handleChange(colorImage[1],colors[1])}} style={{border:`${colors[1] === undefined ? "1px solid white":"1px solid black"}`,borderRadius:"50%"}}/>
          <CircleFill color={colors[2] === undefined ? "white" : colors[2]} onClick={()=>{if(colorImage[2] !== undefined) handleChange(colorImage[2],colors[2])}} style={{border:`${colors[2] === undefined ? "1px solid white":"1px solid black"}`,borderRadius:"50%"}}/>
        </div>
        <div className="ram">
        <span onClick={()=>handlePrice(price[0])} class="w3-badge w3-white" style={{borderRadius: "15px",fontSize: "12px",  border:`${mobilePrice === price[0]? "1px solid black" : "1px solid smokewhite" }`, cursor:"pointer"}}>
            {storage[0]}
          </span> <span onClick={()=>handlePrice(price[1])} class="w3-badge w3-white" style={{borderRadius: "15px",fontSize: "12px", border:`${mobilePrice === price[1]? "1px solid black" : "1px solid smokewhite" }`, cursor:"pointer"}}>
            {storage[1]}
          </span>
        </div>
        <p className="emiDes">From ₹{emi.toFixed(2)}/mo for 24 mos at 14.99% Interest or ₹ {mobilePrice.toFixed(2)}</p>
        <p>
          <span>₹ {(mobilePrice+discount).toFixed(2)}</span> <span>Save ₹{discount && discount.toFixed(2)}</span>
        </p>
        <button className="buyNow"><Link to={`/mobilesDetail/${id}`}>Buy now</Link></button>
      </div>
    </Main>
  );
};
