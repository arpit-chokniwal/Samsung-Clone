
import styled from "styled-components"
import { Footer } from "../LandingPage/Footer/Footer"
import AddIcon from '@mui/icons-material/Add';
import {useNavigate} from "react-router-dom";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { NavBar } from "../LandingPage/NavBar/NavBar";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export const Payment=()=>{

const navigate = useNavigate();
    
  let [data, setData] = useState(null);
  const {id} = useParams();

const Div = styled.div`
    height: ${({height})=>height};
    justify-content: ${({jc})=>jc} ;
    width: ${({width})=>width};
    border:  ${({b})=>b};
    border-bottom:  ${({bb})=>bb};
    border-top:  ${({bt})=>bt};
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
    font-weight : ${({fontWeight})=>fontWeight};
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
`   

useEffect(() => {
    getdata();
  }, []);

  function getdata() {
    axios.get(`https://samsung-clone.herokuapp.com/mobiles/${id}`).then((res) => {
      setData(res.data);
      console.log("resData",res.data);
    });
  }


function paymentDone() {
  
      let price = subT;
  
      let orderDetail = {
        image:"123",
        product_name:"123",
        price,
      };
  
      orderDetail = JSON.stringify(orderDetail);
      a()
      async function a(){
  
      try {
        let url = "https://shopclues-backend.herokuapp.com/orders";
        let responce = await fetch(url, {
          method: "POST",
          body: orderDetail,
          headers: {
            "Content-Type": "application/json"
          },
        });

  
        window.location.href = "https://samsung-paytm.herokuapp.com/";
  
      } catch (err) {
        console.log(err);
      }
    }
        
  }

  if(data === null){
      return null;
  }

  let subT = ((data.price[0]-data.discount+(Math.round(data.price[0] * 0.06))).toFixed(2));

return(<>
     

    <NavBar/>
    {/**NavBar*/}
    {/* <Div height={'75px'} width={'100%'} bb={'1px solid grey'} >
        <h3 style={{padding:'10px',marginTop:'7px',fontFamily:'SamsungOne, arial, sans-serif',fontWeight:'bold',
            cursor: 'pointer',
        }} 
            onClick={()=>{
            navigate('/')
            }}>SAMSUNG</h3>
    </Div> */}

              
    {/** Parent Div */}  
    <Div width={'100%'} display={'flex'}>
    
        {/** 1st Div Address Wala */}  {/*  Shipping address, Billing address */}       
        <Div height={'522px'} width={'662px'} marginTop={'50px'} marginLeft={'10%'}  >
        

            {/** Shipping address */}
            <Div height={'49px'} width={'100%'}  bb={'1px solid grey'} style={{
                padding:'10px',
                marginTop:'7px',
                fontFamily:'samsung700',
                fontSize:'20px',
                cursor: 'pointer',
            }}  marginTop={'2px'}>Shipping address
            </Div>


            <Div height={'162px'} width={'100%'} marginTop={'5px'} display={'flex'}>

                <Div height={'162px'} width={'4%'}  paddingLeft={'4px'} paddingTop={'10px'} >
                <input type={'checkbox'} checked />
                </Div>
                <Div height={'90px'} width={'480px'} fontf={"samsung700"} paddingTop={'10px'} paddingLeft={'0px'} textAlign={'left'} fontWeight={'bold'}> 
                Arpit Chokniwal, Akshya Nagar 1st Block Bangalore, Karnataka - 560016 <br/>1st Cross, Rammurthy nagar,<br/>arpitchokniwal09@gmail.com, 9587029050<br/><br/><span style={{
                    textDecoration:'underline',cursor:'pointer', marginLeft:'52%',marginTop:'-20px'
                }}> Delete </span>
                
                </Div>
            </Div>

            <button  style={{
                paddingLeft:'15px',
                paddingRight:'15px',
                paddingTop:'5px',
                paddingBottom:'5px',
                paddingLeft:'15px',
                backgroundColor:'transparent',
                marginLeft:'35%',
                fontFamily:'samsung700',
                borderRadius:'20px 20px 20px 20px',
                cursor: 'pointer',
            }}  >Add new address <AddIcon/></button>
                

            {/**Billing address*/}
            <Div height={'162px'} width={'100%'} marginTop={'50px'}>
            <Div height={'49px'} width={'100%'}  bt={'1px solid grey'} style={{
                padding:'10px',
                marginTop:'15px',
                fontFamily:'samsung700',
                fontSize:'20px',
                cursor: 'pointer',
            }}  marginTop={'2px'}>Billing address
            </Div>
            <Div height={'40px'} width={'100%'} fontf={"samsung700"} display={'flex'}  paddingTop={'10px'} paddingLeft={'0px'} textAlign={'left'} fontWeight={'bold'}  >
            <span style={{
                marginRight:'15px'
            }}> <input type={'checkbox'} checked />  </span>Same as shipping address
            </Div>
            
            <Div height={'40px'} width={'100%'} fontf={"samsung700"} display={'flex'}  paddingTop={'10px'} paddingLeft={'0px'} textAlign={'left'} fontWeight={'bold'}  >
            <span style={{
                marginRight:'15px'
            }}> <input type={'checkbox'}  />  </span>Need a GSTIN Invoice
            </Div>
                
            </Div>
                
           
        </Div>




        {/** 2nd Div Address Wala */}  {/* Total */}
        <Div  width={'400px'} height={'480px'}  marginTop={'50px'} br={'20px'} bc={'#F6F7F6'} marginLeft={'5%'} paddingLeft={'24px'}>
        


        <Div height={'49px'} width={'95%'} style={{
            justifyContent: 'space-between',
            padding:'10px',
            fontWeight:'bold' ,
            fontSize:'25px',
        }}  marginTop={'2px'} display={'flex'}>
            <Div fontf={"SamsungSharpSans"} style={{fontSize:"28px"}}>Total </Div>
            <Div marginLeft ={'40%'}> ₹{data.price[0].toFixed(2)}</Div>
        </Div>
        


        <Div height={'149px'} width={'95%'}  bt={'1px solid grey'} marginTop={'20px'}  paddingTop={'20px'} >
            <Div display={'flex'} marginTop={'2px'} style={{
                justifyContent: 'space-between',margin:'0px 20px'
            }} >
                <Div fontf={"Samsung700"} style={{fontSize:"14px"}}>Subtotal</Div>
                <Div fontf={"Samsung700"} style={{fontSize:"14px"}}>₹{subT}</Div>
            </Div>
            <Div display={'flex'} marginTop={'2px'} style={{
                justifyContent: 'space-between',margin:'0px 20px'
            }} >
                <Div fontf={"Samsung700"} style={{fontSize:"14px"}}>Discount</Div>
                <Div fontf={"Samsung700"} style={{fontSize:"14px"}}>₹{data.discount.toFixed(2)}</Div>
            </Div>
            

            <Div display={'flex'} marginTop={'2px'} style={{
                justifyContent: 'space-between',margin:'0px 20px'
            }} >
                <Div fontf={"Samsung700"} style={{fontSize:"14px"}}>Shipping charges</Div>
                <Div fontf={"Samsung700"} style={{fontSize:"14px"}}>₹0.00</Div>
            </Div>

            <Div display={'flex'} marginTop={'2px'} style={{
                justifyContent: 'space-between',margin:'0px 20px'
            }} >
                <Div fontf={"Samsung700"} style={{fontSize:"14px"}}>Estimated GST*</Div>
                <Div fontf={"Samsung700"} style={{fontSize:"14px"}}>₹{Math.round(data.price[0] * 0.06).toFixed(2)}</Div>
            </Div>

        </Div>

            
        <Div height={'49px'} width={'95%'} paddingTop={'10px'} marginLeft={'5px'} bt={'1px solid grey'} style={{
            justifyContent: 'space-between',
            fontWeight:'bold' ,
            fontSize:'15px',
            fontFamily:"SamsungSharpSans",
            fontSize:"14px"
        }} >
            Order summary (1 Items)
        </Div>



        <Div height={'149px'} width={'95%'}  >
            
            <Div display={'flex'} marginTop={'2px'} style={{
                justifyContent: 'space-between',margin:'0px 20px',
                fontFamily:"samsung700",
                fontSize:"14px"
            }} >
                <Div >{data.product_name} ({data.color[0]}) Standard Delivery: By Monday, 4th Apr</Div>
                <Div >₹{subT}</Div>
            </Div>

        </Div>
        <button  style={{
            paddingLeft:'15px',
            paddingRight:'15px',
            paddingTop:'5px',
            paddingBottom:'5px',
            paddingLeft:'15px',
            backgroundColor:'black',
            color:'white',
            marginLeft:'0%',
            borderRadius:'20px 20px 20px 20px',
        }} onClick={()=>{
            paymentDone();
        }} >   <AccountBalanceWalletIcon/> Paytm</button>





    <Div>
            
    </Div>

        </Div>
        



    </Div>


    {/** Space */}
    <div height={'190px'}></div>

    <Footer/>
       
 
 
        
</>)
}