export default function Gallery() {
  return (
    <section id="gallery" className="bg-slate-800 text-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-semibold text-orange-400 text-center mb-16">
          Recent Clearances
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <img src="/images/job1.jpg" className="rounded-lg shadow-lg" />
          <img src="/images/job2.jpg" className="rounded-lg shadow-lg" />
          <img src="/images/job3.jpg" className="rounded-lg shadow-lg" />

        </div>

      </div>
    </section>
  )
}