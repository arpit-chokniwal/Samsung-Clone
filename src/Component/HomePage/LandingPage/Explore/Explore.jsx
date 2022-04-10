import { P, Div, Img } from "../../Style/Style"
import {useState,useEffect} from 'react'
export const Explore = ( ) =>{

    const [urle,seturl] = useState('https://images.samsung.com/is/image/samsung/assets/in/home/ces2022/global0026_home-explore-zone_pc_684x684.jpg?$684_684_PNG$')

  

    const hovImg = [
    'https://images.samsung.com/is/image/samsung/assets/in/p6_gro1/p6_initial_explore_detail/wellbeing/im0140_explore_use-fitness-trackers/im0140_home-explore-banner_pc_684x684.jpg?$684_684_PNG$',

    'https://images.samsung.com/is/image/samsung/assets/in/p6_gro1/p6_initial_explore_detail/experiences/vd0038_explore_vd-ces-2022/vd0038_explore_684x684.jpg?$684_684_PNG$',

    'https://images.samsung.com/is/image/samsung/assets/in/p6_gro1/p6_initial_explore_detail/food-home/da0050-3-hosting-tips-to-alleviate-holiday-stress/da0050_home_explore-banner_pc_684x684.jpg?$684_684_PNG$',

    'https://images.samsung.com/is/image/samsung/assets/in/home/ces2022/global0026_home-explore-zone_pc_684x684.jpg?$684_684_PNG$',

    'https://images.samsung.com/is/image/samsung/assets/in/p6_gro1/p6_initial_explore_detail/200vs100-images/Banner_Desktop_684x684.jpg?$684_684_PNG$'
]


function a(e){
    console.log('a')
    if(e.target.id==0){
        seturl(hovImg[0])
    }else if(e.target.id==1){
        seturl(hovImg[1])
    }else if(e.target.id==2){
        seturl(hovImg[2])
    }else if(e.target.id==3){
        seturl(hovImg[3])
    }else if(e.target.id==4){
        seturl(hovImg[4])
    }
}
    return(<>
        
        <P fontSize={'36px'}  fontf={'SamsungSharpSans'} cur={'pointer'} tdh={'underline'} height={'198px'} width={'98%'}  textAlign = {'center'} marginBottom={'0px'} paddingBottom={'-10px'}  marginTop={'100px'} >Explore #DoWhatYouCant</P>

        <Div   height={'647px'} width={'97%'} display={'flex'} marginLeft = { '1.5%' } marginTop={'40px'} marginBottom={'100px'}>
        
        <Div   height={'647px'} width={'50%'} br={' 30px '} ov={'hidden'}>

        <Img src= { urle } br={'30px'}  height={'647px'} width={'100%'}  />
        
        </Div>
        
        <Div   height={'647px'} width={'45%'}   >
        
        <Div  height={'100px'} marginTop={'3%'} width={'100%'}  display={'flex'} mth={'0px'} mbh={'5%'} th={' 0.2s all ease-in '} ths={'scale(1.1) '} paddingTop={'2%'} bbh={' 2px solid '}  id='1'  onMouseEnter={(e)=>{a(e)}} > 
        
        <P paddingLeft={'20px'}  fontSize={'20px'}   fontf={'SamsungSharpSans'}  >01</P>
        <P paddingLeft={'60px'} fontSize={'20px'}  fontf={'SamsungSharpSans'} >Use Fitness Trackers to Fuel Your Motivation, Not Your Anxiety</P>
        </Div>


        
        <Div  height={'100px'} marginTop={'3%'} width={'100%'}  display={'flex'} mth={'0px'} mbh={'5%'} th={' 0.2s all ease-in '} ths={'scale(1.1) '} paddingTop={'2%'} bbh={' 2px solid '}  id='1'  onMouseEnter={(e)=>{a(e)}} > 
        
        <P paddingLeft={'20px'}  fontSize={'20px'}   fontf={'SamsungSharpSans'} >02</P>
        <P paddingLeft={'60px'} fontSize={'20px'}  fontf={'SamsungSharpSans'} >Everyday sustainability Screens Everywhere, Screens for All </P>
        </Div>


        
        <Div  height={'100px'} marginTop={'3%'} width={'100%'}  display={'flex'} mth={'0px'} mbh={'5%'} th={' 0.2s all ease-in '} ths={'scale(1.1) '} paddingTop={'2%'} bbh={' 2px solid '}  id='2'  onMouseEnter={(e)=>{a(e)}}> 
        
        <P paddingLeft={'20px'}  fontSize={'20px'}  fontf={'SamsungSharpSans'}  >03</P>
        <P paddingLeft={'60px'} fontSize={'20px'}  fontf={'SamsungSharpSans'}  >Keep cool 3 Hosting Tips to Alleviate Holiday Stress</P>
        </Div>


        
        <Div  height={'100px'} marginTop={'3%'} width={'100%'}  display={'flex'} mth={'0px'} mbh={'5%'} th={' 0.2s all ease-in '} ths={'scale(1.1) '} paddingTop={'2%'} bbh={' 2px solid '}   id='3'  onMouseEnter={(e)=>{a(e)}} > 
        
        <P paddingLeft={'20px'}  fontSize={'20px'}  fontf={'SamsungSharpSans'}  >04</P>
        <P paddingLeft={'60px'}  fontSize={'20px'}  fontf={'SamsungSharpSans'} >Samsung CES 2022 Keynote Together for tomorrow at CES 2022 </P>
        </Div>

        <Div  height={'100px'} marginTop={'3%'} width={'100%'}  display={'flex'} mth={'0px'} mbh={'5%'} th={' 0.2s all ease-in '} ths={'scale(1.1) '} paddingTop={'2%'} bbh={' 2px solid '}   id='4'  onMouseEnter={(e)=>{a(e)}} > 
        
        <P paddingLeft={'20px'}  fontSize={'20px'}  fontf={'SamsungSharpSans'}  >05</P>
        <P paddingLeft={'60px'} fontSize={'20px'}  fontf={'SamsungSharpSans'} >India's Festive Season Purchase Latest
        Smartphones</P>
        </Div>
        </Div>
        
        </Div>

        
        </>)
}