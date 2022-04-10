import { Div, P, Input } from "../../Style/Style"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export const Semifooter = () =>{

    return(<>
        {/** Heading Text */}
        <P textAlign = {'center'} fontSize={'36px'} lineHeight={'43px'} marginBottom={'0px'} fontf={'SamsungSharpSans'}> Looking for something else? </P>
        
        
        {/** Keyword Box */}
        <Div height={'198px'} width={'98%'} textAlign={'center'} dispaly={'flex'}>

        {/** Input Box*/}

        <Div height={'47px'} width={'31%'}  b={' 1px solid #acacac'} textAlign={'center'} marginLeft={'460px'} marginTop={'20px'} br={'20px'} display={'flex'} bc={'#f7f7f7'} >
        
        <Div height={'70%'} width={'10%'} marginTop={'7px'} >
        <SearchOutlinedIcon fontSize="large"/>
        
        </Div>
        
        
        <Div height={'70%'} width={'70%'}  marginTop={'6px'}   marginRight={'30px'}  >
        <Input height={'85%'} width={'100%'} margin={"auto"} textAlign={'left'} placeholder={'Search Keyword'}   b={' 1px dotted transparent'} fontSize={'x-large'} bc={'transparent'}/>
        </Div>
        </Div>
        
        {/** Text Box */}
         

         <Div height={'37px'} br={'22px'} width={'40%'} display={'flex'}  marginLeft={'400px'} marginTop={'10px'}  >
         
           <Div  height={'30px'} width={'110px'} br={'22px'}   cur={'pointer'}  b={' 1px solid #f3f3f3'}><P fontSize={'12px'} marginTop={'6px'} fontf={"samsung400"} >Galaxy S22 Ultra</P></Div>
           <Div  height={'30px'} width={'110px'} br={'22px'} cur={'pointer'}  b={' 1px solid #f3f3f3'}><P fontSize={'12px'} marginTop={'6px'}   fontf={"samsung400"} >Galaxy Note20</P></Div>
           <Div  height={'30px'} width={'110px'} br={'22px'}  cur={'pointer'} b={' 1px solid #f3f3f3'}><P fontSize={'12px'} marginTop={'6px'}  fontf={"samsung400"} >OLED 8K</P></Div>
           <Div  height={'30px'} width={'110px'}  br={'22px'} cur={'pointer'}  b={' 1px solid #f3f3f3'}><P fontSize={'12px'} marginTop={'6px'}  fontf={"samsung400"} >UHD TVs</P></Div>
           <Div  height={'30px'} width={'110px'}  br={'22px'} cur={'pointer'}  b={' 1px solid #f3f3f3'}><P fontSize={'12px'} marginTop={'6px'}  fontf={"samsung400"} >Eco Bubble</P></Div>
         </Div>

         <Div height={'37px'} br={'22px'} width={'40%'} display={'flex'}  marginLeft={'400px'} marginTop={'10px'}  >
         
         <Div cur={'pointer'}  height={'30px'} width={'110px'} marginLeft={'150px'}  br={'22px'}  b={' 1px solid #f3f3f3'}><P fontSize={'12px'} marginTop={'6px'}fontf={"samsung400"}>Galaxy S22 Ultra</P></Div>
         <Div cur={'pointer'}  height={'30px'} width={'110px'} br={'22px'} marginRight={'150px'}  b={' 1px solid #f3f3f3'}><P fontSize={'12px'} marginTop={'6px'}   fontf={"samsung400"}>Galaxy Note20</P></Div>
       </Div>


        </Div>

        {/** Lower Text */}
        <Div height={'393px'} width={'100%'} >
        
        <P textAlign={'left'} paddingLeft={'70px'} fontSize={'13px'} lineHeight={'15px'}>*Image simulated for illustrative purpose. </P>
        
        <P textAlign={'left'} paddingLeft={'70px'} fontSize={'13px'} lineHeight={'15px'}>**Color and model availability may vary depending on country or carrier. </P>
        
        <P textAlign={'left'} paddingLeft={'70px'} fontSize={'13px'} lineHeight={'15px'}>***Galaxy A53 5G is rated as IP67. Based on test conditions for submersion in up to 1 meter of fresh water for up to 30 minutes. Safe against low water pressure only. </P>
        
        <P textAlign={'left'} paddingLeft={'70px'} fontSize={'13px'} lineHeight={'15px'}>*Image simulated for illustrative purpose.  </P>
        
        <P textAlign={'left'} paddingLeft={'70px'} fontSize={'13px'} lineHeight={'15px'}>**Color and model availability may vary depending on country or carrier. </P>
        
        <P textAlign={'left'} paddingLeft={'70px'} fontSize={'13px'} lineHeight={'15px'}>***Galaxy A53 5G is rated as IP67. Based on test conditions for submersion in up to 1 meter of fresh water for up to 30 minutes. Safe against low water pressure only. </P>
        
        <P textAlign={'left'} paddingLeft={'70px'} fontSize={'13px'} lineHeight={'15px'}>* Features Galaxy S22+
        </P>
        
        <P textAlign={'left'} paddingLeft={'70px'} fontSize={'13px'} lineHeight={'15px'}>*Image simulated. Color availability may vary depending on country or carrier. </P>
        
        <P textAlign={'left'} paddingLeft={'70px'} fontSize={'13px'} lineHeight={'15px'}>*Images shown here are for representational purpose only, actual may vary. All features, specifications and prices are subject to change without prior notice. Model availability may vary from location to location. </P>
        
        
        <P textAlign={'left'} paddingLeft={'70px'} fontSize={'13px'} lineHeight={'15px'}>*Image of Galaxy Z Fold3 5G, Galaxy Z Flip3 5G and S Pen Fold Edition simulated for illustration purposes.
        </P>
        
        <P textAlign={'left'} paddingLeft={'70px'} fontSize={'13px'} lineHeight={'15px'}>*The S pen Fold Edition sold separately and is only compatible with Galaxy Z Fold3 5G.
        </P>
        
        <P textAlign={'left'} paddingLeft={'70px'} fontSize={'13px'} lineHeight={'15px'}>*Image of two Galaxy Z Fold3 5G phones and S Pen Fold Edition simulated for illustration purposes.
        </P>
        
        <P textAlign={'left'} paddingLeft={'70px'} fontSize={'13px'} lineHeight={'15px'}>*5G Devices are 5G ready, connectivity dependent on network availability.
        </P>
        
        </Div>
        
        </>)
}