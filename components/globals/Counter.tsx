import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const Counter: React.FC<{runningNumber:number}> = (props) => {
  return(
    <div className="!relative">
    <CountUp start={0} end={props.runningNumber} duration={3} decimals={0} >
    {({ countUpRef, start }) => (
        <VisibilitySensor onChange={start}>
            <span ref={countUpRef} />
        </VisibilitySensor>
    )}
    </CountUp>
    </div>
  )
}

export default Counter;