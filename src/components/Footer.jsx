"use client"
import Image from "next/image"
import { contacts } from "./Contac"
import { menu, urlFriendly } from "./Navbar"

export const Footer = () => {
    return (
        <>
            <footer className="footer text-base-content p-10">
                <aside>
                    <Image
                        src='/logo-full.png'
                        width={120}
                        height={120}
                        alt="SGW"
                    />
                    <div>
                        <p className="text-2xl md:text-3xl font-light">
                            PT. SGW Indo Logistik
                        </p>
                        <p>
                            Membawa Kemudahan dalam Pengelolaan Jasa Transportasi
                        </p>
                    </div>
                </aside>
                <nav className="md:max-w-[300px]">
                    <h6 className="footer-title">Address</h6>
                    <a href={contacts.address.link} className="link link-hover">
                        {contacts.address.data}
                    </a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    {menu.map((el, idx) => (
                        <a key={idx} href={"#" + urlFriendly(el.label)} className="link link-hover">
                            {el.label}
                        </a>
                    ))}
                </nav>
            </footer>
        </>
    )
}