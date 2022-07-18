function MyScore(props) {
    return (
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
                <span style={{ fontSize: "42px" }}>{props.activity.score != null ? props.activity.score.id : 0}</span>
              </div>
            </div>
    )
}

export default MyScore;