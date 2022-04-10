import styled from 'styled-components'

export const NavDiv = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
height: 70px;
margin-bottom:5px;
`
export const Div = styled.div`
    height: ${({height})=>height};
    width: ${({width})=>width};
    border:  ${({b})=>b};
    border-bottom:  ${({bb})=>bb};
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
    justify-content: space-around;
    display: ${({display})=>display};  
    background-color: ${({bc})=>bc};
    border-radius: ${({br})=>br};
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

export const P = styled.p`
    font-weight : ${({fontWeight})=>fontWeight};
    margin-bottom: ${({marginBottom})=>marginBottom}; 
    font-size: ${({fontSize})=>fontSize};
    margin-left: ${({marginLeft})=>marginLeft}; 
    margin-right: ${({marginRight})=>marginRight}; 
    margin-top: ${({marginTop})=>marginTop}; 
    margin: ${({margin})=>margin}; 
    padding-top: ${({paddingTop})=>paddingTop};
    padding-left: ${({paddingLeft})=>paddingLeft};
    padding: ${({padding})=>padding};
    text-align:  ${({textAlign})=>textAlign};
    line-height: ${({lineHeight})=>lineHeight};
    display: ${({display})=>display};  
    text-decoration: ${({td})=>td};
    color: ${({color})=>color};
    background-color: ${({bc})=>bc};
    border-radius: ${({br})=>br};
    font-family: ${({fontf})=>fontf};
    &:hover{
        background-color: ${({bch})=>bch};
        color: ${({ch})=>ch};
        border-radius: ${({brh})=>brh};
        padding: ${({ph})=>ph};
        cursor:  ${({cur})=>cur};   
        text-decoration: ${({tdh})=>tdh}; 
    }
`

export const TextDiv = styled.div`
border: 1px solid blue;
height: ${({height})=>height};
padding-top:${({paddingTop})=>paddingTop};
width: ${({width})=>width};
margin-left: ${({marginLeft})=>marginLeft}; 
border-radius: 40%;
margin-right: ${({marginRight})=>marginRight}; 
text-align:  ${({textAlign})=>textAlign};
margin-top: ${({marginTop})=>marginTop}; 
font-family: ${({fontf})=>fontf};
`

export const Input = styled.input`
height: ${({height})=>height};
width: ${({width})=>width};
border:  ${({b})=>b};
border-bottom:  ${({bb})=>bb};
border-left : ${({bl})=>bl};
margin-left: ${({marginLeft})=>marginLeft}; 
margin-right: ${({marginRight})=>marginRight}; 
margin-bottom: ${({marginBottom})=>marginBottom}; 
margin: ${({margin})=>margin}; 
margin-top: ${({marginTop})=>marginTop}; 
padding-top: ${({paddingTop})=>paddingTop};
padding-left: ${({paddingLeft})=>paddingLeft};
background-color: ${({bc})=>bc};
text-align:  ${({textAlign})=>textAlign};
justify-content: space-around;
display: ${({display})=>display};  
font-family: ${({fontf})=>fontf};
border-radius: ${({br})=>br};
`


export const Img = styled.img`
padding-top:${({paddingTop})=>paddingTop};
height: ${({height})=>height};
width: ${({width})=>width};
font-weight : ${({fontWeight})=>fontWeight};
margin-bottom: ${({marginBottom})=>marginBottom}; 
font-size: ${({fontSize})=>fontSize};
margin-left: ${({marginLeft})=>marginLeft}; 
margin-right: ${({marginRight})=>marginRight}; 
margin-top: ${({marginTop})=>marginTop}; 
padding-top: ${({paddingTop})=>paddingTop};
padding-left: ${({paddingLeft})=>paddingLeft};
text-align:  ${({textAlign})=>textAlign};
line-height: ${({lineHeight})=>lineHeight};
display: ${({display})=>display};  
text-decoration: ${({td})=>td};
color: ${({color})=>color};
background-color: ${({bc})=>bc};
border-radius: ${({br})=>br};
font-family: ${({fontf})=>fontf};
&:hover{
    background-color: ${({bch})=>bch};
    color: ${({ch})=>ch};
    border-radius: ${({brh})=>brh};
    height: ${({heighth})=>heighth};
    width: ${({widthh})=>widthh};
    padding: ${({ph})=>ph};
    cursor:  ${({cur})=>cur};   
    text-decoration: ${({tdh})=>tdh}; 
    margin:${({mth})=>mth}; 
    padding:${({pth})=>pth}; 
    transition: 0.5s all ease-in;
    transform: scale(1.1);
    cursor: pointer;

}
`

export const Button = styled.button`
height: ${({height})=>height};
width: ${({width})=>width};
border:  ${({b})=>b};
border-bottom:  ${({bb})=>bb};
border-left : ${({bl})=>bl};
margin-left: ${({marginLeft})=>marginLeft}; 
margin-right: ${({marginRight})=>marginRight}; 
margin-bottom: ${({marginBottom})=>marginBottom}; 
margin-top: ${({marginTop})=>marginTop}; 
padding-top: ${({paddingTop})=>paddingTop};
padding-left: ${({paddingLeft})=>paddingLeft};
padding: ${({padding})=>padding};
text-align:  ${({textAlign})=>textAlign};
justify-content: space-around;
display: ${({display})=>display};  
font-family: ${({fontf})=>fontf};
background-color: ${({bc})=>bc};
color: ${({c})=>c};
border-radius: ${({br})=>br};
position: ${({pos})=>pos};
z-index:  ${({z})=>z};
overflow:  ${({ov})=>ov};
`