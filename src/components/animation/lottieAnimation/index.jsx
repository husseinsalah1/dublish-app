import { useRef } from "react";
import Lottie from "lottie-react";
import style from "./style.module.css";

const LottieAnimation = ({ animationData }) => {
  const lottieRef = useRef();
  return (
    <div>
      <Lottie
        animationData={animationData}
        loop={false}
        autoplay={true}
        lottieRef={lottieRef}
        style={{ width: 900, height: 500 }}
        className={style.animation}
      />
    </div>
  );
};

export default LottieAnimation;
