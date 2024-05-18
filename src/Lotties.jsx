import { useState, useEffect } from 'react'
import Lottie from 'react-lottie-player'
import rain from './assets/Animation.json'

function Lotties() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: rain,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        // <Lottie options={defaultOptions} height={400} width={400} />
        <Lottie 
            loop
            animationData={rain}
            play
            style={{
                height: 400, 
                // width: 400,
                // display: flex 
            }}
        />
    )
}

export default Lotties
