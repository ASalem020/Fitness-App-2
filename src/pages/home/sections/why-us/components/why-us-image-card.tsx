import { cn } from "@/lib/utils/tailwind-merge";

type WhyUsImageCardProps = {
  img: string;
  colClassName?: string;
  imageContainerClassName?: string;
  alt?: string;
};

export default function WhyUsImageCard({
  img,
  alt,
  colClassName,
  imageContainerClassName,
}: WhyUsImageCardProps) {
  return (
    <div className={colClassName}>
      <div
        className={cn(
          "image-container rounded-2xl overflow-hidden",
          imageContainerClassName,
        )}
      >
        <img src={img} alt={alt} className="object-cover w-full h-full" />
      </div>
    </div>
  );
}
