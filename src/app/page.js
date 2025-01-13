import { AboutUs } from "@/components/AboutUs";
import { AnimateOnce } from "@/components/AnimateOnce";
import { Banner } from "@/components/Banner";
import { Contact } from "@/components/Contac";
import { Services } from "@/components/Services";
import { Vm } from "@/components/Vm";
import { WhyUs } from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <AnimateOnce animation={'animate__fadeInDown'} style={{ scrollMarginTop: "200px" }}>
        <Banner />
      </AnimateOnce>
      <AnimateOnce animation={'animate__fadeInDown'} id="about" style={{ scrollMarginTop: "200px" }}>
        <AboutUs />
      </AnimateOnce>
      <AnimateOnce animation={'animate__fadeInDown'} id="visi-&-misi" style={{ scrollMarginTop: "100px" }}>
        <Vm />
      </AnimateOnce>
      <AnimateOnce animation={'animate__fadeInDown'} id="why-us" style={{ scrollMarginTop: "20px" }}>
        <WhyUs />
      </AnimateOnce>
      <AnimateOnce animation={'animate__fadeInDown'} id="produk-&-layanan" style={{ scrollMarginTop: "90px" }}>
        <Services />
      </AnimateOnce>
      <AnimateOnce animation={'animate__fadeInDown'} id="kontak" style={{ scrollMarginTop: "10px" }}>
        <Contact />
      </AnimateOnce>
    </>
  );
}
