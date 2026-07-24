import Image from "next/image";
import { ProjectItem } from "@/data/projects";

export default function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <div className="group bg-white rounded-3xl border border-slate-200/80 shadow-xs hover:border-emerald-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden">
      <div>
        {/* Card Image */}
       <div className="relative aspect-video bg-slate-100 p-5">
        <span className="absolute top-3 left-3 z-20 px-3 py-1 rounded-full bg-slate-900/80 text-white text-xs font-semibold backdrop-blur-md">
          {project.type}
        </span>

       <div className="relative h-[520px] bg-slate-100 flex items-center justify-center">
          <Image
            src={project.image}
            alt={project.title}
            width={300}
            height={640}
            className="object-contain"
          />
        </div>
      </div>

        {/* Content */}
        <div className="p-6">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-1">
            Role: {project.role}
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center gap-3">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
          >
            Live Demo ↗
          </a>
        )}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold text-slate-500 hover:text-slate-900 flex items-center gap-1"
        >
          GitHub →
        </a>
      </div>
    </div>
  );
}