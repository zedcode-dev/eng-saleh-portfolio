"use client";

import { useEffect } from "react";
import { AlertCircle, RotateCcw } from "lucide-react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAFBFC] px-4 text-center">
            <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-6">
                <AlertCircle size={32} />
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-2">Something went wrong!</h2>
            <p className="text-slate-600 max-w-md mb-8">
                We apologize for the inconvenience. An unexpected error has occurred.
            </p>

            <button
                onClick={reset}
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-medium transition-all hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/20"
            >
                <RotateCcw size={18} />
                Try Again
            </button>
        </div>
    );
}
