import { Tag } from "./Tag";

const produkKami = {
    judul: "Jasa Logistik",
    deskripsi: "Kami menyediakan layanan logistik yang dirancang untuk membantu bisnis Anda mengelola pengiriman dan distribusi barang dengan lebih mudah dan efisien.",
    keunggulan: [
        {
            judul: "Perencanaan Logistik yang Tepat",
            img: "https://images.unsplash.com/photo-1587149185211-28a2ef4c9a10?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            deskripsi: "Kami membantu Anda merancang proses logistik yang sesuai dengan kebutuhan bisnis Anda."
        },
        {
            judul: "Pengiriman yang Efisien",
            img: "https://plus.unsplash.com/premium_photo-1682144324433-ae1ee89a0238?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            deskripsi: "Kami memastikan setiap pengiriman tiba tepat waktu dengan pengelolaan yang optimal."
        },
        {
            judul: "Solusi Praktis dan Terpercaya",
            img: "https://images.unsplash.com/photo-1644352442473-57f4cd0873c3?q=80&w=3086&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            deskripsi: "Kami menyediakan solusi yang sederhana namun terpercaya untuk mengatasi tantangan logistik."
        },
        {
            judul: "Dukungan Kustomisasi",
            img: "https://images.unsplash.com/photo-1730473314315-519c9947904c?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            deskripsi: "Kami siap menyesuaikan layanan kami agar sesuai dengan kebutuhan spesifik bisnis Anda."
        },
        {
            judul: "Fokus pada Pertumbuhan Bisnis",
            img: "https://images.unsplash.com/photo-1449586919022-f3dfddc48a71?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            deskripsi: "Dengan logistik yang baik, kami mendukung pertumbuhan dan kesuksesan bisnis Anda."
        }
    ]
};

export const Services = () => {
    return (
        <>
            <section className="md:mx-10 md:my-24 my-10">
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
                <div className="md:grid md:grid-cols-5 w-full carousel gap-2 mt-5">
                    {produkKami.keunggulan.map((el, idx) => (
                        <div
                            key={idx}
                            className={`${idx === 0 && "ml-5 md:ml-0"} ${idx === produkKami.keunggulan.length - 1 && "mr-5 md:mr-0"} h-[60lvh] md:min-w-0 min-w-[80lvw] md:hover:scale-90 duration-300 ease-in-out relative rounded-3xl overflow-hidden`}
                        >
                            <img
                                className="w-full h-full object-cover rounded-3xl"
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
            </section>
        </>
    )
}