import { Hero } from "@/components/home/Hero";
import { ServicesSection } from "@/components/home/ServicesSection";
import { CasesSection } from "@/components/home/CasesSection";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <CasesSection />
      <CTASection />
    </>
  );
}
