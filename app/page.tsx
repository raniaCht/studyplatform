import Contries from "@/components/Contries";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Payments from "@/components/Payments";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Statistics from "@/components/Statistics";
import Steps from "@/components/Steps";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Statistics />
      <Contries />
      <Steps />
      <Reviews />
      <Payments />
      <FAQs />
      <Footer />
    </>
  );
}
