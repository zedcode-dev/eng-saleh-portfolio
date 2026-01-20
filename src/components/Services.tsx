"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Network, Building, GraduationCap, ShieldCheck, Server, LineChart } from "lucide-react";

const services = [
    {
        title: "Network Architecture",
        category: "Infrastructure",
        description: "Designing and implementing secure, high-availability enterprise networks. Expertise in VPNs, Firewalls, and scalable routing solutions.",
        icon: Network,
        color: "slate"
    },
    {
        title: "IT Management & Strategy",
        category: "Leadership",
        description: "Leading digital transformation and optimizing IT workflows. Specialized in aligning technology infrastructure with organizational goals.",
        icon: Building,
        color: "slate"
    },
    {
        title: "Technical Training",
        category: "Education",
        description: "Delivering comprehensive training programs for CCNA, Cloud Computing, and System Admin. Mentoring the next generation of IT professionals.",
        icon: GraduationCap,
        color: "slate"
    },
    {
        title: "Cybersecurity Auditing",
        category: "Security",
        description: "Conducting vulnerability assessments and implementing robust security protocols (Fortinet, Palo Alto) to protect critical assets.",
        icon: ShieldCheck,
        color: "slate"
    },
    {
        title: "Cloud Migration",
        category: "Modernization",
        description: "Architecting seamless migrations to Azure and hybrid cloud environments, tailored for cost-efficiency and performance.",
        icon: Server,
        color: "slate"
    },
    {
        title: "Performance Optimization",
        category: "Consulting",
        description: "Analyzing system bottlenecks and implementing strategic upgrades to ensure 99.9% uptime and business continuity.",
        icon: LineChart,
        color: "slate"
    }
];

export const Services = () => {
    return (
        <section id="services" className="py-16 md:py-24 bg-white relative overflow-hidden">
            {/* Soft Gradient Background */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-50/50 via-white to-white pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="mb-20 max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="section-heading text-slate-900">What I Do</h2>
                        <p className="section-subheading">
                            Delivering specialized value through engineering excellence and strategic leadership.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-200 p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1"
                        >
                            <div className="absolute top-8 right-8 text-slate-200 group-hover:text-slate-100 transition-colors">
                                <span className="text-6xl font-black opacity-20 select-none">
                                    0{idx + 1}
                                </span>
                            </div>

                            <div className={`
                                w-14 h-14 rounded-xl flex items-center justify-center mb-8
                                bg-white shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-300
                                text-slate-900
                            `}>
                                <service.icon size={28} strokeWidth={1.5} />
                            </div>

                            <div className="relative">
                                <span className={`text-xs font-bold uppercase tracking-widest text-slate-500 mb-3 block`}>
                                    {service.category}
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-slate-700 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    {service.description}
                                </p>
                            </div>

                            <a href="#contact" className="mt-8 pt-6 border-t border-slate-100 flex items-center text-slate-900 text-sm font-bold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 cursor-pointer">
                                <span>Request Consultation</span>
                                <ArrowUpRight size={16} className="ml-2" />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
