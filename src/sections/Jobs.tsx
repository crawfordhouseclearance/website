import JobCard from "../components/JobCard"
import type { JobModalImage } from "../components/JobModal"

export default function Jobs() {
  const jobs: ReadonlyArray<{
    location: string
    jobType: string
    category: string
    context: string
    description: string
    previews: readonly [string, string]
    modalImages: readonly JobModalImage[]
  }> = [
    {
      location: "Stirling",
      jobType: "Probate Clearance",
      category: "Probate",
      context:
        "Full house clearance completed in Stirling.\nUsable items separated for donation and recycling.\nProperty cleared and left ready for handover.",
      description: "",
      previews: [
        "/images/web/case_probate_room_before.webp",
        "/images/web/case_probate_room_after.webp",
      ],
      modalImages: [
        { src: "/images/web/case_probate_room_before_full.webp", alt: "Before — room" },
        { src: "/images/web/case_probate_room_after_full.webp", alt: "After — room" },
        { src: "/images/web/case_probate_bedroom_before_full.webp", alt: "Before — bedroom" },
        { src: "/images/web/case_probate_bedroom_after_full.webp", alt: "After — bedroom" },
      ],
    },
    {
      location: "Falkirk",
      jobType: "Domestic Clearance",
      category: "Domestic",
      context:
        "Partial domestic clearance completed in Falkirk.\nKitchen and bedroom areas cleared.\nProperty left ready for the next tenant or next step.",
      description: "",
      previews: [
        "/images/web/case_domestic_kitchen_before.webp",
        "/images/web/case_domestic_kitchen_after.webp",
      ],
      modalImages: [
        { src: "/images/web/case_domestic_kitchen_before_full.webp", alt: "Before — kitchen" },
        { src: "/images/web/case_domestic_kitchen_after_full.webp", alt: "After — kitchen" },
        { src: "/images/web/case_domestic_bedroom_before_full.webp", alt: "Before — bedroom" },
        { src: "/images/web/case_domestic_bedroom_after_full.webp", alt: "After — bedroom" },
      ],
    },
    {
      location: "Larbert",
      jobType: "Garage Clearance",
      category: "Commercial",
      context:
        "Garage and outbuilding clearance completed in Larbert.\nGeneral waste removed through licensed routes.\nSpace left clear and usable again.",
      description: "",
      previews: [
        "/images/web/case_garage_02_before.webp",
        "/images/web/case_garage_02_after.webp",
      ],
      modalImages: [
        { src: "/images/web/case_garage_02_before_full.webp", alt: "Before — garage" },
        { src: "/images/web/case_garage_02_after_full.webp", alt: "After — garage" },
      ],
    },
  ]

  return (
    <section id="jobs" className="section-surface py-24">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-semibold text-white text-center mb-16">
          Recent Clearance Jobs
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {jobs.map((job) => (
            <JobCard
              key={`${job.jobType}-${job.location}`}
              location={job.location}
              jobType={job.jobType}
              category={job.category}
              context={job.context}
              description={job.description}
              previews={job.previews}
              modalImages={job.modalImages}
            />
          ))}

        </div>

      </div>

    </section>
  )
}
