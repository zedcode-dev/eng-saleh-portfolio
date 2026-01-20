import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://salehkhalifa.itslab.online"; // Replace with your actual domain

    // Define your static routes here
    const routes = ["", "/#about", "/#skills", "/#projects", "/#contact"];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: route === "" ? 1 : 0.8,
    }));
}
