import Image from "next/image";
import { Tag } from "./Tag"

const misi = [
    {
        head: "Menyediakan solusi logistik yang handal",
        desc: "Mengoptimalkan pengiriman alat berat dengan jadwal yang tepat waktu, aman, dan efisien untuk memenuhi kebutuhan pelanggan."
    },
    {
        head: "Mengutamakan keselamatan",
        desc: "Menjamin bahwa setiap proses pengiriman alat berat dilakukan dengan standar keselamatan yang tinggi untuk melindungi barang dan personel."
    },
    {
        head: "Mengembangkan jaringan dan infrastruktur",
        desc: "Memperkuat jaringan transportasi, fasilitas penyimpanan, dan armada untuk meningkatkan kapasitas dan fleksibilitas layanan."
    },
    {
        head: "Memanfaatkan teknologi terbaru",
        desc: "Mengintegrasikan teknologi informasi dan komunikasi untuk mempermudah proses tracking, monitoring, dan pengelolaan pengiriman."
    },
    {
        head: "Memberikan layanan pelanggan yang optimal",
        desc: "Memberikan dukungan dan pelayanan prima dengan respons yang cepat dan solusi yang sesuai dengan kebutuhan pelanggan."
    },
    {
        head: "Berorientasi pada keberlanjutan",
        desc: "Menerapkan praktik logistik yang ramah lingkungan dan berkelanjutan, serta memperhatikan efisiensi sumber daya."
    }
];


export const Vm = () => {
    return (
        <>
            <section className="md:mx-10 mx-5 py-10 md:py-24">
                <div className="flex md:flex-col flex-col gap-5 md:gap-10 justify-center items-center">
                    <div className="md:w-full bg-darkColor rounded-3xl p-3 flex md:flex-row flex-col items-center gap-5">
                        <Image
                            width={500}
                            height={500}
                            className="md:w-[50%] rounded-xl md:h-[70lvh] object-cover bg-neutral-200"
                            src="https://cms-ganesha.ganeshaconsulting.co.id/uploads/visi_1006b4b663.jpg"
                            alt=""
                        />
                        <div>
                            <div className="space-y-3">
                                <Tag text={'Visi'} className={'text-white h-fit'} />
                                <p className="text-white text-lg">
                                    Menjadi penyedia layanan logistik alat berat terkemuka yang dikenal Karena inovasi, efisiensi, dan komitmen terhadap keselamatan serta Kepuasan pelanggan, dengan mendukung pertumbuhan industri Konstruksi, pertambangan, dan infrastruktur di indonesia.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="h-[90lvh] relative">
                <Image
                    fill
                    className="h-full w-full object-cover bg-neutral-200"
                    src="https://cms-ganesha.ganeshaconsulting.co.id/uploads/misi_31beee518d.jpg"
                    alt="" />
                <div className="absolute inset-0 h-[10%] bg-gradient-to-b from-white to-transparent"></div>

                <div className="absolute inset-0 h-full w-full">
                    <div className="md:mx-10 mx-0 flex flex-col justify-center gap-5 h-full">
                        <p className="mx-5 md:mx-0 px-4 py-1 w-fit  bg-neutral-300 text-neutral-700 bg-opacity-30 backdrop-blur-lg rounded-full text-2xl md:text-3xl uppercase font-light tracking-wider">
                            Misi
                        </p>
                        <div className="md:flex gap-3 carousel2 w-full">
                            {misi.map((el, idx) => (
                                <div
                                    key={idx}
                                    className={`
                                        ${idx === 0 && "ml-5 md:ml-0"} ${idx === misi.length - 1 && "mr-5 md:mr-0"}
                                        flex flex-col gap-10 grow justify-between min-h-[52lvh] md:min-w-0 min-w-[70%] bg-neutral-300 text-neutral-700 bg-opacity-30 backdrop-blur-lg p-5 rounded-3xl`}
                                >
                                    <h1 className="text-xl md:text-2xl font-light">
                                        {el.head}
                                    </h1>
                                    <p className="mt-10 md:mt-0">
                                        {el.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}