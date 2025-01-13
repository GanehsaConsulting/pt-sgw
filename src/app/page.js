import { AboutUs } from "@/components/AboutUs";
import { Banner } from "@/components/Banner";
import { Contact } from "@/components/Contac";
import { Services } from "@/components/Services";
import { Vm } from "@/components/Vm";
import { WhyUs } from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <div id="">
        <Banner />
      </div>
      <div id="about" style={{ scrollMarginTop: "200px" }}>
        <AboutUs />
      </div>
      <div id="visi-&-misi" style={{ scrollMarginTop: "100px" }}>
        <Vm />
      </div>
      <div id="why-us" style={{ scrollMarginTop: "20px" }}>
        <WhyUs />
      </div>
      <div id="produk-&-layanan" style={{ scrollMarginTop: "90px" }}>
        <Services />
      </div>
      <div id="kontak" style={{ scrollMarginTop: "10px" }}>
        <Contact />
      </div>
    </>
  );
}
