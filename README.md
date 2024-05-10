# Vue 3 + TypeScript + Vite 组件库 + monorepo
组件支撑单个导出，整体导出、单个导出直接使用，无需引入，自动引入样式、自动注册组件

# Input组件
原生组件

# EleInput组件
饿了么二次封装组件，依赖宿主环境安装的elementPlus

# EleRichText组件
自定义表单组件

# 脚本
dev 组件库开发环境
build:lib 构建组件库
```
  "scripts": {
    "dev": "vite",
    "preview": "vite preview",
    "build:lib": "pnpm --filter=@giegie/* run build",
    "build": "vue-tsc && vite build"
  }
```

node: v18.17.1
pnpm: 9.1.0
