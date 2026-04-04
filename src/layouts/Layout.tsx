import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#0f172a] text-gray-100 min-h-screen">

      <Header />

      <main>
        {children}
      </main>

      <Footer />

    </div>
  );
}