import Hero from "@/components/landing-page/Hero";
import Image from "next/image";
import Navbar from "@/components/landing-page/Navbar";
import KeyFeatures from "@/components/landing-page/KeyFeatures";
import Contact from "@/components/landing-page/Contact";
import Footer from "@/components/landing-page/Footer";
import { getUserSession } from "@/lib/session";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await getUserSession();
  if (user) {
    redirect("/home");
  }
  return (
    <main className="relative">
      <div className="absolute top-0">
        <Navbar />
      </div>
      <Hero />
      <KeyFeatures />
      <Contact />
      <Footer />
    </main>
  );
}
