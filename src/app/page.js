import { AboutUs } from "@/components/AboutUs";
import { AnimateOnce } from "@/components/AnimateOnce";
import { Banner } from "@/components/Banner";
import { Contact } from "@/components/Contac";
import { Services } from "@/components/Services";
import { Vm } from "@/components/Vm";
import { WhyUs } from "@/components/WhyUs";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>PT. SGW INDO LOGISTIK - Solusi Logistik Efisien dan Terpercaya</title>
        <meta name="description" content="PT. SGW INDO LOGISTIK menyediakan layanan pengurusan transportasi (JPT) terpercaya untuk mendukung bisnis Anda. Kami fokus pada efisiensi, ketepatan waktu, dan solusi logistik yang terintegrasi." />
        <meta name="keywords" content="Jasa Pengurusan Transportasi, Layanan Logistik Indonesia, Solusi Logistik Efisien, Pengelolaan Transportasi, Logistik Terintegrasi di Indonesia, Pengiriman Barang Terpercaya, Efisiensi Biaya Transportasi" />
        <meta name="author" content="PT. SGW INDO LOGISTIK" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="PT. SGW INDO LOGISTIK - Solusi Logistik Efisien dan Terpercaya" />
        <meta property="og:description" content="Kami menyediakan layanan logistik untuk membantu bisnis Anda mengelola pengiriman barang dengan mudah dan efisien. Hubungi kami untuk solusi logistik terbaik!" />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://www.sgwindologistik.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PT. SGW INDO LOGISTIK - Solusi Logistik Efisien dan Terpercaya" />
        <meta name="twitter:description" content="PT. SGW INDO LOGISTIK memberikan solusi logistik terpercaya untuk mendukung pertumbuhan bisnis Anda. Efisien, hemat biaya, dan tepat waktu." />
        <meta name="twitter:image" content="/images/twitter-image.jpg" />
        <link rel="canonical" href="https://www.sgwindologistik.com" />
      </Head>
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
      <AnimateOnce animation={'animate__fadeInDown'} id="produk-&-layanan" style={{ scrollMarginTop: "120px" }}>
        <Services />
      </AnimateOnce>
      <AnimateOnce animation={'animate__fadeInDown'} id="kontak" style={{ scrollMarginTop: "10px" }}>
        <Contact />
      </AnimateOnce>
    </>
  );
}
