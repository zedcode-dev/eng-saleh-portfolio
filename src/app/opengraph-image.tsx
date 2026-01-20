import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";

export const alt = "Saleh Khalifa - Senior Network Engineer & IT Manager";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default async function Image() {
    // Read the profile image from the public directory
    const profilePath = join(process.cwd(), "public", "profile.png");
    const profileImageBuffer = await readFile(profilePath);
    const profileImageMimeType = "image/png";
    const profileSrc = `data:${profileImageMimeType};base64,${profileImageBuffer.toString("base64")}`;

    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    flexWrap: 'nowrap',
                    backgroundColor: '#0F172A',
                    backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255,255,255,0.05) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255,255,255,0.05) 2%, transparent 0%)',
                    backgroundSize: '100px 100px',
                    color: 'white',
                    fontFamily: 'sans-serif',
                    position: 'relative',
                }}
            >
                {/* Decorative background glow */}
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '600px',
                        height: '600px',
                        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, transparent 70%)',
                        zIndex: 0,
                    }}
                />

                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '30px',
                        zIndex: 1,
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '4px solid rgba(255,255,255,0.2)',
                        width: '220px',
                        height: '220px',
                        backgroundColor: '#1E293B',
                    }}
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={profileSrc}
                        alt="Saleh Khalifa"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                </div>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        zIndex: 1,
                    }}
                >
                    <div
                        style={{
                            fontSize: 70,
                            fontStyle: 'normal',
                            fontWeight: 'bold',
                            color: 'white',
                            lineHeight: 1.1,
                            marginBottom: 15,
                            letterSpacing: '-1px',
                            textShadow: '0 4px 8px rgba(0,0,0,0.3)',
                        }}
                    >
                        Saleh Khalifa
                    </div>
                    <div
                        style={{
                            fontSize: 32,
                            fontStyle: 'normal',
                            color: '#94A3B8',
                            lineHeight: 1.4,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '20px',
                            fontWeight: 500,
                        }}
                    >
                        <span style={{ color: '#38BDF8' }}>IT Management</span>
                        <span>•</span>
                        <span style={{ color: '#818CF8' }}>Cloud Architecture</span>
                        <span>•</span>
                        <span style={{ color: '#F472B6' }}>Cybersecurity</span>
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
