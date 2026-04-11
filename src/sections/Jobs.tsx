import JobCard from "../components/JobCard"
import type { JobModalImage } from "../components/JobModal"

export default function Jobs() {
  const jobs: ReadonlyArray<{
    location: string
    jobType: string
    category: string
    context: string
    description: string
    details: string
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
      details:
        "Access and handover were coordinated around the probate process, with the clearance carried out room by room to keep the property manageable throughout. Usable items were separated where appropriate, general waste was removed through licensed routes, and the house was left cleared and ready for the next stage.",
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
      details:
        "This clearance focused on the main lived-in areas of the property, with selected rooms cleared, loose contents removed, and the space left in a more usable condition. Waste was taken away through the normal licensed route, and the property was left ready for the owner's next step, whether that meant further cleaning, re-letting, or onward works.",
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
      details:
        "This job involved clearing out the garage and associated storage space, removing mixed household contents and general waste that had built up over time. Bulky items and loose debris were taken away through licensed routes, and the space was left clear, accessible, and usable again.",
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

        <div className="flex flex-row gap-6 overflow-x-auto snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-3 md:gap-10 md:overflow-visible md:snap-none">

          {jobs.map((job) => (
            <div
              key={`${job.jobType}-${job.location}`}
              className="shrink-0 snap-center w-[88%] md:w-auto md:min-w-0"
            >
              <JobCard
                location={job.location}
                jobType={job.jobType}
                category={job.category}
                context={job.context}
                description={job.description}
                details={job.details}
                previews={job.previews}
                modalImages={job.modalImages}
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  )
}
