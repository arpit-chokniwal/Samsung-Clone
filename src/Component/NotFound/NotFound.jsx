import { Link } from "react-router-dom"
import { Footer } from "../HomePage/LandingPage/Footer/Footer"
import { NavBar } from "../HomePage/LandingPage/NavBar/NavBar"

export const NotFound = ()=>{


    return <div>
        <NavBar/>
        <Link to={"/"}>
            <img style={{borderRadius:"20px"}} src="https://miro.medium.com/max/1400/1*zBFBJktPD3_z0S_35kO5Hg.gif" alt="" />
        </Link>
        
        <Footer/>
    </div>
}