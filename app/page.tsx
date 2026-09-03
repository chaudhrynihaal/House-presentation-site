import { property } from "@/content/property";
import Hero from "@/components/Hero";
import AnchorNav from "@/components/AnchorNav";
import StatBlock from "@/components/StatBlock";
import DataTable from "@/components/DataTable";
import TextSection from "@/components/TextSection";
import RoomGallery from "@/components/RoomGallery";
import PhotoCarousel from "@/components/PhotoCarousel";
import PdfSitePlanViewer from "@/components/PdfSitePlanViewerLoader";
import SpecificationList from "@/components/SpecificationList";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Home() {
  return (
    <>
      <Hero
        eyebrow={property.hero.eyebrow}
        title={property.hero.title}
        subtitle={property.hero.subtitle}
        videoSrc="/media/video/exterior-hero.mp4"
        posterSrc="/media/images/exterior-poolside-day.jpg"
      />

      <AnchorNav sections={property.navSections} />

      <section className="px-6 py-16 max-w-6xl mx-auto w-full">
        <RevealOnScroll>
          <StatBlock stats={property.stats} />
        </RevealOnScroll>
      </section>

      <section id="gallery" className="px-6 py-24 max-w-6xl mx-auto w-full">
        <RevealOnScroll className="mb-14">
          <p className="eyebrow text-gold mb-4">Gallery</p>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight text-offwhite">The Residence</h2>
        </RevealOnScroll>

        <div className="space-y-20">
          {property.roomGalleries.map((section) => (
            <RevealOnScroll key={section.room}>
              <RoomGallery section={section} />
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <section id="carousels" className="px-6 py-24 max-w-6xl mx-auto w-full">
        <RevealOnScroll className="mb-14">
          <p className="eyebrow text-gold mb-4">Explore</p>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight text-offwhite">Photo Carousel</h2>
        </RevealOnScroll>

        <PhotoCarousel sections={property.roomGalleries} />
      </section>

      <section id="lifestyle" className="px-6 py-24 max-w-6xl mx-auto w-full">
        <RevealOnScroll>
          <TextSection
            eyebrow="Lifestyle"
            heading={property.lifestyleSection.heading}
            body={property.lifestyleSection.body}
          />
        </RevealOnScroll>

        <RevealOnScroll delay={0.1} className="mt-14 max-w-2xl">
          <DataTable
            rows={property.distances.map((d) => ({ key: d.place, value: d.distance }))}
            keyLabel="Distances"
            valueLabel="Approx. Time"
          />
        </RevealOnScroll>
      </section>

      <section id="areas" className="px-6 py-24 max-w-6xl mx-auto w-full">
        <RevealOnScroll className="mb-14">
          <p className="eyebrow text-gold mb-4">Areas</p>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight text-offwhite">Floor by Floor</h2>
        </RevealOnScroll>

        <div className="space-y-14">
          {property.areas.map((floor) => (
            <RevealOnScroll key={floor.floorName}>
              <div className="flex flex-wrap items-baseline justify-between gap-4 mb-4">
                <h3 className="font-display text-2xl text-offwhite">{floor.floorName}</h3>
                <p className="text-sm text-offwhite/50">
                  Enclosed {floor.enclosedArea} · Open {floor.openArea} · Total{" "}
                  <span className="text-gold">{floor.totalArea}</span>
                </p>
              </div>
              <DataTable
                rows={floor.rooms.map((room) => ({ key: room.name, value: room.area }))}
                keyLabel="Room"
                valueLabel="Area"
              />
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <section id="site-plan" className="px-6 py-24 max-w-6xl mx-auto w-full">
        <RevealOnScroll className="mb-14">
          <p className="eyebrow text-gold mb-4">Documents</p>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight text-offwhite">Site Plan</h2>
          <p className="mt-4 text-offwhite/60 max-w-2xl">
            Full architectural floor plans available on request. Shown below is the property
            specification sheet.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <PdfSitePlanViewer pdfUrl={property.sitePlanPdfUrl} />
        </RevealOnScroll>
      </section>

      <section id="specification" className="px-6 py-24 max-w-6xl mx-auto w-full">
        <RevealOnScroll className="mb-14">
          <p className="eyebrow text-gold mb-4">Reference</p>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight text-offwhite">Full Specification</h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <SpecificationList specifications={property.specifications} />
        </RevealOnScroll>
      </section>

      <section id="residency" className="px-6 py-24 max-w-6xl mx-auto w-full">
        <RevealOnScroll>
          <TextSection
            eyebrow="Residency & Tax"
            heading={property.residencySection.heading}
            body={property.residencySection.intro}
          />
        </RevealOnScroll>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {property.residencySection.cards.map((card, i) => (
            <RevealOnScroll key={card.title} delay={i * 0.1}>
              <div className="border border-offwhite/10 p-6 h-full">
                <h3 className="font-display text-xl text-gold mb-3">{card.title}</h3>
                <p className="text-sm text-offwhite/70 leading-relaxed">{card.body}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <Footer
        title={property.hero.title}
        stats={property.stats}
        sections={property.navSections}
      />
    </>
  );
}
