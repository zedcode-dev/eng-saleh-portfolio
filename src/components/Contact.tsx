"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowRight, Loader2, CheckCircle, AlertCircle, Copy } from "lucide-react";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Something went wrong");
            }

            setStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });
        } catch (error: any) {
            setStatus("error");
            setErrorMessage(error.message || "Failed to send message. Please try again.");
        }
    };

    const contactMethods = [
        {
            icon: Mail,
            title: "Email",
            value: "salehkhalifa136@gmail.com",
            href: "mailto:salehkhalifa136@gmail.com",
            color: "slate"
        },
        {
            icon: Phone,
            title: "Phone",
            value: "+20 1092726030",
            href: "tel:+201092726030",
            color: "slate"
        },
        {
            icon: MapPin,
            title: "Office",
            value: "Assiut, Egypt",
            href: null,
            color: "slate"
        }
    ];

    return (
        <section id="contact" className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[100px] mix-blend-overlay opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-200/50 rounded-full blur-[80px] opacity-30 translate-y-1/3 -translate-x-1/3 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10 max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Left Column: Content & Details */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                            Let's work together.
                        </h2>
                        <p className="text-lg text-slate-600 mb-12 leading-relaxed max-w-md">
                            I am currently open to consulting opportunities and full-time roles in Network Architecture and IT Management.
                        </p>

                        <div className="space-y-6">
                            {contactMethods.map((method, idx) => (
                                <motion.a
                                    key={method.title}
                                    href={method.href || "#"}
                                    onClick={(e) => !method.href && e.preventDefault()}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                                    className={`
                                        group flex items-center p-5 rounded-2xl bg-white border border-slate-100 shadow-sm
                                        hover:shadow-lg hover:border-slate-200 hover:-translate-y-1 transition-all duration-300
                                        ${!method.href ? "cursor-default" : "cursor-pointer"}
                                    `}
                                >
                                    <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                                        <method.icon size={22} strokeWidth={1.5} />
                                    </div>
                                    <div className="ml-5 flex-1">
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">{method.title}</p>
                                        <p className="text-slate-900 font-semibold">{method.value}</p>
                                    </div>
                                    {method.href && (
                                        <ArrowRight className="text-slate-300 group-hover:text-slate-900 transform group-hover:translate-x-1 transition-all" size={20} />
                                    )}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column: Interactive Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden"
                    >
                        {/* Decorative top accent */}
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900" />

                        {status === "success" ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="h-full flex flex-col items-center justify-center text-center py-12"
                            >
                                <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
                                    <CheckCircle size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">Message Received!</h3>
                                <p className="text-slate-500 mb-8 max-w-xs mx-auto leading-relaxed">
                                    Thanks for reaching out. I'll review your message and get back to you shortly.
                                </p>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className="px-8 py-3 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10"
                                >
                                    Send another message
                                </button>
                            </motion.div>
                        ) : (
                            <>
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-slate-900">Send a Message</h3>
                                    <p className="text-slate-500 mt-2">Got a project in mind? Let's discuss details.</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700 ml-1">Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-slate-300 focus:ring-4 focus:ring-slate-100 transition-all outline-none text-slate-900 placeholder:text-slate-400"
                                                placeholder="Ahmed Mohammed"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700 ml-1">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-slate-300 focus:ring-4 focus:ring-slate-100 transition-all outline-none text-slate-900 placeholder:text-slate-400"
                                                placeholder="ahmed@ex.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700 ml-1">Subject</label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-slate-300 focus:ring-4 focus:ring-slate-100 transition-all outline-none text-slate-900 placeholder:text-slate-400"
                                            placeholder="Project Inquiry..."
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700 ml-1">Message</label>
                                        <textarea
                                            rows={5}
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-slate-300 focus:ring-4 focus:ring-slate-100 transition-all outline-none resize-none text-slate-900 placeholder:text-slate-400"
                                            placeholder="Tell me more about your needs..."
                                        ></textarea>
                                    </div>

                                    {status === "error" && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-xl text-sm border border-red-100"
                                        >
                                            <AlertCircle size={18} />
                                            <span>{errorMessage}</span>
                                        </motion.div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={status === "loading"}
                                        className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-slate-800 focus:ring-4 focus:ring-slate-200 transition-all shadow-lg shadow-slate-900/10 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-4"
                                    >
                                        {status === "loading" ? (
                                            <>
                                                <Loader2 size={20} className="animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
