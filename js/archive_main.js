/* filename: source/js/archive_main.js
  功能：强制美化系统默认的归档页面 (修复白框和箭头偏移问题)
*/

// 只在归档页生效
if (location.pathname.startsWith('/archives/')) {
    
    document.addEventListener('DOMContentLoaded', function() {
        
        // --- 1. 定义背景图 ---
        const bgUrl = "https://cdn.jsdelivr.net/gh/DMoon22222/blog-imgs/img/wallhaven-rqgrxq.png";
        
        // --- 2. 强制修改 Header (全屏 + 透明) ---
        var header = document.getElementById('page-header');
        if (header) {
            header.style.height = '100vh';
            header.style.background = 'transparent';
            header.style.backgroundImage = 'none'; 
            
            // 强制 Flex 布局来放标题
            header.style.display = 'flex';
            header.style.justifyContent = 'center';
            header.style.alignItems = 'center';
            header.style.flexDirection = 'column';
        }

        // --- 3. 手动注入“归档”大标题 ---
        var defaultTitle = header.querySelector('.page-title');
        if(defaultTitle) defaultTitle.style.display = 'none';
        var siteInfo = document.getElementById('page-site-info');
        if(siteInfo) siteInfo.style.display = 'none';

        var myTitle = document.createElement('h1');
        myTitle.innerText = '归档';
        myTitle.style.color = '#fff';
        myTitle.style.fontSize = '4rem';
        myTitle.style.fontWeight = 'bold';
        myTitle.style.textShadow = '2px 2px 4px rgba(0,0,0,0.3)';
        myTitle.style.animation = 'titleScale 1s ease-in-out both';
        myTitle.style.margin = '0';
        header.appendChild(myTitle);

        // --- 4. 【修复】手动注入下滑箭头 (居中修正) ---
        var arrow = document.createElement('div');
        arrow.id = 'scroll-down';
        arrow.innerHTML = '<i class="fas fa-angle-down" style="font-size: 30px; color: white;"></i>';
        
        // 关键样式修复：
        arrow.style.position = 'absolute';
        arrow.style.bottom = '40px';
        arrow.style.left = '0';       // 靠左对齐
        arrow.style.width = '100%';   // 宽度撑满全屏
        arrow.style.textAlign = 'center'; // 内容居中
        arrow.style.cursor = 'pointer';
        arrow.style.animation = 'scroll-down-effect 1.5s infinite';
        
        arrow.addEventListener('click', function() {
            window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
        });
        header.appendChild(arrow);

        // --- 5. 注入 CSS 样式 (去白框 + 玻璃特效) ---
        var style = document.createElement('style');
        style.innerHTML = `
            /* 1. 底层壁纸 */
            #web_bg {
                background-image: url("${bgUrl}") !important;
                background-attachment: fixed !important;
                background-position: center center !important;
                background-size: cover !important;
                z-index: -999 !important;
            }
            
            /* 2. Header 黑纱 */
            #page-header:before {
                content: '';
                position: absolute; top: 0; left: 0; width: 100%; height: 100%;
                background-color: rgba(0,0,0,0.3);
                z-index: -1;
            }

            /* 3. 动画 */
            @keyframes titleScale {
                0% { opacity: 0; transform: scale(0.7); }
                100% { opacity: 1; transform: scale(1); }
            }
            @keyframes scroll-down-effect {
                0% { transform: translateY(0); opacity: 1; }
                50% { transform: translateY(-15px); opacity: 0.5; }
                100% { transform: translateY(0); opacity: 1; }
            }

            /* 4. 【核心修复】把所有可能的白色容器都变透明 */
            #page, 
            #archive,
            .layout,
            #body-wrap > .layout {
                background: transparent !important;
                box-shadow: none !important;
                padding: 0 !important;
                margin-top: 0 !important;
            }

            /* 5. 归档卡片美化 (玻璃特效) */
            .article-sort-item {
                background: rgba(255, 255, 255, 0.15) !important;
                backdrop-filter: blur(5px);
                border-radius: 12px !important;
                margin-bottom: 15px !important;
                padding: 15px !important;
                border: 1px solid rgba(255,255,255,0.2);
                transition: all 0.3s;
            }
            .article-sort-item:hover {
                background: rgba(255, 255, 255, 0.3) !important;
                transform: scale(1.02);
            }
            
            /* 6. 【修复】文字颜色修正 */
            /* 归档页面大标题 (年份) */
            .article-sort-title { 
                color: #fff !important; 
                text-shadow: 2px 2px 4px rgba(0,0,0,0.6); /* 加重阴影 */
                margin-left: 10px;
                font-weight: bold;
            }
            
            /* 文章标题 */
            .article-sort-item-title { 
                color: #fff !important; 
                text-shadow: 1px 1px 2px rgba(0,0,0,0.6);
                font-size: 1.1rem;
            }
            /* 文章标题悬停 */
            .article-sort-item-title:hover {
                color: #49b1f5 !important;
            }

            /* 时间日期 */
            .article-sort-item-time { 
                color: #eee !important; 
            }
            
            /* 左侧线条和圆点 */
            .article-sort { border-left: 2px solid rgba(255,255,255,0.6) !important; }
            .article-sort-item:before { border-color: #fff !important; }
            .article-sort-item.year:hover:before { border-color: #49b1f5 !important; }
        `;
        document.head.appendChild(style);
    });
}