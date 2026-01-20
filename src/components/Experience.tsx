"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Building2, Calendar, ArrowUpRight } from "lucide-react";

const experiences = [
    {
        id: 1,
        role: "Network Engineer",
        company: "ITI (Information Technology Institute)",
        period: "Jan 2017 – Present",
        description: "Designed, implemented, and secured enterprise networks. Led IT infrastructure projects ensuring high availability and disaster recovery. Trained and mentored IT staff on CCNA, Windows Server, and Cloud solutions.",
        tags: ["Network Security", "Infrastructure", "Training"],
        isCurrent: true
    },
    {
        id: 2,
        role: "Mentor",
        company: "Pluralsight.com",
        period: "2022 – Present",
        description: "Mentored IT professionals in networking and system administration.",
        tags: ["Mentorship", "Cloud", "Career Growth"],
        isCurrent: true
    },
    {
        id: 3,
        role: "Chairman",
        company: "FYF (Future Youth Foundation NGO)",
        period: "Feb 2008 – Present",
        description: "Led an NGO providing IT and language training for youth under the Ministry of Social Solidarity.",
        tags: ["Leadership", "NGO", "Social Impact"],
        isCurrent: true
    },
    {
        id: 4,
        role: "Trainer",
        company: "ITI, FYF, Ustudy24 (KSA)",
        period: "Aug 2007 – Present",
        description: "Delivered professional training in CCNA, MCSE, A+, N+, S+, Cloud, and IT security. Developed training material and evaluated student graduation projects.",
        tags: ["Education", "Curriculum Dev", "Global Training"],
        isCurrent: true
    },
    {
        id: 5,
        role: "Network Design Consultant",
        company: "Qusiya City Council",
        period: "2019",
        description: "Designed and implemented a full IT infrastructure.",
        tags: ["Consultancy", "Infrastructure", "Design"],
        isCurrent: false
    },
    {
        id: 6,
        role: "System Administrator",
        company: "ITI (Information Technology Institute)",
        period: "Jan 2011 – Dec 2016",
        description: "Administered Windows Server environments, Active Directory, and security policies. Managed system upgrades, patching, and backup operations. Enhanced network performance and reduced downtime by 30%.",
        tags: ["Windows Server", "Active Directory", "Ops"],
        isCurrent: false
    },
    {
        id: 7,
        role: "Technical Support Engineer",
        company: "ITI (Information Technology Institute)",
        period: "Jul 2007 – Dec 2010",
        description: "Provided support for users and maintained network infrastructure. Troubleshot hardware, software, and network issues.",
        tags: ["Hardware", "Support", "Maintenance"],
        isCurrent: false
    },
    {
        id: 8,
        role: "Network Engineer",
        company: "Assiut University",
        period: "Jan 2007 – Nov 2007",
        description: "Installed, configured, and secured university-wide network systems.",
        tags: ["Campus Network", "Security", "Installation"],
        isCurrent: false
    }
];

export const Experience = () => {
    return (
        <section id="experience" className="py-16 md:py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10" />

            <div className="container mx-auto px-4 max-w-5xl">
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="section-heading">Professional Journey</h2>
                        <p className="section-subheading">
                            A timeline of leadership, engineering, and mentorship.
                        </p>
                    </motion.div>
                </div>

                <div className="relative border-l-2 border-slate-100 ml-3 md:ml-12 space-y-12">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative pl-8 md:pl-16 group"
                        >
                            {/* Timeline Node */}
                            <div className={`
                                absolute -left-[9px] top-0 
                                w-[18px] h-[18px] rounded-full border-[3px] 
                                transition-all duration-300
                                ${exp.isCurrent
                                    ? "bg-white border-slate-900 shadow-[0_0_0_4px_rgba(15,23,42,0.15)] scale-110"
                                    : "bg-slate-50 border-slate-300 group-hover:border-slate-400 group-hover:scale-110"
                                }
                            `}></div>

                            <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">

                                {/* Period (Left on Desktop often, but here inline for clarity/compactness or side) */}
                                <div className="md:w-48 flex-shrink-0 pt-1">
                                    <div className={`
                                        inline-flex items-center gap-2 font-semibold text-sm uppercase tracking-wide
                                        ${exp.isCurrent ? "text-slate-900" : "text-slate-500"}
                                    `}>
                                        <Calendar size={14} className={exp.isCurrent ? "text-slate-700" : "text-slate-400"} />
                                        {exp.period}
                                    </div>
                                    {exp.isCurrent && (
                                        <div className="md:mt-3 mt-1 block w-fit px-2 py-1 bg-slate-100 text-slate-900 text-[10px] font-bold uppercase tracking-wider rounded border border-slate-200">
                                            Current Role
                                        </div>
                                    )}
                                </div>

                                {/* Content Card */}
                                <div className={`
                                    flex-1 p-6 md:p-8 rounded-2xl border transition-all duration-300
                                    ${exp.isCurrent
                                        ? "bg-white border-slate-200 shadow-lg shadow-slate-900/5"
                                        : "bg-slate-50/30 border-slate-100 hover:bg-white hover:border-slate-200 hover:shadow-md"
                                    }
                                `}>
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-slate-700 transition-colors">
                                                {exp.role}
                                            </h3>
                                            <div className="flex items-center gap-2 text-slate-600 font-medium mt-1">
                                                <Building2 size={16} className="text-slate-400" />
                                                {exp.company}
                                            </div>
                                        </div>

                                        {/* Optional Arrow or Icon */}
                                        <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity text-slate-300">
                                            <ArrowUpRight size={24} />
                                        </div>
                                    </div>

                                    <p className="text-slate-600 leading-relaxed mb-6 text-base md:text-lg">
                                        {exp.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-600">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
