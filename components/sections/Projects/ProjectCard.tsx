import Image from "next/image";
import { ProjectItem } from "@/data/projects";
import ProjectCarousel from "./ProjectCarousel";

export default function ProjectCard({ project }: { project: ProjectItem }) {
  const isCompleted = project.status === "Completed";

  return (
    <div className="group bg-white rounded-3xl border border-slate-200/80 shadow-xs hover:border-emerald-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden h-full">
      
      <div>
        {/* Card Header & Image Showcase */}
        <div className="relative aspect-video bg-slate-900 overflow-hidden flex items-center justify-center p-4">
          
          {/* Top Badges */}
          <div className="absolute top-3 left-3 right-3 z-20 flex justify-between items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-slate-900/80 text-white text-[11px] font-semibold backdrop-blur-md border border-slate-700/60 shadow-xs">
              {project.type}
            </span>

            {/* Status Indicator Badge */}
            <span
              className={`px-2.5 py-1 rounded-full text-[11px] font-semibold flex items-center gap-1.5 backdrop-blur-md shadow-xs ${
                isCompleted
                  ? "bg-emerald-500/90 text-white"
                  : "bg-amber-500/90 text-white"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  isCompleted ? "bg-white" : "bg-white animate-pulse"
                }`}
              />
              {project.status || "Completed"}
            </span>
          </div>

          {/* Screenshot Image Container */}
        <div className="relative w-full h-full min-h-[180px] flex items-center justify-center">
        {project.images && project.images.length > 1 ? (
          <ProjectCarousel
            images={project.images}
            title={project.title}
          />
        ) : (
          <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
      </div>

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Content Body */}
        <div className="p-6">
          <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-emerald-600 mb-1.5">
            <span>Role: {project.role}</span>
            {project.duration && <span className="text-slate-400 font-normal">{project.duration}</span>}
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Problem & Solution Callout */}
          {project.problem && project.solution && (
            <div className="grid grid-cols-1 gap-2 p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs mb-4">
              <div>
                <span className="font-bold text-slate-900 block text-[10px] uppercase text-red-600">🎯 Problem</span>
                <p className="text-slate-600 line-clamp-2 leading-relaxed">{project.problem}</p>
              </div>
              <div className="pt-2 border-t border-slate-200/60">
                <span className="font-bold text-slate-900 block text-[10px] uppercase text-emerald-600">💡 Solution</span>
                <p className="text-slate-600 line-clamp-2 leading-relaxed">{project.solution}</p>
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5">
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

      {/* Footer Action Links */}
      <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between gap-3 mt-auto">
        <div className="flex items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 transition-colors"
            >
              <span>Live Demo</span>
              <span>↗</span>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-slate-500 hover:text-slate-900 flex items-center gap-1 transition-colors"
            >
              <span>GitHub</span>
              <span>→</span>
            </a>
          )}
        </div>
      </div>

    </div>
  );
}