import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAFBFC] px-4 text-center">
            <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl opacity-50 animate-pulse" />
                <h1 className="relative text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                    404
                </h1>
            </div>

            <h2 className="mt-6 text-3xl font-bold text-slate-800">Page Not Found</h2>
            <p className="mt-4 text-slate-600 max-w-md">
                The page you are looking for might have been removed, had its name
                changed, or is temporarily unavailable.
            </p>

            <Link
                href="/"
                className="mt-8 group inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full font-medium transition-all hover:bg-slate-800 hover:shadow-lg hover:shadow-blue-500/20"
            >
                <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                Back to Home
            </Link>
        </div>
    );
}
