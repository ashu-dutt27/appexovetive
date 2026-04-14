import { useState } from "react";
import Service from "./service/Service";
import About from "./about/About";
import Industry from "./industry/Industry";
import Resource from "./resource/Resource";
import Hire from "./hire/Hire";


const Navbar = () => {
    const [showAbout, setShowAbout] = useState(false);
    const [showServices, setShowServices] = useState(false);
    const [showIndustry, setShowIndustry] = useState(false);
    const [showResource, setShowResource] = useState(false);
    const [showHire, setShowHire] = useState(false);


    return (
        <header className="fixed w-full bg-white dark:bg-black z-50 border-b border-muted shadow-lg min-h-[64px]">
            <div className="flex items-center justify-between px-6 lg:px-16 h-16 relative z-50 bg-white dark:bg-black dark:text-white">

                {/* Logo */}
                <a href="/" className="shrink-0">
                    <div className="relative h-10 w-40 shrink-0">
                        <img
                            src="https://img.nadcab.com/wp-content/uploads/2025/11/black-logo.svg"
                            alt="Nadcab logo"
                            width={160}
                            height={40}
                            className="object-contain"
                        />
                    </div>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center relative">
                    <nav className="flex items-center space-x-4 lg:space-x-6 xl:space-x-8">

                        {/* About (HOVER) */}
                        <div
                            className="relative"
                            onMouseEnter={() => setShowAbout(true)}
                            onMouseLeave={() => setShowAbout(false)}
                        >
                            <a
                                href="#"
                                className="inline-flex items-center h-12 font-semibold text-sm md:text-base text-black dark:text-white pr-4 lg:pr-6 hover:text-primary whitespace-nowrap"
                            >
                                About
                            </a>

                            {showAbout && (
                                <div className="fixed top-[55px] left-1/2 -translate-x-1/2 w-[80%] z-40">
                                    <About />
                                </div>
                            )}
                        </div>


                        {/* Services (HOVER) */}
                        <div
                            className="relative"
                            onMouseEnter={() => setShowServices(true)}
                            onMouseLeave={() => setShowServices(false)}
                        >
                            <a
                                href="#"
                                className="inline-flex items-center h-12 font-semibold text-sm md:text-base text-black dark:text-white pr-4 lg:pr-6 hover:text-primary whitespace-nowrap"
                            >
                                Services
                            </a>

                            {/* Mega Menu */}
                            {showServices && (
                                <div className="fixed top-[55px] left-1/2 -translate-x-1/2 w-[80%] z-40">
                                    <Service />
                                </div>
                            )}

                        </div>

                        <div
                            className="relative"
                            onMouseEnter={() => setShowIndustry(true)}
                            onMouseLeave={() => setShowIndustry(false)}
                        >
                            <a
                                href="#"
                                className="inline-flex items-center h-12 font-semibold text-sm md:text-base text-black dark:text-white pr-4 lg:pr-6 hover:text-primary whitespace-nowrap"
                            >
                                Industries
                            </a>

                            {showIndustry && (
                                <div className="fixed top-[55px] left-1/2 -translate-x-1/2 w-[80%] z-40">
                                    <Industry />
                                </div>
                            )}
                        </div>

                        {/* Resources (HOVER) */}
                        <div
                            className="relative"
                            onMouseEnter={() => setShowResource(true)}
                            onMouseLeave={() => setShowResource(false)}
                        >
                            <a
                                href="#"
                                className="inline-flex items-center h-12 font-semibold text-sm md:text-base text-black dark:text-white pr-4 lg:pr-6 hover:text-primary whitespace-nowrap"
                            >
                                Resources
                            </a>

                            {showResource && (
                                <div className="fixed top-[55px] left-1/2 -translate-x-1/2 w-[80%] z-40">
                                    <Resource />
                                </div>
                            )}
                        </div>


                        <div
                            className="relative"
                            onMouseEnter={() => setShowHire(true)}
                            onMouseLeave={() => setShowHire(false)}
                        >
                            <a href="#" className="inline-flex items-center h-12 font-semibold text-sm md:text-base text-black hover:text-primary">
                                Hire Developers
                            </a>

                            {showHire && (
                                <div className="fixed top-[55px] left-1/2 -translate-x-1/2 w-[80%] z-40">
                                    <Hire />
                                </div>
                            )}
                        </div>


                        {/* Portfolio */}
                        <a
                            href="/case-study"
                            className="inline-flex items-center h-12 font-semibold text-sm md:text-base text-black dark:text-white hover:text-primary whitespace-nowrap"
                        >
                            Portfolio
                        </a>

                    </nav>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-3">
                    {/* Mobile Actions */}
                    <div className="lg:hidden flex items-center gap-3">
                        <a href="tel:+919870635001" aria-label="Call Apexovative">
                            <div className="w-10 h-10 flex items-center justify-center bg-black text-white shadow-lg rounded-lg">
                                📞
                            </div>
                        </a>

                        <button
                            className="focus:outline-none bg-card card-shadow px-2 py-1.5 rounded-lg"
                            aria-label="Toggle menu"
                        >
                            ☰
                        </button>
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex items-center gap-4">
                        <a
                            href="/contact"
                            className="px-5 py-3 text-xs font-semibold bg-gray-900 dark:bg-white rounded-md text-white dark:text-black"
                        >
                            Consult Our Expert
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
