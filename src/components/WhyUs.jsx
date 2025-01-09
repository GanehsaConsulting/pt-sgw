const whyUs = [
    {
        title: "Layanan Terintegrasi",
        desc: "Memilih transportasi yang unggul untuk solusi yang komprehensif bisnis Anda."
    },
    {
        title: "Pelayanan Yang Baik",
        desc: "Kami selalu fokus pada ketepatan waktu dan kualitas layanan yang kami berikan."
    },
    {
        title: "Jaringan Yang Luas",
        desc: "Dukungan mitra bisnis di seluruh Indonesia untuk Bisnis Anda."
    },
    {
        title: "Profesionalisme",
        desc: "Kami memiliki Tim yang berpengalaman yang siap memberikan solusi terbaik untuk Anda dan Bisnis Anda."
    },
    {
        title: "Efisiensi Biaya",
        desc: "Kami memberikan layanan dengan harga kompetitif tanpa mengurangi kualitasnya."
    }
];

export const WhyUs = () => {
    return (
        <>
            <section className="md:mx-10 mx-5 md:py-24">
                <h1 className="mb-5 text-5xl ">
                    Kenapa Pilih Kami?
                </h1>
                <div className="flex gap-5">
                    {whyUs.map((el, idx) => (
                        <div key={idx} className="h-[60lvh] duration-500 hover:min-w-[50%] ease-in-out min-w-0 bg-darkColor text-white rounded-3xl p-5 flex flex-col justify-between">
                            <h1 className="text-3xl font-light text-wrap">
                                {el.title}
                            </h1>
                            <p>
                                {el.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}