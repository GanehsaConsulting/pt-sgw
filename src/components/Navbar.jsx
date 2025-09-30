"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const menu = [
    {
        label: "Home",
    },
    {
        label: "About",
    },
    {
        label: "Visi & Misi",
    },
    {
        label: "Why Us",
    },
    {
        label: "Produk & Layanan",
    },
]

export function urlFriendly(text) {
    return `${text.toLowerCase().replace(/\s+/g, '-')}`;
}


export const Navbar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [isMinimized, setIsMinimized] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 100);
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible]);

    const toggleMinimize = () => {
        // Jika tombol maximize ditekan, setVisible(true) untuk menampilkan navigasi
        setIsMinimized(!isMinimized);
        if (isMinimized) {
            setVisible(true); // Pasti tampilkan navigasi saat maximize
        }
    };


    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = 200;
            if (window.scrollY > scrollThreshold) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <>
            <div className={`z-[999] navbar2 fixed duration-300 ease-in-out
                ${isScrolled ? 'bg-white bg-opacity-50 backdrop-blur-lg' : 'bg-transparent text-white'}
                `}>
                <div className="navbar-start md:ml-8">
                    <Link
                        href={"/"}
                        className={`${isScrolled ? "" : "brightness-[200] contrast-200 grayscale"} duration-300 flex items-center`}
                    >
                        <Image
                            src='/logo.png'
                            width={55}
                            height={55}
                            className="-mt-2"
                            alt="SGW"
                        />

                        <Image
                            src='/teks.png'
                            width={160}
                            height={160}
                            className="-ml-10"
                            alt="SGW"
                        />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menu.map((el, idx) => (
                            <li key={idx}>
                                <a href={idx === 0 ? "/" : `#${urlFriendly(el.label)}`}>
                                    {el.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                </div>
                <div className="navbar-end md:mr-7">
                    <a href="#kontak" className="px-3 py-1 bg-white bg-opacity-50 backdrop-blur-lg rounded-full text-black font-medium">Contact</a>
                </div>
            </div >

            <nav className={`shadow-mainShadow md:hidden block bg-white bg-opacity-50 backdrop-blur-md rounded-full p-1 fixed bottom-3 left-3 right-3 z-[150] duration-500 ease-in-out transition-all origin-bottom-right
                            ${visible ? 'transform translate-y-0' : 'translate-y-[120%]'}
                            ${isMinimized ? 'transform translate-x-[105%] scale-0' : 'scale-100'}
                            `}>
                <ul className="w-full carousel2 gap-1 items-center justify-between text-sm font-medium">
                    {menu.map((el, idx) => (
                        <li key={idx}>
                            <a
                                className="group flex items-center flex-row gap-1 carousel-item hover:bg-darkColor hover:text-white px-2 py-1 rounded-full duration-300 ease-in-out"
                                href={idx === 0 ? "/" : `#${urlFriendly(el.label)}`}
                            >
                                <span className="text-[10px] truncate font-bold">
                                    {el.label}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}