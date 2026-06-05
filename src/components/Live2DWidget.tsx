import React, { useEffect, useState, useRef } from 'react';

declare global {
  interface Window {
    L2Dwidget: any;
  }
}

const KOTOHARU_QUOTES = [
  '哎呀！别戳人家啦~ ( > < )',
  '大侠，请问您想找什么？需要小春为您指引吗？',
  '黄璨学长最崇拜的人就是您啦，蒋老师！(•̀ᴗ•́)و ̑̑',
  '哇！你点我了！再点一下会有什么呢~',
  '哼，不要随便碰人家的头啦，会变笨的~',
  '好无聊啊，我们去看看黄璨学长的“低空3D可视化系统”吧！',
  '听说黄璨学长在茅以升班绩点 3.79 (前列)，超级认真努力！',
  '您是蒋老师吗？学长经常提到您，说您的低空和网约车优化方向最酷了！(*^▽^*)',
  '今天也要元气满满鸭！(๑•̀ㅂ•́)و✧',
  '要看一下黄璨学长最新修编的精美学术报告吗？(◍´꒳`◍)',
  '主页左侧大纲可以快速跳跃阅读哦！'
];

export const Live2DWidget: React.FC = () => {
  const [dialogText, setDialogText] = useState('你好呀！我是小春~ 欢迎来到黄璨的学术主页！');
  const [showDialog, setShowDialog] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // 1. Check if L2Dwidget is already loaded
    if (window.L2Dwidget) {
      initWidget();
      return;
    }

    // 2. Load script from CDN
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/live2d-widget@3.1.4/lib/L2Dwidget.min.js';
    script.async = true;
    script.onload = () => {
      initWidget();
    };
    script.onerror = () => {
      console.error('Failed to load Live2D widget script.');
    };
    document.body.appendChild(script);

    // 3. Set a periodic timer to change dialogue text and make it feel alive
    const interval = setInterval(() => {
      const randomIdx = Math.floor(Math.random() * KOTOHARU_QUOTES.length);
      setDialogText(KOTOHARU_QUOTES[randomIdx]);
      setShowDialog(true);
      
      // Auto hide bubble after 6 seconds
      setTimeout(() => {
        setShowDialog(false);
      }, 6000);
    }, 20000);

    return () => {
      clearInterval(interval);
      if (timerRef.current) clearTimeout(timerRef.current);
      const widgetContainer = document.getElementById('live2d-widget');
      if (widgetContainer) {
        widgetContainer.remove();
      }
    };
  }, []);

  const initWidget = () => {
    if (window.L2Dwidget) {
      window.L2Dwidget.init({
        model: {
          // Change to Koharu, a highly popular and extremely cute chibi anime girl
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
          show: false, // Hidden on mobile to avoid blocking content
        },
        react: {
          opacity: 0.95,
        },
        log: false,
      });

      // 4. Attach click listener to the Live2D canvas
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
    // Select a random quote
    const randomIdx = Math.floor(Math.random() * KOTOHARU_QUOTES.length);
    setDialogText(KOTOHARU_QUOTES[randomIdx]);
    setShowDialog(true);

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setShowDialog(false);
    }, 6000);
  };

  const handleCanvasHover = () => {
    setDialogText('嘿嘿，点我可以和我聊天哦！(*`･ω´･)');
    setShowDialog(true);

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setShowDialog(false);
    }, 5000);
  };

  return (
    <div
      className={`fixed bottom-[270px] left-6 z-50 max-w-[180px] bg-white text-slate-800 text-[11px] p-3 rounded-2xl border border-slate-200/80 shadow-md transition-all duration-300 pointer-events-none font-medium text-justify font-sans leading-relaxed select-none ${
        showDialog ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95'
      }`}
    >
      {/* Speech bubble tail */}
      <div className="absolute bottom-[-6px] left-8 w-3 h-3 bg-white border-r border-b border-slate-200/80 transform rotate-45"></div>
      
      <p>{dialogText}</p>
    </div>
  );
};
