import React from 'react';
import { Award, BookOpen, Layers, Check, ArrowLeft, FileText, ShieldCheck, List, Bookmark } from 'lucide-react';
import { Paper } from '../types';

interface PaperViewerProps {
  paper: Paper;
  onNavigateToCertificate?: (certId: string) => void;
  onBack?: () => void;
}

export const PaperViewer: React.FC<PaperViewerProps> = ({
  paper,
  onNavigateToCertificate,
  onBack
}) => {
  return (
    <div className="w-full max-w-6xl mx-auto space-y-6 animate-fade-in px-2 sm:px-4">
      {/* Back Header Nav */}
      {onBack && (
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center space-x-2 text-sm font-semibold text-swjtu-blue hover:text-swjtu-blue-light transition-colors py-2 group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
            <span>返回个人简历</span>
          </button>
          <span className="text-xs text-slate-400 font-mono uppercase tracking-widest font-semibold bg-slate-100 px-3 py-1 rounded-full">
            学术论文/报告详情页
          </span>
        </div>
      )}

      {/* Grid Layout: Left Outline Sidebar, Right Paper Body */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Sticky Sidebar (TOC) - Hidden on mobile, visible on lg screens */}
        <aside className="hidden lg:block lg:col-span-3 sticky top-24 space-y-4">
          <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs space-y-4">
            <h4 className="font-bold text-slate-900 text-xs tracking-wider uppercase border-b border-slate-100 pb-2.5 flex items-center space-x-2">
              <List className="w-4 h-4 text-swjtu-blue" />
              <span>报告大纲 (Outline)</span>
            </h4>
            <nav className="space-y-1">
              <a
                href="#title"
                className="group flex items-center space-x-2 text-xs font-semibold text-slate-600 hover:text-swjtu-blue transition-colors py-1.5 px-2 rounded-lg hover:bg-slate-50"
              >
                <Bookmark className="w-3.5 h-3.5 text-slate-400 group-hover:text-swjtu-blue" />
                <span className="truncate">封面信息</span>
              </a>
              <a
                href="#abstract"
                className="group flex items-center space-x-2 text-xs font-semibold text-slate-600 hover:text-swjtu-blue transition-colors py-1.5 px-2 rounded-lg hover:bg-slate-50"
              >
                <Bookmark className="w-3.5 h-3.5 text-slate-400 group-hover:text-swjtu-blue" />
                <span className="truncate">研究摘要</span>
              </a>
              {paper.sections.map((section, idx) => (
                <a
                  key={idx}
                  href={`#section-${idx}`}
                  className="group flex items-center space-x-2 text-xs font-semibold text-slate-600 hover:text-swjtu-blue transition-colors py-1.5 px-2 rounded-lg hover:bg-slate-50"
                >
                  <Bookmark className="w-3.5 h-3.5 text-slate-400 group-hover:text-swjtu-blue" />
                  <span className="truncate">{section.title.split('、')[1] || section.title.split('、')[0] || `核心板块 ${idx + 1}`}</span>
                </a>
              ))}
              {paper.conclusions && paper.conclusions.length > 0 && (
                <a
                  href="#conclusions"
                  className="group flex items-center space-x-2 text-xs font-semibold text-slate-600 hover:text-swjtu-blue transition-colors py-1.5 px-2 rounded-lg hover:bg-slate-50"
                >
                  <Bookmark className="w-3.5 h-3.5 text-slate-400 group-hover:text-swjtu-blue" />
                  <span className="truncate">研究所得结论</span>
                </a>
              )}
            </nav>
          </div>

          {/* Quick Actions in Sidebar */}
          <div className="space-y-2">
            {paper.realPdf && (
              <a
                href={paper.realPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 w-full px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-xs transition-all text-center"
              >
                <FileText className="w-4 h-4" />
                <span>在线阅读 PDF 原件</span>
              </a>
            )}
            {paper.certificateId && onNavigateToCertificate && (
              <button
                onClick={() => onNavigateToCertificate(paper.certificateId!)}
                className="flex items-center justify-center space-x-2 w-full px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold rounded-xl shadow-xs transition-all text-center cursor-pointer"
              >
                <Award className="w-4 h-4" />
                <span>核查获奖证书</span>
              </button>
            )}
          </div>
        </aside>

        {/* Right Main Content */}
        <div className="col-span-1 lg:col-span-9 space-y-6">
          
          <div id="title" className="bg-white border border-slate-200 shadow-md rounded-2xl overflow-hidden scroll-mt-24">
            {/* Elegant Header Banner */}
            <div className="bg-gradient-to-r from-slate-900 via-[#104085] to-swjtu-blue px-6 py-6 md:py-8 text-white relative">
              <div className="absolute right-4 top-4 opacity-10 pointer-events-none">
                <BookOpen className="w-36 h-36" />
              </div>
              
              <div className="relative space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="bg-swjtu-red/90 text-white text-[10px] md:text-xs font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded-sm shadow-sm">
                    {paper.contest}
                  </span>
                  <span className="bg-white/10 text-amber-300 text-[10px] md:text-xs font-mono font-bold tracking-wide px-2.5 py-1 rounded-sm border border-white/10 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" />
                    <span>{paper.award}</span>
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold font-serif tracking-tight leading-tight">
                  {paper.title}
                </h3>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 border-t border-white/10 text-xs text-slate-300 font-sans">
                  <p><span className="font-semibold text-white">研究作者:</span>{' '}
                    {paper.team.map((member, mIdx) => (
                      <span
                        key={mIdx}
                        className={member.includes('黄璨') ? 'text-swjtu-gold font-bold bg-white/10 px-1.5 py-0.5 rounded-sm' : 'text-slate-300'}
                      >
                        {member}
                      </span>
                    ))}
                  </p>
                  <span className="text-white/40">|</span>
                  <p><span className="font-semibold text-white">学科门类:</span> {paper.category}</p>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-8">
              {/* Mobile quick action bar */}
              <div className="flex flex-wrap gap-2 lg:hidden border-b border-slate-100 pb-4">
                {paper.realPdf && (
                  <a
                    href={paper.realPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[120px] flex items-center justify-center space-x-1.5 px-3 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>PDF 论文原件</span>
                  </a>
                )}
                {paper.certificateId && onNavigateToCertificate && (
                  <button
                    onClick={() => onNavigateToCertificate(paper.certificateId!)}
                    className="flex-1 min-w-[120px] flex items-center justify-center space-x-1.5 px-3 py-2.5 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
                  >
                    <Award className="w-3.5 h-3.5" />
                    <span>获奖证书</span>
                  </button>
                )}
              </div>

              {/* Abstract section */}
              <div id="abstract" className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 md:p-6 scroll-mt-24 space-y-3">
                <h4 className="flex items-center space-x-2 text-swjtu-blue font-extrabold text-sm tracking-wider uppercase border-b border-slate-200 pb-2">
                  <BookOpen className="w-4 h-4" />
                  <span>研究摘要 (Abstract)</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify indent-8 font-medium">
                  {paper.summary}
                </p>
              </div>

              {/* Detailed sections */}
              <div className="space-y-8">
                {paper.sections.map((section, idx) => (
                  <div
                    key={idx}
                    id={`section-${idx}`}
                    className="scroll-mt-24 space-y-4 border-b border-slate-100 pb-6 last:border-0 last:pb-0"
                  >
                    <h5 className="text-sm sm:text-base font-extrabold text-slate-900 flex items-center space-x-2.5">
                      <span className="w-6 h-6 rounded-full bg-blue-50 text-swjtu-blue font-bold text-xs flex items-center justify-center shrink-0 border border-blue-100">
                        {idx + 1}
                      </span>
                      <span>{section.title}</span>
                    </h5>
                    
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed indent-6 text-justify">
                      {section.content}
                    </p>

                    {/* Beautiful LaTeX Math Block */}
                    {section.formulas && section.formulas.length > 0 && (
                      <div className="bg-slate-950 rounded-xl p-4 md:p-5 font-mono text-xs text-indigo-300 space-y-3 relative overflow-hidden shadow-inner border border-slate-800">
                        {/* Grid Background Pattern */}
                        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
                          backgroundImage: 'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)',
                          backgroundSize: '20px 20px'
                        }}></div>
                        
                        <div className="relative z-10 flex items-center justify-between text-[9px] uppercase font-bold tracking-widest text-slate-500 pb-1.5 border-b border-slate-800">
                          <span>LaTeX Formulation / 核心优化代数式</span>
                          <span className="text-indigo-400">MATH MODEL</span>
                        </div>
                        
                        <div className="relative z-10 space-y-3 pt-2">
                          {section.formulas.map((formula, fIdx) => (
                            <div key={fIdx} className="py-2 text-center font-bold text-xs sm:text-sm text-white overflow-x-auto select-all">
                              <code className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 font-mono inline-block min-w-max text-swjtu-gold font-semibold">
                                {formula}
                              </code>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Metrics Dashboard view */}
                    {section.metrics && section.metrics.length > 0 && (
                      <div className="grid grid-cols-2 gap-3 pt-2">
                        {section.metrics.map((metric, mIdx) => (
                          <div
                            key={mIdx}
                            className="bg-slate-50/50 hover:bg-slate-50 border border-slate-200/60 p-4 rounded-xl text-center transition-colors duration-200 shadow-xs"
                          >
                            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1 truncate">
                              {metric.label}
                            </div>
                            <div className="text-base sm:text-lg font-extrabold font-mono text-swjtu-blue">
                              {metric.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Conclusions block */}
              {paper.conclusions && paper.conclusions.length > 0 && (
                <div id="conclusions" className="bg-slate-50 border border-slate-200/80 p-5 md:p-6 rounded-xl scroll-mt-24 space-y-4">
                  <h4 className="text-slate-800 font-extrabold text-sm tracking-wider uppercase flex items-center space-x-2 border-b border-slate-200 pb-2">
                    <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span>研究所得结论 (Analytical Outcomes)</span>
                  </h4>
                  <div className="space-y-3">
                    {paper.conclusions.map((conclusion, cIdx) => (
                      <div key={cIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        <span className="text-emerald-500 mt-0.5 shrink-0 font-bold">✓</span>
                        <p className="text-justify font-sans">{conclusion}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Bottom footnotes */}
              <div className="border-t border-slate-100 pt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-slate-400">
                <p className="flex items-center gap-1 font-sans">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>本研究模型算法公式均经过真实性核实，电子原件已归档至西南交通大学教工系统。</span>
                </p>
                {onBack && (
                  <button
                    onClick={onBack}
                    className="px-4 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 font-semibold rounded-lg transition-colors cursor-pointer text-center"
                  >
                    返回个人简历
                  </button>
                )}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
