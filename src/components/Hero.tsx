
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download, Shield } from "lucide-react";
import Image from "next/image";

const roles = [
    "IT Manager",
    "Network Engineer",
    "Cloud Architect",
    "Technical Trainer"
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring" as const, stiffness: 50, damping: 20 }
    }
};

export const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    // Typing Animation Effect
    useEffect(() => {
        const currentRole = roles[roleIndex];
        const typeSpeed = isDeleting ? 40 : 80;

        const timeout = setTimeout(() => {
            if (!isDeleting && displayText === currentRole) {
                // Wait before starting to delete
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && displayText === "") {
                // Move to next role
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            } else {
                // Typing or Deleting
                setDisplayText(
                    currentRole.substring(0, displayText.length + (isDeleting ? -1 : 1))
                );
            }
        }, typeSpeed);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, roleIndex]);

    return (
        <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-white">

            {/* Background Decor */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-40" />

            {/* Animated Gradient Blob */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-[600px] h-[600px] bg-slate-100/40 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2"
            />

            <div className="container mx-auto px-4 z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

                    {/* Left Column: Text */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="order-last lg:order-first text-center lg:text-left"
                    >
                        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-sm font-semibold mx-auto lg:mx-0">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-900"></span>
                            </span>
                            Available for Projects
                        </motion.div>

                        <motion.h1 variants={itemVariants} className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                            Hi, I'm <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700">
                                Eng Saleh Khalifa
                            </span>
                        </motion.h1>

                        <motion.div variants={itemVariants} className="h-10 mb-8 flex items-center justify-center lg:justify-start">
                            <span className="text-2xl lg:text-3xl text-slate-500 font-medium font-space-grotesk mr-3">
                                I am a
                            </span>
                            <span className="text-2xl lg:text-3xl font-bold text-slate-900 font-mono border-r-4 border-slate-900 pr-2">
                                {displayText}
                            </span>
                        </motion.div>

                        <motion.p variants={itemVariants} className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed mx-auto lg:mx-0">
                            Helping organizations build secure, scalable, and resilient IT infrastructures.
                            18+ years of excellence in Networking, Cloud Computing, and System Administration.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center lg:justify-start">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#services"
                                className="btn-primary bg-slate-900 hover:bg-slate-800 text-white"
                            >
                                Explore Expertise
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="/CV.pdf"
                                target="_blank"
                                className="btn-outline group border-slate-200 hover:bg-slate-50"
                            >
                                <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
                                Download CV
                            </motion.a>
                        </motion.div>

                        <motion.div variants={itemVariants} className="mt-12 flex items-center justify-center lg:justify-start gap-6 text-slate-400">
                            <a href="https://www.linkedin.com/in/saleh-mahmoud-01092726030/" target="_blank" className="hover:text-slate-900 transition-colors hover:scale-110 transform duration-200"><Linkedin size={24} /></a>
                            <a href="https://wa.me/201092726030" target="_blank" className="hover:text-slate-900 transition-colors hover:scale-110 transform duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.262-4.27-9.541-9.538-9.541-5.448 0-9.886 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.084 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                </svg>
                            </a>
                            <a href="mailto:salehkhalifa136@gmail.com" target="_blank" className="hover:text-slate-900 transition-colors hover:scale-110 transform duration-200"><Mail size={24} /></a>
                            <div className="h-px w-12 bg-slate-200" />
                            <span className="text-xs uppercase tracking-wider font-semibold">Get Connected</span>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Photo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
                        className="relative flex justify-center lg:justify-end order-first lg:order-last mb-0 lg:mb-0"
                    >
                        {/* Decorative Circle Background */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-slate-100 rounded-full blur-3xl -z-10" />

                        <div className="relative w-48 h-48 lg:w-[450px] lg:h-[550px] rounded-full lg:rounded-3xl overflow-hidden shadow-2xl border-4 border-white lg:rotate-3 lg:hover:rotate-0 transition-transform duration-700 ease-out will-change-transform">
                            <Image
                                src="/profile.png"
                                alt="Saleh Khalifa"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                                priority
                            />

                            {/* Overlay Gradient for Text Readability if needed, or just style */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-60"></div>
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: [0, -10, 0] }}
                            transition={{
                                opacity: { delay: 1, duration: 0.5 },
                                y: { delay: 1, duration: 0.5 },
                                default: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1.5 }
                            }}
                            className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden md:block"
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-slate-100 rounded-lg text-slate-900">
                                    <Shield size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-bold uppercase">Certified</p>
                                    <p className="text-sm font-bold text-slate-900">Cybersecurity Expert</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};