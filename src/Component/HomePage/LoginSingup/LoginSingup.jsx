import { NavBar } from "../LandingPage/NavBar/NavBar"
import { Footer } from "../LandingPage/Footer/Footer"
import { Div,P,Input,Button } from "../Style/Style" 
import { useNavigate,Link } from "react-router-dom"
import { useRef, useState } from "react"

export const LoginSingUp = () =>{
const [email,setemail] = useState('')
const [password,setpass] = useState('')
const navigate = useNavigate()
const ref = useRef()

function r(){
        ref.current = {
                email:email,
                password:password
        }
        setpass('')
        setemail('')
        l()
}
        
const l =()=>{
 // console.log(data)
 const data = JSON.stringify(ref.current);

 fetch("https://samsung-clone.herokuapp.com/login", {
   method: "POST",
   body: data,
   headers: {
     "Content-Type": "application/json",
   },
 }).then(function (res) {
   res.json().then(function (res) {
     if (res.Status == "Done") {
       window.localStorage.setItem('user_token', JSON.stringify(res.token));
       alert(`Login Succesful`);
       navigate('/')
     } else {
       alert("Wrong Credentials");
     }
   });
 });
}
        
       
      
return(<>
        
        <NavBar/>

        <Div bc={'#F7F7F7'} height={'280px'} width={'100%'}display={'flex'} paddingTop={'0px'}>
        
                <Div bc={'#F7F7F7'} height={'240px'} width={'45%'}>
                
                <P fontf={"SamsungSharpSans"} fontSize={'24px'} marginLeft = {'10%'} marginTop={'5px'} >Sign into Samsung Account</P>
                
                <P fontf={"samsung400"} fontSize={'14px'} marginLeft = {'10%'} marginRight = {'4%'}  textAlign={'center'}>Please login with your Samsung account so that you can view and track your orders.</P>
        

                
                <Button cur={'pointer'}  b={'0px'} fontf={"samsung700"} fontSize={'14px'} br={'20px '} padding={'8px 80px'} bc={'#2089FE'} marginLeft={'10%'} marginTop={'0px'} c={'white'} onClick={()=>{
                        navigate('/SamsungAccount')
                }} >Sign in with Samsung</Button>


                <P textAlign={'center'} marginTop={'10px'} marginLeft={'10%'} fontf={"samsung400"} fontSize={'14px'} >Don't have an account? <P cur={'pointer'} c="#2089FE" fontf={"samsung400"} fontSize={'14px'} td={'underline'} onClick={()=>{
                        navigate('/SamsungAccount')
                }}>Sign up here</P></P>        
                </Div>


                <Div  bl={'1px dotted #757575'} marginLeft={'40px'}></Div>

                
                <Div bc={'#F7F7F7'} height={'240px'} width={'45%'} >
                

                <P fontf={"SamsungSharpSans"} fontSize={'24px'}  marginTop={'10px'} >Login</P>
                
                
                <Div height={'20%'} width={'40%'}  marginLeft={'200px'}  >  

                <input placeholder={'Email/Mobile number'} type={'text'} value={email} onChange={(e)=>setemail(e.target.value)} style={{
                        border:'0px',
                        width:'100%' ,
                        borderBottom:'1px solid #959595',
                        backgroundColor:'white',
                        marginTop:'20px',
                        color:'black' ,
                        height:'70%',
                        textAlign:'left',
                        fontSize:'14px',
                }}/>

                </Div>
                


                <Div height={'20%'} width={'40%'}  marginTop={'6px'}   marginLeft={'200px'}  >  

                <input placeholder={'Password'} value={password} onChange={(e)=>setpass(e.target.value)} type={'password'}  style={{
                        border:'0px',
                        width:'100%' ,
                        borderBottom:'1px solid #959595',
                        backgroundColor:'white',
                        marginTop:'20px',
                        color:'black' ,
                        height:'70%',
                        textAlign:'left',
                        fontSize:'14px',
                }}/>

                </Div>
                
                <button onClick={()=>{
                        r()    
                }} style={{
                        cursor:'pointer',
                        border:'0px',
                        borderRadius:'20px',
                        padding:'10px 110px' ,
                        backgroundColor:'black',
                        marginTop:'30px',
                        marginLeft:'35px',
                        color:'white' ,
                        fontSize:"14px",
                        fontFamily:"samsung700",
                }}>Login</button>


                </Div>
        
        </Div>

        <Footer/>
        
        </>)
}