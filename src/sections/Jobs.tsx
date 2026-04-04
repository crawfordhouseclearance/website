import JobCard from "../components/JobCard"

export default function Jobs() {
  const jobs = [
    {
      location: "Stirling",
      jobType: "Probate Clearance",
      category: "Probate",
      context: "Full clearance completed. Items sorted for donation and recycling.",
      description: "",
      before: "/images/probate2.jpg",
      after: "/images/probate1.jpg",
      details: {
        additionalDescription: "",
        beforeNote: "",
        afterNote: "",
        extraImages: [],
      },
    },
    {
      location: "Falkirk",
      jobType: "Domestic Clearance",
      category: "Domestic",
      context: "Partial clearance completed. Property left ready for new tenants.",
      description: "",
      before: "/images/domestic2.jpg",
      after: "/images/domestic1.jpg",
      details: {
        additionalDescription: "",
        beforeNote: "",
        afterNote: "",
        extraImages: [],
      },
    },
    {
      location: "Larbert",
      jobType: "Garage Clearance",
      category: "Commercial",
      context: "Garage and outbuildings cleared. Waste taken for proper disposal.",
      description: "",
      before: "/images/commercial3.jpg",
      after: "/images/commercial1.jpg",
      details: {
        additionalDescription: "",
        beforeNote: "",
        afterNote: "",
        extraImages: [],
      },
    },
  ] as const

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
              before={job.before}
              after={job.after}
              details={job.details}
            />
          ))}

        </div>

      </div>

    </section>
  )
}