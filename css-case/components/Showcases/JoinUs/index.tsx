import { SignupButton } from "@/components/ui/signup-button";
import Image from "next/image";

export function ShowcaseJoinUs() {
  return (
    <section className="join-us__section">
      <div className="join-us__container">
        <h5 className="section__header-mobile">Why join us</h5>
        <ul className="join-us__list">
          <li>Est et in pharetra magna adipiscing ornare aliquam.</li>
          <li>Tellus arcu sed consequat ac velit ut eu blandit.</li>
          <li>Ullamcorper ornare in et egestas dolor orci.</li>
        </ul>
        <div className="flex justify-center">
          <SignupButton variant={"amber"} size={"l"} />
        </div>
        <div className="join-us__image-container">
          <Image
            src="/screen.png"
            width={329}
            height={234}
            alt="Join Us Screen"
            className="min-w-full h-auto join-us__image-screen"
          />
        </div>
      </div>
      <Image
        src="/Deco-video.png"
        width={329}
        height={234}
        alt="Join Us Screen"
        className="min-w-full h-auto join-us__image-deco"
      />
      <div className="join-us__screen-circle"></div>
    </section>
  );
}
