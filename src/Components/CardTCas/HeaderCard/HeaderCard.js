function HeaderCard(props) {
    return (
        <div className="headCard">
            <div>
              <img
                src={props.activity.logo}
                className="logoSize"
                alt="logo"
              />
            </div>
      
            <div className="textHead">
              <span className="headText">{props.activity.faculty.name}</span>
              <span className="underHeadText">{props.activity.name}</span>
              <span className="university">{props.activity.faculty.university.name}</span>
            </div>
          </div>
    )
}

export default HeaderCard;