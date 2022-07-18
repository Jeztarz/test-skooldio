function FooterCard(props) {
    return (
        <div className="footer">
            <div className="userInterest">
              <img
                src="./user.png"
                alt="user"
                style={{ width: "20px", height: "20px" }}
              />
              <p>{props.activity.likes}</p>
              &nbsp; <p style={{ fontStyle: "italic" }}>คนที่สนใจ</p>
            </div>
            <div>
              <img
                src="./share.png"
                alt="user"
                style={{ width: "15px", margin: "18px 23px", cursor:"pointer" }}
              />
            </div>
          </div>
    )
}

export default FooterCard;