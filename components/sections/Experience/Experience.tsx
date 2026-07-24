import SectionTitle from "@/components/ui/SectionTitle";
import ExperienceCard from "./ExperienceCard";
import EducationCard from "./EducationCard";
import CertificationCard from "./CertificationCard";
import { EXPERIENCES, EDUCATION, CERTIFICATIONS } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Experience & Background"
          subtitle="Combining software development skills with real-world enterprise and business systems experience."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Timeline Experience (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
              Professional Experience
            </h3>

            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <ExperienceCard key={exp.id} exp={exp} />
              ))}
            </div>
          </div>

          {/* Right Column: Education & Certifications (5 Cols) */}
          <div className="lg:col-span-5 space-y-10">
            
            {/* Education Section */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 mb-6">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                Academic Foundation
              </h3>

              <div className="space-y-4">
                {EDUCATION.map((edu) => (
                  <EducationCard key={edu.id} edu={edu} />
                ))}
              </div>
            </div>

            {/* Certifications Section */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 mb-4">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                Certifications & Achievements
              </h3>

              <div className="grid grid-cols-1 gap-3">
                {CERTIFICATIONS.map((cert) => (
                  <CertificationCard key={cert.id} cert={cert} />
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}