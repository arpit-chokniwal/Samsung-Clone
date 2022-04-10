import styled from "styled-components";
import { Footer } from "../HomePage/LandingPage/Footer/Footer";
import { NavBar } from "../HomePage/LandingPage/NavBar/NavBar";

export const Overview = () => {
  return (
    <div>
      <NavBar/>
      <Top>
        <h3>Dishwashers</h3>
        <Btm>
          <a href="#go1">
            <h6 style={{ color: "white" }}>Overview</h6>
          </a>
          <a href="#go">
            {" "}
            <h6 style={{ color: "white" }}>Features</h6>
          </a>

          <button
            style={{
              color: "white",
              backgroundColor: "#006bea",
              width: "150px",
              height: "40px",
              marginLeft: "1000px",
              marginTop: "-20px",
            }}
          >
            Request Callback
          </button>
          <button
            style={{
              color: "white",
              backgroundColor: "#006bea",
              width: "150px",
              height: "40px",
              marginTop: "-20px",
            }}
          >
            Buy Now
          </button>
        </Btm>
      </Top>

      <Title id="go1">
        <img src="https://images.samsung.com/is/image/samsung/assets/in/microsite/dishwashers/bnr-d01.jpg?$ORIGIN_JPG$" />
      </Title>
      <Para>
        <p>
          Indian cooking meets its match! The new IntensiveWash™ Dishwasher has
          been designed to effectively clean stubborn oil, grease, masala and
          other food stains. From your finest crockery to everyday utensils, now
          get every dish sparkling clean and germ-free, easily.
        </p>
      </Para>
      <Key id="go">
        <h2>4 key features of the new IntensiveWash™ Dishwasher</h2>
      </Key>
      <Image>
        <div>
          <img src="https://images.samsung.com/is/image/samsung/assets/in/microsite/dishwashers/triple-raines-icon.jpg?$ORIGIN_JPG$" />
          <h2>Triple Rinse</h2>
          <h2>Effectively removes grease, oil and masala stains.</h2>
        </div>
        <div>
          <img src="https://images.samsung.com/is/image/samsung/assets/in/microsite/dishwashers/stainless-steel-icon.jpg?$ORIGIN_JPG$" />
          <h2>Stainless Steel Tub</h2>
          <h2>Durable, hygienic and easy to maintain.</h2>
        </div>
        <div>
          <img src="https://images.samsung.com/is/image/samsung/assets/in/microsite/dishwashers/auto-release-icon.jpg?$ORIGIN_JPG$" />
          <h2>Auto ReleaseTM Drying</h2>

          <h2>Automatically opens the door, accelerating drying time.</h2>
        </div>
        <div>
          <img src="https://images.samsung.com/is/image/samsung/assets/in/microsite/dishwashers/hygienic-rinsing-icon.jpg?$ORIGIN_JPG$" />
          <h2>Hygienic Rinsing</h2>
          <h2>Eliminates up to 99.9%* food bacteria with hot water (70°C)</h2>
        </div>
      </Image>
      <Head>
        <h1>IntensiveWash™ (70°C)* with Triple Rinse</h1>
        <p>
          Three separate rinse cycles effectively remove every stain from
          heavily soiled dishes. An extra hot water rinse cycle ensures
          sparkling, hygienically clean dishes.
        </p>
      </Head>
      <div>
        <video loop autoPlay muted width="95%">
          <source
            src="https://stg-images.samsung.com/is/content/samsung/assets/in/microsite/dishwashers/intensive-vid.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <Head1>
        <h3>3-Level Wash Arms</h3>
        <h3>Stainless Steel Tub</h3>
        <h3>AutoRelease™ Drying</h3>
        <h3>Hygienic Rinsing</h3>
      </Head1>

      <Image1>
        <div>
          <img src="https://images.samsung.com/is/image/samsung/assets/in/microsite/dishwashers/3-level-wash-icon.jpg?$ORIGIN_JPG$" />
          <p>
            Additional water pressure from three distinct levels of wash arms
            cleans every corner of every dish perfectly.
          </p>
        </div>
        <div>
          <img src="https://images.samsung.com/is/image/samsung/assets/in/microsite/dishwashers/steel-tab-icon.jpg?$ORIGIN_JPG$" />
          <p>
            Easily kept hygienically clean, the stainless steel tub withstands
            high temperatures and prevents build-up of malodours.
          </p>
        </div>
        <div>
          <img src="https://images.samsung.com/is/image/samsung/assets/in/microsite/dishwashers/sec4-auto-release-icon.jpg?$ORIGIN_JPG$" />
          <p>
            Ensures spotless and faster drying. Door automatically opens 10cm
            allowing steam to escape.
          </p>
        </div>
        <div>
          <img src="https://images.samsung.com/is/image/samsung/assets/in/microsite/dishwashers/sec4-hygine-icon.jpg?$ORIGIN_JPG$" />
          <p>
            Extends the final rinse and increases the water temperature to 70˚C
            for deeper cleaning, killing up to 99.9% * food bacteria**.
          </p>
        </div>
      </Image1>

      <Head2>
        <h3>Height Adjustment</h3>
        <h3>44 dB Whisper-quiet Operations</h3>
        <h3>Fingerprint Resistant Finish</h3>
        <h3>Wide LED Display</h3>
      </Head2>

      <Image2>
        <div>
          <img src="https://images.samsung.com/is/image/samsung/assets/in/microsite/dishwashers/hieght-adjust-icon.jpg?$ORIGIN_JPG$" />
          <p>
            By moving the upper rack you can create more space in the lower rack
            to easily fit utensils of all sizes.
          </p>
        </div>
        <div>
          <img src="https://images.samsung.com/is/image/samsung/assets/in/microsite/dishwashers/44db-icon.jpg?$ORIGIN_JPG$" />
          <p>
            Forget noisy dishwashers! Powered by Insulation technology, it is
            quieter than even a normal conversation*.
          </p>
        </div>
        <div>
          <img src="https://images.samsung.com/is/image/samsung/assets/in/microsite/dishwashers/finger-rasist-icon.jpg?$ORIGIN_JPG$" />
          <p>
            Prevents fingerprint marks and smudges, leaving your kitchen looking
            flawlessly clean and premium.
          </p>
        </div>
        <div>
          <img src="https://images.samsung.com/is/image/samsung/assets/in/microsite/dishwashers/wide-display-icon.jpg?$ORIGIN_JPG$" />
          <p>
            Monitor the wash performance effortlessly by checking remaining wash
            time on the display.
          </p>
        </div>
      </Image2>

      <Head3>
        <h3>Half Load</h3>
        <h3>Leakage Sensor</h3>
        <h3>High Energy Efficiency</h3>
      </Head3>

      <Image3>
        <div>
          <img src="https://images.samsung.com/is/image/samsung/assets/in/microsite/dishwashers/half-load-icon.jpg?$ORIGIN_JPG$" />
          <p>
            Got just a few dishes to clean? Press the ‘half load’ button to use
            just the lower or upper basket and save energy.
          </p>
        </div>
        <div>
          <img src="https://images.samsung.com/is/image/samsung/assets/in/microsite/dishwashers/leakage-sensor-icon.jpg?$ORIGIN_JPG$" />
          <p>
            Immediately stops the cycle, drains the water and shows an error
            message if any leakage is detected.
          </p>
        </div>
        <div>
          <img src="https://images.samsung.com/is/image/samsung/assets/in/microsite/dishwashers/high-energy-icon.jpg?$ORIGIN_JPG$" />
          <p>
            With a high energy efficiency level, equivalent to an A+++ rating*,
            it consumes less energy without impacting the cleaning performance
            or functionality.
          </p>
        </div>
      </Image3>
      <Title>
        <img src="https://images.samsung.com/is/image/samsung/assets/in/microsite/dishwashers/footer-bnr-d.jpg?$ORIGIN_JPG$" />
      </Title>
      <Footer/>
    </div>
  );
};

