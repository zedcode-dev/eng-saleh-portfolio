import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Saleh Khalifa - Senior Network Engineer & IT Manager";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: "linear-gradient(to bottom right, #FAFBFC, #E0E7FF)",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-inter)",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: "-100px",
                        right: "-100px",
                        width: "400px",
                        height: "400px",
                        background: "rgba(59, 130, 246, 0.2)",
                        borderRadius: "50%",
                        filter: "blur(80px)",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        bottom: "-100px",
                        left: "-100px",
                        width: "400px",
                        height: "400px",
                        background: "rgba(99, 102, 241, 0.2)",
                        borderRadius: "50%",
                        filter: "blur(80px)",
                    }}
                />

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        padding: "40px",
                        background: "rgba(255, 255, 255, 0.5)",
                        borderRadius: "20px",
                        border: "1px solid rgba(255, 255, 255, 0.8)",
                        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <div
                        style={{
                            fontSize: 24,
                            color: "#4F46E5",
                            letterSpacing: "0.1em",
                            marginBottom: 20,
                            textTransform: "uppercase",
                            fontWeight: 700,
                        }}
                    >
                        Senior Network Engineer
                    </div>
                    <div
                        style={{
                            fontSize: 72,
                            fontWeight: 900,
                            background: "linear-gradient(to right, #0F172A, #334155)",
                            backgroundClip: "text",
                            color: "transparent",
                            marginBottom: 10,
                            lineHeight: 1.1,
                        }}
                    >
                        Saleh Khalifa
                    </div>
                    <div
                        style={{
                            fontSize: 32,
                            color: "#64748B",
                            marginTop: 10,
                            maxWidth: "800px",
                        }}
                    >
                        IT Management • Cloud Architecture • Cybersecurity
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
