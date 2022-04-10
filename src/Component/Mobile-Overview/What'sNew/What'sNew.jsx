import { Link } from "react-router-dom";
import styled from "styled-components";

//styled component for Navbar
const Main = styled.div`
  & > div:nth-child(1) {
    height: 150px;
  }
  & div h1 {
    font-family: SamsungSharpSans;
    font-size: 36px;
    padding: 5%;
  }
  & > div:nth-child(2) {
    height: 700px;
    display: grid;
    grid-template-columns: 50% 25% 25%;
    grid-template-rows: 340px 340px;
    grid-template-areas:
      "a b c"
      "a d e";
  }
  & div:nth-child(2) div {
    background-color: #f4f4f4;
    border-radius: 20px;
  }
  & #mainbox {
    grid-area: a;
    margin: 2%;
  }
  & .box1 {
    grid-area: b;
    margin: 4%;
    overflow: hidden;
    cursor: pointer;
  }
  & .box1:hover > button {
    top: -10%;
  }
  & .box1:hover > #forhover {
    top: -5%;
  }
  & .box1:hover > img {
    transform: scale(1.1);
    transition: all .5s ease-out;
  }
  & .box1:hover > p:nth-child(8) {
    top: 100%;
    position: relative;
    transition: all 0.5s ease-out;
  }
  & .box1 > p:nth-child(7) {
    font-family: samsung700;
    font-size: 17px;
  }
  & .box1 > p:nth-child(8) {
    font-size: 12px;
    font-family: samsung400;
    top: 0;
  }
  & .box1 button {
    top: 100%;
    font-family: samsung400;
    position: relative;
    transition: all 0.5s ease-out;
    height: 35px;
    width: 100px;
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
  & #subBox1 {
    grid-area: c;
    margin: 4%;
  }
  & #subBox2 {
    grid-area: d;
    margin: 4%;
  }
  & #subBox3 {
    grid-area: e;
    margin: 4%;
  }
`;

export const WhatsNew = () => {
  return (
    <Main>
      <div>
        <h1>What's New</h1>
      </div>
      <div>
        <div className="box1" id="mainbox">
        <span
            class="w3-badge w3-blue"
            style={{
              borderRadius: "15px",
              fontSize: "12px",
              float: "left",
              marginLeft: "5%",
              marginTop: "5%",
            }}
          >
            New
          </span>
          <br />
          <br />
          <img
            src="https://images.samsung.com/is/image/samsung/assets/in/2202/pcd/smp/PCD_B_KV_Merchandising_376x376_.png?$376_376_PNG$"
            alt="png"
            style={{marginTop:"10%", marginLeft:"-10%"}}
          />
          <br />
          <br />
          <p style={{fontSize:"23px",marginTop:"2%"}}>Galaxy S22 Ultra</p>
          <p style={{fontSize:"14px"}}>Just launched.</p>
          <button id="forhover"><Link to={"*"} style={{textDecoration:"none",color:"white"}}>Learn more</Link></button>
        </div>
        <div className="box1">
          <span
            class="w3-badge w3-blue"
            style={{
              borderRadius: "15px",
              fontSize: "12px",
              float: "left",
              marginLeft: "5%",
              marginTop: "5%",
            }}
          >
            New
          </span>
          <br />
          <br />
          <img
            src="https://images.samsung.com/is/image/samsung/assets/in/2202/pcd/smp/PCD_RG_KV_Merchandising_160X160_pc.png?$160_160_PNG$"
            alt="png"
          />
          <br />
          <br />
          <p>Galaxy S22 | S22+</p>
          <p>Just launched.</p>
          <button><Link to={"*"} style={{textDecoration:"none",color:"white"}}>Learn more</Link></button>
        </div>
        <div className="box1" id="subBox1">
          <span
            class="w3-badge w3-blue"
            style={{
              borderRadius: "15px",
              fontSize: "12px",
              float: "left",
              marginLeft: "5%",
              marginTop: "5%",
            }}
          >
            New
          </span><br /><br />
          <img
            src="https://images.samsung.com/is/image/samsung/assets/in/2203/pcd/PCD_Product-Tile_PC_160X160.png?$160_160_PNG$"
            alt="png"
          />
          <br />
          <br />
          <p>Galaxy A53 5G</p>
          <p>.</p>
          <button><Link to={"*"} style={{textDecoration:"none",color:"white"}}>Learn more</Link></button>
        </div>
        <div className="box1" id="subBox2">
        <span
            class="w3-badge w3-blue"
            style={{
              borderRadius: "15px",
              fontSize: "12px",
              float: "left",
              marginLeft: "5%",
              marginTop: "5%",
            }}
          >
            New
          </span><br /><br />
          <img
            src="https://images.samsung.com/is/image/samsung/assets/in/2202/pcd/smp/Q2_KV_Merchandising_160X160.png?$160_160_PNG$"
            alt="png"
          />
          <br />
          <br />
          <p>Galaxy Z Fold3 5G</p>
          <p>.</p>
          <button><Link to={"*"} style={{textDecoration:"none",color:"white"}}>Learn more</Link></button>
        </div>
        <div className="box1" id="subBox3">
        <span
            class="w3-badge w3-blue"
            style={{
              borderRadius: "15px",
              fontSize: "12px",
              float: "left",
              marginLeft: "5%",
              marginTop: "5%",
            }}
          >
            New
          </span><br /><br />
          <img
            src="https://images.samsung.com/is/image/samsung/assets/in/2108/pcd/smp/pc/PCD_B2_KV_Merchandising_160X160.png?$160_160_PNG$"
            alt="png"
          />
          <br />
          <br />
          <p>Galaxy Z Flip3 5G</p>
          <p>.</p>
          <button><Link to={"*"} style={{textDecoration:"none",color:"white"}}>Learn more</Link></button>
        </div>
      </div>
    </Main>
  );
};
