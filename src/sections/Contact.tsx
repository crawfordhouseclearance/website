export default function Contact() {
  return (
    <section id="contact" className="py-24">

      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-12">

          <h2 className="text-3xl font-semibold text-white mb-6">
            Contact
          </h2>

          <p className="text-stone-400 mb-4">
            Contact us to request a quote and agree the scope of work.
          </p>

          <p className="text-stone-400">
            For domestic clearances, you can send photos on WhatsApp for an
            initial estimate.
          </p>

        </div>


        {/* Contact Buttons */}

        <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">

          <a
            href="tel:07459420152"
            className="flex-1 text-center bg-[#f3efe6] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#e9e2d6] transition"
          >
            Call 07459 420152
          </a>

          <a
            href="https://wa.me/447459420152"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-[#1f9e52] text-black px-8 py-4 rounded-lg font-semibold hover:brightness-95 transition"
          >
            Message on WhatsApp
          </a>

        </div>


        {/* Contact Form */}

        <form
          action="mailto:admin@crawfordclearance"
          method="post"
          encType="text/plain"
          className="space-y-6 max-w-2xl mx-auto"
        >

          <div>
            <label className="block text-sm text-stone-400 mb-2">
              Name
            </label>

            <input
              type="text"
              name="Name"
              required
              className="w-full bg-[#2a3035] border border-white/10 rounded-lg px-4 py-3 text-white"
            />
          </div>


          <div>
            <label className="block text-sm text-stone-400 mb-2">
              Email
            </label>

            <input
              type="email"
              name="Email"
              required
              className="w-full bg-[#2a3035] border border-white/10 rounded-lg px-4 py-3 text-white"
            />
          </div>


          <div>
            <label className="block text-sm text-stone-400 mb-2">
              Property Location
            </label>

            <input
              type="text"
              name="Location"
              className="w-full bg-[#2a3035] border border-white/10 rounded-lg px-4 py-3 text-white"
            />
          </div>


          <div>
            <label className="block text-sm text-stone-400 mb-2">
              Details
            </label>

            <textarea
              name="Message"
              rows={5}
              required
              className="w-full bg-[#2a3035] border border-white/10 rounded-lg px-4 py-3 text-white"
            ></textarea>
          </div>


          <button
            type="submit"
            className="w-full bg-[#f3efe6] text-black py-4 rounded-lg font-semibold hover:bg-[#e9e2d6] transition"
          >
            Send Enquiry
          </button>

        </form>

      </div>

    </section>
  )
}