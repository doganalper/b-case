import { HeroButtons } from "@/components/Hero/hero-buttons";
import { HeroImage } from "@/components/Hero/hero-image";
import { HeroColumns } from "@/components/Hero/hero-columns";

// original: -right-[1800px] top-[320px] -rotate-[25.5deg] bg-amber-100 min-w-[4000px] h-[1000px] z-[-20]

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__text-content">
          <h1 className="hero__text-content-title">Collectible Sneakers</h1>
          <p>
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
            suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
            amet.
          </p>
          <HeroButtons />
        </div>
        <HeroImage />
      </div>
      <HeroColumns />
    </section>
  );
}
