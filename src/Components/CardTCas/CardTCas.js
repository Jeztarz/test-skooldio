import "./CardTCas.css";
import { useEffect, useState } from "react";
import EditScoreButton from "./EditScoreButton/EditScoreButton";
import FooterCard from "./FooterCard/FooterCard";
import RoundButton from "./RoundButton/RoundButton";
import PercentScoreButton from "./PercentScoreButton/PercentScoreButton";
import HeaderCard from "./HeaderCard/HeaderCard";
import MinMaxScore from "./MinMaxScore/MinMaxScore";

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
             {/* รอบที่เปิด */}
            <RoundButton />
            {/* แก้ไขคะแนน */}
            <div className="admission">
              <div>
                <p style={{ margin: "0 0 0 20px" }}>รอบที่ 4 : Admission</p>
              </div>
      
              <EditScoreButton />
            </div>
      
            {/* คะแนน */}
            <div className="yourScore">
              <div>
                <img
                  src="./medal.png"
                  alt="medal"
                  style={{ width: "27px", margin: "27px 35px" }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  margin: "0 32px",
                }}>
                <span style={{ color: "#4a4a4a", fontSize: "12px" }}>
                  คะแนนของคุณคือ
                </span>
                <span style={{ fontSize: "42px" }}>{activity.score != null ? activity.score.id : 0}</span>
              </div>
            </div>
      
            {/* min-max Score */}
            <MinMaxScore activity={activity} />
          </div>
      
          <div className="Path-4"></div>
          {/* สัดส่วนคะแนน */}
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
