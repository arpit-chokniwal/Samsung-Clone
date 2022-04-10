import { Compare } from "../CompareTheModels/Compare"
import { WhatsNew } from "../What'sNew/What'sNew"
import { ReactCurousel } from "../Carousel/Carousel"
import { ImageLoaded } from "../Image-loaded/ImageLoaded"
import { AmazingAloneBetterTogether } from "../MobileSection/AmazingAloneBetterTogether"
import { GalaxyASeries } from "../MobileSection/GalaxyASeries"
import { GalaxyNote } from "../MobileSection/GalaxyNote"
import { GalaxyS } from "../MobileSection/GalaxyS"
import { GalaxyZ } from "../MobileSection/GalaxyZ"
import { Navbar } from "../Navbar/Navbar"
import { NavBar } from "../../HomePage/LandingPage/NavBar/NavBar"
import { Footer } from "../../HomePage/LandingPage/Footer/Footer"
import axios from "axios";
import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { compareData } from "../../../Redux/action";

export const MobileOverviewPage = () =>{


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
      <Navbar/>
      <ReactCurousel/>
      <WhatsNew/>
      <ImageLoaded image={"https://images.samsung.com/is/image/samsung/assets/in/2108/pcd/smp/pc/PCD_COMBO_KV_Main-KV_1440X640_LTR.jpg?$1440_640_JPG$"} title={"Galaxy Z"} description={"Unfold your world with the completely reimagined smartphone experience."} top={"1650px"} color={"black"} margin={"55%"}/>
      <GalaxyZ/>
      <ImageLoaded image={"https://images.samsung.com/is/image/samsung/assets/in/2202/pcd/smp/PCD_Combo_KV_Curation-KV_1440x640_pc.jpg?$1440_640_JPG$"} title={"Galaxy S"} description={"Welcome to the epic standard"} top={"3070px"} color={"black"} margin={"10%"}/>
      <GalaxyS/>
      <ImageLoaded image={"https://images.samsung.com/is/image/samsung/assets/in/pcd/smartphones/04_galaxy_note_pc.jpg?$1440_640_JPG$"} title={"Galaxy Note"} description={"The Powerphone that empowers your work and play"} top={"4500px"} color={"white"} margin={"55%"}/>
      <GalaxyNote/>
      <ImageLoaded image={"https://images.samsung.com/is/image/samsung/assets/in/2203/pcd/PCD_KV_optC_PC_1440X640.jpg?$1440_640_JPG$"} title={"Galaxy A Series"} description={"Awesome is for everyone"} top={"5900px"} color={"black"} margin={"10%"}/>
      <GalaxyASeries/>
      <ImageLoaded image={"https://images.samsung.com/is/image/samsung/assets/in/2202/pcd/smp/PCD_Ecosystem_KV_Curation-KV_1440x640_pc.jpg?$1440_640_JPG$"} title={"Amazing Alone.Better Together"} description={"Awesome is for everyone"} top={"7300px"} color={"black"} margin={"10%"}/>
      <AmazingAloneBetterTogether/>
      <Compare/>
      <Footer/>
        </>)
}