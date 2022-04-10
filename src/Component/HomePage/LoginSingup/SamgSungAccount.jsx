import './SamSung.css'
import {P,Div} from '../Style/Style'
import { useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react'
export const SamgSungAccount = ( ) => {

const [email,setemail] = useState('')
const [password,setpass] = useState('')
const navigate = useNavigate()
const ref = useRef()

function a(){
    ref.current = {
        email:email,
        password:password
    }
    setpass('')
    setemail('')
    signup()
}


async function signup() {
    try {
      
     const data = JSON.stringify(ref.current);
      let url = "https://samsung-clone.herokuapp.com/register"
    
      let response = await fetch(url, {
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json",
        },
      });
      let result = await response.json();
      if(result.status=="Done"){
        alert("Registered Succesfully");
        navigate('/loginpage')
    }else{
        alert("Already Registered");
    }
    } catch (err) {
      console.log(err);
    }
    }

    function auth() {
        console.log(111);
        window.location.href = "http://localhost:4500/auth/google"
      }
      
      
    return(<div>

        <Div bc={'#171616'} height={'830px'} width={'100%'}>


            <P color={'white'} cur={'pointer'} fontSize={'25px'} padding={'35px 45% 0% 10%'} onClick={()=>{
                navigate('/')
            }}>SAMSUNG Account</P>
            <Div style={{
                    margin: 'auto',
                    marginTop:'80px',
                    height:'666px',
                    width: '35%',
                    padding: '10px'
                  
            }}>
            <Div width={'100%'} height={'95px'}  style={{
               textAlign:'center',
            }}> <P color={"#0075d4"} fontf={"SamsungSharpSans"} fontSize={'24px'} >Sign in to your Samsung account</P> </Div>
           <Div width={'454px'} height={'450px'}  style={{
            textAlign:'center',   
            paddingTop:'30px',
             marginTop:'50px'
         }}>
            <input type={'text'} value={email} onChange={(e)=>setemail(e.target.value)}  placeholder='Email or phone number' style={{
                backgroundColor: 'transparent',
                color:'#999999',
                borderBottom: '1px solid #999999',
                borderRight:'0px solid #999999',
                height: '36px',
                width: '100%',
                fontSize:'18px',
            }} />
            <input type={'password'} value={password}  onChange={(e)=>setpass(e.target.value)}   placeholder='Password' style={{
                 marginTop:'50px',
                backgroundColor: 'transparent',
                color:'#999999',
                borderBottom: '1px solid #999999',
                borderRight:'0px solid #999999',
                height: '36px',
                width: '100%',
                fontSize:'18px',
             }} />

             <button style={{
                fontSize:'20px',
                lineHeight:'19px',
                marginTop:'50px',
                height:'44px ' ,
                width:'280px' ,
                padding:'8px 20px 20px 7px',
                border:'#5d5d5d',
                borderRadius:'22px',
                backgroundColor:'#5d5d5d',
                color:'white',
                textAlign:'center'
             }} onClick={()=>a()}>Sign in</button>

             <P style={{
                fontSize:'15px',
                lineHeight:'19px',
                marginTop:'25px',
                marginLeft:'50px',
                height:'44px ' ,
                width:'280px' ,
                color:'#997662',
                textAlign:'center'
             }}> <span style={{cursor:'pointer',textDecoration:'underline'}}> Find ID</span> or <span style={{cursor:'pointer',textDecoration:'underline'}}> Reset password</span></P>


             <Div cur={'pointer'} style={{
                fontSize:'20px',
                lineHeight:'19px',
                marginTop:'0px',
                marginLeft:'88px',
                height:'44px ' ,
                width:'280px' ,
                padding:'8px 20px 20px 7px',
                border:'#5d5d5d',
                borderRadius:'22px',
                backgroundColor:'#0075d4',
                color:'white',
                textAlign:'center'
             }} onClick={()=>{auth()}} >
             
             <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png' style={{
                marginLeft:'-210px',
                marginTop:'-3px',
                height:'35px ' ,
                width: '40px' ,
                borderRadius:'22px',
             }} />
             <P style={{
                 fontWeight:'10px',
                marginTop:'-30px',
                marginLeft:'10px',
                height:'30px ' ,
                width:'280px' ,
                color:'white',
                textAlign:'center'
             }} >Sign in with Google</P>

             </Div>
         </Div>
            
            </Div>
        
        </Div>
        
        
    </div>)


}