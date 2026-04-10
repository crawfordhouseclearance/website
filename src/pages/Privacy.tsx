import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Privacy() {
  return (
    <>
      <Header />

      <main>
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-6 text-left">
            <p className="text-xs text-text-muted mb-8">Last updated: 9 April 2026</p>

            <h1 className="text-3xl font-semibold text-white mb-10">Privacy Policy</h1>

            <div className="space-y-10 text-sm text-text-muted leading-relaxed">
            <section>
              <h2 className="text-lg font-semibold text-text-main mb-3">Who we are</h2>
              <p>
                Crawford House Clearance provides house and property clearance services in
                Falkirk, Stirling, and across Central Scotland. This notice explains how we
                handle personal information when you contact us or use this website.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-main mb-3">
                What information we collect
              </h2>
              <p className="mb-3">Depending on how you get in touch, we may receive:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="text-text-main">Contact details</span> — such as your
                  name, phone number, and email address when you call, email, message us on
                  WhatsApp, or use the email link on our contact section.
                </li>
                <li>
                  <span className="text-text-main">Enquiry details</span> — for example the
                  property location, the type of clearance, timings, access information, and
                  anything else you choose to tell us to obtain a quote or arrange work.
                </li>
                <li>
                  <span className="text-text-main">Photos</span> — if you send images (for
                  example via WhatsApp) to help us provide an estimate, those images and any
                  captions or descriptions you include.
                </li>
                <li>
                  <span className="text-text-main">Technical data</span> — your browser and
                  device will share basic technical information with our hosting provider in
                  the usual way when you load this website (for example IP address and
                  browser type), as part of delivering the pages to you.
                </li>
              </ul>
              <p className="mt-3">
                The &quot;Get a Quote&quot; area uses your email app to send us a message; we
                do not run a separate account system or online payment on this website.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-main mb-3">
                How we use your information
              </h2>
              <p className="mb-3">We use this information to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>respond to enquiries and provide quotes;</li>
                <li>arrange and carry out clearance work you ask us to do;</li>
                <li>communicate with you about the job, including scheduling and access;</li>
                <li>meet legal and regulatory obligations that apply to our business (for
                  example waste carrier record-keeping where required).</li>
              </ul>
              <p className="mt-3">
                Under UK data protection law, we rely on appropriate bases such as taking
                steps at your request before a contract, performing a contract with you, our
                legitimate interests in running a small business and responding to
                customers, and legal obligations where they apply. We do not use your
                information for automated decision-making or profiling.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-main mb-3">
                How long we keep it
              </h2>
              <p>
                We keep enquiry and job-related information only as long as we need it to
                respond to you, provide our services, deal with any follow-up issues, and
                meet legal or accounting requirements. Information we no longer need is
                deleted or securely disposed of in line with good practice for a small
                business.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-main mb-3">
                Who we share it with
              </h2>
              <p>
                We do not sell your personal information. We may share it only where
                necessary — for example with waste disposal or recycling facilities to
                fulfil a clearance, with professional advisers when required, or with
                regulators or law enforcement if the law requires it. If you use WhatsApp or
                email, those services are provided by third parties; their own terms and
                privacy notices also apply to messages sent through their platforms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-main mb-3">
                Photos and property information
              </h2>
              <p>
                Photos and descriptions you send are used to understand the work and provide
                estimates or plan the clearance. Treat messages as you would any
                communication about a property: avoid sharing more detail than you are
                comfortable with.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-main mb-3">Your rights</h2>
              <p className="mb-3">
                You have rights under UK data protection law, including to request access to
                your personal data, correction of inaccurate data, and erasure or
                restriction in certain circumstances. You may also object to some
                processing and, where processing is based on consent, withdraw consent at
                any time (without affecting the lawfulness of processing before withdrawal).
              </p>
              <p>
                You can complain to the Information Commissioner&apos;s Office (ICO) if you
                are concerned about how we use your data — see{" "}
                <a
                  href="https://ico.org.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-main underline underline-offset-2 hover:text-white"
                >
                  ico.org.uk
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-main mb-3">
                Cookies and website data
              </h2>
              <p>
                This website does not use analytics or advertising cookies that we control.
                Like any site, loading pages may involve standard technical processing by your
                browser and our hosting. If we introduce optional cookies or similar tools
                in future, we will update this notice.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-text-main mb-3">Contact us</h2>
              <p className="mb-3">
                For any privacy-related questions or to exercise your rights, contact:
              </p>
              <p className="text-text-main">
                Crawford House Clearance
                <br />
                Email:{" "}
                <a
                  href="mailto:gary@crawfordhouseclearance.co.uk"
                  className="underline underline-offset-2 hover:text-white"
                >
                  gary@crawfordhouseclearance.co.uk
                </a>
                <br />
                Phone:{" "}
                <a href="tel:07459420152" className="underline underline-offset-2 hover:text-white">
                  07459 420152
                </a>
              </p>
            </section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
