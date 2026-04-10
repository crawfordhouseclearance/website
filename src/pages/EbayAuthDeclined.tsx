import Footer from "../components/Footer";
import Header from "../components/Header";

export default function EbayAuthDeclined() {
  return (
    <>
      <Header />

      <main>
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-6 text-left">
            <h1 className="text-3xl font-semibold text-white mb-10">
              eBay authorisation declined
            </h1>

            <p className="text-sm text-text-muted leading-relaxed">
              eBay authorisation was declined. You can close this page and try again if
              needed.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
