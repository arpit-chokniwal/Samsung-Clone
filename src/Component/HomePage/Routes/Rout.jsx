import {Routes, Route} from 'react-router-dom'
import { Home } from '../LandingPage/Home/Home'
import { Payment } from '../Payment/Payment'
import { LoginSingUp } from '../LoginSingup/LoginSingup'
import { SamgSungAccount } from '../LoginSingup/SamgSungAccount'
import { MobileOverviewPage } from '../../Mobile-Overview/OverviewPage/MobileOverviewPage'
import { MobileList } from "../../MobileList/MobileList"
import { MobileDetail } from "../../MobileDetail/MobileDetail"
import { Overview } from "../../Cart/Overview"
import { Cart } from '../../Cart/Cart'
import { NotFound } from '../../NotFound/NotFound'

export const Rout = () =>{

    return(<>
        
        <Routes>
        
        <Route path='/' element={<Home/>} />
        <Route path='/loginpage' element={<LoginSingUp/>} />
        <Route path='/SamsungAccount' element={<SamgSungAccount/>} />
        <Route path='/payment' element={<Payment/>} />
        <Route path='/mobilesOverview' element={<MobileOverviewPage/>}/>
        <Route path='/mobiles' element={<MobileList/>}/>
        <Route path='/mobilesDetail/:id' element={<MobileDetail/>}/>
        <Route path='/homeAppliances' element={<Overview/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/cart/:id' element={<Cart/>}/>
        <Route path='/payment/:id' element={<Payment/>}/>
        <Route path='*' element={<NotFound/>}/>


        </Routes>        
        
        
        
        </>)
}