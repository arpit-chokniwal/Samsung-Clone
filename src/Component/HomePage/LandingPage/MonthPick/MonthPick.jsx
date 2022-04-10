import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
export const WhatsNew = () => {
  //styled component for Navbar
  const Main = styled.div`
  & > div:nth-child(1) {
    height: 150px;
  }
  & div h1 {
    font-family: SamsungSharpSans;
    font-size: 36px;
    padding: 5%;
  }
  & > div:nth-child(2) {
    height: 700px;
    display: grid;
    grid-template-columns: 50% 25% 25%;
    grid-template-rows: 340px 340px;
    grid-template-areas:
      "a b c"
      "a d e";
  }
  & div:nth-child(2) div {
    background-color: #f1f1f1;
    border-radius: 20px;
  }
  & #mainbox {
    grid-area: a;
    margin: 2%;
  }
  & .box1 {
    grid-area: b;
    margin: 4%;
    overflow: hidden;
    cursor: pointer;
  }
  & .box1:hover > button {
    top: -10%;
  }
  & .box1:hover > #forhover {
    top: -5%;
  }
  & .box1:hover > img {
    transform: scale(1.1);
    transition: all .5s ease-out;
  }
  & .box1:hover > p:nth-child(8) {
    top: 100%;
    position: relative;
    transition: all 0.5s ease-out;
  }
  & .box1 > p:nth-child(7) {
    font-family: samsung700;
    font-size: 17px;
  }
  & .box1 > p:nth-child(8) {
    font-size: 12px;
    font-family: samsung400;
    top: 0;
  }
  & .box1 button {
    top: 100%;
    font-family: samsung400;
    position: relative;
    transition: all 0.5s ease-out;
    height: 35px;
    width: 100px;
    background-color: black;
    border-radius: 20px;
    border: transparent;
    color: white;
    font-weight: 700;
    font-size: 13px;
    margin-left: 15px;
  }
  & Button:hover {
    opacity: 75%;
  }
  & #subBox1 {
    grid-area: c;
    margin: 4%;
  }
  & #subBox2 {
    grid-area: d;
    margin: 4%;
  }
  & #subBox3 {
    grid-area: e;
    margin: 4%;
  }
`;
 const SubMain = styled(Carousel)`
 & .carousel-indicators {
    bottom: 680px;
}

    & .carousel-control-prev-icon,
    .carousel-control-next-icon {
      display:none;
    }
    & .carousel-indicators > Button {
        
            
      width: 5%;
      background-color: black;
      height: 2px;
    }
  `;
  
  return (<>
      <div style={{
        height:'100px'
    }}></div>
    <div>
        <SubMain>



            <Carousel.Item>
        
                <Main>
                    <div>              
                    </div>
                    <div>
                    <div className="box1" id="mainbox">
                    <span
                    className="w3-badge w3-blue"
                        style={{
                            borderRadius: "15px",
                            fontSize: "12px",
                            float: "left",
                            marginLeft: "5%",
                            marginTop: "5%",
                        }}
                        >
                        </span>
                        <br />
                        <br />
                        <img
                        
                        src="https://images.samsung.com/is/image/samsung/assets/in/Freestyle_684x684.jpg?$684_684_JPG$"
                        alt="png"
                        style={{marginTop:"4.5%", marginLeft:"3%",height:'450px',width:'576px'}}
                        />
                        <br />
                        <br />
                        <p style={{fontSize:"30px",textAlign:'center',}}>The Freestyle</p>
                        <p style={{fontSize:"14px", textAlign:'center'}}>Just launched.</p>
                        <button id="forhover" >Learn more</button>
                    </div>
                    <div className="box1">
                        <span
                        class="w3-badge w3-blue"
                        style={{
                            borderRadius: "15px",
                            fontSize: "12px",
                            float: "left",
                            marginLeft: "5%",
                            marginTop: "5%",
                        }}
                        >
                        New
                        </span>
                        <br />
                        <br />
                        <img
                        src="https://images.samsung.com/is/image/samsung/assets/in/Frame_smalltile_160x160_PNG-2.png?$160_160_PNG$"
                        alt="png"
                        />
                        <br />
                        <br />
                        <p>The Frame Starting at ₹58990*</p>
                        <p style={{textAlign:'center'}}>Just launched.</p>
                        <button>Learn more</button>
                    </div>


                    <div className="box1" id="subBox1">
                        <span
                        className="w3-badge w3-blue"
                        style={{
                            backgroundColor:'red',
                            borderRadius: "15px",
                            fontSize: "12px",
                            float: "left",
                            marginLeft: "5%",
                            marginTop: "5%",
                        }}
                        >
                        New
                        </span><br /><br />
                        <img
                        src="https://images.samsung.com/is/image/samsung/assets/in/UHD-4K_160x160.png?$160_160_PNG$"
                        alt="png"
                        
                        />
                        <br />
                        <br />
                        <p style={{
                           textAlign:'center'
                        }}>1m 08cm (43") Crystal 4K UHD</p>
                        <p style={{textAlign:'center'}}>Just launched.</p>
                        <button >Learn more</button>
                    </div>
                    <div className="box1" id="subBox2">
                    <span
                    className="w3-badge w3-blue"
                        style={{
                            borderRadius: "15px",
                            fontSize: "12px",
                            float: "left",
                            marginLeft: "5%",
                            marginTop: "5%",
                        }}
                        >
                        New
                        </span><br /><br />
                        <img
                        src="https://images.samsung.com/is/image/samsung/assets/in/Neo_QLED_4K_160.jpg?$160_160_JPG$"
                        alt="png"
                        
                        />
                        <br />
                        <br />
                        <p style={{
                            textAlign:'center'
                        }}>Neo QLED 4K Starting160990*</p>
                        <p style={{textAlign:'center'}}>Just launched.</p>
                        <button >Learn more</button>
                    </div>
                    <div className="box1" id="subBox3">
                    <span
                    className="w3-badge w3-blue"
                        style={{
                            borderRadius: "15px",
                            fontSize: "12px",
                            float: "left",
                            marginLeft: "5%",
                            marginTop: "5%",
                        }}
                        >
                        New
                        </span><br /><br />
                        <img
                        src="https://images.samsung.com/is/image/samsung/assets/in/home/160x160_TV.png?$160_160_PNG$"
                        alt="png"
                        
                        />
                        <br />
                        <br />
                        <p style={{
                           textAlign:'center'
                        }}>Crystal 4KUHD
                        Starting T51990*</p>
                        <p style={{textAlign:'center'}}>Just launched.</p>
                        <button >Learn more</button>
                    </div>
                    </div>
                </Main>
            
            </Carousel.Item>


            <Carousel.Item>
        
            <Main>
                <div>              
                </div>
                <div>
                <div className="box1" id="mainbox" style={{
                    backgroundColor:'#FFFEFE'
                }}>
                <span
                className="w3-badge w3-blue"
                    style={{
                        borderRadius: "15px",
                        fontSize: "12px",
                        float: "left",
                        marginLeft: "5%",
                        marginTop: "5%",
                    }}
                    >New
                    </span>
                    <br />
                    <br />
                    <img
                    
                    src="https://images.samsung.com/is/image/samsung/assets/in/home/Tab-S8-Bigtile-684x684-0221.png?$684_684_PNG$"
                    alt="png"
                    style={{height:'85%',width:'100%'}}
                    />
                    <br />
                    <br />
                    <button id="forhover">Learn more</button>
                </div>
                <div className="box1">
                    <span
                    class="w3-badge w3-blue"
                    style={{
                        borderRadius: "15px",
                        fontSize: "12px",
                        float: "left",
                        marginLeft: "5%",
                        marginTop: "5%",
                    }}
                    >
                    New
                    </span>
                    <br />
                    <br />
                    <img
                    src="https://images.samsung.com/is/image/samsung/assets/in/home/A7_160x160.png?$160_160_PNG$"
                    alt="png"
                    
                    />
                    <br />
                    <br />
                    <p style={{textAlign:'center'}}>Galaxy Tab A7 Lite Lowest prices ever</p>
                    <p style={{textAlign:'center'}}>Just launched.</p>
                    <button >Learn more</button>
                </div>


                <div className="box1" id="subBox1">
                    <span
                    className="w3-badge w3-blue"
                    style={{
                        backgroundColor:'red',
                        borderRadius: "15px",
                        fontSize: "12px",
                        float: "left",
                        marginLeft: "5%",
                        marginTop: "5%",
                    }}
                    >
                    New
                    </span><br /><br />
                    <img
                    src="https://images.samsung.com/is/image/samsung/assets/in/home/Tab-A8_Smalltile_160X160.png?$160_160_PNG$"
                    alt="png"
                   
                    />
                    <br />
                    <br />
                    <p style={{
                       textAlign:'center'
                    }}>Galaxy Tab A8 Never before price</p>
                    <p style={{textAlign:'center'}}>Just launched.</p>
                    <button>Learn more</button>
                </div>
                <div className="box1" id="subBox2">
                <span
                className="w3-badge w3-blue"
                    style={{
                        borderRadius: "15px",
                        fontSize: "12px",
                        float: "left",
                        marginLeft: "5%",
                        marginTop: "5%",
                    }}
                    >
                    New
                    </span><br /><br />
                    <img
                    src="https://images.samsung.com/is/image/samsung/assets/in/home/160x160_Tab_S6_Lite.png?$160_160_PNG$"
                    alt="png"
                   
                    />
                    <br />
                    <br />
                    <p style={{
                        textAlign:'center'
                    }}>Galaxy Tab S6 Lite
                    Starting T27999*</p>
                    <p style={{textAlign:'center'}}>Just launched.</p>
                    <button>Learn more</button>
                </div>
                <div className="box1" id="subBox3">
                <span
                className="w3-badge w3-blue"
                    style={{
                        borderRadius: "15px",
                        fontSize: "12px",
                        float: "left",
                        marginLeft: "5%",
                        marginTop: "5%",
                    }}
                    >
                    New
                    </span><br /><br />
                    <img
                    src="https://images.samsung.com/is/image/samsung/assets/in/TabS7FE-Small-tile-160x160.png?$160_160_PNG$"
                    alt="png"
                    
                    />
                    <br />
                    <br />
                    <p style={{
                       textAlign:'center'
                    }}>Galaxy Tab S7 FE Starting T 34999*</p>
                    <p style={{textAlign:'center'}}>Just launched.</p>
                    <button>Learn more</button>
                </div>
                </div>
            </Main>
        
        </Carousel.Item>


        
        <Carousel.Item >
        
                <Main>
                    <div>              
                    </div>
                    <div>
                    <div className="box1" id="mainbox" style={{
                        backgroundColor:'#c2c3cc'
                    }}>
                    <span
                    className="w3-badge w3-blue"
                        style={{
                            borderRadius: "15px",
                            fontSize: "12px",
                            float: "left",
                            marginLeft: "5%",
                            marginTop: "5%",
                        }}
                        >
                        </span>
                        <br />
                        <br />
                        <img
                        
                        src="https://images.samsung.com/is/image/samsung/assets/in/CE_684x684.jpg?$684_684_JPG$"
                        alt="png"
                        style={{height:'85%',width:'100%'}}
                        />
                        <br />
                        <br />
                        <button id="forhover">Learn more</button>
                    </div>
                    <div className="box1">
                        <span
                        class="w3-badge w3-blue"
                        style={{
                            borderRadius: "15px",
                            fontSize: "12px",
                            float: "left",
                            marginLeft: "5%",
                            marginTop: "5%",
                        }}
                        >
                        New
                        </span>
                        <br />
                        <br />
                        <img
                        src="https://images.samsung.com/is/image/samsung/assets/in/Smalltile_Dishwasher_160x160.png?$160_160_PNG$"
                        alt="png"
                        
                        />
                        <br />
                        <br />
                        <p style={{textAlign:'center'}}>Intensive Dishwasher Starting T 35990*</p>
                        <p style={{textAlign:'center'}}>Just launched.</p>
                        <button >Learn more</button>
                    </div>


                    <div className="box1" id="subBox1">
                        <span
                        className="w3-badge w3-blue"
                        style={{
                            backgroundColor:'red',
                            borderRadius: "15px",
                            fontSize: "12px",
                            float: "left",
                            marginLeft: "5%",
                            marginTop: "5%",
                        }}
                        >
                        New
                        </span><br /><br />
                        <img
                        src="https://images.samsung.com/is/image/samsung/assets/in/AIEcobubble_SmallTile_160x160copy.png?$160_160_PNG$"
                        alt="png"
                        
                        />
                        <br />
                        <br />
                        <p style={{
                           textAlign:'center'
                        }}>AI EcOBubble Starting 34390*</p>
                        <p style={{textAlign:'center'}}>Just launched.</p>
                        <button >Learn more</button>
                    </div>
                    <div className="box1" id="subBox2">
                    <span
                    className="w3-badge w3-blue"
                        style={{
                            borderRadius: "15px",
                            fontSize: "12px",
                            float: "left",
                            marginLeft: "5%",
                            marginTop: "5%",
                        }}
                        >
                        New
                        </span><br /><br />
                        <img
                        src="https://images.samsung.com/is/image/samsung/assets/in/WA70T4262BS_160x160.png?$160_160_PNG$"
                        alt="png"
                        
                        />
                        <br />
                        <br />
                        <p style={{
                            textAlign:'center'
                        }}>Wobble Technology StartingT 20600*</p>
                        <p style={{textAlign:'center'}}>Just launched.</p>
                        <button >Learn more</button>
                    </div>
                    <div className="box1" id="subBox3">
                    <span
                    className="w3-badge w3-blue"
                        style={{
                            borderRadius: "15px",
                            fontSize: "12px",
                            float: "left",
                            marginLeft: "5%",
                            marginTop: "5%",
                        }}
                        >
                        New
                        </span><br /><br />
                        <img
                        src="https://images.samsung.com/is/image/samsung/assets/in/wind-free-ac_160x160.png?$160_160_PNG$"
                        alt="png"
                        
                        />
                        <br />
                        <br />
                        <p style={{
                           textAlign:'center'
                        }}>Cool. No Wind. WindFreeTM</p>
                        <p style={{textAlign:'center'}}>Just launched.</p>
                        <button >Learn more</button>
                    </div>
                    </div>
                </Main>
            
            </Carousel.Item>

                        

            <Carousel.Item >
            <Main>
            <div>
            </div>
            <div>
              <div className="box1" id="mainbox">
              <span
                  class="w3-badge w3-blue"
                  style={{
                    borderRadius: "15px",
                    fontSize: "12px",
                    float: "left",
                    marginLeft: "5%",
                    marginTop: "5%",
                  }}
                >
                </span>
                <br />
                <br />
                <img
                  src="https://images.samsung.com/is/image/samsung/assets/in/2202/pcd/smp/PCD_B_KV_Merchandising_376x376_.png?$376_376_PNG$"
                  alt="png"
                  style={{marginTop:"10%", marginLeft:"10%" }}
                />
                <br />
                <br />
                <p style={{fontSize:"23px",marginTop:"2%" ,textAlign:'center'}}>Galaxy S22 Ultra</p>
                <p style={{fontSize:"14px",textAlign:'center'}}>Just launched.</p>
                <button id="forhover">Learn more</button>
              </div>
              <div className="box1">
                <span
                  class="w3-badge w3-blue"
                  style={{
                    borderRadius: "15px",
                    fontSize: "12px",
                    float: "left",
                    marginLeft: "5%",
                    marginTop: "5%",
                  }}
                >
                  New
                </span>
                <br />
                <br />
                <img
                  src="https://images.samsung.com/is/image/samsung/assets/in/2202/pcd/smp/PCD_RG_KV_Merchandising_160X160_pc.png?$160_160_PNG$"
                  alt="png"
                />
                <br />
                <br />
                <p>Galaxy S22 | S22+</p>
                <p>Just launched.</p>
                <button>Learn more</button>
              </div>
              <div className="box1" id="subBox1">
                <span
                  class="w3-badge w3-blue"
                  style={{
                    borderRadius: "15px",
                    fontSize: "12px",
                    float: "left",
                    marginLeft: "5%",
                    marginTop: "5%",
                  }}
                >
                  New
                </span><br /><br />
                <img
                  src="https://images.samsung.com/is/image/samsung/assets/in/2203/pcd/PCD_Product-Tile_PC_160X160.png?$160_160_PNG$"
                  alt="png"
                />
                <br />
                <br />
                <p>Galaxy A53 5G</p>
                <p>.</p>
                <button>Learn more</button>
              </div>
              <div className="box1" id="subBox2">
              <span
                  class="w3-badge w3-blue"
                  style={{
                    borderRadius: "15px",
                    fontSize: "12px",
                    float: "left",
                    marginLeft: "5%",
                    marginTop: "5%",
                  }}
                >
                  New
                </span><br /><br />
                <img
                  src="https://images.samsung.com/is/image/samsung/assets/in/2202/pcd/smp/Q2_KV_Merchandising_160X160.png?$160_160_PNG$"
                  alt="png"
                />
                <br />
                <br />
                <p>Galaxy Z Fold3 5G</p>
                <p>.</p>
                <button>Learn more</button>
              </div>
              <div className="box1" id="subBox3">
              <span
                  class="w3-badge w3-blue"
                  style={{
                    borderRadius: "15px",
                    fontSize: "12px",
                    float: "left",
                    marginLeft: "5%",
                    marginTop: "5%",
                  }}
                >
                  New
                </span><br /><br />
                <img
                  src="https://images.samsung.com/is/image/samsung/assets/in/2108/pcd/smp/pc/PCD_B2_KV_Merchandising_160X160.png?$160_160_PNG$"
                  alt="png"
                />
                <br />
                <br />
                <p>Galaxy Z Flip3 5G</p>
                <p>.</p>
                <button>Learn more</button>
              </div>
            </div>
          </Main>
            </Carousel.Item>

            {/* <Carousel.Item >
        
            <Main>
                <div>              
                </div>
                <div>
                <div style={{
                    backgroundColor:'#0079CF'    
                }}
                 className="box1" id="mainbox">
                <span
                className="w3-badge w3-blue"
                    style={{
                        borderRadius: "15px",
                        fontSize: "12px",
                        float: "left",
                        marginTop: "5%",
                    }}
                    >
                    
                    </span>
                    <br />
                    <br />
                    <img
                    
                    src="https://images.samsung.com/is/image/samsung/assets/in/11286_BlueFest_Banner_684x684_0323.jpg?$684_684_JPG$"
                    alt="png"
                    style={{marginTop:"4.5%", marginLeft:"3%",height:'450px',width:'576px'}}
                    />
                    <br />
                    <br />
                    <button id="forhover" style={{marginTop:'10%'}}>Learn more</button>
                </div>

                
                <div className="box1" style={{
                    backgroundColor:'#E7E3E0'
                }}>
                    <span
                    class="w3-badge w3-blue"
                    style={{
                        borderRadius: "15px",
                        fontSize: "12px",
                        float: "left",
                        marginLeft: "5%",
                        marginTop: "5%",
                    }}
                    >
                    New
                    </span>
                    <br />
                    <br />
                    <img
                    src="https://images.samsung.com/is/image/samsung/assets/in/330x330-Flip3-Smalltile.jpg?$330_330_JPG$"
                    style={{height:'150px',width:'90%'}}
                    alt="png"
                    />
                    <br />
                    <br />
                    <p style={{
                        marginLeft:'10%', marginTop:'5%'
                    }}>The Frame Starting at ₹58990*</p>
                    <p style={{textAlign:'center'}}>Just launched.</p>
                    <button >Learn more</button>
                </div>


                <div className="box1" style={{
                    backgroundColor:'#C0BCB9'
                }} id="subBox1">
                    <span
                    className="w3-badge w3-blue"
                    style={{
                        backgroundColor:'red',
                        borderRadius: "15px",
                        fontSize: "12px",
                        float: "left",
                        marginLeft: "5%",
                        marginTop: "5%",
                    }}
                    >
                    New
                    </span><br /><br />
                    
                    <img
                    src="https://images.samsung.com/is/image/samsung/assets/in/GB2-prebook-smalltile-330x330.jpg?$330_330_JPG$"
                    style={ { marginLeft:'15px' ,height:'150px',width:'90%'}}
                    alt="png"
                    />
                  
                    <br />
                    <br />
                    <p style={{
                        textAlign:'center', marginTop:'5%',color:'white'
                    }}>Galaxy Book2 Series</p>
                    <p style={{textAlign:'center'}}>Just launched.</p>
                    <button >Learn more</button>
                </div>

                
                <div className="box1" id="subBox2" style={{
                    backgroundColor:'#E1E1DF'
                }}>
                <span
                className="w3-badge w3-blue"
                    style={{
                        borderRadius: "15px",
                        fontSize: "12px",
                        float: "left",
                        marginLeft: "5%",
                        marginTop: "5%",
                    }}
                    >
                    New
                    </span><br /><br />
                    <img
                    src="https://images.samsung.com/is/image/samsung/assets/in/A23-330x330_SmallTile.jpg?$330_330_JPG$"
                    style={ { marginLeft:'22%' ,marginTop:'-10px'  ,height:'300px',width:'50%'}}
                    alt="png"
                    />
                    <br />
                    <br />
                    <p style={{
                        textAlign:'center',marginTop:'-50%'  
                    }}>Galaxy A23</p>
                    <p style={{textAlign:'center'}}>Just launched.</p>
                    <button >Learn more</button>
                </div>



                <div className="box1" id="subBox3" style={{backgroundColor:'#FFFFFF'}}>
                <span
                className="w3-badge w3-blue"
                    style={{
                        borderRadius: "15px",
                        fontSize: "12px",
                        float: "left",
                        marginLeft: "5%",
                        marginTop: "5%",
                    }}
                    >
                    New
                    </span><br /><br />
                    <img
                    src="https://images.samsung.com/is/image/samsung/assets/in/CC-330x330-1.jpg?$330_330_JPG$"
                    style={ { marginLeft:'22%' ,marginTop:'-10px'  ,height:'300px',width:'50%'}}
                    alt="png"
                    />
                    <br />
                    <br />
                    <p style={{
                        textAlign:'center',marginTop:'-50%'  
                    }}>Exclusive corporate<br/> offers</p>
                    <p style={{textAlign:'center'}}>Just launched.</p>
                    <button>Learn more</button>
                </div>
                </div>
            </Main>
        
        </Carousel.Item>
         */}
        </SubMain>
    </div>
    </> 
  );
};