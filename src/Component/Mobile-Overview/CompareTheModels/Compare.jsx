import { LineupCard } from "../Lineup-card/LineupCard";
import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

export const Compare = () => {

    const data = useSelector((store)=>store.compare);

    const [productCompare1, setproductCompare1] = useState(null);
    const [productCompare2, setproductCompare2] = useState(null);
    const [productCompare3, setproductCompare3] = useState(null);


  const Main = styled.div`
    height: 2130px;
    width:100%;

    & div h1 {
      font-family: SamsungSharpSans;
      font-size: 36px;
      padding: 5%;
    }
    & .selectTag{
        display:flex;
        justify-content:space-around;
    }
    & .dropDown{
        width:20%;
        font-family: SamsungSharpSans;
        font-size: 15px;
        border:transparent;
        border-bottom:1px solid #dddddd;
        height:50px;
    }
    & .modelDropdown{
        -webkit-appearance: none;
    }
    & .dropDown::before{
        height:30px;
        border:1px solid red;
    }
    & .flexDiv {
      display: flex;
      padding-left: 28%;
      padding-right: 5%;
      justify-content: space-between;
    }
    & .comparison{
        background-color:#f7f7f7;
        height:45%;
        width:94%;
        margin:auto;
    }
    & .subComparison{
        display:flex;
        border-top:1px solid #8f8f8f;
    }
    & .subComparison p{
        padding:2% 2% 0% 2%;
        width:25%;
        font-family: samsung400;
        font-size: 13px;
    }
    & .subComparison p:nth-child(1){
        text-align:left;
        font-family: samsung700;
        font-size: 15px;
    }
    & .compareInfo{
        padding-top:1%;
        padding-left:5%;
        text-align:left;
        background-color:white;
        font-family: samsung400;
        font-size: 11px;
        border-bottom:1px solid #dddddd;
        border-top:1px solid #dddddd;
    }
  `;

  const handleChange1 = (e)=>{
      
    axios.get(`https://samsung-clone.herokuapp.com/mobiles`).then(({data})=>{
        setproductCompare1(data.filter((a)=>a.product_name === e.target.value));
    })
  }

  const handleChange2 = (e)=>{
      
    axios.get(`https://samsung-clone.herokuapp.com/mobiles`).then(({data})=>{
        setproductCompare2(data.filter((a)=>a.product_name === e.target.value));
    })
  }

  const handleChange3 = (e)=>{
      
    axios.get(`https://samsung-clone.herokuapp.com/mobiles`).then(({data})=>{
        setproductCompare3(data.filter((a)=>a.product_name === e.target.value));
    })
  }

//   if(productCompare1.length === 0 || productCompare2.length === 0 || productCompare3.length === 0){
//       return null;
//   }


  return (
    <Main>
      <div>
        <h1>Compare the models</h1>
      </div>
      <div className="selectTag">
          <select className="dropDown modelDropdown" >
            <option value="Model">Model</option>
          </select>
          <select className="dropDown" onChange={handleChange1}>
              <option value="Select">Select</option>
              <option value="Galaxy Z Flip3 5G">Galaxy Z Flip3 5G</option>
              <option value="Galaxy Z Fold2 5G">Galaxy Z Fold2 5G</option>
              <option value="Galaxy Z Flip">Galaxy Z Flip</option>
              <option value="Galaxy S22 Ultra">Galaxy S22 Ultra</option>
              <option value="Galaxy S22+">Galaxy S22+</option>
              <option value="Galaxy S22">Galaxy S22</option>
              <option value="Galaxy Note20 Ultra">Galaxy Note20 Ultra</option>
              <option value="Galaxy Note20">Galaxy Note20</option>
              <option value="Galaxy A53 5G (8GB RAM)">Galaxy A53 5G (8GB RAM)</option>
              <option value="Galaxy A03s (4GB RAM)">Galaxy A03s (4GB RAM)</option>
              <option value="Galaxy A22 5G (8GB RAM)">Galaxy A22 5G (8GB RAM)</option>
              <option value="Galaxy A22 (6GB RAM)">Galaxy A22 (6GB RAM)</option>
          </select>
          <select className="dropDown" onChange={handleChange2}>
              <option value="Select">Select</option>
              <option value="Galaxy Z Flip3 5G">Galaxy Z Flip3 5G</option>
              <option value="Galaxy Z Fold2 5G">Galaxy Z Fold2 5G</option>
              <option value="Galaxy Z Flip">Galaxy Z Flip</option>
              <option value="Galaxy S22 Ultra">Galaxy S22 Ultra</option>
              <option value="Galaxy S22+">Galaxy S22+</option>
              <option value="Galaxy S22">Galaxy S22</option>
              <option value="Galaxy Note20 Ultra">Galaxy Note20 Ultra</option>
              <option value="Galaxy Note20">Galaxy Note20</option>
              <option value="Galaxy A53 5G (8GB RAM)">Galaxy A53 5G (8GB RAM)</option>
              <option value="Galaxy A03s (4GB RAM)">Galaxy A03s (4GB RAM)</option>
              <option value="Galaxy A22 5G (8GB RAM)">Galaxy A22 5G (8GB RAM)</option>
              <option value="Galaxy A22 (6GB RAM)">Galaxy A22 (6GB RAM)</option>
          </select>
          <select className="dropDown" onChange={handleChange3}>
              <option value="Select">Select</option>
              <option value="Galaxy Z Flip3 5G">Galaxy Z Flip3 5G</option>
              <option value="Galaxy Z Fold2 5G">Galaxy Z Fold2 5G</option>
              <option value="Galaxy Z Flip">Galaxy Z Flip</option>
              <option value="Galaxy S22 Ultra">Galaxy S22 Ultra</option>
              <option value="Galaxy S22+">Galaxy S22+</option>
              <option value="Galaxy S22">Galaxy S22</option>
              <option value="Galaxy Note20 Ultra">Galaxy Note20 Ultra</option>
              <option value="Galaxy Note20">Galaxy Note20</option>
              <option value="Galaxy A53 5G (8GB RAM)">Galaxy A53 5G (8GB RAM)</option>
              <option value="Galaxy A03s (4GB RAM)">Galaxy A03s (4GB RAM)</option>
              <option value="Galaxy A22 5G (8GB RAM)">Galaxy A22 5G (8GB RAM)</option>
              <option value="Galaxy A22 (6GB RAM)">Galaxy A22 (6GB RAM)</option>
          </select>
      </div>
      <br />
      <div className="flexDiv">
        {productCompare1 && productCompare1.map((el)=>(
          <LineupCard key={el._id} id={el._id} productName={el.product_name} cardImage={el.cardImage} newBadge={el.new} colors={el.color} colorImage={el.colorImage1} price={el.price} discount={el.discount} storage={el.description.Storage}/>
        ))}
        {productCompare2 && productCompare2.map((el)=>(
          <LineupCard key={el._id} id={el._id} productName={el.product_name} cardImage={el.cardImage} newBadge={el.new} colors={el.color} colorImage={el.colorImage1} price={el.price} discount={el.discount} storage={el.description.Storage}/>
        ))}
        {productCompare3 && productCompare3.map((el)=>(
          <LineupCard key={el._id} id={el._id} productName={el.product_name} cardImage={el.cardImage} newBadge={el.new} colors={el.color} colorImage={el.colorImage1} price={el.price} discount={el.discount} storage={el.description.Storage}/>
        ))}
      </div>
      <br />
      <div className="comparison">
          <div className="subComparison">
              <p>CPU Speed</p>
              <p>{productCompare1 && productCompare1[0].description.CPUSpeed}</p>
              <p>{productCompare2 && productCompare2[0].description.CPUSpeed}</p>
              <p>{productCompare3 && productCompare3[0].description.CPUSpeed}</p>
          </div>
          <div className="subComparison">
              <p>CPU Type</p>
              <p>{productCompare1 && productCompare1[0].description.CPUType}</p>
              <p>{productCompare2 && productCompare2[0].description.CPUType}</p>
              <p>{productCompare3 && productCompare3[0].description.CPUType}</p>
          </div>
          <div className="subComparison">
              <p>Size (Main_Display)</p>
              <p>{productCompare1 && productCompare1[0].description.SizeMainDisplay}</p>
              <p>{productCompare2 && productCompare2[0].description.SizeMainDisplay}</p>
              <p>{productCompare3 && productCompare3[0].description.SizeMainDisplay}</p>
          </div>
          <div className="subComparison">
              <p>Resolution (Main Display)</p>
              <p>{productCompare1 && productCompare1[0].description.ResolutionMainDisplay}</p>
              <p>{productCompare2 && productCompare2[0].description.ResolutionMainDisplay}</p>
              <p>{productCompare3 && productCompare3[0].description.ResolutionMainDisplay}</p>
          </div>
          <div className="subComparison">
              <p>RAM_Size (GB)</p>
              <p>{productCompare1 && productCompare1[0].description.RAMSizeGB}</p>
              <p>{productCompare2 && productCompare2[0].description.RAMSizeGB}</p>
              <p>{productCompare3 && productCompare3[0].description.RAMSizeGB}</p>
          </div>
          <div className="subComparison">
              <p>ROM Size (GB)</p>
              <p>{productCompare1 && productCompare1[0].description.ROMSizeGB}</p>
              <p>{productCompare2 && productCompare2[0].description.ROMSizeGB}</p>
              <p>{productCompare3 && productCompare3[0].description.ROMSizeGB}</p>
          </div>
          <div className="subComparison">
              <p>Dimension (HxWxD, mm)</p>
              <p>{productCompare1 && productCompare1[0].description.Dimension}</p>
              <p>{productCompare2 && productCompare2[0].description.Dimension}</p>
              <p>{productCompare3 && productCompare3[0].description.Dimension}</p>
          </div>
          <div className="subComparison">
              <p>Weight (g)</p>
              <p>{productCompare1 && productCompare1[0].description.Weight}</p>
              <p>{productCompare2 && productCompare2[0].description.Weight}</p>
              <p>{productCompare3 && productCompare3[0].description.Weight}</p>
          </div>
          <div className="subComparison">
              <p>Battery Capacity (mAh, Typical)</p>
              <p>{productCompare1 && productCompare1[0].description.BatteryCapacity}</p>
              <p>{productCompare2 && productCompare2[0].description.BatteryCapacity}</p>
              <p>{productCompare3 && productCompare3[0].description.BatteryCapacity}</p>
          </div>
          <div className="subComparison">
              <p>Rear Camera - Resolution (Multiple)</p>
              <p>{productCompare1 && productCompare1[0].description.RearCameraResolution}</p>
              <p>{productCompare2 && productCompare2[0].description.RearCameraResolution}</p>
              <p>{productCompare3 && productCompare3[0].description.RearCameraResolution}</p>
          </div>
          <div className="subComparison">
              <p>Infra</p>
              <p>{productCompare1 && productCompare1[0].description.Infra}</p>
              <p>{productCompare2 && productCompare2[0].description.Infra}</p>
              <p>{productCompare3 && productCompare3[0].description.Infra}</p>
          </div>
          <div className="subComparison">
              <p>Rear Camera - F Number (Multiple)</p>
              <p>{productCompare1 && productCompare1[0].description.RearCameraFNumber}</p>
              <p>{productCompare2 && productCompare2[0].description.RearCameraFNumber}</p>
              <p>{productCompare3 && productCompare3[0].description.RearCameraFNumber}</p>
          </div>
          <div className="subComparison">
              <p>Front Camera - Resolution</p>
              <p>{productCompare1 && productCompare1[0].description.FrontCameraResolution}</p>
              <p>{productCompare2 && productCompare2[0].description.FrontCameraResolution}</p>
              <p>{productCompare3 && productCompare3[0].description.FrontCameraResolution}</p>
          </div>
          <div className="subComparison">
              <p>Front Camera - F Number</p>
              <p>{productCompare1 && productCompare1[0].description.FrontCameraFNumber}</p>
              <p>{productCompare2 && productCompare2[0].description.FrontCameraFNumber}</p>
              <p>{productCompare3 && productCompare3[0].description.FrontCameraFNumber}</p>
          </div>
          <br />
          <div className="compareInfo">
              <p>* Image simulated for illustrative purpose. </p>
              <p>** Color and model availability may vary depending on country or carrier.</p>
              <p>*** Galaxy A53 5G is rated as IP67. Based on test conditions for submersion in up to 1 meter of fresh water for up to 30 minutes. Safe against low water pressure only.</p>
              <p>* S Pen embedded only in Galaxy S22 Ultra.</p>
              <p>* S Pen included with Tab S8 series. Samsung Galaxy Watch4 Classic & Buds Pro sold seperately. Color availability vary by country.</p>
              <p>* Image simulated. Color availability may vary depending on country or carrier.</p>
              <p>* Image of Galaxy Z Fold3 5G, Galaxy Z Flip3 5G and S Pen Fold Edition simulated for illustration purposes.</p>
              <p>* S pen Fold Edition sold separately and is only compatible with Galaxy Z Fold3 5G.</p>
              <p>*5G Devices are 5G ready, connectivity dependent on network availability.</p>
          </div>
      </div>
    </Main>
  );
};
