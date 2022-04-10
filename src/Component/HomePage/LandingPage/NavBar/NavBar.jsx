import { NavDiv, Div, P } from "../../Style/Style"
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {useNavigate} from 'react-router-dom'
export const NavBar = () =>{

    const navigate = useNavigate() 

    return(<>
        
        <NavDiv >
        
       <h3 style={{
           margin:'auto',
           marginLeft:"2%",
           marginRight:"-5%",
           fontFamily:'SamsungOne, arial, sans-serif',
           fontWeight:'bold' ,
           cursor: 'pointer',
           fontSize:"20px",
       }} 
       onClick={()=>{
        navigate('/')
    }}>SAMSUNG</h3>
        
        
        <Div height={'100%'} width={'38%'} marginLeft={'1%'} display={'flex'} >
    
         <P margin={'auto'}  cur={'pointer'} fontf={'samsung700'} fontSize={'14px'} bch={'black'} ch={'white'}  ph={'6px'} brh={'20px'}  onClick={()=>{
        navigate('/mobilesOverview')
    }}> Mobile</P>
    
         <P margin={'auto'}  cur={'pointer'}  fontf={'samsung700'} fontSize={'14px'}  bch={'black'} ch={'white'} ph={'6px'} brh={'20px'}  onClick={()=>{
        navigate('*')
    }}> TV & AV</P>
         <P  margin={'auto'}   cur={'pointer'}  fontf={'samsung700'} fontSize={'14px'}  bch={'black'} ch={'white'} ph={'6px'} brh={'20px'} onClick={()=>{
        navigate('*')
    }} > Home Appliances</P>
         <P margin={'auto'}   cur={'pointer'} fontf={'samsung700'} fontSize={'14px'}  bch={'black'} ch={'white'} ph={'6px'} brh={'20px'}  onClick={()=>{
        navigate('*')
    }}> Laptops & Monitors</P>
         <P  margin={'auto'}   cur={'pointer'} fontf={'samsung700'} fontSize={'14px'}  bch={'black'} ch={'white'} ph={'6px'} brh={'20px'}  onClick={()=>{
        navigate('/mobilesOverview')
    }}> Display</P>
        
        
        </Div>
        
        <Div height={'100%'} width={'20%'} marginRight={'-7%'} display={'flex'}>
        
        
        <P margin={'auto'} cur={'pointer'}  fontf={'samsung700'} fontSize={'14px'} bch={'black'} ch={'white'} ph={'6px'} brh={'20px'}  > Explore</P>
        <P margin={'auto'} cur={'pointer'}  fontf={'samsung700'} fontSize={'14px'} bch={'black'} ch={'white'} ph={'6px'} brh={'20px'}   > Support </P>
        <P  margin={'auto'}  cur={'pointer'}  fontf={'samsung700'} fontSize={'14px'}  bch={'black'} ch={'white'} ph={'6px'} brh={'20px'}  > For Bussiness</P>

        </Div>
            {/** Icons */}
        <Div height={'100%'} width={'10%'} marginRight={'1%'} display={'flex'}> 
        <P  marginTop={'25px'}  cur={'pointer'}  fontf={'samsung700'} fontSize={'14px'}  > <SearchOutlinedIcon/></P>
        <P  marginTop={'25px'}  cur={'pointer'}  fontf={'samsung700'} fontSize={'14px'} onClick={()=>{
        navigate('/cart')
    }}  > <ShoppingCartOutlinedIcon/></P>
        <P  marginTop={'25px'}  cur={'pointer'}  fontf={'samsung700'} fontSize={'14px'} onClick={()=>{
            navigate('/loginpage')
        }} > <PersonOutlineOutlinedIcon/></P>
        </Div>
        

        </NavDiv>
        
        
        </>)
}