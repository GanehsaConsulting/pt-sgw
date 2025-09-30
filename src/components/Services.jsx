import Image from "next/image";
import { Tag } from "./Tag";

const produkKami = {
    judul: "Jasa Logistik",
    deskripsi: "Kami menyediakan layanan logistik yang dirancang untuk membantu bisnis Anda mengelola pengiriman dan distribusi barang dengan lebih mudah dan efisien.",
    keunggulan: [
        {
            judul: "Perencanaan Logistik yang Tepat",
            img: "/1.webp",
            deskripsi: "Kami membantu Anda merancang proses logistik yang sesuai dengan kebutuhan bisnis Anda."
        },
        {
            judul: "Pengiriman yang Efisien",
            img: "/2.webp",
            deskripsi: "Kami memastikan setiap pengiriman tiba tepat waktu dengan pengelolaan yang optimal."
        },
        {
            judul: "Solusi Praktis dan Terpercaya",
            img: "/3.webp",
            deskripsi: "Kami menyediakan solusi yang sederhana namun terpercaya untuk mengatasi tantangan logistik."
        },
        {
            judul: "Dukungan Kustomisasi",
            img: "/4.webp",
            deskripsi: "Kami siap menyesuaikan layanan kami agar sesuai dengan kebutuhan spesifik bisnis Anda."
        },
        {
            judul: "Fokus pada Pertumbuhan Bisnis",
            img: "/5.webp",
            deskripsi: "Dengan logistik yang baik, kami mendukung pertumbuhan dan kesuksesan bisnis Anda."
        }
    ]
};

export const Services = () => {
    return (
        <>
            <section className="md:flex md:items-center md:justify-center md:min-h-screen">
                <div className="md:px-10 md:my-24 my-10 ">
                    <div className="flex gap-10 items-center mx-5 md:mx-0">
                        <div className="flex flex-col gap-2">
                            <Tag text={'Layanan'} />
                            <h1 className="text-4xl font-light">
                                {produkKami.judul}
                            </h1>
                            <p>
                                {produkKami.deskripsi}
                            </p>
                        </div>
                    </div>
                    <div className="md:grid md:grid-cols-5 w-full carousel2 gap-2 mt-5">
                        {produkKami.keunggulan.map((el, idx) => (
                            <div
                                key={idx}
                                className={`${idx === 0 && "ml-5 md:ml-0"} ${idx === produkKami.keunggulan.length - 1 && "mr-5 md:mr-0"} h-[60lvh] md:min-w-0 min-w-[80lvw] md:hover:scale-90 duration-300 ease-in-out relative rounded-3xl overflow-hidden`}
                            >
                                <Image
                                    width={500}
                                    height={500}
                                    className="w-full h-full object-cover rounded-3xl bg-neutral-200"
                                    src={el.img}
                                    alt={el.deskripsi}
                                />
                                <div className="absolute top-0 w-full h-[50%] bg-gradient-to-b from-darkColor to-transparent" />
                                <div className="absolute top-4 right-5 left-5">
                                    <h1 className="text-white text-xl font-light">
                                        {el.judul}
                                    </h1>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}