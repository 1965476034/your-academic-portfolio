import React from 'react';
import { FileText, ShieldCheck, ArrowLeft } from 'lucide-react';
import { Certificate } from '../types';

interface CertificateViewerProps {
  certificate: Certificate;
  onClose?: () => void;
  onBack?: () => void;
}

export const CertificateViewer: React.FC<CertificateViewerProps> = ({
  certificate,
  onClose,
  onBack
}) => {
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
      </div>

      <div className="relative w-full overflow-hidden bg-white shadow-2xl rounded-2xl border-4 border-slate-200 p-1 md:p-3">
        {certificate.realImage ? (
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
          <div className="w-full min-h-[460px] flex items-center justify-center bg-slate-50 text-slate-400 rounded-xl">
            暂无原件图片
          </div>
        )}

        {/* Interactive Actions footer */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-t border-slate-100 px-6 py-4 bg-slate-50 rounded-b-xl gap-3">
          <p className="text-xs text-slate-500 font-sans flex items-center space-x-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>证书复印件/原图已录入系统，支持与西南交大教工库进行防伪印章查核。</span>
          </p>
          <div className="flex flex-wrap gap-2 shrink-0">

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
