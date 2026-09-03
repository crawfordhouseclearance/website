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
    previewAlts: readonly [string, string]
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
        "Access and handover were coordinated around the probate process, with the clearance carried out room by room. Usable items were separated where appropriate, general waste was taken to licensed waste facilities, and the house was left clear and ready for the next stage.",
      previews: [
        "/images/web/case_probate_room_before.webp",
        "/images/web/case_probate_room_after.webp",
      ],
      previewAlts: [
        "Before: living room before probate clearance, Stirling",
        "After: same room cleared, Stirling",
      ],
      modalImages: [
        {
          src: "/images/web/case_probate_room_before_full.webp",
          alt: "Before: living room before probate clearance, Stirling",
        },
        {
          src: "/images/web/case_probate_room_after_full.webp",
          alt: "After: living room cleared, Stirling",
        },
        {
          src: "/images/web/case_probate_bedroom_before_full.webp",
          alt: "Before: bedroom before probate clearance, Stirling",
        },
        {
          src: "/images/web/case_probate_bedroom_after_full.webp",
          alt: "After: bedroom cleared, Stirling",
        },
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
        "This clearance covered the main lived-in areas of the property. Selected rooms were cleared, loose contents were removed, and waste was taken to licensed waste facilities. The property was left ready for further cleaning, re-letting or other work.",
      previews: [
        "/images/web/case_domestic_kitchen_before.webp",
        "/images/web/case_domestic_kitchen_after.webp",
      ],
      previewAlts: [
        "Before: kitchen before domestic clearance, Falkirk",
        "After: kitchen cleared, Falkirk",
      ],
      modalImages: [
        {
          src: "/images/web/case_domestic_kitchen_before_full.webp",
          alt: "Before: kitchen before domestic clearance, Falkirk",
        },
        {
          src: "/images/web/case_domestic_kitchen_after_full.webp",
          alt: "After: kitchen cleared, Falkirk",
        },
        {
          src: "/images/web/case_domestic_bedroom_before_full.webp",
          alt: "Before: bedroom before domestic clearance, Falkirk",
        },
        {
          src: "/images/web/case_domestic_bedroom_after_full.webp",
          alt: "After: bedroom cleared, Falkirk",
        },
      ],
    },
    {
      location: "Larbert",
      jobType: "Garage Clearance",
      category: "Commercial",
      context:
        "Garage and outbuilding clearance completed in Larbert.\nGeneral waste taken to licensed waste facilities.\nSpace left clear and usable again.",
      description: "",
      details:
        "This job involved clearing the garage and its storage space of mixed household contents and general waste that had built up over time. Bulky items and loose debris were taken to licensed waste facilities, leaving the space clear, accessible and usable again.",
      previews: [
        "/images/web/case_garage_02_before.webp",
        "/images/web/case_garage_02_after.webp",
      ],
      previewAlts: [
        "Before: garage before clearance, Larbert",
        "After: garage cleared, Larbert",
      ],
      modalImages: [
        {
          src: "/images/web/case_garage_02_before_full.webp",
          alt: "Before: garage before clearance, Larbert",
        },
        {
          src: "/images/web/case_garage_02_after_full.webp",
          alt: "After: garage cleared, Larbert",
        },
      ],
    },
  ]

  return (
    <section id="jobs" className="section-surface py-24">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-semibold text-white text-center mb-16">
          Recent Clearance Jobs
        </h2>

        <div className="flex flex-row items-stretch gap-6 overflow-x-auto snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-3 md:gap-10 md:overflow-visible md:snap-none">

          {jobs.map((job) => (
            <div
              key={`${job.jobType}-${job.location}`}
              className="flex min-h-0 w-[88%] shrink-0 snap-center flex-col self-stretch md:w-auto md:min-w-0"
            >
              <JobCard
                location={job.location}
                jobType={job.jobType}
                category={job.category}
                context={job.context}
                description={job.description}
                details={job.details}
                previews={job.previews}
                previewAlts={job.previewAlts}
                modalImages={job.modalImages}
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  )
}
