import React, { useState, useEffect } from 'react';
import {
  GraduationCap,
  Award,
  BookOpen,
  FileText,
  Briefcase,
  Layers,
  Phone,
  Mail,
  Search,
  CheckCircle2,
  Check,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Calendar,
  Compass,
  ArrowRight,
  ShieldCheck,
  Building2,
  TrendingUp,
  X,
  MapPin,
  Clock,
  Menu,
  ArrowLeft
} from 'lucide-react';
import { PROFILE, CERTIFICATES, PAPERS, PROJECTS, EXPERIENCES } from './data';
import { CertificateViewer } from './components/CertificateViewer';
import { PaperViewer } from './components/PaperViewer';
import { ProjectViewer } from './components/ProjectViewer';
import { ExperienceViewer } from './components/ExperienceViewer';
import { Certificate, Paper, Project, Experience } from './types';

export default function App() {
  // Routing: 'resume' | 'paper' | 'project' | 'certificate' | 'experience'
  const [currentView, setCurrentView] = useState<'resume' | 'paper' | 'project' | 'certificate' | 'experience'>('resume');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Search & Filter for Certificates on homepage
  const [certFilter, setCertFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Floating Toast Notification
  const [notification, setNotification] = useState<string | null>(null);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Copy email to clipboard
    navigator.clipboard.writeText(PROFILE.email).then(() => {
      setNotification('已自动复制邮箱地址到剪贴板，正在尝试唤醒邮件客户端...');
      setTimeout(() => {
        setNotification(null);
      }, 3500);
    }).catch(() => {
      setNotification('正在尝试唤醒邮件客户端...');
      setTimeout(() => {
        setNotification(null);
      }, 2500);
    });
    // Open mailto link
    window.location.href = `mailto:${PROFILE.email}`;
  };

  // Custom navigation handler
  const navigateTo = (view: 'resume' | 'paper' | 'project' | 'certificate' | 'experience', id: string | null = null) => {
    setCurrentView(view);
    setSelectedId(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && currentView !== 'resume') {
        navigateTo('resume');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentView]);

  // Find selected item data
  const activePaper = PAPERS.find(p => p.id === selectedId);
  const activeProject = PROJECTS.find(p => p.id === selectedId);
  const activeCert = CERTIFICATES.find(c => c.id === selectedId);
  const activeExp = EXPERIENCES.find(e => e.id === selectedId);

  // Filtered certificates for home page listing
  const filteredCertificates = CERTIFICATES.filter(cert => {
    const matchesFilter = certFilter === 'all' || cert.category === certFilter;
    const matchesSearch = 
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      cert.awardLevel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (cert.summary && cert.summary.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  // Render all projects (including eV-v2g, 3dbox, fatigue, uav, and lowair)
  const researchProjects = PROJECTS;

  return (
    <div className="min-h-screen bg-slate-background text-slate-800 selection:bg-swjtu-blue selection:text-white flex flex-col font-sans antialiased">
      
      {/* Sticky Header Nav */}
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigateTo('resume')}>
            {/* SWJTU Official School Crest */}
            <img
              src="/materials/西南交通大学校徽.png"
              alt="西南交通大学校徽"
              className="w-10 h-10 object-contain select-none"
            />
            <div>
              <h1 className="text-base font-bold text-slate-900 tracking-tight font-sans flex items-center gap-1.5">
                <span>{PROFILE.name}</span>
                <span className="text-xs font-mono font-medium text-slate-400">Can Huang</span>
              </h1>
              <p className="text-[10px] text-slate-500 font-sans uppercase tracking-widest leading-none">
                {PROFILE.university} • 学术简历 Portfolio
              </p>
            </div>
          </div>

          {/* Nav Status */}
          <nav className="hidden md:flex items-center space-x-2 text-sm">
            <button
              onClick={() => navigateTo('resume')}
              className={`px-3 py-1.5 rounded-md font-medium transition-all cursor-pointer ${
                currentView === 'resume' ? 'bg-slate-100 text-swjtu-blue font-semibold' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              学术简历主页
            </button>
            <div className="h-4 w-[1px] bg-slate-200"></div>
            <span className="text-xs text-slate-400 font-mono px-2">
              {currentView === 'resume' ? 'RESUME VIEW' : `${currentView.toUpperCase()} DETAIL`}
            </span>
          </nav>

          {/* Advisor Quick Action */}
          <div className="hidden lg:block">
            <button
              onClick={handleContactClick}
              className="inline-flex items-center space-x-1.5 bg-swjtu-blue hover:bg-swjtu-blue-light text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-xs transition-transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>致信黄璨 (联系我)</span>
            </button>
          </div>

          {/* Mobile Hamburguer Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-md text-slate-500 hover:bg-slate-100 focus:outline-hidden"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-4 py-3 space-y-1 shadow-inner animate-fade-in">
            <button
              onClick={() => navigateTo('resume')}
              className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              学术简历首页
            </button>
            <button
              onClick={handleContactClick}
              className="block w-full text-center bg-swjtu-blue text-white text-xs font-semibold py-2 rounded-md mt-2 cursor-pointer"
            >
              致信黄璨: {PROFILE.email}
            </button>
          </div>
        )}
      </header>

      {/* Main Container */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        
        {/* ======================================= */}
        {/* ROUTER 1: CONCISE RESUME HOME PAGE      */}
        {/* ======================================= */}
        {currentView === 'resume' && (
          <div className="space-y-10 animate-fade-in">
            
            {/* Elegant Resume Header Block */}
            <div className="relative overflow-hidden bg-gradient-to-r from-swjtu-blue via-[#0c479e] to-slate-900 rounded-2xl p-6 md:p-8 text-white shadow-lg">
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[200%] bg-white rounded-full transform rotate-12"></div>
              </div>
              
              <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-8">
                {/* Real Suit Photo */}
                <div className="shrink-0 relative">
                  <div className="w-24 md:w-28 aspect-[3/4] rounded-xl overflow-hidden border-4 border-white/90 bg-slate-100 shadow-md">
                    <img
                      src={PROFILE.photoUrl}
                      alt={PROFILE.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-swjtu-red text-white text-[9px] font-mono font-bold px-2 py-0.5 rounded-sm shadow-xs border border-white">
                    茅以升班
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left space-y-3">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight font-sans">
                        {PROFILE.name}
                      </h2>
                      <span className="bg-white/10 border border-white/20 text-slate-200 text-xs px-2.5 py-0.5 rounded-md font-mono">
                        {PROFILE.englishName}
                      </span>
                      <span className="bg-swjtu-gold/90 text-slate-950 text-[10px] font-bold px-2.5 py-0.5 rounded-sm uppercase tracking-wider font-mono shadow-xs">
                        {PROFILE.politicalStatus}
                      </span>
                    </div>
                    
                    <p className="text-sm text-slate-300 font-medium">
                      {PROFILE.university} (211) • {PROFILE.college} • <span className="text-white font-semibold">{PROFILE.major}</span>
                    </p>
                  </div>

                  <p className="text-xs md:text-sm text-slate-100/90 leading-relaxed font-sans max-w-4xl text-justify">
                    {PROFILE.bio}
                  </p>

                  <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs">
                    <span className="text-swjtu-gold font-semibold">• 拟投研究生方向:</span>
                    <span className="bg-white/5 px-2.5 py-0.5 rounded-sm border border-white/10 font-medium text-slate-200">
                      {PROFILE.aimType}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {PROFILE.stats.map((stat, idx) => (
                <div key={idx} className="bg-white border border-slate-200 p-4 rounded-xl text-center space-y-1 shadow-xs">
                  <div className="text-2xl font-extrabold font-mono text-swjtu-blue">{stat.value}</div>
                  <div className="text-xs font-bold text-slate-700">{stat.label}</div>
                  <div className="text-[10px] text-slate-400 leading-none">{stat.desc}</div>
                </div>
              ))}
            </div>

            {/* Double Column Resume Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Basic Information & Skills */}
              <div className="lg:col-span-4 space-y-6">
                
                {/* Contact Info Card */}
                <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-4 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm tracking-widest uppercase border-b border-slate-100 pb-2.5 flex items-center space-x-2">
                    <Compass className="w-4 h-4 text-swjtu-blue" />
                    <span>基本联络与政务背景</span>
                  </h3>
                  <div className="space-y-3.5 text-xs text-slate-600">
                    <div className="space-y-1">
                      <span className="font-bold text-slate-400 font-mono block">E-MAIL / 电邮</span>
                      <button
                        onClick={handleContactClick}
                        className="text-swjtu-blue font-semibold hover:underline flex items-center gap-1 text-sm cursor-pointer bg-transparent border-none p-0 focus:outline-hidden"
                      >
                        <span>{PROFILE.email}</span>
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
                    <div className="space-y-1">
                      <span className="font-bold text-slate-400 font-mono block">CONTACT PHONE / 手机</span>
                      <span className="text-slate-800 font-semibold text-sm">{PROFILE.phone}</span>
                    </div>
                    <div className="space-y-1">
                      <span className="font-bold text-slate-400 font-mono block">POLITICAL STATUS / 政治面貌</span>
                      <span className="text-slate-800 font-semibold">{PROFILE.politicalStatus}</span>
                    </div>
                    <div className="space-y-1">
                      <span className="font-bold text-slate-400 font-mono block">NATIVE PLACE & ETHNICITY / 籍贯与民族</span>
                      <span className="text-slate-800 font-semibold">{PROFILE.nativePlace} • {PROFILE.ethnicity}</span>
                    </div>
                    <div className="space-y-1">
                      <span className="font-bold text-slate-400 font-mono block">BIRTHDAY & AGE / 出生日期</span>
                      <span className="text-slate-800 font-semibold">{PROFILE.birthday} (21岁)</span>
                    </div>
                    <div className="space-y-1">
                      <span className="font-bold text-slate-400 font-mono block">CAMPUS RESIDENCE / 常驻地</span>
                      <span className="text-slate-800">四川省成都市 西南交通大学犀浦校区</span>
                    </div>
                  </div>
                </div>

                {/* Skills Progress Card */}
                <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-4 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm tracking-widest uppercase border-b border-slate-100 pb-2.5">
                    学术与专业技能
                  </h3>
                  <div className="space-y-4">
                    {PROFILE.skills.map((skill, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-bold text-slate-700">{skill.name}</span>
                          <span className="font-mono bg-blue-50 text-swjtu-blue text-[10px] px-1.5 py-0.5 rounded-sm font-semibold">
                            {skill.level}
                          </span>
                        </div>
                        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              skill.level === '极优' ? 'bg-gradient-to-r from-swjtu-blue to-swjtu-blue-light' : 'bg-gradient-to-r from-blue-500 to-indigo-500'
                            }`}
                            style={{ width: skill.level === '极优' ? '94%' : '84%' }}
                          ></div>
                        </div>
                        <p className="text-[10px] text-slate-500 leading-tight">
                          {skill.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Verified Box */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-center space-y-2">
                  <ShieldCheck className="w-9 h-9 text-emerald-600 mx-auto" />
                  <h4 className="text-xs font-bold text-slate-800">学术诚信及资料验证</h4>
                  <p className="text-[10px] text-slate-500 leading-relaxed text-justify">
                    本网站所有列示的学术成果、论文公式及证书印章，均经过官方文件核发和真实性查验。点击行项目即可查看真实原件详情。
                  </p>
                </div>

              </div>

              {/* Right Column: Simplified CV Items */}
              <div className="lg:col-span-8 space-y-6">
                
                {/* CV Section 1: Education with Real Transcript PDF link and grades list */}
                <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-5 shadow-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-100 pb-3">
                    <h3 className="text-base font-bold text-slate-900 tracking-tight flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-swjtu-blue" />
                      <span>教育背景</span>
                    </h3>
                    {PROFILE.transcriptUrl && (
                      <a
                        href={PROFILE.transcriptUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-swjtu-blue hover:bg-swjtu-blue-light text-white text-xs font-semibold rounded-lg shadow-sm transition-transform hover:-translate-y-0.5 cursor-pointer"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>📄 查看官方成绩单 PDF</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    )}
                  </div>

                  <div className="flex justify-between items-start text-xs sm:text-sm">
                    <div className="space-y-1">
                      <h4 className="font-bold text-slate-800 text-sm sm:text-base">西南交通大学 (211)</h4>
                      <p className="text-slate-500 font-medium">交通运输与物流学院 · 交通运输专业 (双一流学科)</p>
                      <div className="flex flex-wrap gap-x-4 gap-y-1.5 pt-2 text-xs text-slate-600 font-mono">
                        <p><span className="font-semibold text-slate-800">课程均分:</span> {PROFILE.averageScore}</p>
                        <p><span className="font-semibold text-slate-800">专业排名:</span> {PROFILE.ranking}</p>
                        <p><span className="font-semibold text-slate-800">GPA绩点:</span> {PROFILE.gpa}</p>
                        <p><span className="font-semibold text-slate-800">英语水平:</span> 六级 {PROFILE.cet6Score}</p>
                      </div>
                    </div>
                    <div className="text-right space-y-1 shrink-0">
                      <span className="font-mono bg-slate-100 px-2 py-0.5 rounded text-slate-600 font-medium">2023.09 - 至今</span>
                      <p className="text-swjtu-red font-semibold text-xs">茅以升班大三在读</p>
                    </div>
                  </div>

                  {/* Core Courses Grid */}
                  <div className="space-y-2 pt-2">
                    <h5 className="font-bold text-slate-700 text-xs tracking-widest uppercase">
                      核心专业课成绩 (Core Courses Grades)
                    </h5>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {PROFILE.courses.map((course, idx) => (
                        <div key={idx} className="bg-slate-50 p-2 rounded-lg border border-slate-200/50 flex justify-between items-center text-xs">
                          <span className="text-slate-600 truncate mr-2" title={course.name}>{course.name}</span>
                          <span className="font-mono font-bold text-swjtu-blue bg-blue-50 px-1.5 py-0.5 rounded shrink-0">{course.score}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CV Section 2: Research Projects (Exactly the 4 core academic projects) */}
                <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4 shadow-xs">
                  <div className="flex justify-between items-center border-b border-slate-100 pb-2.5">
                    <h3 className="text-base font-bold text-slate-900 tracking-tight flex items-center gap-2">
                      <Layers className="w-5 h-5 text-indigo-600" />
                      <span>科研项目 ({researchProjects.length})</span>
                    </h3>
                    <span className="text-[10px] text-slate-400 font-mono">点击查看模型方法与技术栈</span>
                  </div>

                  <div className="divide-y divide-slate-100">
                    {researchProjects.map((project) => (
                      <div
                        key={project.id}
                        onClick={() => navigateTo('project', project.id)}
                        className="py-3.5 first:pt-0 last:pb-0 cursor-pointer group flex items-start sm:items-center justify-between gap-4 transition-all hover:px-2 hover:bg-slate-50/80 rounded-lg"
                      >
                        <div className="space-y-1.5 flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="bg-indigo-50 border border-indigo-100 text-indigo-700 text-[9px] font-bold px-2 py-0.5 rounded-sm">
                              {project.award}
                            </span>
                            <span className="text-xs text-slate-600 font-semibold bg-slate-100 px-2 py-0.5 rounded-sm">
                              指导老师: {project.instructor}
                            </span>
                          </div>
                          <h4 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-swjtu-blue transition-colors truncate">
                            {project.title}
                          </h4>
                          <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed text-justify">
                            {project.summary}
                          </p>
                        </div>
                        <div className="shrink-0 flex items-center space-x-1.5 text-xs text-indigo-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                          <span>详情</span>
                          <ChevronRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CV Section 3: Honors, Credentials & Competitions Grid (All-inclusive, organized with tabs) */}
                <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4 shadow-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-100 pb-2.5">
                    <h3 className="text-base font-bold text-slate-900 tracking-tight flex items-center gap-2">
                      <Award className="w-5 h-5 text-swjtu-red" />
                      <span>竞赛获奖与学术荣誉柜 ({CERTIFICATES.length})</span>
                    </h3>
                    
                    {/* Compact Search */}
                    <div className="flex items-center space-x-2">
                      <div className="relative">
                        <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2 top-2" />
                        <input
                          type="text"
                          placeholder="检索证书..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-7 pr-2 py-1 bg-slate-50 border border-slate-200 rounded-md text-xs w-28 focus:outline-hidden focus:border-swjtu-blue-light focus:bg-white"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Filter Pills */}
                  <div className="flex flex-wrap gap-1 bg-slate-100 p-0.5 rounded-lg text-[10px]">
                    {['all', 'competition', 'academic', 'english', 'work'].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setCertFilter(cat)}
                        className={`px-2.5 py-1 rounded font-semibold transition-all cursor-pointer ${
                          certFilter === cat ? 'bg-white text-swjtu-blue shadow-xs' : 'text-slate-500'
                        }`}
                      >
                        {cat === 'all' ? '全部证书' :
                         cat === 'competition' ? '学术竞赛' :
                         cat === 'academic' ? '学校荣誉' :
                         cat === 'english' ? '外语与IT' : '实习与实践'}
                      </button>
                    ))}
                  </div>

                  {/* Grid Listing */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    {filteredCertificates.map((cert) => (
                      <div
                        key={cert.id}
                        onClick={() => navigateTo('certificate', cert.id)}
                        className="p-3 bg-slate-50/50 hover:bg-slate-50 border border-slate-200/60 rounded-xl cursor-pointer group transition-all flex items-center justify-between gap-2"
                      >
                        <div className="space-y-1 pr-1.5 flex-1 min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className={`w-1.5 h-1.5 rounded-full ${
                              cert.category === 'competition' ? 'bg-amber-500' :
                              cert.category === 'academic' ? 'bg-swjtu-blue' :
                              cert.category === 'english' ? 'bg-cyan-500' : 'bg-emerald-500'
                            }`} />
                            <h4 className="text-[10px] font-bold text-slate-400 tracking-wider uppercase font-mono truncate">
                              {cert.category === 'competition' ? 'COMPETITION' :
                               cert.category === 'academic' ? 'HONOR' :
                               cert.category === 'english' ? 'SKILL' : 'PRACTICE'}
                            </h4>
                            {cert.realPdf && (
                              <span className="bg-emerald-50 border border-emerald-100 text-emerald-700 text-[8px] font-mono font-bold px-1.5 rounded-sm">
                                PDF论文
                              </span>
                            )}
                            {cert.id === 'computer-design-2025' && (
                              <span className="bg-indigo-50 border border-indigo-100 text-indigo-700 text-[8px] font-mono font-bold px-1.5 rounded-sm">
                                演示系统
                              </span>
                            )}
                          </div>
                          <h5 className="text-xs font-bold text-slate-800 group-hover:text-swjtu-blue transition-colors truncate">
                            {cert.title}
                          </h5>
                          <p className="text-[10px] text-swjtu-red font-semibold truncate">
                            {cert.awardLevel}
                          </p>
                        </div>
                        <div className="shrink-0 w-7 h-7 bg-white rounded-full flex items-center justify-center text-slate-400 group-hover:text-swjtu-blue border border-slate-100 shadow-xs">
                          <ChevronRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CV Section 4: Student Leadership & Practical Experience */}
                <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4 shadow-xs">
                  <div className="flex justify-between items-center border-b border-slate-100 pb-2.5">
                    <h3 className="text-base font-bold text-slate-900 tracking-tight flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-emerald-600" />
                      <span>学生工作与社团实践 ({EXPERIENCES.length})</span>
                    </h3>
                    <span className="text-[10px] text-slate-400 font-mono">点击查看详细工作履历</span>
                  </div>

                  <div className="divide-y divide-slate-100">
                    {EXPERIENCES.map((exp) => (
                      <div
                        key={exp.id}
                        onClick={() => navigateTo('experience', exp.id)}
                        className="py-4 first:pt-0 last:pb-0 cursor-pointer group flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all hover:px-2 hover:bg-slate-50/80 rounded-lg"
                      >
                        <div className="space-y-1.5 flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-[9px] font-bold px-2 py-0.5 rounded-sm bg-emerald-50 border border-emerald-100 text-emerald-700">
                              {exp.role.includes('社长') ? '社团领袖' : '学生骨干'}
                            </span>
                            <span className="text-xs font-mono text-slate-400">{exp.duration}</span>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                            <h4 className="text-sm font-bold text-slate-800 group-hover:text-swjtu-blue transition-colors">
                              {exp.title}
                            </h4>
                            <span className="text-xs text-slate-500 font-medium">{exp.unit}</span>
                          </div>

                          <div className="flex flex-wrap items-center gap-2 pt-0.5">
                            <span className="text-xs text-swjtu-red font-bold bg-red-50 px-2 py-0.5 rounded-md border border-red-100">
                              担任职务: {exp.role}
                            </span>
                          </div>

                          <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed text-justify">
                            {exp.summary}
                          </p>
                        </div>
                        <div className="shrink-0 flex items-center space-x-1.5 text-xs text-emerald-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                          <span>查看履历详情</span>
                          <ChevronRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* ======================================= */}
        {/* ROUTER 2: PAPER DETAILED VIEW           */}
        {/* ======================================= */}
        {currentView === 'paper' && activePaper && (
          <PaperViewer
            paper={activePaper}
            onBack={() => navigateTo('resume')}
            onNavigateToCertificate={(certId) => navigateTo('certificate', certId)}
          />
        )}

        {/* ======================================= */}
        {/* ROUTER 3: PROJECT DETAILED VIEW         */}
        {/* ======================================= */}
        {currentView === 'project' && activeProject && (
          <ProjectViewer
            project={activeProject}
            onBack={() => navigateTo('resume')}
            onNavigateToCertificate={(certId) => navigateTo('certificate', certId)}
          />
        )}

        {/* ======================================= */}
        {/* ROUTER 4: CERTIFICATE DETAILED VIEW     */}
        {/* ======================================= */}
        {currentView === 'certificate' && activeCert && (
          <CertificateViewer
            certificate={activeCert}
            onBack={() => navigateTo('resume')}
            onNavigateToPaper={(id) => {
              if (PAPERS.some(p => p.id === id)) {
                navigateTo('paper', id);
              } else if (PROJECTS.some(p => p.id === id)) {
                navigateTo('project', id);
              } else {
                navigateTo('resume');
              }
            }}
          />
        )}        {/* ======================================= */}
        {/* ROUTER 5: EXPERIENCE DETAILED VIEW      */}
        {/* ======================================= */}
        {currentView === 'experience' && activeExp && (
          <ExperienceViewer
            experience={activeExp}
            onBack={() => navigateTo('resume')}
          />
        )}

      </main>

      {/* Structured Compact Academic Footer */}
      <footer className="w-full bg-slate-900 text-slate-400 py-8 border-t border-slate-800 text-center text-xs mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-slate-300 space-y-1">
            <p className="font-bold tracking-widest">
              黄璨 • 黄璨的个人研学 Portfolio
            </p>
            <p className="text-[10px] text-slate-500">
              SOUTHWEST JIAOTONG UNIVERSITY — DEPARTMENT OF TRANSPORTATION & LOGISTICS
            </p>
          </div>
          <p className="max-w-xl mx-auto text-slate-500 leading-relaxed text-[10px]">
            * 本学报系专为保研研究生导师复审简历提供。本站使用 React, Dynamic State-Based Routing 交互和 Tailwind CSS 作为技术载体支持，内容百分百确保属实无任何偏误。
          </p>
          <div className="pt-4 border-t border-slate-800 flex justify-center space-x-4 text-[10px]">
            <span>邮箱: {PROFILE.email}</span>
            <span>手机: {PROFILE.phone}</span>
            <span>校区: 成都犀浦校区</span>
          </div>
        </div>
      </footer>

      {notification && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900/95 backdrop-blur-md text-white text-xs font-medium px-4 py-3.5 rounded-xl shadow-xl flex items-center space-x-2.5 border border-slate-800/80 animate-fade-in transition-all">
          <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center">
            <Check className="w-3.5 h-3.5 text-emerald-500" />
          </div>
          <span>{notification}</span>
        </div>
      )}

    </div>
  );
}
