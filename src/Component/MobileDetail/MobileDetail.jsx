import styled from "styled-components"
import { MobileCurousel } from "./MobileCarousel"
import { ArrowLeftRight,CircleFill,EnvelopeOpenHeart,Archive, Heart, Share } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { NavBar } from "../HomePage/LandingPage/NavBar/NavBar";
import { Footer } from "../HomePage/LandingPage/Footer/Footer";

export const MobileDetail=()=>{

    const [mobileData, setMobileData] = useState(null);

    const {id} = useParams();

    useEffect(()=>{
        getData();
    },[])

    const getData = ()=>{
        axios.get(`https://samsung-clone.herokuapp.com/mobiles/${id}`).then(({data})=>{
            console.log("mobileData",data);
            setMobileData(data);
        })
    }

    const [imageUrl, setImageUrl] = useState(null);

    const Div = styled.div`
    height: ${({height})=>height};
    width: ${({width})=>width};
    border:  ${({b})=>b};
    border-bottom:  ${({bb})=>bb};
    padding: ${({ph})=>ph};
    border-left : ${({bl})=>bl};
    margin-left: ${({marginLeft})=>marginLeft}; 
    margin-right: ${({marginRight})=>marginRight}; 
    margin-bottom: ${({marginBottom})=>marginBottom}; 
    margin-top: ${({marginTop})=>marginTop}; 
    margin: ${({margin})=>margin}; 
    padding-top: ${({paddingTop})=>paddingTop};
    padding-left: ${({paddingLeft})=>paddingLeft};
    text-align:  ${({textAlign})=>textAlign};
    display: ${({display})=>display};  
    background-color: ${({bc})=>bc};
    border-radius: ${({br})=>br};
    position: ${({pos})=>pos};
    z-index:  ${({z})=>z};
    font-family: ${({fontf})=>fontf};
    overflow:  ${({ov})=>ov};
    &:hover{
        background-color: ${({bch})=>bch};
        color: ${({ch})=>ch};
        border-radius: ${({brh})=>brh};
        padding: ${({ph})=>ph};
        cursor:  ${({cur})=>cur};       
        border-top:  ${({bbh})=>bbh};
        border-bottom:  ${({bbb})=>bbb};
        margin-top: ${({mth})=>mth};   
        padding-bottom: ${({pbh})=>pbh};  
        margin-bottom: ${({mbh})=>mbh}; 
        transition: ${({th})=>th};
        transform: ${({tsh})=>tsh};
    }
    & .exchange{
        font-family: SamsungSharpSans;
        font-size: 15px;
    }
    & .getExchange{
        font-family: samsung400;
        font-size: 13px;
        padding:2%;
        text-align:left;
    }
    & .yesPlease{
        font-family: samsung700;
        font-size: 13px;
        text-align:left;
        margin:auto;
    }
    & .yesPlease~p{
        font-family: samsung400;
        font-size: 11px;
        margin:auto;
    }
    & .noPlease{
        font-family: samsung700;
        font-size: 13px;
        margin:6%;
        float:left;
    }
    & .devicePrice{
        font-family: samsung400;
        font-size: 13px;
        text-align:left;
    }
    & .radiobtnDiv{
      width:60%;
      display:flex;
      margin:auto;
      justify-content:space-evenly;
      cursor: pointer;
      font-family: samsung700;
    font-size: 13px;
    }
    & .radioColor{
        height:25px;
        width:25px;
    }
    & .offers{
        font-family: samsung700;
        font-size: 19px;
    }
    & .linktag{
        text-decoration:none;
        font-family: samsung700;
        font-size: 13px;
        color:black;
        border-bottom:1px solid black;
    }

`
const NewArrival = styled.div`
    text-align:left;
    padding:2%;
    width:50%;
    & p:nth-child(1){
        font-family: samsung700;
        font-size: 17px;
        color:#2189ff;
        padding-top:5px;
        line-height:0%;
    }
    & p:nth-child(2){
        font-family: SamsungSharpSans;
        font-size: 21px;
    }
`

const Price = styled.div`
    text-align:right;
    width:35%;
    padding:1%;
    & p{
        font-family: samsung400;
        font-size: 17px;
    }
    & .amountColor{
        font-family: samsung700;
        font-size: 21px;
        color:#2189ff;
    }
`
    const ButtonDiv = styled.div`
    width:15%;
    font-family: samsung700;
    font-size: 13px;
    margin:auto;
    & button {
        height: 35px;
        width: 150px;
        background-color: #2189ff;
        border-radius: 20px;
        border: transparent;
        color: white;
        font-size: 13px;
        margin-left: 15px;
    }
    & button:hover {
        opacity: 75%;
    }
    & button > a{
        text-decoration:none;
        color:white;
    }

`

    //change product color
    const handleChange = (image) => {
        setImageUrl(image);
    };

    if(mobileData === null){
        return null;
    }
     //calculate emi1
    const emi = Math.floor(mobileData && mobileData.price[0]*(14.99/365)*((1+(14.99/365))**24)/((1+(14.99/365))**24)-1);

    //calculate emi2
    let emi2;
    if(mobileData.price[1] !== undefined){
        emi2 = Math.floor(mobileData && mobileData.price[1]*(14.99/365)*((1+(14.99/365))**24)/((1+(14.99/365))**24)-1);
    }
    

    return(<>
        <NavBar/>
        <div>
        {/**Sticky Navbar 👇*/}
        <Div height={'88px'} width={'100%'} style={{display: "flex",position: 'sticky',backgroundColor:"white", top: '0px',zIndex:"7",width: '100%', borderBottom:"1px solid #eaeaea"}}>
            <NewArrival>
                <p>New Arrival</p>
                <p>{mobileData.product_name}</p>
            </NewArrival>
            <Price>
                <p>Price ₹{mobileData && mobileData.price[0].toFixed(2)} From <span className="amountColor">₹{emi.toFixed(2)}</span>/month at 0% interest for 24 months or <span className="amountColor">₹{mobileData.exchange.toFixed(2)}</span> with exchange*</p>
            </Price>
            <ButtonDiv>
                <p></p>
                <button><Link to={`/cart/${mobileData._id}`}>CONTINUE</Link></button>
            </ButtonDiv>
        </Div>
        {/**Curousel */}
        <Div width={'100%'}>
            <MobileCurousel detailImage={mobileData.detailImage}/>
        </Div>
        
        {/** Exchange */}
        <Div height={'180px'} width={'80%'} marginTop={'5%'} marginLeft={'10%'} display={'flex'} bb={"1px solid #eaeaea"}>
        
        {/** Div 1*/}  
        <Div height={'100%'} width={'20%'} textAlign={"left"} marginTop={'2px'}> 
            <ArrowLeftRight size={20}/>
            <p className="exchange">Exchange</p>
        </Div>


                {/** Div 2*/}  

        
        <Div height={'100%'} width={'80%'} marginTop={'2px'}>
            <p className="getExchange">Get up to ₹{mobileData.exchange.toFixed(2)} off on exchange of your current phone</p>
        <Div height={'100%'} display={"flex"}>
            <Div cur={"pointer"} height={'30%'} width={'30%'} margin={"1%"} br={"5px"} b={'1px solid #eaeaea'} marginTop={'2px'} display={"flex"} style={{justifyContent:"space-around"}}>
                <p className="yesPlease">Yes, please</p>
                <p>Save up to ₹{mobileData.exchange.toFixed(2)}</p>
            </Div>
            <Div cur={"pointer"} height={'30%'} width={'30%'} margin={"1%"} br={"5px"} b={'1px solid #eaeaea'} marginTop={'2px'}>
                <p className="noPlease">No, thanks</p>
            </Div>
        </Div>
        </Div>
        
        </Div>
        

        {/** Device */}
        <Div height={'180px'} width={'80%'} marginTop={'2%'} marginLeft={'10%'} display={'flex'} bb={"1px solid #eaeaea"}>
        {/** Div 1*/}  
        
        <Div height={'100%'} width={'20%'} textAlign={"left"} marginTop={'2px'}> 
            <p className="exchange">Device</p>
        </Div>

              {/** Div 2*/}  
 
        <Div height={'100%'} width={'80%'} marginTop={'2px'} >

        <Div cur={"pointer"} height={'40%'} width={'30%'} ph={"1%"} margin={"1%"} br={"5px"} b={'1px solid #eaeaea'} marginTop={'2px'}>
                <p className="yesPlease">{mobileData.product_name}</p>
                <p className="devicePrice">From ₹{emi.toFixed(2)}/month for 24 months or ₹{mobileData.price[0].toFixed(2)}</p>
        </Div>

        <p className="yesPlease" style={{marginLeft:"2%"}}>Late delivery notice</p>
        <p className="devicePrice" style={{marginLeft:"2%"}}>We are experiencing an all-time high demand. Thus, we expect delays with certain models. We are committed to delivering your order as soon as possible and apologize for any inconvenience caused.
Also, don't worry! Pre-order gifts are still valid to all customers who placed the order within the offer period.</p>
        
        </Div>
        
        </Div>
        
        
        
        {/** Storage */}
        <Div height={'150px'} width={'80%'} marginTop={'2%'} marginLeft={'10%'} display={'flex'} bb={"1px solid #eaeaea"}>
        {/** Div 1*/}        
        <Div height={'100%'} width={'20%'} textAlign={"left"} marginTop={'2px'}> 
            <p className="exchange">Storage</p>
        </Div>

     
        {/** Div 2*/}  
        <Div height={'100%'} width={'80%'} marginTop={'2px'} display={'flex'}>

        <Div cur={"pointer"} height={'50%'} width={'30%'} ph={"1%"} margin={"1%"} br={"5px"} b={'1px solid #eaeaea'} marginTop={'2px'}>
                <p className="yesPlease">{mobileData.description.Storage[0]} | {mobileData.description.RAMSizeGB}GB</p>
                <p className="devicePrice">From ₹{emi.toFixed(2)}/month for 24 months or ₹{mobileData.price[0].toFixed(2)}</p>
        </Div>
        {mobileData.description.Storage[1] !== undefined ? 
        <Div cur={"pointer"} height={'50%'} width={'30%'} ph={"1%"} margin={"1%"} br={"5px"} b={'1px solid #eaeaea'} marginTop={'2px'}>
            <p className="yesPlease">{mobileData.description.Storage[1]} | {mobileData.description.RAMSizeGB}GB</p>
            <p className="devicePrice">From ₹{emi2.toFixed(2)}/month for 24 months or ₹{mobileData.price[1].toFixed(2)}</p>
        </Div> : <></>
        }
        
        
        </Div>
        
        </Div>
        

        
        
        {/** Color */}
        {mobileData.colorImage2[1] !== undefined ? 
        <Div height={'500px'} width={'80%'} marginTop={'2%'} marginLeft={'10%'} display={'flex'} bb={"1px solid #eaeaea"}>
        
        {/** Div 1*/}
        <Div height={'100%'} width={'20%'} textAlign={"left"} marginTop={'2px'}> 
            <p className="exchange">Color</p>
        </Div>

        {/** Div 2*/}        
        <Div height={'100%'} width={'80%'}  marginTop={'2px'} display={'flex'}>

        <Div height={'445px'} width={'445px'}  marginTop={'2px'} style={{borderRight:"1px solid #eaeaea"}}>
            <img src={imageUrl === null ? mobileData.colorImage2[0] : imageUrl} alt="colorImage" height={"430px"}/>
        </Div>
        
        <div className="radiobtnDiv">
          <CircleFill className="radioColor" color={mobileData.color[0]} onClick={()=>{handleChange(mobileData.colorImage2[0])}} style={{border:"1px solid black",borderRadius:"50%"}}/> {mobileData.color[0]}
          <CircleFill className="radioColor" color={mobileData.color[1] === undefined ? "white" : mobileData.color[1]} onClick={()=>{if(mobileData.colorImage2[1] !== undefined) handleChange(mobileData.colorImage2[1])}} style={{border:`${mobileData.color[1] === undefined ? "1px solid white":"1px solid black"}`,borderRadius:"50%"}}/>{mobileData.color[1]}
          <CircleFill className="radioColor" color={mobileData.color[2] === undefined ? "white" : mobileData.color[2]} onClick={()=>{if(mobileData.colorImage2[2] !== undefined) handleChange(mobileData.colorImage2[2])}} style={{border:`${mobileData.color[2] === undefined ? "1px solid white":"1px solid black"}`,borderRadius:"50%"}}/>{mobileData.color[2]}
        </div>
        </Div>
        
        </Div> : <></>}
        
        {/** Samsung Care+ */}
        <Div height={"240px"} width={'80%'} marginTop={'2%'} marginLeft={'10%'} display={'flex'} bb={"1px solid #eaeaea"}>
        
        {/** Div 1*/}
        <Div height={'100%'} width={'20%'} textAlign={"left"} marginTop={'2px'}> 
            <EnvelopeOpenHeart size={20}/>
            <p className="exchange">Samsung Care+</p>
        </Div>

        {/** Div 2*/}
        <Div height={'100%'} width={'80%'} marginTop={'2px'}>

        <Div height={'50%'} width={'100%'} marginTop={'2px'} display={'flex'}>
            <Div cur={"pointer"} height={'65%'} width={'32%'} margin={"1%"} br={"5px"} b={'1px solid #eaeaea'} marginTop={'2px'} display={"flex"} style={{justifyContent:"space-around"}}>
                <p className="yesPlease" style={{marginLeft:"2%"}}>Comprehensive Protection (2 Years)</p>
                <p>₹9999.00</p>
            </Div>
            <Div cur={"pointer"} height={'65%'} width={'32%'} margin={"1%"} br={"5px"} b={'1px solid #eaeaea'} marginTop={'2px'} display={"flex"} style={{justifyContent:"space-around"}}>
                <p className="yesPlease" style={{marginLeft:"2%"}}>Accidental & Liquid Damage Protection (1 Year)</p>
                <p>₹4799.00</p>
            </Div>
            <Div cur={"pointer"} height={'65%'} width={'32%'} margin={"1%"} br={"5px"} b={'1px solid #eaeaea'} marginTop={'2px'} display={"flex"} style={{justifyContent:"space-around"}}>
                <p className="yesPlease">Screen Protection (1 Year)</p>
                <p>₹3299.00</p>
            </Div>
        
        </Div>
        <Div height={'50%'} width={'80%'} marginTop={'2px'} display={'flex'}>
            <Div cur={"pointer"} height={'65%'} width={'40%'} margin={"1%"} br={"5px"} b={'1px solid #eaeaea'} marginTop={'2px'} display={"flex"} style={{justifyContent:"space-around"}}>
                <p className="yesPlease">Extended Warranty (1 Year)</p>
                <p>₹4999.00</p>
            </Div>
            <Div cur={"pointer"} height={'65%'} width={'40%'} margin={"1%"} br={"5px"} b={'1px solid #eaeaea'} marginTop={'2px'} display={"flex"} style={{justifyContent:"space-around"}}>
                <p className="yesPlease">None</p>
                <p></p>
            </Div>
        
        </Div>
        
        </Div>
        
        </Div>
 
        {/** Offers & Benefits */}
        
        <Div height={"945px"} width={'80%'} br={"10px"} bc={'#F7F7F7'} marginTop={'2%'} marginLeft={'10%'} display={'flex'} bb={"1px solid #eaeaea"}>
        
        {/** Div 1*/}
        <Div height={'100%'} width={'20%'} textAlign={"left"} marginTop={'2px'}> 
            <Archive size={20}/>
            <p className="exchange">Offers & Benefits</p>
        </Div>

        {/** Div 2*/}
        <Div height={'100%'} width={'80%'} marginTop={'2px'}>

            {/** Inner div 1 */}
        
            <Div height={'150px'} width={'90%'} display={'flex'} br={"10px"} bc={'white'} marginTop={'30px'}>
            {/** Div 1*/}  
            
            <Div height={'100%'} width={'20%'}> 

                <img src="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/promotion_icon/160_03_samsung_financing.png" alt="" />

            
            </Div>

                {/** Div 2*/}  
    
            <Div height={'100%'} width={'80%'} marginTop={'2px'} ph={"2%"} textAlign={"left"}>

                <p className="offers">No Cost EMI starts from ₹ 11132.60/ month.</p>
                <p className="offers">Standard EMI starts from ₹ 6303.21/ month.</p>
                <Link className="linktag" to={"/learnmore"}>Learn More</Link>
            </Div>
            
            </Div>

            <Div height={'150px'} width={'90%'} display={'flex'} br={"10px"} bc={'white'} marginTop={'30px'}>
            {/** Div 1*/}  
            
            <Div height={'100%'} width={'20%'}> 

                <img src="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/promotion_icon/exchange.svg" alt="" />
            
            </Div>

                {/** Div 2*/}  
    
            <Div height={'100%'} width={'80%'} marginTop={'2px'} ph={"2%"} textAlign={"left"}>
            <span
          class="w3-badge w3-blue"
          style={{
            borderRadius: "5px",
            textAlign: "left",
            fontFamily: "samsung700",
            fontSize: "11px"
          }}
        >
          Exchange offer
        </span><br />
                <p className="offers">Exchange Bonus</p>
                <p className="getExchange" style={{padding:"0%"}}>Get up to ₹12000 additional value on exchange for your old phone</p>
                <Link className="linktag" to={"/learnmore"}>Learn More</Link>
            </Div>
            
            </Div>

            <Div height={'150px'} width={'90%'} display={'flex'} br={"10px"} bc={'white'} marginTop={'30px'}>
            {/** Div 1*/}  
            
            <Div height={'100%'} width={'20%'}> 

                <img src="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/promotion_icon/offer_discount.svg" alt="" />
            
            </Div>

                {/** Div 2*/}  
    
            <Div height={'100%'} width={'80%'} marginTop={'2px'} ph={"2%"} textAlign={"left"}>
            <span
          class="w3-badge w3-blue"
          style={{
            borderRadius: "5px",
            textAlign: "left",
            fontFamily: "samsung700",
            fontSize: "11px"
          }}
        >
          Referral Benefit
        </span><br />
                <p className="offers">Referral Advantage Program</p>
                <p className="getExchange" style={{padding:"0%"}}>Save additional 5% using referral code</p>
                <Link className="linktag" to={"/learnmore"}>Learn More</Link>
            </Div>
            
            </Div>

            <Div height={'150px'} width={'90%'} display={'flex'} br={"10px"} bc={'white'} marginTop={'30px'}>
            {/** Div 1*/}  
            
            <Div height={'100%'} width={'20%'}> 

                <img height={"144px"} src="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/promotion_icon/20K.svg" alt="" />
            
            </Div>

                {/** Div 2*/}  
    
            <Div height={'100%'} width={'80%'} marginTop={'2px'} ph={"2%"} textAlign={"left"}>
            <span
          class="w3-badge w3-blue"
          style={{
            borderRadius: "5px",
            textAlign: "left",
            fontFamily: "samsung700",
            fontSize: "11px"
          }}
        >
          20K Advantage
        </span><br />
                <p className="offers">20K Advantage Program</p>
                <p className="getExchange" style={{padding:"0%"}}>Get additional ₹2000 off on Samsung Shop App</p>
                <Link className="linktag" to={"/learnmore"}>Learn More</Link>
            </Div>
            
            </Div>

            <Div height={'150px'} width={'90%'} display={'flex'} br={"10px"} bc={'white'} marginTop={'30px'}>
            {/** Div 1*/}  
            
            <Div height={'100%'} width={'20%'}> 

                <img height={"144px"} src="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/promotion_icon/video.svg" alt="" />
            
            </Div>

                {/** Div 2*/}  
    
            <Div height={'100%'} width={'80%'} marginTop={'2px'} ph={"2%"} textAlign={"left"}>
            <span
          class="w3-badge w3-blue"
          style={{
            borderRadius: "5px",
            textAlign: "left",
            fontFamily: "samsung700",
            fontSize: "11px"
          }}
        >
          Live Demo Video
        </span><br />
                <p className="offers">Experience the new Galaxy S22</p>
                <p className="getExchange" style={{padding:"0%"}}>Attend a Live Demo with Samsung Expert</p>
                <Link className="linktag" to={"/learnmore"}>Learn More</Link>
            </Div>
            
            </Div>
        
        </Div>
        
        </Div>
        

        {/** Galaxy Z Flip3 5G And Total*/}
        <Div height={'350px'} width={'80%'} br={"10px"} marginLeft={'10%'} marginTop = {'70px'} bc={'#F7F7F7'}  >
        
        {/** Div 1*/}        
        <Div height={'140px'} width={'100%'} bb={"1px solid #eaeaea"} display = {'flex'}> 
        
        <Div height={'100%'} width={'55%'} ></Div>
            
        <Div cur={"pointer"} height={'100%'} textAlign={"left"} width={'60%'} margin={"1%"} style={{justifyContent:"space-around"}}>
                <div style={{textAlign:"right"}}> 
                    <Heart size={20} style={{marginLeft:"2%"}}/>
                    <Share size={20} style={{marginLeft:"2%"}}/>
                </div>
                <Div cur={"pointer"} height={'100%'} textAlign={"left"} width={'100%'} margin={"1%"} marginTop={'2px'} display={"flex"} style={{justifyContent:"space-around"}}>
                    <div>
                        <p className="yesPlease" style={{fontSize: "16px"}}>{mobileData.product_name}</p>
                        <p style={{fontFamily:"samsung400", fontSize: "14px"}}>{mobileData.product_id}</p>
                        <br />
                        <p style={{fontFamily:"samsung400", fontSize: "14px"}}>{mobileData.description.Storage[0]} | {mobileData.description.RAMSizeGB}GB Burgundy</p>
                    </div>
                    <div>
                        <p className="yesPlease"></p> <p className="yesPlease"></p> <br /><br /><br />
                        <p style={{fontFamily:"samsung700", fontSize: "14px"}}>₹{mobileData.price[0].toFixed(2)}</p>
                    </div>
                </Div>
            </Div>
        
        </Div>

        {/** Div 2*/}
        <Div height={'220px'} width={'100%'} marginTop={'2px'} display = {'flex'}>
        
        <Div height={'100%'} width={'55%'} margin={"auto"} display = {'flex'} style={{paddingTop:"10%", justifyContent:"space-evenly"}}>
            <div>
                <img height={"60px"} src="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/pd-ico-benefit-pay.svg" alt="" />
                <p style={{fontFamily:"samsung700", fontSize: "14px"}}>Financing</p>
            </div>
            <div>
                <img height={"60px"} src="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/9.exchange_160x160.png" alt="" />
                <p style={{fontFamily:"samsung700", fontSize: "14px"}}>Exchange</p>
            </div>
            <div>
                <img height={"60px"} src="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/pd-ico-benefit-care.svg" alt="" />
                <p style={{fontFamily:"samsung700", fontSize: "14px"}}>Samsung Care+</p>
            </div>
            
        </Div>
        
        <Div cur={"pointer"} height={'100%'} width={'50%'} margin={"1%"} style={{justifyContent:"space-around"}}>
                <Div cur={"pointer"} height={'60%'} textAlign={"left"} width={'100%'} margin={"1%"} marginTop={'2px'} display={"flex"} style={{justifyContent:"space-around"}}>
                    <div>
                        <p className="yesPlease" style={{fontSize: "22px"}}>Total</p>
                    </div>
                    <div>
                        <p className="yesPlease" style={{fontFamily:"samsung700",fontSize: "22px"}}>₹{emi.toFixed(2)}/month for 24 months or</p>
                        <p className="yesPlease" style={{fontFamily:"samsung700",textAlign:"right", fontSize: "22px"}}>₹{mobileData.price[0].toFixed(2)}</p>
                        <p style={{textAlign:"right"}}>12 month No Cost EMI</p>
                        <p style={{textAlign:"right"}}>Earn upto 2% Smartclub points</p>
                    </div>
                </Div>
                <ButtonDiv style={{width:"100%"}}>
                    <button style={{width:"80%"}}><Link to={`/cart/${mobileData._id}`}>CONTINUE</Link></button>
                </ButtonDiv>
        </Div>
        </Div>
        </Div>
  
        
        {/** bottom  Space */}
        <Div marginTop={"5%"} textAlign={"center"}>
            <p style={{fontFamily:"samsung700",fontSize: "22px"}}>{mobileData.product_name}</p>
            <p style={{fontFamily:"samsung700",fontSize: "18px",textAlign:"left", marginLeft:"10%"}}>See Actual Size</p>
            {mobileData.actualImage !== undefined ? <img src={mobileData.actualImage} alt="" /> : <></>}
            
            <p style={{fontFamily:"samsung700",fontSize: "18px",textAlign:"left", margin:"5% 0% 0% 10%"}}>What's in the box</p>
            {mobileData.boxImage !== undefined ? <img src={mobileData.boxImage} alt="" /> : <></>}
        </Div>
        </div>
        <Footer/>
    </>)
}