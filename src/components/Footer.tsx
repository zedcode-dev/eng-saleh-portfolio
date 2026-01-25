import React from "react";

export const Footer = () => {
    return (
        <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold font-space-grotesk text-slate-900">Eng Saleh.</h3>
                        <p className="text-slate-500 mt-2">IT Manager & Network Architect</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 font-medium text-slate-600">
                        <a href="#home" className="hover:text-slate-900 transition-colors">Home</a>
                        <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
                        <a href="#services" className="hover:text-slate-900 transition-colors">Services</a>
                        <a href="#experience" className="hover:text-slate-900 transition-colors">Experience</a>
                        <a href="/CV.pdf" target="_blank" className="hover:text-slate-900 transition-colors">Resume</a>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-slate-200">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-slate-500 text-center md:text-left">
                            &copy; {new Date().getFullYear()} Eng Saleh Khalifa. All rights reserved.
                        </p>
                        <p className="text-sm text-slate-400 flex items-center justify-center md:justify-end gap-1 text-center md:text-right">
                            Designed & Built by{' '}
                            <span
                                className="bg-clip-text text-transparent bg-[length:200%_100%] animate-shine text-lg font-black tracking-tight"
                                style={{
                                    backgroundImage: "linear-gradient(110deg, #09090b 20%, #4c1d95 38%, #ffffff 50%, #4c1d95 62%, #09090b 80%)",
                                }}
                            >
                                <a
                                    href="https://zcode.itslab.online/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    ZED CODE
                                </a>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
