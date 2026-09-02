import SocialCards from "@/components/ui/card-fan-carousel";
import type { RoomSection } from "@/content/property";

export default function PhotoCarousel({ sections }: { sections: RoomSection[] }) {
  const cards = sections.flatMap((section) =>
    section.images.map((image) => ({
      imgUrl: image.src,
      alt: section.room,
    }))
  );

  return <SocialCards cards={cards} />;
}
