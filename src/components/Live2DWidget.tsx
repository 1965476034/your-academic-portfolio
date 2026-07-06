import React, { useEffect, useState, useRef } from 'react';
import { MessageSquare, Camera, EyeOff, Eye, Sparkles } from 'lucide-react';

declare global {
  interface Window {
    L2Dwidget: any;
  }
}

const DIALOG_QUOTES = [
  '哎呀！别戳人家啦~ ( > < )',
  '大侠，请问您想找什么？需要小春为您指引吗？',
  '哇！你点我了！再点一下会有什么呢~',
  '哼，不要随便碰人家的头啦，会变笨的~',
  '好无聊啊，我们去看看学长的“3D低空仿真”和“智能装箱算法”吧！',
  '听说学长在计算机设计大赛拿了省一等奖，超级厉害！',
  '欢迎来到黄璨的学术主页！这里有他所有的科研和比赛成果展示哦~ (*^▽^*)',
  '今天也要元气满满鸭！(๑•̀ㅂ•́)و✧',
  '想深入了解学长的学术背景？点击主页左侧大纲可以快速跳跃阅读！(◍´꒳`◍)',
  '如果有什么疑问，可以点击右侧拍照、强制对话，或者点击右上角给学长发邮件哦！'
];

export const Live2DWidget: React.FC = () => {
  const [dialogText, setDialogText] = useState('你好呀！我是小春~ 欢迎来到黄璨的学术主页！');
  const [showDialog, setShowDialog] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [hoveredBtn, setHoveredBtn] = useState<string | null>(null);
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isVisible) return;

    // Remove any leftover widget DOM container to avoid duplicates
    removeWidgetDOM();

    // 1. Check if L2Dwidget script is already loaded
    if (window.L2Dwidget) {
      initWidget();
    } else {
      // 2. Load script dynamically from CDN
      const script = document.createElement('script');
      script.id = 'live2d-script';
      script.src = 'https://cdn.jsdelivr.net/npm/live2d-widget@3.1.4/lib/L2Dwidget.min.js';
      script.async = true;
      script.onload = () => {
        initWidget();
      };
      script.onerror = () => {
        console.error('Failed to load Live2D widget script.');
      };
      document.body.appendChild(script);
    }

    // 3. Set a periodic timer to change quotes and make it feel alive
    const interval = setInterval(() => {
      const randomIdx = Math.floor(Math.random() * DIALOG_QUOTES.length);
      setDialogText(DIALOG_QUOTES[randomIdx]);
      setShowDialog(true);
      
      setTimeout(() => {
        setShowDialog(false);
      }, 6000);
    }, 25000);

    return () => {
      clearInterval(interval);
      if (timerRef.current) clearTimeout(timerRef.current);
      removeWidgetDOM();
    };
  }, [isVisible]);

  const removeWidgetDOM = () => {
    const widgetContainer = document.getElementById('live2d-widget');
    if (widgetContainer) {
      widgetContainer.remove();
    }
  };

  const initWidget = () => {
    if (window.L2Dwidget) {
      window.L2Dwidget.init({
        model: {
          // Koharu, the super cute chibi anime girl
          jsonPath: 'https://cdn.jsdelivr.net/npm/live2d-widget-model-koharu@1.0.5/assets/koharu.model.json',
          scale: 1,
        },
        display: {
          position: 'left',
          width: 130,
          height: 240,
          hOffset: 20,
          vOffset: 20,
        },
        mobile: {
          show: false, // Hidden on mobile to avoid blocking layout/content
        },
        react: {
          opacity: 0.95,
        },
        log: false,
      });

      // Attach click/hover listeners to the Live2D canvas once fully mounted
      setTimeout(() => {
        const canvas = document.getElementById('live2dcanvas');
        if (canvas) {
          canvas.style.cursor = 'pointer';
          canvas.addEventListener('click', handleCanvasClick);
          canvas.addEventListener('mouseenter', handleCanvasHover);
        }
      }, 1500);
    }
  };

  const handleCanvasClick = () => {
    const randomIdx = Math.floor(Math.random() * DIALOG_QUOTES.length);
    setDialogText(DIALOG_QUOTES[randomIdx]);
    setShowDialog(true);

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setShowDialog(false);
    }, 6000);
  };

  const handleCanvasHover = () => {
    setDialogText('哼哼，点我右边的工具栏，可以让我陪您聊天、拍照或者隐身哦！');
    setShowDialog(true);

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setShowDialog(false);
    }, 6000);
  };

  const handleInteract = () => {
    const randomIdx = Math.floor(Math.random() * DIALOG_QUOTES.length);
    setDialogText(DIALOG_QUOTES[randomIdx]);
    setShowDialog(true);

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setShowDialog(false);
    }, 6000);
  };

  const handleCamera = () => {
    setDialogText('咔嚓！📸 拍照成功，已经记录下您和本页面的美好瞬间啦！');
    setShowDialog(true);
    
    // Play simple flash visual effect
    const flash = document.createElement('div');
    flash.className = 'fixed inset-0 bg-white z-50 pointer-events-none opacity-80 transition-opacity duration-300';
    document.body.appendChild(flash);
    setTimeout(() => {
      flash.style.opacity = '0';
      setTimeout(() => flash.remove(), 300);
    }, 100);

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setShowDialog(false);
    }, 6000);
  };

  const handleHide = () => {
    setDialogText('呜呜，那我先隐身啦，想我的时候点击左下角的眼睛召回我哦~');
    setShowDialog(true);
    
    setTimeout(() => {
      removeWidgetDOM();
      setIsVisible(false);
      setShowDialog(false);
    }, 2000);
  };

  const handleRestore = () => {
    setIsVisible(true);
    setDialogText('大侠！我又回来啦~ 随时听候您的差遣！(◕ᴗ◕✿)');
    setShowDialog(true);
    
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setShowDialog(false);
    }, 6000);
  };

  if (!isVisible) {
    return (
      <button
        onClick={handleRestore}
        className="fixed bottom-6 left-6 z-50 p-3 bg-white/95 hover:bg-white text-swjtu-blue hover:text-swjtu-blue-light rounded-full border border-slate-200 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center cursor-pointer group"
        title="召回看板娘"
      >
        <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" />
      </button>
    );
  }

  return (
    <>
      {/* Dialogue Bubble */}
      <div
        className={`fixed bottom-[270px] left-6 z-50 max-w-[190px] bg-white text-slate-800 text-[11px] p-3.5 rounded-2xl border border-slate-200/80 shadow-md transition-all duration-300 pointer-events-none font-medium text-justify font-sans leading-relaxed select-none ${
          showDialog ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95'
        }`}
      >
        <div className="absolute bottom-[-6px] left-8 w-3 h-3 bg-white border-r border-b border-slate-200/80 transform rotate-45"></div>
        <p className="flex items-start gap-1 font-sans">
          <Sparkles className="w-3.5 h-3.5 text-swjtu-gold shrink-0 mt-0.5" />
          <span>{dialogText}</span>
        </p>
      </div>

      {/* Floating Vertical Toolbar right next to the character */}
      <div className="fixed bottom-12 left-[155px] z-50 flex flex-col gap-2 bg-white/80 backdrop-blur-md p-1.5 rounded-xl border border-slate-200/60 shadow-lg transition-all duration-300 animate-fade-in">
        
        {/* Interact / Talk */}
        <div className="relative">
          <button
            onClick={handleInteract}
            onMouseEnter={() => setHoveredBtn('talk')}
            onMouseLeave={() => setHoveredBtn(null)}
            className="p-2 hover:bg-emerald-50 text-emerald-600 hover:text-emerald-700 rounded-lg transition-colors cursor-pointer flex items-center justify-center"
          >
            <MessageSquare className="w-4.5 h-4.5" />
          </button>
          {hoveredBtn === 'talk' && (
            <div className="absolute left-10 top-1.5 bg-slate-900 text-white text-[10px] px-2 py-1 rounded shadow-md whitespace-nowrap z-50 pointer-events-none">
              点击强制对话
            </div>
          )}
        </div>

        {/* Camera / Screenshot */}
        <div className="relative">
          <button
            onClick={handleCamera}
            onMouseEnter={() => setHoveredBtn('camera')}
            onMouseLeave={() => setHoveredBtn(null)}
            className="p-2 hover:bg-amber-50 text-amber-600 hover:text-amber-700 rounded-lg transition-colors cursor-pointer flex items-center justify-center"
          >
            <Camera className="w-4.5 h-4.5" />
          </button>
          {hoveredBtn === 'camera' && (
            <div className="absolute left-10 top-1.5 bg-slate-900 text-white text-[10px] px-2 py-1 rounded shadow-md whitespace-nowrap z-50 pointer-events-none">
              记录合影瞬间
            </div>
          )}
        </div>

        {/* Hide / Minimize */}
        <div className="relative">
          <button
            onClick={handleHide}
            onMouseEnter={() => setHoveredBtn('hide')}
            onMouseLeave={() => setHoveredBtn(null)}
            className="p-2 hover:bg-rose-50 text-rose-600 hover:text-rose-700 rounded-lg transition-colors cursor-pointer flex items-center justify-center"
          >
            <EyeOff className="w-4.5 h-4.5" />
          </button>
          {hoveredBtn === 'hide' && (
            <div className="absolute left-10 top-1.5 bg-slate-900 text-white text-[10px] px-2 py-1 rounded shadow-md whitespace-nowrap z-50 pointer-events-none">
              隐藏/隐身
            </div>
          )}
        </div>

      </div>
    </>
  );
};
