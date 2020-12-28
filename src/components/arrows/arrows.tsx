import upArrowIcon from "../../assets/images/icons8-up-arrow-52.png";
import rightArrowIcon from "../../assets/images/icons8-right-arrow-52.png";
import downArrowIcon from "../../assets/images/icons8-down-arrow-52.png";
import leftArrowIcon from "../../assets/images/icons8-left-arrow-52.png";

const Arrows: React.FC<any> = (props) => {
  
  const goUp = () => {
    props.setTriggerButton(true);

    if(props.xPosition >= props.columns || props.yPosition >= props.rows){
      props.setXPosition(0);
      props.setYPosition(0);
      return;
    }

    if(props.yPosition !== 0){
      props.setYPosition(props.yPosition - 1)
    }
  }

  const goRight = () => {
    props.setTriggerButton(true);

    if(props.xPosition >= props.columns || props.yPosition >= props.rows){
      props.setXPosition(0);
      props.setYPosition(0);
      return;
    }

    if(props.xPosition !== props.columns - 1){
      props.setXPosition(props.xPosition + 1);
    }
  }

  const goDown = () => {
    props.setTriggerButton(true);

    if(props.xPosition >= props.columns || props.yPosition >= props.rows){
      props.setXPosition(0);
      props.setYPosition(0);
      return;
    }

    if(props.yPosition !== props.rows -1){
      props.setYPosition(props.yPosition + 1)
    }
  }

  const goLeft = () => {
    props.setTriggerButton(true);

    if(props.xPosition >= props.columns || props.yPosition >= props.rows){
      props.setXPosition(0);
      props.setYPosition(0);
      return;
    }
    
    if(props.xPosition !== 0){
      props.setXPosition(props.xPosition - 1);
    }
  }

  return (
    <div className="arrows">
        <div className="up">
          <img onClick={goUp} src={upArrowIcon} alt="up arrow"/>
        </div>
        <div className="middle">
          <div>
            <img onClick={goLeft} src={leftArrowIcon} alt="left arrow"/>
          </div>
          <div>
            <img onClick={goRight} src={rightArrowIcon} alt="right arrow"/>
          </div>
        </div>
        <div className="down">
          <img onClick={goDown} src={downArrowIcon} alt="down arrow"/>
        </div>
      </div>
  )
}

export default Arrows;