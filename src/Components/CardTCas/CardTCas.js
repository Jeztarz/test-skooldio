import "./CardTCas.css";
import { useEffect, useState } from "react";
import HeaderCard from "./CardMaterial/HeaderCard";
import RoundButton from "./CardMaterial/RoundButton";
import EditScoreButton from "./CardMaterial/EditScoreButton";
import MinMaxScore from "./CardMaterial/MinMaxScore";
import PercentScoreButton from "./CardMaterial/PercentScoreButton";
import FooterCard from "./CardMaterial/FooterCard";
import MyScore from "./CardMaterial/MyScore";

function CardTCas() {
  const [dataTest, setDataTest] = useState([]);

  useEffect(() => {
    fetch("https://tcas-assets.skooldio.com/tmp/mock_tcaster_api.json")
      .then((response) => response.json())
      .then((data) => {
        setDataTest(data);
      });
  }, []);

  return (
    <div className="mapping">
    
    {dataTest.map((activity) => {
      return (
        <div className="cardMain" key={activity.id}>
         <HeaderCard activity={activity} />
         
          <div className="Path-4"></div>
      
          <div className="bodyCard">
             {/* รอบที่เปิดรับ */}
            <RoundButton />

            {/* edit score button */}
            <div className="admission">
              <div>
                <p style={{ margin: "0 0 0 20px" }}>รอบที่ 4 : {activity.score != null ? activity.score.scoreType : ''}</p>
              </div>
      
              <EditScoreButton />
            </div>
      
            {/* score */}
            <MyScore activity={activity}/>
      
            {/* min-max Score */}
            <MinMaxScore activity={activity} />
          </div>
      
          <div className="Path-4"></div>

          {/* Percent score */}
          <PercentScoreButton />

          <div className="Path-4"></div>
      
          {/* footer */}
          <FooterCard activity={activity}/>
        </div>
      );
    })}
    
    </div>
)
  

  
}

export default CardTCas;
