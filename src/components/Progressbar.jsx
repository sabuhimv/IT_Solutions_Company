import React from 'react'
import './Progressbar.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ReviewsProvides from './ReviewsProvides';

const Progressbar = (props) => {
    const { score } = props;

    const calcColor = (percent, start, end) => {
        let a = percent / 100,
            b = (end - start) * a,
            c = b + a;

        return "hsl(" + c + ", 100%, 50%)";
    }

    return (
        
        <ReviewsProvides valueStart={0} valueEnd={score}>
            {(value) => (
                <CircularProgressbar
                value={value}
                text={`${value} %`}
                circleRatio={0.7}
                styles={{
                    trail: {
                        strokeLinecap: "butt",
                        transform: "rotate(-126deg)",
                        transformOrigin: "center center",
                    },
                    path: {
                        strokeLinecap: "butt",
                        transform: "rotate(-126deg)",
                        transformOrigin: "center center",
                        stroke: calcColor(value, 0, 120),
                    },
                    text: {
                        fill: "#ddd"
                    }
                }}
                strokeWidth={10}
            />
            )}

        </ReviewsProvides>
    )
}

export default Progressbar