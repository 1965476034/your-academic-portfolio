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
              
              {/* Visual mockup or real demo video depending on the project */}
              {project.id === 'project-lowair' && (
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
              )}

              {project.id === 'project-ev-v2g' && (
                <div className="bg-slate-900 rounded-xl p-5 text-white relative overflow-hidden min-h-[200px] flex flex-col justify-between shadow-inner">
                  <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                    backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)',
                    backgroundSize: '16px 16px'
                  }}></div>
                  <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-indigo-300 uppercase tracking-widest border-b border-indigo-500/20 pb-2">
                    <span>MDP STATE OPTIMIZER HUD</span>
                    <span className="text-emerald-400">● OPTIMIZING</span>
                  </div>
                  <div className="flex items-center justify-around h-28 relative z-10">
                    <div className="flex flex-col items-center space-y-1">
                      <div className="w-10 h-16 border-2 border-indigo-400 rounded-md p-0.5 flex flex-col justify-end relative">
                        <div className="w-4 h-1 bg-indigo-400 absolute top-[-5px] left-[10px]"></div>
                        <div className="w-full bg-emerald-500 rounded-sm animate-pulse" style={{ height: '65%' }}></div>
                      </div>
                      <span className="text-[9px] font-mono text-emerald-400">SOC: 65% (V2G)</span>
                    </div>
                    <div className="flex flex-col space-y-1 text-[10px] font-mono text-indigo-300">
                      <div>t = 14:30 (Period 58/96)</div>
                      <div>Action: DISCHARGE (V2G)</div>
                      <div>Reward: +12.4 CNY/kWh</div>
                      <div className="text-emerald-400 font-bold">Bellman Error: 0.0024</div>
                    </div>
                  </div>
                  <div className="relative z-10 flex items-center justify-between text-[9px] font-mono text-slate-400 pt-2 border-t border-indigo-500/20">
                    <span>GRID: CHENGDU SOUTH</span>
                    <span>MODEL: MARKOV DECISION</span>
                  </div>
                </div>
              )}

              {project.id === 'project-3dbox' && (
                <div className="bg-slate-900 rounded-xl p-5 text-white relative overflow-hidden min-h-[200px] flex flex-col justify-between shadow-inner">
                  <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                    backgroundImage: 'radial-gradient(circle, #10b981 1px, transparent 1px)',
                    backgroundSize: '16px 16px'
                  }}></div>
                  <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-emerald-300 uppercase tracking-widest border-b border-emerald-500/20 pb-2">
                    <span>3D PACKING SOLVER HUD</span>
                    <span className="text-emerald-400">● GUROBI OPTIMAL</span>
                  </div>
                  <div className="relative h-28 flex items-center justify-center z-10">
                    <div className="w-32 h-16 border-2 border-indigo-500/30 rounded relative bg-slate-950 flex flex-wrap content-end p-0.5">
                      <div className="w-8 h-8 bg-indigo-600/70 border border-indigo-400 rounded-sm m-0.5 flex items-center justify-center text-[9px] font-bold">A</div>
                      <div className="w-12 h-6 bg-emerald-600/70 border border-emerald-400 rounded-sm m-0.5 flex items-center justify-center text-[9px] font-bold">B</div>
                      <div className="w-8 h-6 bg-cyan-600/70 border border-cyan-400 rounded-sm m-0.5 flex items-center justify-center text-[9px] font-bold">C</div>
                      <div className="w-16 h-4 bg-amber-600/70 border border-amber-400 rounded-sm m-0.5 flex items-center justify-center text-[8px] font-bold">D (Fragile)</div>
                    </div>
                    <div className="absolute right-4 text-[9px] font-mono text-slate-400 space-y-1">
                      <div>Space Util: 87.22%</div>
                      <div>Weight Util: 91.05%</div>
                      <div>Constraints: 247</div>
                    </div>
                  </div>
                  <div className="relative z-10 flex items-center justify-between text-[9px] font-mono text-slate-400 pt-2 border-t border-emerald-500/20">
                    <span>SOLVER: BRANCH-AND-BOUND</span>
                    <span>STATUS: FEASIBLE</span>
                  </div>
                </div>
              )}

              {project.id === 'project-fatigue' && (
                <div className="bg-slate-900 rounded-xl p-5 text-white relative overflow-hidden min-h-[200px] flex flex-col justify-between shadow-inner">
                  <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                    backgroundImage: 'radial-gradient(circle, #f59e0b 1px, transparent 1px)',
                    backgroundSize: '16px 16px'
                  }}></div>
                  <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-amber-300 uppercase tracking-widest border-b border-amber-500/20 pb-2">
                    <span>PHYSIOLOGICAL WAVEFORM HUD</span>
                    <span className="text-emerald-400">● EDA/BVP SCANNING</span>
                  </div>
                  <div className="relative h-28 flex flex-col justify-center space-y-2.5 z-10">
                    <div className="relative h-6 w-full flex items-center overflow-hidden">
                      <span className="text-[8px] font-mono text-slate-400 absolute left-0 z-10 bg-slate-900/90 pr-1">BVP (Pulse)</span>
                      <svg className="w-full h-full stroke-indigo-400 stroke-[1.5] fill-none ml-12" viewBox="0 0 100 10">
                        <path d="M0,5 L10,5 L12,2 L14,8 L16,5 L30,5 L32,1 L34,9 L36,5 L50,5 L52,2 L54,8 L56,5 L70,5 L72,1 L74,9 L76,5 L90,5 L92,2 L94,8 L96,5" />
                      </svg>
                    </div>
                    <div className="relative h-6 w-full flex items-center overflow-hidden">
                      <span className="text-[8px] font-mono text-slate-400 absolute left-0 z-10 bg-slate-900/90 pr-1">EDA (GSR)</span>
                      <svg className="w-full h-full stroke-emerald-400 stroke-[1.5] fill-none ml-12" viewBox="0 0 100 10">
                        <path d="M0,8 C10,7 20,5 30,6 C40,7 50,4 60,3 C70,4 80,6 90,5 C95,4 100,5 105,5" />
                      </svg>
                    </div>
                    <div className="text-center text-[9px] font-mono text-emerald-400 font-semibold uppercase animate-pulse">
                      CLASSIFIED STATUS: NORMAL / ALERT STATUS
                    </div>
                  </div>
                  <div className="relative z-10 flex items-center justify-between text-[9px] font-mono text-slate-400 pt-2 border-t border-amber-500/20">
                    <span>MODEL: 1D-CNN DUAL BRANCH</span>
                    <span>SAMPLE RATE: 250 Hz</span>
                  </div>
                </div>
              )}

              {project.id === 'project-uav' && (
                <div className="bg-slate-900 rounded-xl p-5 text-white relative overflow-hidden min-h-[200px] flex flex-col justify-between shadow-inner">
                  <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                    backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)',
                    backgroundSize: '16px 16px'
                  }}></div>
                  <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-blue-300 uppercase tracking-widest border-b border-blue-500/20 pb-2">
                    <span>UAV EDGE COMPUTER HUD</span>
                    <span className="text-emerald-400">● STREAMING 45 FPS</span>
                  </div>
                  <div className="relative h-28 flex items-center justify-center overflow-hidden rounded bg-slate-950 border border-slate-800 z-10 my-0.5">
                    <div className="absolute w-[1px] h-full bg-dashed bg-slate-700/50"></div>
                    <div className="absolute w-20 h-full border-x border-slate-800/80 transform rotate-12"></div>
                    <div className="absolute top-2 left-4 border border-emerald-500 bg-emerald-500/10 text-emerald-400 text-[7px] px-1 py-0.5 rounded font-mono scale-90">
                      Car: 98% [Segmented]
                    </div>
                    <div className="absolute bottom-2 right-4 border border-indigo-500 bg-indigo-500/10 text-indigo-400 text-[7px] px-1 py-0.5 rounded font-mono scale-90">
                      Lane: 95% [Road]
                    </div>
                    <div className="absolute top-2 right-2 border border-rose-500 bg-rose-500/10 text-rose-400 text-[7px] px-1 py-0.5 rounded font-mono scale-90">
                      Jam: Congested
                    </div>
                  </div>
                  <div className="relative z-10 flex items-center justify-between text-[9px] font-mono text-slate-400 pt-2 border-t border-blue-500/20">
                    <span>MODEL: SEGFORMER-B0</span>
                    <span>HARDWARE: JETSON NANO</span>
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
