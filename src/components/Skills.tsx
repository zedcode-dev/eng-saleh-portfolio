"use client";

import React from "react";
import { motion } from "framer-motion";
import { Wifi, Cloud, Server, Users, Shield, Cpu, Database, CheckCircle2 } from "lucide-react";

// Professional Skill Data
const skillData = [
    {
        category: "Network & Security",
        description: "Designing resilient perimeters and high-speed infrastructures.",
        icon: Wifi,
        skills: ["Cisco CCNA & CCNP", "Fortinet Security Ecosystem", "Palo Alto Firewalls", "SD-WAN Implementation", "VPN & Secure Remote Access"]
    },
    {
        category: "Cloud & Virtualization",
        description: "Architecting hybrid environments for scalability and uptime.",
        icon: Cloud,
        skills: ["Microsoft Azure Admin", "AWS Solutions", "VMware vSphere/ESXi", "Hyper-V Clusters", "Disaster Recovery Planning"]
    },
    {
        category: "Systems Administration",
        description: "Managing enterprise-grade server orchestration.",
        icon: Server,
        skills: ["Windows Server 2019/2022", "Active Directory & GPO", "Microsoft 365 Exchange", "System Hardening", "Automated Patching"]
    },
    {
        category: "Leadership & Impact",
        description: "Bridging the gap between technology and business goals.",
        icon: Users,
        skills: ["IT Strategy & Budgeting", "Team Mentorship & Training", "Project Lifecycle Management", "Vendor Negotiations", "SLA & KPI Tracking"]
    }
];

export const Skills = () => {
    return (
        <section id="skills" className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">

            {/* Subtle Grid Background */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="mb-16 md:mb-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="section-heading text-slate-900">Technical Expertise</h2>
                        <p className="section-subheading mx-auto max-w-2xl">
                            A robust foundation of engineering certification and executive leadership.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {skillData.map((item, idx) => (
                        <motion.div
                            key={item.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-4 bg-slate-100 text-slate-900 rounded-2xl group-hover:scale-110 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                                    <item.icon size={32} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900">{item.category}</h3>
                                    <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mt-1">Core Competency</p>
                                </div>
                            </div>

                            <p className="text-slate-600 mb-8 leading-relaxed">
                                {item.description}
                            </p>

                            <div className="space-y-3">
                                {item.skills.map((skill) => (
                                    <div key={skill} className="flex items-center gap-3">
                                        <CheckCircle2 size={18} className="text-slate-900 flex-shrink-0" />
                                        <span className="text-slate-700 font-medium">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
