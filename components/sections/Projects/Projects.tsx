import SectionTitle from "@/components/ui/SectionTitle";
import FeaturedProjectCard from "./FeaturedProjectCard";
import ProjectCard from "./ProjectCard";
import { PROJECTS_DATA } from "@/data/projects";

export default function Projects() {
  const featuredProject = PROJECTS_DATA.find((p) => p.featured) || PROJECTS_DATA[0];
  const secondaryProjects = PROJECTS_DATA.filter((p) => p.id !== featuredProject.id);

  return (
    <section id="projects" className="relative py-20 lg:py-28 bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Projects I’ve Built"
          subtitle="Real-world applications combining frontend engineering, backend systems, and user-focused design."
        />

        {/* Flagship / Featured Case Study */}
        <div className="mb-12">
          <FeaturedProjectCard project={featuredProject} />
        </div>

        {/* Secondary Supporting Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {secondaryProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}