const Title = styled.div`
width:"60%";
height:50%;
 margin:auto;
`;

const Top = styled.div`
background-color:black;
color:white;
text-align:left;
padding: -0% 0% 1% 3%;
z-index: 5;
/* fixed:top; */
`

const Btm = styled.div`
  margin: auto;
  color: white;
  display: flex;
  gap: 10px;
  margin-top: -20px;
  margin-bottom: -20px;
  cursor: pointer;
`;
const B = styled.div`
  margin-left: 1100px;
  margin-top: -20px;
  gap: 10px;
`;

const Para = styled.div`
width:"60%";
height:50%;
 margin:auto;
 margin:2% 3% 3% 3%;
`;

const Key = styled.div`
  margin: auto;
  margin-bottom: 80px;
`;

const Image = styled.div`
  margin: auto;
  margin-bottom: 20px;
  display: flex;
  margin: 2% 3% 3% 3%;
  gap: 100px;
  border-bottom: 1px solid black;
  padding: 20px;
`;

const Head = styled.div``;

const Image1 = styled.div`
  margin: auto;
  margin-bottom: 20px;
  display: flex;
  margin: 2% 3% 3% 3%;
  background-color: black;
  color: white;
  gap: 80px;
  padding-bottom: 80px;
`;
const Head1 = styled.div`
  width: 95%;
  display: flex;
  margin: 2% 3% -2% 4%;
  justify-content: space-around;
  margin-left: 20px;
`;

const Image2 = styled.div`
  margin: auto;
  margin-bottom: 20px;
  display: flex;
  margin: 2% 3% 3% 3%;
  background-color: black;
  color: white;
  gap: 80px;
  padding-bottom: 80px;
`;
const Head2 = styled.div`
  width: 95%;
  display: flex;
  margin: 2% 4% -2% 4%;
  gap: 80px;
  justify-content: space-around;
  margin-left: 20px;
`;

const Image3 = styled.div`
  margin: auto;
  margin-bottom: 20px;
  display: flex;
  margin: 2% 3% 3% 3%;
  background-color: black;
  color: white;
  gap: 80px;
  padding-bottom: 80px;
`;

const Head3 = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-around;
`;
