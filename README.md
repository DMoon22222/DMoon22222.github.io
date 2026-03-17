# 🌙 DMoon's Personal Blog 

欢迎来到我的个人博客！👋 
这里是我记录技术成长、沉淀学习心得以及分享日常碎碎念的专属小站。
站主比较懒，目前的博客只是试验版，还没有上传文章，仍在持续更新中

🌍 **在线访问:** https://DMoon22222.github.io

---

## 🛠️ 技术架构 (Tech Stack)

本站采用现代化静态博客生成技术构建，并对前端视觉表现和后端互动功能进行了深度定制与独立部署。

### 核心框架体系
* **静态站点生成器 (SSG):** [Hexo](https://hexo.io/zh-cn/) (基于 Node.js)
* **核心主题:** [Butterfly](https://butterfly.js.org/) (深度定制版)
* **配置语言:** YAML (用于全局与主题配置)
* **内容编写:** Markdown 

### 前端视觉与定制 (Frontend & UI)
* **样式预处理 & 布局:** HTML5, CSS3, Stylus
* **定制化视觉:**
  * **Glassmorphism (磨砂玻璃特效):** 采用 `backdrop-filter` 实现了全站（留言板、归档、分类、标签页等）统一的半透明磨砂玻璃 UI。
  * **全屏视差背景:** 深度重写了原生主题布局，结合动态计算实现沉浸式视觉体验。
  * **动态交互:** 采用原生 Vanilla JavaScript (`/js/archive_main.js` 等) 强制接管 Hexo 默认渲染逻辑，注入平滑滚动、打字机副标题特效。

### 互动与后端服务 (Backend Services)
为了突破纯静态网页的限制，本站接入了独立的评论与数据存储系统：
* **评论系统:** [Twikoo](https://twikoo.js.org/) (支持访客匿名评论与站长隐式管理面板)
* **Serverless 部署引擎:** [Zeabur](https://zeabur.com/) (提供 Twikoo 的云端计算与 API 接口托管)
* **云端数据库:** MongoDB Atlas (承载所有的评论、浏览量等动态数据)

### 部署与版本控制 (Deployment & CI/CD)
* **版本控制:** Git
* **网页托管:** GitHub Pages
* **工作流:** 采用双轨制管理，当前仓库保留源码 (Source)，静态文件生成后推送至公开站点。

---

## 📂 核心目录结构说明

```text
├── _config.yml               # Hexo 全局配置文件
├── _config.butterfly.yml     # Butterfly 主题配置文件 (高度定制)
├── source/                   # 博客核心源代码
│   ├── _posts/               # 存放所有的 Markdown 博客文章
│   ├── about/                # “关于我”页面 (定制化个人简历)
│   ├── board/                # 专属留言板页面 (接入 Twikoo)
│   ├── archives/             # 归档页面 (由自定义 JS 接管渲染)
│   ├── categories/           # 分类页面 (定制玻璃质感卡片)
│   ├── tags/                 # 标签云页面 (自定悬停动效)
│   └── js/                   # 自定义脚本注入目录 (如 archive_main.js)
├── public/                   # 经 Hexo 编译后生成的纯静态网页 (需部署的文件夹)
└── package.json              # 项目依赖清单

🚀 本地开发与运行 (Local Setup)
如果你想在本地运行或调试本博客源码，请确保你的环境中已安装了 Node.js 和 Git。
克隆仓库

Bash
git clone [https://github.com/DMoon22222/your-repo-name.git](https://github.com/DMoon22222/your-repo-name.git)
cd your-repo-name
安装依赖

Bash
npm install
本地启动

Bash
hexo clean
hexo g
hexo s
启动后在浏览器访问 http://localhost:4000 即可预览。
