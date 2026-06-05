import React from 'react';
import { ArrowLeft, Award, Layers, ShieldCheck, Check, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectViewerProps {
  project: Project;
  onBack: () => void;
  onNavigateToCertificate?: (certId: string) => void;
}

export const ProjectViewer: React.FC<ProjectViewerProps> = ({
  project,
  onBack,
  onNavigateToCertificate
}) => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 animate-fade-in">
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
          PROJECT DETAILED SHOWCASE
        </span>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-lg">
        {/* Product Layout Headline */}
        <div className="bg-gradient-to-r from-slate-900 to-swjtu-blue p-6 md:p-8 text-white">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 border-b border-white/10 pb-5">
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-indigo-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-sm tracking-wide">
                  核心研究与系统开发
                </span>
                <span className="text-sm text-slate-200 font-medium bg-white/10 px-2 py-0.5 rounded-sm">指导老师/课题组: {project.instructor}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold font-serif tracking-tight mt-1">
                {project.title}
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-2 shrink-0">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg shadow-sm transition-all flex items-center gap-1"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>访问在线系统演示</span>
                </a>
              )}
              {project.certificateId && onNavigateToCertificate && (
                <button
                  onClick={() => onNavigateToCertificate(project.certificateId!)}
                  className="flex items-center space-x-1 px-3 py-2 bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors cursor-pointer shrink-0"
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>查看获奖证书</span>
                </button>
              )}
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-300 font-sans">
            <p><span className="font-semibold text-white">我的角色/职责:</span> {project.role}</p>
            <p><span className="font-semibold text-white">项目开发团队:</span> {project.team.join('、')}</p>
          </div>
        </div>

        <div className="p-6 md:p-8 space-y-8 font-sans">
          
          {/* Live Link Callout */}
          {project.liveUrl && (
            <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="space-y-0.5">
                <h4 className="text-emerald-800 font-bold text-xs sm:text-sm flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>在线演示系统已成功部署</span>
                </h4>
                <p className="text-[11px] text-slate-500">点击右侧按钮可以直接在线访问该系统的实时运行界面，系统已稳定运行中。</p>
              </div>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-all text-center"
              >
                <ExternalLink className="w-4 h-4" />
                <span>立即进入在线演示平台</span>
              </a>
            </div>
          )}

          {/* Summary Box */}
          <div className="bg-blue-50/40 p-4 rounded-xl border-l-[6px] border-swjtu-blue">
            <h4 className="flex items-center space-x-2 text-swjtu-blue font-bold text-sm tracking-widest uppercase mb-1.5">
              <Layers className="w-4 h-4" />
              <span>科研与开发背景综述</span>
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed text-justify indent-6">
              {project.summary}
            </p>
          </div>

          {/* Main Product grid: Left features, Right technology simulation stats */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left panel: Description & Tech Cards */}
            <div className="lg:col-span-7 space-y-6">
              <h4 className="font-bold text-slate-800 text-xs tracking-widest uppercase border-b border-slate-100 pb-2">
                核心功能突破与技术亮点 (Breakthroughs)
              </h4>
              <div className="space-y-4">
                {project.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start space-x-3 bg-slate-50 p-4 rounded-xl border border-slate-100 hover:bg-slate-100/60 transition-colors">
                    <span className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-600 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-indigo-100">
                      {fIdx + 1}
                    </span>
                    <div className="space-y-1">
                      <h6 className="font-semibold text-slate-800 text-sm">{feat.name}</h6>
                      <p className="text-xs text-slate-500 leading-relaxed text-justify">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right panel: Digital stacks, charts summary and parameters */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Visual mockup or real demo video of the 3D GIS Radar Map */}
              {project.id === 'project-lowair' ? (
                <div className="bg-slate-950 rounded-xl overflow-hidden border border-indigo-500/30 shadow-lg relative aspect-video flex flex-col justify-between group">
                  <video
                    src="/materials/低空可视化平台演示视频.mp4"
                    controls
                    autoPlay
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-slate-900/80 text-white text-[9px] font-mono px-2 py-0.5 rounded pointer-events-none z-10 border border-slate-700">
                    实机运行演示视频
                  </div>
                </div>
              ) : (
                <div className="bg-slate-900 rounded-xl p-5 text-white relative overflow-hidden min-h-[200px] flex flex-col justify-between shadow-inner">
                  {/* Grid background simulation */}
                  <div className="absolute inset-0 opacity-15" style={{
                    backgroundImage: 'radial-gradient(circle, #4f46e5 1px, transparent 1px)',
                    backgroundSize: '16px 16px'
                  }}></div>
                  
                  <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-indigo-300 uppercase tracking-widest border-b border-indigo-500/20 pb-2">
                    <span>3D CESIUM GEOSPATIAL HUD</span>
                    <span className="text-emerald-400">● LIVE DEPLOYED</span>
                  </div>
                  
                  {/* Minimalist 3D Air corridor dynamic flight paths mock */}
                  <div className="relative h-28 flex items-center justify-center">
                    <div className="absolute w-20 h-20 rounded-full border-2 border-dashed border-indigo-400/30 animate-spin"></div>
                    <div className="absolute w-28 h-28 rounded-full border border-indigo-500/10"></div>
                    {/* Interactive Corridor vector lines in pure css */}
                    <div className="absolute h-[1px] w-4/5 bg-gradient-to-r from-transparent via-indigo-400 to-transparent transform -rotate-12"></div>
                    <div className="absolute h-[1px] w-3/5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent transform rotate-45"></div>
                    <div className="absolute w-2.5 h-2.5 bg-swjtu-red rounded-full left-1/4 animate-ping"></div>
                    <div className="absolute w-2 h-2 bg-emerald-500 rounded-full right-1/3 animate-ping"></div>
                    <span className="absolute text-[8px] font-mono text-slate-400 bottom-1">
                      {project.title.includes('低空') ? '三维体素求交与冲突检验中' : '状态寻优与马尔可夫决策迭代中'}
                    </span>
                  </div>

                  <div className="relative z-10 flex items-center justify-between text-[9px] font-mono text-slate-400 pt-2 border-t border-indigo-500/20">
                    <span>SCALE: 3D GRID / 体素</span>
                    <span>STATUS: 200 OK</span>
                  </div>
                </div>
              )}

              {/* Numeric KPIs list */}
              <div className="grid grid-cols-3 gap-3">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-100 p-3 rounded-xl text-center shadow-xs">
                    <div className="text-[9px] text-slate-400 font-bold uppercase truncate">{metric.label}</div>
                    <div className="text-base font-extrabold font-mono text-indigo-600 my-0.5">{metric.value}</div>
                    <div className="text-[8px] text-slate-500 leading-none scale-90 origin-center">{metric.desc}</div>
                  </div>
                ))}
              </div>

              {/* Technical badge stacks container */}
              <div className="bg-slate-50/60 border border-slate-200/60 rounded-xl p-4 space-y-2.5">
                <h5 className="font-bold text-slate-700 text-xs tracking-widest uppercase border-b border-slate-100 pb-1.5">
                  SYSTEM ARCHITECTURE / 核心技术架构
                </h5>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="bg-white hover:bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded border border-slate-200/40 font-mono font-medium transition-colors shadow-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Info footer */}
        <div className="bg-slate-50 border-t border-slate-100 px-6 py-4 flex items-center justify-between gap-4">
          <p className="text-xs text-slate-500 font-sans flex items-center space-x-1.5">
            <ShieldCheck className="w-4 h-4 text-indigo-600 shrink-0" />
            <span>该项优化成果算法底层已通过在校实证数据测验，系统已上线可公开验证。</span>
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
