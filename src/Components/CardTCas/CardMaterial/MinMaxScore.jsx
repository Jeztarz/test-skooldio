function MinMaxScore(props) {
  return (
    <div className="minMaxScore">
      <span className="textMinMax ">
        <span className="style-1">
          {props.activity.score != null ? props.activity.score.min : 0}
        </span>
        คะแนนต่ำสุด 60
      </span>
      &nbsp;|&nbsp;
      <span className="textMinMax ">
        <span className="style-1">
          {props.activity.score != null ? props.activity.score.avg : 0}
        </span>
        คะแนนต่ำสุด 60
      </span>
      &nbsp;|&nbsp;
      <span className="textMinMax ">
        <span className="style-1">
          {props.activity.score != null ? props.activity.score.max : 0}
        </span>
        คะแนนต่ำสุด 60
      </span>
    </div>
  );
}

export default MinMaxScore;
