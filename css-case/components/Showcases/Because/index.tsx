import { BecauseSlideItem } from "@/components/Showcases/Because/because-slide-item";

export function ShowcaseBecause() {
  return (
    <section className="because__section">
      <h5 className="because__header section__header">
        Because they love us
      </h5>
      <div className="because__slider-bg">
        <div className="because__slider-container">
          <BecauseSlideItem
            img="/shells-logo.png"
            description="Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla."
          />
          <BecauseSlideItem
            img="/shells-logo.png"
            description="Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla."
          />
          <BecauseSlideItem
            img="/shells-logo.png"
            description="Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla."
          />
          <BecauseSlideItem
            img="/shells-logo.png"
            description="Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla."
          />
          <BecauseSlideItem
            img="/shells-logo.png"
            description="Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla."
          />
        </div>
      </div>
    </section>
  );
}
