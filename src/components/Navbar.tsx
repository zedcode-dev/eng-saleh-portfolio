
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Services", href: "#services" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Update active section
            const sections = navLinks.map((link) => link.href.substring(1));
            const currentSection = sections.find((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            if (currentSection) setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
                className={`fixed top-4 inset-x-0 z-50 transition-all duration-300 pointer-events-none px-4`}
            >
                <div
                    className={`
                        pointer-events-auto
                        flex items-center justify-between gap-6
                        px-5 py-2.5 rounded-full mx-auto w-full md:w-fit max-w-7xl
                        transition-all duration-500 ease-out
                        ${isScrolled
                            ? "bg-white/90 backdrop-blur-xl border border-slate-200/60 shadow-lg shadow-slate-200/20"
                            : "bg-white/60 backdrop-blur-md border border-transparent"}
                    `}
                >
                    <a href="#home" className="text-xl font-bold font-space-grotesk tracking-tight text-slate-900 group">
                        Eng Saleh<span className="text-slate-900 transition-colors group-hover:text-slate-700">.</span>
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`
                                    relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300
                                    ${activeSection === link.href.substring(1)
                                        ? "text-slate-900"
                                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/50"}
                                `}
                            >
                                {activeSection === link.href.substring(1) && (
                                    <motion.div
                                        layoutId="active-pill"
                                        className="absolute inset-0 bg-white rounded-full shadow-sm border border-slate-100 -z-10"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{link.name}</span>
                            </a>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="hidden md:block pl-4 border-l border-slate-200">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#contact"
                            className="px-5 py-2 text-sm font-semibold text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20 block"
                        >
                            Contact
                        </motion.a>
                    </div>

                    {/* Mobile Toggle */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        className="md:hidden p-1 text-slate-600 hover:text-slate-900 transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.button>
                </div>
            </motion.nav>

            {/* Mobile Menu Panel */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-24 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-sm p-5 bg-white rounded-2xl shadow-2xl border border-slate-100 md:hidden origin-top"
                    >
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    href={link.href}
                                    className={`
                                        p-3 rounded-xl font-medium transition-colors
                                        ${activeSection === link.href.substring(1)
                                            ? "bg-slate-50 text-slate-900"
                                            : "text-slate-600 hover:bg-slate-50"}
                                    `}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.a
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                href="#contact"
                                className="mt-2 w-full text-center py-3 text-sm font-bold text-white bg-slate-900 rounded-xl"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Get in Touch
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

