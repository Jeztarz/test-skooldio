import "./CardTCas.css";
// import { useEffect, useState } from "react";

function CardTCas() {
//   const [dataTest, setDataTest] = useState([]);

//   useEffect(() => {
//     fetch("https://tcas-assets.skooldio.com/tmp/mock_tcaster_api.json")
//       .then((response) => response.json())
//       .then((data) => setDataTest(data));
//   }, []);

  return (
    <div className="cardMain">
      <div className="headCard">
        <div>
          <img
            src="https://tcas-assets.skooldio.com/icons/edugroup/engineer.png"
            className="logoSize"
            alt="logo"
          />
        </div>

        <div className="textHead">
          <span className="headText">คณะวิศวกรรมศาสตร์</span>
          <span className="underHeadTeaxt">สาขาวิศวกรรมทั่วไป</span>
          <span className="university">จุฬาลงกรณ์มหาวิทยาลัย</span>
        </div>

        <div>
          <img src="./like.png" className="likeSize" alt="like" style={{width:'24px', margin:'15px 0 0 80px', alignItems:'end'}}/>
        </div>
      </div>

      <div class="Path-4"></div>

      <div className="bodyCard">
        {/* รอบที่เปิด */}
        <div className="round">
          <p style={{fontSize:'20px', color:'#5f5f5f', margin:'21px'}}>รอบที่เปิด</p>
          <div className="Oval">1</div>
          <div className="Oval">2</div>
          <div className="Oval2">3</div>
          <div className="Oval">4</div>
          <div className="Oval2">5</div>
        </div>

        {/* แก้คะแนน */}
        <div className="admission">
            <div>
                <p style={{margin:'0 0 0 20px'}}>รอบที่ 4 : Admission</p>
            </div>
          
          <div className="editScore">
            แก้ไขคะแนน &nbsp;
              <img src="./editScore.png" alt="editScore" />
          </div>
        </div>

        {/* คะแนน */}
        <div className="yourScore">
          <div>
            <img src="./medal.png" alt="medal" style={{width:'27px', margin:'27px 35px'}}/>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-end',
            margin: '0 32px'
          }}>
            <span style={{color:'#4a4a4a', fontSize:'12px'}}>คะแนนของคุณคือ</span>
            <span style={{fontSize:'42px'}}>23,453</span>
          </div>
        </div>


        {/* min-max Score */}
        <div className="minMaxScore">
          <span class="textMinMax ">
            <span class="style-1">20,845</span>คะแนนต่ำสุด 60
          </span>
          &nbsp;|&nbsp;
          <span class="textMinMax ">
            <span class="style-1">21,345</span>คะแนนต่ำสุด 60
          </span>
          &nbsp;|&nbsp;
          <span class="textMinMax ">
            <span class="style-1">23,415</span>คะแนนต่ำสุด 60
          </span>
        </div>
      </div>

      <div class="Path-4"></div>

      {/* สัดส่วนคะแนน */}
      <div class="Triangle"></div>
        <div className="percentScore">ดูสัดส่วนคะแนน</div>

        <div class="Path-4"></div>


        {/* footer */}
<div className="footer">
    <div className="userInterest">
        <img src="./user.png" alt="user" style={{width:'20px', height:'20px'}} />
    <p>10</p>
    &nbsp; <p style={{fontStyle:'italic'}}>คนที่สนใจ</p>
    </div>
    <div>
    <img src="./share.png" alt="user"  style={{width:'15px', margin:'18px 23px'}}/>
    </div>
</div>


      
    </div>
  );
}

export default CardTCas;
