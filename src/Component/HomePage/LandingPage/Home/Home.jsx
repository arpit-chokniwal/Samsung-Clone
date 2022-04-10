import { ReactCurousel } from "../Slide/Slide"
import { Explore } from "../Explore/Explore"
import { NavBar } from "../NavBar/NavBar"
import { Semifooter } from '../SemiFooter/SemiFooter'
import {Footer} from '../Footer/Footer'
import { WhatsNew } from "../MonthPick/MonthPick"
import { Mobile } from "../Mobile/Mobile"
import { Tv } from "../TVandAV/TV"
import { HomeAppliances } from "../HomeAppliance/HomeAppliances"
import axios from "axios";
import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { compareData } from "../../../../Redux/action";

export const Home = () =>{

    const dispatch = useDispatch();

    useEffect(()=>{
        getData();
      },[])
    
      const getData = ()=>{
        axios.get("https://samsung-clone.herokuapp.com/mobiles").then(({data})=>{
          dispatch(compareData(data));
        })
      }

    return(<>
        
        <NavBar/>
        <ReactCurousel/>
        <h2 style={{
            fontFamily:'SamsungSharpSans',
            fontSize:'38px',
            paddingTop:"5%",
            marginBottom:"-15%",
        }}>This Month's Picks</h2>
        <WhatsNew/>
        <h1 style={{
            margin:'70px 0% 20px',
            fontSize:'38px',
            fontFamily:'SamsungSharpSans',
            lineHeight:'44px',
            textAlign:'center',
            
        }}>Mobile </h1>
        <Mobile/>
        <h1 style={{
            margin:'70px 0% 20px',
            fontFamily:'SamsungSharpSans',
            fontSize:'38px',
            lineHeight:'44px',
            textAlign:'center',
            position: 'absolute',
            left: '45%',
            zIndex: '1'
        }}>TV & AV</h1>
        <Tv/>

        <h1 style={{
            margin:'70px -4.5% 20px',
            fontFamily:'SamsungSharpSans',
            fontSize:'38px',
            lineHeight:'44px',
            textAlign:'center',
            position: 'absolute',
            left: '45%',
            zIndex: '1'
        }}>Home Appliances</h1>
        <HomeAppliances/>
        <Explore/>

        <Semifooter/>
        <Footer/>
        </>)
}