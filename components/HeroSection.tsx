
"use client"
import React from "react";
import Image from "next/image";

export type HeroSectionProps = {
    name?: string;
};

const HeroSection = (props: HeroSectionProps) => {

    // const { name } = props;

    // const name1 = props.name;

    return (

        <section id="home">
            {/* components\HeroSection.tsx {props.name} -  {name ? name : ''} - {name1} */}
            <div>
                <div>
                    <Image src="/photo-cv2.jpg" alt="" width={300} height={300} />
                </div>
                <div></div>
            </div>
        </section>
    )
}

export default HeroSection