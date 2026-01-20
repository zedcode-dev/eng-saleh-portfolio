"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Briefcase, Award, Zap, Globe, Cpu } from "lucide-react";

export const About = () => {
    return (
        <section id="about" className="py-16 md:py-24 bg-white relative overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-slate-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">

                {/* Section Header */}
                <div className="mb-16 max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <h2 className="section-heading text-slate-900">About Me</h2>
                        <p className="section-subheading text-lg">
                            Building digital resilience and empowering teams through technology.
                        </p>
                    </motion.div>
                </div>

                {/* Bento Grid layout */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15
                            }
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]"
                >

                    {/* 1. Main Bio - Large Card */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 40 } }
                        }}
                        className="md:col-span-2 lg:col-span-2 row-span-2 bg-slate-50 border border-slate-100 rounded-3xl p-8 flex flex-col justify-between group hover:border-slate-200 hover:shadow-lg transition-all duration-300"
                    >
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-white rounded-lg shadow-sm text-slate-900 group-hover:scale-110 transition-transform duration-300">
                                    <Cpu size={20} />
                                </div>
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Biography</span>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 leading-tight">
                                Architecting secure infrastructure & <span className="text-slate-700">driving business growth.</span>
                            </h3>

                            <div className="space-y-4 text-slate-600 leading-relaxed">
                                <p>
                                    With over <strong className="text-slate-900">18 years</strong> of expertise, I specialize in designing high-availability networks and cloud ecosystems. My approach combines technical precision with strategic leadership.
                                </p>
                                <p>
                                    Beyond engineering, I am passionate about mentorship—having trained over 500 professionals—and social impact through my work with the Future Youth Foundation.
                                </p>
                            </div>
                        </div>

                        {/* Interactive Stats Strip */}
                        <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-200/60">
                            {[
                                { val: "18+", lbl: "Years Exp" },
                                { val: "500+", lbl: "Trained" },
                                { val: "100%", lbl: "Uptime" }
                            ].map((stat, i) => (
                                <div key={i} className="text-center group-hover:-translate-y-1 transition-transform duration-300" style={{ transitionDelay: `${i * 100}ms` }}>
                                    <div className="text-2xl font-bold text-slate-900">{stat.val}</div>
                                    <div className="text-xs text-slate-500 font-medium uppercase mt-1">{stat.lbl}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* 2. Global Mindset (Location) - Dark Mode Card */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 40 } }
                        }}
                        className="bg-slate-900 rounded-3xl p-8 flex flex-col justify-between text-white relative overflow-hidden group hover:shadow-xl hover:shadow-slate-900/20 transition-all duration-300"
                    >
                        {/* Abstract Globe/Map Background */}
                        <div className="absolute top-0 right-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500 group-hover:scale-110 transform">
                            <Globe size={120} strokeWidth={0.5} />
                        </div>

                        <div>
                            <div className="p-2 bg-white/10 w-fit rounded-lg mb-4 backdrop-blur-sm group-hover:bg-white/20 transition-colors">
                                <MapPin size={20} className="text-slate-200" />
                            </div>
                            <h4 className="text-lg font-bold !text-white">Assiut based, <br /> Globally Connected.</h4>
                        </div>

                        <div className="mt-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold rounded-full">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                Available for Remote
                            </div>
                        </div>
                    </motion.div>

                    {/* 3. Current Focus - Minimal Card */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 40 } }
                        }}
                        className="bg-white border border-slate-100 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden shadow-sm hover:shadow-lg hover:border-slate-200 transition-all duration-300 group"
                    >
                        <div className="absolute top-4 right-4 text-xs font-bold text-slate-300 uppercase group-hover:text-slate-400 transition-colors">Current Role</div>
                        <div className="mb-4 text-slate-900 group-hover:scale-110 transition-transform duration-300 origin-left">
                            <Briefcase size={28} />
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">IT Manager</h4>
                        <p className="text-sm text-slate-500 leading-snug">
                            Leading network strategy & digital transformation at <span className="font-semibold text-slate-700">ITI</span>.
                        </p>
                    </motion.div>

                    {/* 4. Certifications / Values - Horizontal Span */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 40 } }
                        }}
                        className="md:col-span-2 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 group hover:shadow-lg hover:shadow-slate-900/20 transition-all duration-300"
                    >
                        <div className="relative z-10 flex-1">
                            <div className="flex items-center gap-3 mb-3">
                                <Award className="text-slate-200 group-hover:rotate-12 transition-transform duration-300" size={24} />
                                <h4 className="text-lg font-bold !text-white">Continuous Mastery</h4>
                            </div>
                            <p className="!text-blue-100 text-sm leading-relaxed max-w-sm">
                                Constantly evolving with the tech landscape. Recent certifications in Cloud Architecture & Cyber Defense.
                            </p>
                        </div>

                        {/* Visual Tags */}
                        <div className="flex gap-3 relative z-10">
                            {['AWS Certified', 'Azure Admin', 'CCNA'].map((cert, i) => (
                                <motion.span
                                    key={cert}
                                    whileHover={{ scale: 1.05 }}
                                    className="px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-lg text-xs font-medium border border-white/10 whitespace-nowrap cursor-default"
                                >
                                    {cert}
                                </motion.span>
                            ))}
                        </div>

                        {/* Decor */}
                        <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/3 translate-y-1/3 group-hover:rotate-12 transition-transform duration-700">
                            <Award size={200} />
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};
