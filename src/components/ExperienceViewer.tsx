import React from 'react';
import { ArrowLeft, Clock, ShieldCheck, Check, Briefcase } from 'lucide-react';
import { Experience } from '../types';

interface ExperienceViewerProps {
  experience: Experience;
  onBack: () => void;
}

export const ExperienceViewer: React.FC<ExperienceViewerProps> = ({
  experience,
  onBack
}) => {
  return (
    <div className="w-full max-w-3xl mx-auto space-y-6 animate-fade-in">
      {/* Back Header Nav */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center space-x-2 text-sm font-semibold text-swjtu-blue hover:text-swjtu-blue-light transition-colors py-2 group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          <span>返回个人简历</span>
        </button>
        <span className="text-xs text-slate-400 font-mono uppercase tracking-wider">
          PRACTICAL & LEADERSHIP EXPERIENCE SHOWCASE
        </span>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-lg">
        {/* Experience Header */}
        <div className="bg-gradient-to-r from-slate-900 to-swjtu-blue-light p-6 md:p-8 text-white">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 border-b border-white/10 pb-5">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-sm tracking-wide ${
                  experience.type === 'internship' ? 'bg-sky-500 text-white' :
                  experience.type === 'practice' ? 'bg-emerald-600 text-white' : 'bg-swjtu-gold text-slate-950'
                }`}>
                  {experience.type === 'internship' ? 'COMMUNICATION INTERNSHIP' :
                   experience.type === 'practice' ? 'PUBLIC AFFAIRS WORK' : 'UNIVERSITY LEADERSHIP'}
                </span>
                <span className="text-xs text-slate-200 flex items-center gap-1 font-mono">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{experience.duration}</span>
                </span>
              </div>
              <h3 className="text-2xl font-bold font-serif tracking-tight mt-1">
                {experience.title}
              </h3>
            </div>
          </div>

          <div className="pt-4 space-y-1 text-xs text-slate-200 font-sans">
            <p><span className="font-semibold text-white">实践单元:</span> {experience.unit}</p>
            <p><span className="font-semibold text-white">担当职责:</span> <span className="text-white font-semibold text-sm">{experience.role}</span></p>
          </div>
        </div>

        <div className="p-6 md:p-8 space-y-8 font-sans">
          
          {/* Stamps Box */}
          {experience.stamps && experience.stamps.length > 0 && (
            <div className="bg-red-50/50 border border-red-100 p-4 rounded-xl space-y-2">
              <h4 className="text-xs font-bold text-swjtu-red font-sans tracking-widest uppercase flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-red-500" />
                <span>官方盖章原件校验 (Official Certification Verification)</span>
              </h4>
              <div className="flex flex-wrap gap-2 pt-1">
                {experience.stamps.map((stamp, sIdx) => (
                  <span key={sIdx} className="bg-white text-swjtu-red border border-red-200 text-xs font-sans font-semibold px-3 py-1 rounded shadow-xs flex items-center gap-1">
                    <span className="text-red-500">★</span>
                    <span>{stamp}</span>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Summary Box */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-slate-800 text-xs tracking-widest uppercase border-b border-slate-100 pb-1.5 flex items-center gap-2">
              <Briefcase className="w-4.5 h-4.5 text-swjtu-blue-light" />
              <span>实践工作综述</span>
            </h4>
            <div className="text-sm text-slate-700 leading-relaxed text-justify bg-slate-50 p-4 rounded-xl border border-slate-100/60 indent-8">
              {experience.summary}
            </div>
          </div>

          {/* Operational accomplishments */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-800 text-xs tracking-widest uppercase border-b border-slate-100 pb-1.5">
              核心实践突破与成果业绩 (Breakthroughs & Outcomes)
            </h4>
            <ul className="space-y-3.5 pl-4 border-l-2 border-slate-200 py-1">
              {experience.points.map((point, pIdx) => (
                <li key={pIdx} className="text-sm text-slate-600 flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-justify leading-relaxed" dangerouslySetInnerHTML={{ __html: point }}></span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Info footer */}
        <div className="bg-slate-50 border-t border-slate-100 px-6 py-4 flex items-center justify-between gap-4">
          <p className="text-xs text-slate-500 font-sans flex items-center space-x-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>本履历相关证明原件及联系人均存留于学院园区管理中心及中国移动相关分局。</span>
          </p>
          <button
            onClick={onBack}
            className="px-4 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-semibold rounded-lg transition-colors cursor-pointer shrink-0"
          >
            返回个人简历
          </button>
        </div>
      </div>
    </div>
  );
};
