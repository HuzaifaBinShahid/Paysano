"use client";

import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import { useEffect, useState } from "react";
import CancelSharpIcon from '@mui/icons-material/CancelSharp';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    // Animation
    // const [animationComplete, setAnimationComplete] = useState(false);

    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //         setAnimationComplete(true);
    //     }, 500);
    //     return () => clearTimeout(timeout);
    // }, []);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <nav className={`flexBetween`}>
            <Link href="/" className="lg:padding-container">
                <Image src="/logo-main.svg" alt="logo" width={90} height={29} />
            </Link>

            <ul className="hidden bg-green h-full gap-12 lg:flex px-8 py-4 rounded">
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key} className="text-regular-16 flexCenter cursor-pointer pb-1 transition-all hover:font-bold">
                        {link.label}
                    </Link>
                ))}
                <Link href="/getstarted">
                    <Image
                        src="/search.svg"
                        alt="search"
                        width={24}
                        height={24}
                        className="inline-block cursor-pointer "
                    />
                </Link>
            </ul>

            <Image
                src="/home/menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="inline-block cursor-pointer lg:hidden"
                onClick={toggleMenu}
            />

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 left-0 w-full h-full bg-green z-50 transform ${openMenu ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}
            >
                <div className="flex justify-between p-4">
                    <Link href="/" className="lg:padding-container">
                        <Image src="/logo-main.svg" alt="logo" width={74} height={29} className="bg-white p-3 rounded-xl"/>
                    </Link>
                    <CancelSharpIcon
                        fontSize="large"
                        className="cursor-pointer text-black"
                        onClick={toggleMenu}
                    /> 
                </div>
                <ul className="flex flex-col items-center gap-8 mt-8">
                    {NAV_LINKS.map((link) => (
                        <Link href={link.href} key={link.key} className="text-regular-16 cursor-pointer transition-all hover:font-bold">
                            {link.label}
                        </Link>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
