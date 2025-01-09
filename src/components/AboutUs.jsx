import { Tag } from "./Tag"

export const AboutUs = () => {
    return (
        <>
            <section className="md:mx-10 mx-5 py-10 md:py-24">
                <div className="space-y-3">
                    <Tag text={'About Us'} />
                    <div className="flex gap-5">
                        <div className="md:w-[35%] space-y-5">
                            <div className="space-y-2 font-medium text-xl p-5 border rounded-3xl h-full border-neutral-400">
                                <p>
                                    PT. SGW INDO LOGISTIK adalah perusahaan yang bergerak di bidang jasa pengurusan transportasi (JPT).
                                </p>
                                <p>
                                    Dengan komitmen tinggi terhadap profesionalisme dan efisiensi, kami hadir untuk menjadi mitra terpercaya dalam memenuhi kebutuhan logistik  Anda.
                                </p>
                            </div>
                        </div>
                        <div className="w-[65%] flex gap-5">
                            <img
                                className="w-[50%] h-[40lvh] object-cover rounded-3xl"
                                src="https://images.unsplash.com/photo-1715270352563-7527733ad0fd?q=80&w=3039&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="" />
                            <div className="md:w-[50%] p-5 font-medium bg-neutral-200 rounded-3xl space-y-2 text-lg">
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