// import React, { useState} from 'react'
// import './LatestSkills.css'
// import latest_skills_1 from '../assets/images/img-1.jpg'
// import latest_skills_2 from '../assets/images/img-2.jpg'

// import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
// import Progressbar from './Progressbar';
// const [reviewScore,setReviewScore] = useState(10);

// const LatestSkills = (props) => {
//     const {score} = props;

//     return (
//     <div className='latest-skills-container'>
//         <div className="latest-skills-left">
//             <img src={latest_skills_1} alt="" />
//             <img src={latest_skills_2} alt="" />
//         </div>
//         <div className="latest-skills-right">
//             <span className='orange-bg-span'>LATEST SKILLS</span>
//             <h2 className='capitalize-h2 text-underline'>We’re Very Professional & Experience Agency</h2>
//             <p className='gray-p'>Sed perspiciatis unde omnis natus voluptate accusantie doloremque laudantium totam rem aperiam eaque quaea vtore eritatis quasi architecto beatae vitae</p>
//             <div className="ls-chartes">
//                 <div className="ls-chart-left">
//                     {/* <h2>89 <span>%</span></h2> */}
//                     <Progressbar score={reviewScore}/>
//                     setReviewScore(70);
//                 </div>
//                 <div className="ls-chart-right">
//                     <h2>67 <span>%</span></h2>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default LatestSkills