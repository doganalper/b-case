import { cn } from "@/utils/cn";

type Props = {
  icon: React.ComponentType;
  text: string;
  active: boolean;
  onClick: () => void;
};
export function GrowSlideItem({ icon, text, active, onClick }: Props) {
  const Icon = icon;
  return (
    <div
      onClick={onClick}
      className={cn(
        "grow__section-slide",
        active && "grow__section-slide__active",
      )}
    >
      <Icon />
      <span>{text}</span>
    </div>
  );
}
