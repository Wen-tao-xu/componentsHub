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

私有npm服务器地址： http://39.96.0.194:4873/

# changelog管理发布版本
选择要发布的包 `pnpm changeset add`
npm版本号修改 `pnpm changeset version` 

发布组件步骤：
1.新建 `.npmrc`文件,文件内容
```
registry = http://39.96.0.194:4873/
```

2.npm login

3.pnpm publish -r 