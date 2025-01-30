import Image from "next/image"
import { Tag } from "./Tag"

export const AboutUs = () => {
    return (
        <>
            <section className="md:mx-10 mx-5 py-10 md:py-24">
                <div className="space-y-3">
                    <Tag text={'About Us'} />
                    <div className="flex md:flex-row flex-col gap-2">
                        <div className="md:w-[35%] space-y-5">
                            <div className="space-y-2 font-medium md:text-xl text-lg p-5 border rounded-3xl h-full border-neutral-400">
                                <p>
                                    PT. SGW Indo Logistik adalah perusahaan yang bergerak di bidang jasa pengurusan transportasi (JPT).
                                </p>
                                <p>
                                    Dengan komitmen tinggi terhadap profesionalisme dan efisiensi, kami hadir untuk menjadi mitra terpercaya dalam memenuhi kebutuhan logistik  Anda.
                                </p>
                            </div>
                        </div>
                        <div className="md:w-[65%] flex md:flex-row flex-col gap-2">
                            <Image
                                width={500}
                                height={500}
                                className="md:w-[50%] md:h-[40lvh] object-cover rounded-3xl order-last md:order-none bg-neutral-200"
                                src="https://cms-ganesha.ganeshaconsulting.co.id/uploads/about_us_8550605568.jpg"
                                alt="" />
                            <div className="md:w-[50%] p-5 font-medium bg-secondaryBlue text-white rounded-3xl space-y-2 text-lg">
                                <p>
                                    Berdiri dengan visi memberikan solusi yang optimal, kami berkomitmen untuk selalu membantu banyak bisnis dalam pengelolaan transportasi yang efisien.
                                </p>
                                <p>
                                    Karena kami percaya bahwa sinergi yang kuat adalah kunci menuju keberhasilan suatu Bisnis.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}