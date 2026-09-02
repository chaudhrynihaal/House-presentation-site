import HotspotPhoto from "@/components/HotspotPhoto";
import type { RoomSection } from "@/content/property";

export default function RoomGallery({ section }: { section: RoomSection }) {
  const single = section.images.length === 1;

  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3 pb-6 border-b border-offwhite/10">
        <div className="flex items-baseline gap-4">
          <span className="font-display text-lg text-gold">{section.number}</span>
          <h3 className="font-display text-4xl md:text-5xl tracking-tight text-offwhite">{section.room}</h3>
        </div>
        <p className="text-xs tracking-widest2 uppercase text-offwhite/50">
          {section.tags.join(", ")}
        </p>
      </div>

      <div className={`mt-8 grid gap-6 ${single ? "grid-cols-1" : "sm:grid-cols-2"}`}>
        {section.images.map((image, i) => {
          const isDangling = !single && section.images.length % 2 !== 0 && i === section.images.length - 1;
          return (
            <HotspotPhoto
              key={image.src}
              src={image.src}
              alt={section.room}
              hotspots={image.hotspots}
              className={
                single
                  ? "max-w-2xl"
                  : isDangling
                    ? "sm:col-span-2 sm:max-w-2xl sm:mx-auto sm:w-full"
                    : ""
              }
              sizes={
                single || isDangling
                  ? "(min-width: 768px) 42rem, 100vw"
                  : "(min-width: 1024px) 50vw, 100vw"
              }
            />
          );
        })}
      </div>
    </div>
  );
}
