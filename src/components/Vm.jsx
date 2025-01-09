import { Tag } from "./Tag"

const misi = [
    "Memberikan layanan logistik yang efisien, tepat waktu, dan terintegrasi.",
    "Membangun kemitraan yang kuat berdasarkan transparansi dan profesionalisme.",
    "Mendukung pengembangan bisnis pelanggan melalui solusi logistik yang unggul.",
    "Berkontribusi pada peningkatan kualitas layanan transportasi di Indonesia.",
]

export const Vm = () => {
    return (
        <>
            <section className="md:mx-10 mx-5 py-10 md:py-24">
                <div className="flex md:flex-row flex-col gap-5">
                    <div className="w-[50%] bg-darkColor rounded-3xl p-3 flex items-center gap-5">
                        <img
                            className="w-[50%] rounded-xl h-[50lvh] object-cover"
                            src="https://images.unsplash.com/photo-1589725971583-8fa4d89e5e33?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                        />
                        <div>
                            <div className="space-y-3">
                                <Tag text={'Visi'} className={'text-white h-fit'} />
                                <p className="text-white text-lg">
                                    Menjadi perusahaan terkemuka di Indonesia dalam bidang logistik yang dikenal karena inovasi, keandalan, dan kontribusi positif terhadap pertumbuhan bisnis dan ekonomi.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Tag text={'Misi Kami'} className={'!text-2xl px-4 py-2 border-b'} />
                        <div>
                            {misi.map((e, idx) => (
                                <div
                                    key={idx}
                                    className="collapse-title text-xl font-medium border-b border-neutral-400"
                                >
                                    {e}
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}