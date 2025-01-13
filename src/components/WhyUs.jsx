import { Tag } from "./Tag";

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
                <div className="space-y-2 mb-5 ">
                    <Tag text={'Keunggulan'} />
                    <h1 className="text-4xl font-light">
                        Kenapa Pilih Kami?
                    </h1>
                </div>
                <div className="flex md:flex-row flex-col gap-2">
                    {whyUs.map((el, idx) => (
                        <div key={idx} className="md:h-[60lvh] duration-500 hover:min-w-[30%] hover:invert ease-in-out min-w-0 bg-darkColor text-white rounded-3xl p-5 flex flex-col justify-between">
                            <h1 className="text-2xl md:text-3xl font-light">
                                {el.title}
                            </h1>
                            <p className="mt-10 md:mt-0">
                                {el.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}