import { projects } from "@/constants/projects";

export default function sitemap() {
  const baseUrl = "https://mohamedboukthir.vercel.app";
  const projectsUrl = projects.map((project) => {
    return {
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: new Date(),
    };
  });
  const projectsUrls = [...projectsUrl];
  return [
    { url: `${baseUrl}`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/experience`, lastModified: new Date() },
    { url: `${baseUrl}/projects`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    ...projectsUrls,
  ];
}
