import { AboutUs } from "@/components/AboutUs";
import { Banner } from "@/components/Banner";
import { Vm } from "@/components/Vm";
import { WhyUs } from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <Banner />
      <AboutUs />
      <Vm />
      <WhyUs />
    </>
  );
}
