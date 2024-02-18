"use client";

import { GrowSlideItem } from "@/components/Showcases/Grow/grow-slide-item";
import { PlayIcon } from "@/components/icons/play";

import Image from "next/image";
import React from "react";

export function ShowcaseGrow() {
  const [active, setActive] = React.useState(0);
  return (
    <section className="grow__section">
      <h5 className="section__header-mobile">Grow your collection</h5>
      <p className="grow__section-content">
        Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet
        dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit
        rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat proin
        neque placerat at bibendum quam tellus.
      </p>
      <div className="grow__section-slider-container">
        {Array(5)
          .fill(0)
          .map((_, idx) => (
            <GrowSlideItem
              onClick={() => {
                setActive(idx);
              }}
              key={idx}
              icon={PlayIcon}
              text="Bibendum tellus"
              active={idx === active}
            />
          ))}
      </div>
      <Image
        src="/grow.png"
        width={361}
        height={259}
        alt="Grow Section Image"
        className="min-w-full h-auto grow__section-image"
      />
      <Image
        src="/waves-small.png"
        width={400}
        height={720}
        alt=""
        className="absolute bottom-[-3px] left-0 min-w-full h-auto z-[-1]"
      />
    </section>
  );
}
