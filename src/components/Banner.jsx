import Image from "next/image"

export const Banner = () => {
    return (
        <>
            <section className="w-screen h-screen relative">
                <img
                    width={500}
                    height={500}
                    className="w-full h-full object-cover brightness-[.70] bg-neutral-200"
                    src="https://cms-ganesha.ganeshaconsulting.co.id/uploads/header_06e576aa4c.jpg"
                    alt="Banner Image" />
                <div className="md:block hidden">
                    <div className="absolute bottom-0 md:bottom-10 left-5 right-5 md:left-10 md:w-[60%] space-y-5">
                        <p className="text-sm px-3 py-1 rounded-full border text-white w-fit backdrop-blur-sm">
                            PT SGW INDO LOGISTIK
                        </p>
                        <h1 className="text-3xl md:text-5xl font-light text-white tracking-wide">
                            Solusi Efektif untuk Logistik & Perdagangan Anda <br />
                            Meningkatkan efisiensi transportasi dan memaksimalkan potensi bisnis Anda!
                        </h1>
                    </div>
                    <div className="absolute bottom-5 md:right-10 md:top-10 md:bottom-10 md:w-[20%] text-white flex flex-col gap-3 justify-end md:items-end">
                        <h1 className="text-right">
                            Membawa Kemudahan dalam Pengelolaan Jasa Transportasi
                        </h1>
                        <button className="px-4 py-2 w-fit bg-secondaryColor text-darkColor rounded-full font-semibold text-sm">
                            Explore More
                        </button>
                    </div>
                </div>
                <div className="md:hidden block">
                    <div className="absolute top-24 left-5 right-5 md:w-[60%] space-y-5">
                        <p className="text-sm px-3 py-1 rounded-full border text-white w-fit backdrop-blur-sm">
                            PT SGW INDO LOGISTIK
                        </p>
                        <h1 className="text-3xl md:text-5xl font-light text-white tracking-wide">
                            Solusi Efektif untuk Logistik & Perdagangan Anda <br />
                            Meningkatkan efisiensi transportasi dan memaksimalkan potensi bisnis Anda!
                        </h1>
                    </div>
                    <div className="absolute bottom-5 left-5 right-5 md:w-[20%] text-white flex flex-col gap-3">
                        <h1 className="">
                            Membawa Kemudahan dalam Pengelolaan Jasa Transportasi
                        </h1>
                        <button className="px-4 py-2 w-fit bg-secondaryColor text-darkColor rounded-full font-semibold text-sm">
                            Explore More
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}