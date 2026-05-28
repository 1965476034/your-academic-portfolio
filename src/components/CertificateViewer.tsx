import React, { useState } from 'react';
import { Award, FileText, ShieldCheck, ArrowLeft, Eye, Image as ImageIcon } from 'lucide-react';
import { Certificate } from '../types';

interface CertificateViewerProps {
  certificate: Certificate;
  onClose?: () => void;
  onNavigateToPaper?: (paperId: string) => void;
  onBack?: () => void;
}

export const CertificateViewer: React.FC<CertificateViewerProps> = ({
  certificate,
  onClose,
  onNavigateToPaper,
  onBack
}) => {
  const [viewMode, setViewMode] = useState<'simulated' | 'real'>(
    certificate.realImage ? 'real' : 'simulated'
  );

  const getCategoryTheme = (category: string) => {
    switch (category) {
      case 'competition':
        return {
          bg: 'bg-gradient-to-br from-amber-50 to-orange-50',
          border: 'border-amber-400',
          sealColor: 'border-red-600 text-red-600',
          ribbonColor: 'bg-amber-600',
          badgeText: '学科竞赛荣誉'
        };
      case 'academic':
        return {
          bg: 'bg-gradient-to-br from-blue-50 to-indigo-50',
          border: 'border-swjtu-blue',
          sealColor: 'border-red-600 text-red-600',
          ribbonColor: 'bg-swjtu-blue',
          badgeText: '学术科研表现'
        };
      case 'english':
        return {
          bg: 'bg-gradient-to-br from-cyan-50 to-teal-50',
          border: 'border-cyan-500',
          sealColor: 'border-teal-700 text-teal-700',
          ribbonColor: 'bg-cyan-600',
          badgeText: '语言水平认证'
        };
      case 'work':
        return {
          bg: 'bg-gradient-to-br from-sky-50 to-blue-50',
          border: 'border-sky-400',
          sealColor: 'border-sky-800 text-sky-800',
          ribbonColor: 'bg-indigo-600',
          badgeText: '实习与工作鉴定'
        };
      default:
        return {
          bg: 'bg-gradient-to-br from-slate-50 to-gray-50',
          border: 'border-slate-300',
          sealColor: 'border-red-500 text-red-500',
          ribbonColor: 'bg-slate-600',
          badgeText: '社会实践/其他荣誉'
        };
    }
  };

  const theme = getCategoryTheme(certificate.category);

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4 animate-fade-in">
      {/* Back Header Nav */}
      <div className="flex items-center justify-between">
        {onBack ? (
          <button
            onClick={onBack}
            className="inline-flex items-center space-x-2 text-sm font-semibold text-swjtu-blue hover:text-swjtu-blue-light transition-colors py-2 group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
            <span>返回个人简历</span>
          </button>
        ) : (
          <div></div>
        )}
        
        {/* Dual Mode Switcher Tabs */}
        {certificate.realImage && (
          <div className="flex bg-slate-100 p-0.5 rounded-lg text-xs font-semibold shadow-xs shrink-0">
            <button
              onClick={() => setViewMode('real')}
              className={`px-3 py-1.5 rounded-md transition-all flex items-center space-x-1.5 cursor-pointer ${
                viewMode === 'real' ? 'bg-white text-swjtu-blue shadow-xs' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>真实证书原件</span>
            </button>
            <button
              onClick={() => setViewMode('simulated')}
              className={`px-3 py-1.5 rounded-md transition-all flex items-center space-x-1.5 cursor-pointer ${
                viewMode === 'simulated' ? 'bg-white text-swjtu-blue shadow-xs' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>电子仿真校验卡</span>
            </button>
          </div>
        )}
      </div>

      <div className="relative w-full overflow-hidden bg-white shadow-2xl rounded-2xl border-4 border-slate-200 p-1 md:p-3">
        {/* Conditional View Rendering */}
        {viewMode === 'real' && certificate.realImage ? (
          <div className="w-full min-h-[460px] flex items-center justify-center p-2 sm:p-4 bg-slate-950/5 rounded-xl border-2 border-slate-100 overflow-hidden relative group">
            <img
              src={certificate.realImage}
              alt={certificate.title}
              className="max-h-[520px] w-auto object-contain rounded-md shadow-lg hover:scale-101 transition-transform duration-300 cursor-zoom-in"
            />
            <div className="absolute bottom-3 right-3 bg-slate-900/80 text-white text-[10px] font-mono px-2.5 py-1 rounded shadow-xs flex items-center space-x-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>西交大教运官方原件扫描核真</span>
            </div>
          </div>
        ) : (
          /* Decorative Outer Matte */
          <div className={`w-full min-h-[460px] cursor-default relative p-6 md:p-10 border-2 rounded-xl transition-all ${theme.border} ${theme.bg}`}>
            {/* Certificate Border Corner Ornaments */}
            <div className={`absolute top-2 left-2 w-8 h-8 border-t-4 border-l-4 ${certificate.category === 'competition' ? 'border-amber-500' : 'border-swjtu-blue'} opacity-80`}></div>
            <div className={`absolute top-2 right-2 w-8 h-8 border-t-4 border-r-4 ${certificate.category === 'competition' ? 'border-amber-500' : 'border-swjtu-blue'} opacity-80`}></div>
            <div className={`absolute bottom-2 left-2 w-8 h-8 border-b-4 border-l-4 ${certificate.category === 'competition' ? 'border-amber-500' : 'border-swjtu-blue'} opacity-80`}></div>
            <div className={`absolute bottom-2 right-2 w-8 h-8 border-b-4 border-r-4 ${certificate.category === 'competition' ? 'border-amber-500' : 'border-swjtu-blue'} opacity-80`}></div>

            {/* Certificate Headers */}
            <div className="flex flex-col items-center text-center space-y-2 pb-6 border-b border-dashed border-slate-300">
              <div className="flex items-center space-x-2 text-swjtu-blue font-serif text-lg font-bold tracking-widest">
                <span>西南交通大学 • SOUTHWEST JIAOTONG UNIVERSITY</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 font-serif tracking-wide mt-2">
                {certificate.title.includes('(') ? certificate.title.split('(')[0] : certificate.title}
              </h2>
              {certificate.subtitle && (
                <p className="text-xs md:text-sm text-slate-500 font-mono tracking-wider italic uppercase">
                  {certificate.subtitle}
                </p>
              )}
              <span className="inline-block bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded-full font-medium font-mono mt-1">
                {theme.badgeText}
              </span>
            </div>

            {/* Main Certificate Content */}
            <div className="my-8 space-y-6 font-serif leading-relaxed text-slate-800">
              <p className="text-base text-center text-slate-600">
                兹证明西南交通大学交通运输与物流学院本科生 <strong className="text-slate-900 border-b border-slate-500 pb-0.5 text-lg px-2">黄璨</strong>：
              </p>

              <div className="p-4 bg-white/60 backdrop-blur-xs rounded-xl border border-slate-200/50 shadow-xs">
                <p className="text-sm md:text-base text-slate-800 indent-8 leading-loose tracking-wide font-sans text-justify font-medium">
                  {certificate.summary}
                </p>
              </div>

              {/* Key Achievements Inside Certificate */}
              {certificate.highlights && certificate.highlights.length > 0 && (
                <div className="space-y-2 pl-4 border-l-4 border-slate-300 py-1">
                  <h4 className="text-xs font-bold text-slate-500 font-sans tracking-widest uppercase">
                    CERTIFIED CRITERIA / 核心考评要点
                  </h4>
                  <ul className="space-y-1.5">
                    {certificate.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-xs md:text-sm text-slate-700 flex items-start space-x-2 font-sans">
                        <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Group details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-200/50 font-sans text-xs text-slate-600">
                <div className="space-y-1.5">
                  {certificate.teamMembers && (
                    <p className="flex items-center space-x-1.5">
                      <span className="font-semibold text-slate-700">团队成员(Team Member):</span>
                      <span>{certificate.teamMembers.join('、')}</span>
                    </p>
                  )}
                  {certificate.instructor && (
                    <p className="flex items-center space-x-1.5">
                      <span className="font-semibold text-slate-700">指导教师(Instructor):</span>
                      <span>{certificate.instructor}</span>
                    </p>
                  )}
                  <p className="flex items-center space-x-1.5">
                    <span className="font-semibold text-slate-700">授予荣誉(Award):</span>
                    <span className="text-swjtu-red font-semibold">{certificate.awardLevel}</span>
                  </p>
                </div>
                <div className="space-y-1.5 md:text-right">
                  <p className="flex items-center md:justify-end space-x-1.5">
                    <span className="font-semibold text-slate-700">颁发单位(Issuer):</span>
                    <span>{certificate.issuer}</span>
                  </p>
                  <p className="flex items-center md:justify-end space-x-1.5">
                    <span className="font-semibold text-slate-700">核属日期(Date):</span>
                    <span>{certificate.date}</span>
                  </p>
                  {certificate.certNo && (
                    <p className="flex items-center md:justify-end space-x-1.5 font-mono text-slate-500">
                      <span className="font-semibold text-slate-700">证书编号(No.):</span>
                      <span>{certificate.certNo}</span>
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* CSS Stamp */}
            <div className="absolute right-10 bottom-6 md:right-16 md:bottom-12 flex flex-col items-center pointer-events-none select-none opacity-85 hover:opacity-100 transition-opacity">
              <div className="academic-stamp text-center border-swjtu-red text-swjtu-red text-[10px] scale-100 p-1 flex flex-col items-center justify-center font-bold">
                <div className="text-[7px] leading-tight text-center max-w-[65px] tracking-tighter">
                  {certificate.issuer.length > 15 ? certificate.issuer.substring(0, 14) + '...' : certificate.issuer}
                </div>
                <div className="text-md my-0.5">★</div>
                <div className="text-[7px] uppercase tracking-tighter">VERIFIED</div>
              </div>
            </div>
          </div>
        )}

        {/* Interactive Actions footer */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-t border-slate-100 px-6 py-4 bg-slate-50 rounded-b-xl gap-3">
          <p className="text-xs text-slate-500 font-sans flex items-center space-x-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>证书复印件/原图已录入系统，支持与西南交大教工库进行防伪印章查核。</span>
          </p>
          <div className="flex flex-wrap gap-2 shrink-0">
            {certificate.paperId && onNavigateToPaper && (
              <button
                onClick={() => onNavigateToPaper(certificate.paperId!)}
                className="flex items-center space-x-1.5 px-3.5 py-2 bg-swjtu-blue hover:bg-swjtu-blue-light text-white text-xs font-semibold rounded-lg shadow-sm transition-all hover:shadow-xs cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>查看学术报告/论文</span>
              </button>
            )}
            {certificate.realPdf && (
              <a
                href={certificate.realPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 px-3.5 py-2 bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold rounded-lg shadow-sm transition-all hover:shadow-xs"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>PDF 学术原件</span>
              </a>
            )}
            {onClose && (
              <button
                onClick={onClose}
                className="px-3.5 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                收起预览
              </button>
            )}
            {onBack && (
              <button
                onClick={onBack}
                className="px-3.5 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                返回个人简历
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
