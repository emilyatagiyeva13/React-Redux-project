import React, { useEffect, useRef } from "react";
import * as THREE from 'three'
import FOG from 'vanta/dist/vanta.fog.min';
// import "./VantaBackground.css";

export default function VantaBackground() {
    const vantaRef = useRef(null);
    useEffect(() => {

        const vantaEffect = FOG({
            el: vantaRef.current,
            THREE,
            minHeight: 300.00,
            highlightColor: 0xcfe89d,
            midtoneColor: 0xddebc4,
            lowlightColor: 0xd4f78f,
            baseColor: 0x98c380,
            blurFactor: 0.90,
            speed: 1.70,
            zoom: 0.40

        })

        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };

    }, [])
    return (
        <main>
            <div className="background" ref={vantaRef}></div>
            {/* <div className="title">NAimation</div> */}
        </main>
    )
}