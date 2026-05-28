import React from 'react';
import { Award, Sparkles, BookOpen, Layers, CornerDownRight, Check, ArrowLeft, FileText, ExternalLink, ShieldCheck } from 'lucide-react';
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
    <div className="w-full max-w-4xl mx-auto space-y-4 animate-fade-in">
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
          <span className="text-xs text-slate-400 font-mono uppercase tracking-wider">
            ACADEMIC PAPER SHOWCASE
          </span>
        </div>
      )}

      <div className="bg-white border border-slate-200 shadow-lg rounded-2xl overflow-hidden">
        {/* Decorative Title Banner */}
        <div className="bg-gradient-to-r from-slate-900 to-swjtu-blue px-6 py-5 md:py-7 text-white">
          <div className="flex flex-wrap items-center justify-between gap-2.5">
            <span className="bg-swjtu-red text-white text-[10px] md:text-xs font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded-sm">
              {paper.contest}
            </span>
            <div className="flex items-center gap-2">
              <span className="bg-white/10 text-amber-300 text-[10px] md:text-xs font-mono font-medium tracking-wide px-2.5 py-1 rounded-sm flex items-center gap-1">
                <Award className="w-3.5 h-3.5" />
                <span>{paper.award}</span>
              </span>
              {paper.realPdf && (
                <a
                  href={paper.realPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] md:text-xs font-mono font-bold tracking-wide px-2.5 py-1 rounded-sm flex items-center gap-1 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>打开真实 PDF 原件</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
          <h3 className="text-xl md:text-2xl font-bold font-serif tracking-tight mt-3">
            {paper.title}
          </h3>
          <p className="mt-2 text-xs text-slate-300 flex items-center flex-wrap gap-2 font-sans">
            <span className="font-semibold text-white">研究作者:</span>
            {paper.team.map((member, mIdx) => (
              <span
                key={mIdx}
                className={`px-1.5 py-0.5 rounded-sm ${
                  member.includes('黄璨') ? 'bg-swjtu-blue-light text-white font-bold' : 'text-slate-300'
                }`}
              >
                {member}
              </span>
            ))}
          </p>
        </div>

        {/* Main Body */}
        <div className="p-6 space-y-8 font-sans">
          
          {/* Quick PDF Direct link panel */}
          {paper.realPdf && (
            <div className="bg-emerald-50 border border-emerald-200/80 p-4 rounded-xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="space-y-0.5">
                <h4 className="text-emerald-800 font-bold text-xs sm:text-sm flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>已成功挂载学术论文 PDF 文件</span>
                </h4>
                <p className="text-[11px] text-slate-500">您可直接查阅该项竞赛研究提交的官方 PDF 论文电子底稿，内容 100% 真实。</p>
              </div>
              <a
                href={paper.realPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-all text-center"
              >
                <FileText className="w-4 h-4" />
                <span>在线阅读 PDF 论文原件</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}

          {/* Abstract Box */}
          <div className="bg-blue-50/50 hover:bg-blue-50/80 transition-colors p-4 rounded-xl border-l-[6px] border-swjtu-blue">
            <h4 className="flex items-center space-x-2 text-swjtu-blue font-bold text-sm tracking-widest uppercase mb-1.5">
              <BookOpen className="w-4 h-4" />
              <span>研究摘要 (Abstract)</span>
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed text-justify indent-8">
              {paper.summary}
            </p>
          </div>

          {/* Detailed Mathematical & Engineering Sections */}
          <div className="space-y-6">
            {paper.sections.map((section, idx) => (
              <div key={idx} className="space-y-3.5 border-b border-slate-100 pb-5 last:border-0 last:pb-0">
                <h5 className="text-base font-bold text-slate-800 flex items-center space-x-2">
                  <Layers className="w-4.5 h-4.5 text-swjtu-blue-light" />
                  <span>{section.title}</span>
                </h5>
                <p className="text-sm text-slate-600 leading-relaxed indent-6 text-justify">
                  {section.content}
                </p>

                {/* Math Equations Renderer (Pre-styled block) */}
                {section.formulas && section.formulas.length > 0 && (
                  <div className="my-3.5 bg-slate-50 border border-slate-200 rounded-xl p-4 font-mono text-xs md:text-sm text-slate-800 space-y-2.5 overflow-x-auto shadow-inner">
                    <div className="text-[10px] uppercase font-bold text-slate-500 font-sans tracking-widest pb-1 border-b border-slate-200">
                      LATEX FORMULATION / 核心优化代数式
                    </div>
                    {section.formulas.map((formula, fIdx) => (
                      <div key={fIdx} className="py-1 text-center font-bold text-swjtu-blue flex items-center justify-center min-w-max">
                        <code className="px-2 py-0.5 rounded-md bg-white border border-slate-100 font-mono">
                          {formula}
                        </code>
                      </div>
                    ))}
                  </div>
                )}

                {/* Key numerical outcomes / KPIs */}
                {section.metrics && section.metrics.length > 0 && (
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
                    {section.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="bg-slate-50/40 border border-slate-100 p-3 rounded-lg text-center hover:bg-slate-50 transition-colors duration-200 shadow-xs">
                        <div className="text-xs text-slate-400 font-medium mb-1 truncate">{metric.label}</div>
                        <div className="text-lg font-bold font-mono text-swjtu-blue">{metric.value}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Conclusion Panel */}
          {paper.conclusions && paper.conclusions.length > 0 && (
            <div className="bg-slate-50 border border-slate-200/80 p-5 rounded-xl space-y-3">
              <h4 className="text-slate-700 font-bold text-sm tracking-widest uppercase flex items-center space-x-2">
                <Check className="w-4.5 h-4.5 text-emerald-500" />
                <span>研究所得结论 (Analytical Outcomes)</span>
              </h4>
              <div className="space-y-2">
                {paper.conclusions.map((conclusion, cIdx) => (
                  <div key={cIdx} className="flex items-start space-x-2.5 text-sm text-slate-600">
                    <span className="text-emerald-500 mt-0.5 shrink-0">✔</span>
                    <p className="text-justify font-sans">{conclusion}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Cross Navigator to associated Certificate */}
          {paper.certificateId && onNavigateToCertificate && (
            <div className="flex items-center justify-between border-t border-slate-100 pt-5 mt-2 gap-4">
              <p className="text-xs text-slate-400">
                * 上述结论均登记在相应的获奖认证纸质文档中，可在专家库进行核查。
              </p>
              <button
                onClick={() => onNavigateToCertificate(paper.certificateId!)}
                className="flex items-center space-x-1.5 px-3.5 py-2 bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold rounded-lg shadow-sm transition-all hover:scale-105 cursor-pointer shrink-0"
              >
                <Award className="w-4 h-4" />
                <span>核查此研究的获奖证书</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
