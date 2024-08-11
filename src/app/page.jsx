"use client";

import Animation from "./animation/ScrollAnimation";
import "./home.css";

export default function Home() {
  return (
    <div className="bg_a">
      <div className="bg_b">
        <h1>Animation</h1>
        <div className="bg_c">
          <Animation
            type="slideUp"
            duration={0.8}
            delay={0.2}
            loop={true}
            repeatDelay={1}
          >
            <div className="boxs"></div>
          </Animation>
          <Animation
            type="rotate"
            duration={0.8}
            delay={0.2}
            loop={true}
            repeatDelay={1}
          >
            <div className="boxs"></div>
          </Animation>
          <Animation
            type="zoomIn"
            duration={0.8}
            delay={0.2}
            loop={true}
            repeatDelay={1}
          >
            <div className="boxs"></div>
          </Animation>
          <Animation
            type="zoomOut"
            duration={0.8}
            delay={0.2}
            loop={true}
            repeatDelay={1}
          >
            <div className="boxs"></div>
          </Animation>
          <Animation
            type="flip"
            duration={0.8}
            delay={0.2}
            loop={true}
            repeatDelay={1}
          >
            <div className="boxs"></div>
          </Animation>
          <Animation
            type="fadeInDown"
            duration={0.8}
            delay={0.2}
            drag
            dragConstraints={{ left: 0, right: 100, top: 0, bottom: 100 }}
          >
            <div className="boxs"></div>
          </Animation>
          <Animation
            type="pulse"
            duration={0.8}
            delay={0.2}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="boxs"></div>
          </Animation>
          <Animation
            type="slideRight"
            duration={0.8}
            delay={0.2}
            loop={true}
            repeatDelay={1}
          >
            <div className="boxs"></div>
          </Animation>
        </div>
      </div>
    </div>
  );
}

/*

<Animation 
  type="slideUp" 
  duration={0.8} 
  delay={0.2}
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  drag
  dragConstraints={{ left: 0, right: 100, top: 0, bottom: 100 }}
  useScroll
  loop={true}
  repeatDelay={1}
>
  <div className="box">Content here</div>
</Animation>


 */
