type Project = {
  name: string;
  description: string;
  github?: string;
  Deploy?: string;
};

export const projects: Project[] = [
  {
    name: "Potofolio Website",
    description: "Website Portofolio sederhana dengan React",
    github: "https://github.com/sabrinadev222/project-portotvite.git",
    Deploy: "https://portovite.netlify.app//",
  },
  {
    name: "Portofolio Revisi Web",
    description: "Revisi portofolio website menggunakan vite dan dideploy Vercel",
    github: "https://github.com/sabrinadev222/Portofolio-revisi-web.git",
    Deploy: "https://portofolio-revisi-web-git-main-sabrina-vivias-projects.vercel.app/",
  },
  {
    name: "React Project",
    description: "Percobaan dengan React dan Vercel",
    github: "https://github.com/sabrinadev222/react.git",
    Deploy: "https://react-two-liart-69.vercel.app/",
  },
  {
    name: "Profile Github",
    description: "Percobaan dengan React dan Vercel",
    github: "https://github.com/sabrinadev222",
  },
];
