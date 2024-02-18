import Image from "next/image";

export function ShowcaseShoes() {
  return (
    <section className="shoes__section relative">
      <div className="shoes__section-image-container">
        <Image
          src="/shoe-collected.png"
          width={266}
          height={200}
          alt=""
          className="shoes__section-image"
        />
        <div className="shoes__section-image-tooltip">
          Emma Simpson collected one pair of <span>Cool Shoes.</span>
          <div className="shoes__section-image-tooltip-arrow"></div>
        </div>
      </div>
      <div className="shoes__section-content">
        <span className="shoes__section-content-count">11,658,467</span>
        <span className="shoes__section-content-text">Shoes Collected</span>
      </div>
    </section>
  );
}
