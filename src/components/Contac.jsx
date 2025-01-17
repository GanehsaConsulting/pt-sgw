import { FaFacebookF, FaInstagram, FaLinkedin, FaPhone, FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { Tag } from "./Tag";

export const contacts = {
    address: {
        label: "Head Office",
        data: "Jl. Kebon Bawang V No.12, RT.11/RW.8, Kb. Bawang, Kec. Tj. Priok, Jkt Utara, Daerah Khusus Ibukota Jakarta 14320",
        embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4008.449157768673!2d106.89026229999999!3d-6.1138618000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1f002b6ec573%3A0xf6f2514b833f75ea!2sPT.%20SGW%20INDO%20LOGISTIK!5e1!3m2!1sid!2sid!4v1737099742448!5m2!1sid!2sid",
        link: "https://maps.app.goo.gl/nHfRnMtuy8fkGgxv6"
    },
    phone: {
        name: '085715898379',
        link: 'tel:085715898379',
        logo: <FaPhone />
    },
    mail: {
        name: "krektransformasiglobal@gmail.com",
        link: "mailto:krektransformasiglobal@gmail.com",
        logo: <IoMailOutline />
    },
    socmed: [
        {
            name: 'Instagram',
            link: 'https://www.instagram.com/sgw.indologistik',
            logo: <FaInstagram />,
        },
        {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/sgw-indo-logistik-5a47971b1/',
            logo: <FaLinkedin />,
        },
        {
            name: 'WhatsApp',
            link: 'https://api.whatsapp.com/send?phone=081908614323',
            logo: <FaWhatsapp />,
        },
    ]
}

export const Contact = ({ id }) => {
    return (
        <>
            <section id={id} className="px-5 md:px-10 md:py-24 py-10 rounded-3xl">
                <Tag text={'Kontak & Lokasi'} className={'mb-5'} />
                <div className="flex md:flex-row flex-col gap-5">
                    <div className="space-y-5">
                        <a
                            href={contacts.address.link}
                        >
                            <div
                                className="p-5 rounded-[30px] bg-gray-100 duration-300 ease-in-out hover:scale-95 hover:invert"
                            >
                                <h1>
                                    {contacts.address.label}
                                </h1>
                                <h2 className="text-lg md:text-xl font-medium">
                                    {contacts.address.data}
                                </h2>
                            </div>
                        </a>
                        <div className="flex flex-wrap gap-5">
                            {contacts.socmed.map((el, idx) => (
                                <a key={idx} href={el.link} className="w-full">
                                    <div className="flex items-center justify-center gap-2 p-10 grow bg-gray-100 rounded-[30px] duration-300 ease-in-out hover:scale-95 hover:invert">
                                        <span className="text-2xl md:text-4xl text-sky-900">
                                            {el.logo}
                                        </span>
                                        <h1 className="text-xl md:text-3xl">
                                            {el.name}
                                        </h1>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="mapouter rounded-3xl overflow-hidden grow h-[60lvh] md:h-auto w-full">
                        <div className="overflow-hidden rounded-box h-full">
                            <iframe
                                className="w-full h-full"
                                src={contacts.address.embed}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}