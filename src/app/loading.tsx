export default function Loading() {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#FAFBFC]">
            <div className="relative flex flex-col items-center gap-4">
                {/* Modern Spinner */}
                <div className="relative w-16 h-16">
                    <div className="absolute inset-0 border-4 border-slate-200 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-slate-900 rounded-full border-t-transparent animate-spin"></div>
                </div>

                {/* Loading Text */}
                <div className="animate-pulse flex items-center gap-1">
                    <span className="h-2 w-2 bg-slate-400 rounded-full"></span>
                    <span className="h-2 w-2 bg-slate-400 rounded-full delay-75"></span>
                    <span className="h-2 w-2 bg-slate-400 rounded-full delay-150"></span>
                </div>
            </div>
        </div>
    );
}
