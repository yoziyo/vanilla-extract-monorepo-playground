// vite.config.ts
import { defineConfig } from "file:///Users/a12284779/workspace/yozi/vanilla-extract-monorepo-playground/node_modules/.pnpm/vite@4.5.0_@types+node@20.9.0/node_modules/vite/dist/node/index.js";
import { vanillaExtractPlugin } from "file:///Users/a12284779/workspace/yozi/vanilla-extract-monorepo-playground/node_modules/.pnpm/@vanilla-extract+vite-plugin@3.9.0_vite@4.5.0/node_modules/@vanilla-extract/vite-plugin/dist/vanilla-extract-vite-plugin.cjs.js";
import dts from "file:///Users/a12284779/workspace/yozi/vanilla-extract-monorepo-playground/node_modules/.pnpm/vite-plugin-dts@3.6.3_typescript@5.2.2_vite@4.5.0/node_modules/vite-plugin-dts/dist/index.mjs";
import tsconfigPaths from "file:///Users/a12284779/workspace/yozi/vanilla-extract-monorepo-playground/node_modules/.pnpm/vite-tsconfig-paths@4.2.1_typescript@5.2.2_vite@4.5.0/node_modules/vite-tsconfig-paths/dist/index.mjs";

// package.json
var package_default = {
  name: "@kpds/react",
  type: "module",
  main: "./dist/index.cjs.js",
  module: "./dist/index.js",
  types: "./dist/types/index.d.ts",
  exports: {
    ".": {
      types: "./dist/types/index.d.ts",
      import: "./dist/index.js",
      require: "./dist/index.cjs.js"
    },
    "./styles": {
      import: "./dist/style.css",
      require: "./dist/style.css"
    }
  },
  files: [
    "dist/**"
  ],
  sideEffects: false,
  version: "1.0.0",
  description: "",
  scripts: {
    build: "vite build",
    dev: "vite build --watch",
    clean: "rimraf dist"
  },
  keywords: [],
  author: "",
  license: "ISC",
  dependencies: {
    "@kpds/css": "workspace:^",
    "@types/react": "^18.2.37",
    "@types/react-dom": "^18.2.15",
    "@vanilla-extract/css": "^1.13.0",
    clsx: "^2.0.0",
    react: "^18.2.0",
    "react-dom": "^18.2.0"
  },
  devDependencies: {
    "@vanilla-extract/vite-plugin": "^3.9.0",
    vite: "^4.5.0",
    "vite-plugin-dts": "^3.6.3",
    "vite-tsconfig-paths": "^4.2.1"
  },
  peerDependencies: {
    react: "^18",
    "react-dom": "^18"
  }
};

// vite.config.ts
var vite_config_default = defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      fileName: "index",
      formats: ["cjs", "es"]
    },
    rollupOptions: {
      external: Object.keys(package_default.peerDependencies)
    }
  },
  plugins: [
    vanillaExtractPlugin({
      identifiers: "short"
    }),
    tsconfigPaths(),
    dts({
      exclude: ["src/**/*.docs.mdx", "src/**/*.snippets.tsx", "src/**/*.test.ts*"],
      beforeWriteFile: (filePath, content) => ({
        content,
        filePath: filePath.replace("src", "")
      }),
      compilerOptions: {
        baseUrl: "./src/",
        emitDeclarationOnly: true,
        noEmit: false
      },
      outDir: "dist/types"
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2ExMjI4NDc3OS93b3Jrc3BhY2UveW96aS92YW5pbGxhLWV4dHJhY3QtbW9ub3JlcG8tcGxheWdyb3VuZC9wYWNrYWdlcy9yZWFjdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2ExMjI4NDc3OS93b3Jrc3BhY2UveW96aS92YW5pbGxhLWV4dHJhY3QtbW9ub3JlcG8tcGxheWdyb3VuZC9wYWNrYWdlcy9yZWFjdC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvYTEyMjg0Nzc5L3dvcmtzcGFjZS95b3ppL3ZhbmlsbGEtZXh0cmFjdC1tb25vcmVwby1wbGF5Z3JvdW5kL3BhY2thZ2VzL3JlYWN0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgeyB2YW5pbGxhRXh0cmFjdFBsdWdpbiB9IGZyb20gJ0B2YW5pbGxhLWV4dHJhY3Qvdml0ZS1wbHVnaW4nO1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnO1xuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSAndml0ZS10c2NvbmZpZy1wYXRocyc7XG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgcGtnIGZyb20gJy4vcGFja2FnZS5qc29uJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgYnVpbGQ6IHtcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiAnc3JjL2luZGV4LnRzJyxcbiAgICAgIGZpbGVOYW1lOiAnaW5kZXgnLFxuICAgICAgZm9ybWF0czogWydjanMnLCAnZXMnXSxcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGV4dGVybmFsOiBPYmplY3Qua2V5cyhwa2cucGVlckRlcGVuZGVuY2llcyksXG4gICAgfSxcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHZhbmlsbGFFeHRyYWN0UGx1Z2luKHtcbiAgICAgIGlkZW50aWZpZXJzOiAnc2hvcnQnLFxuICAgIH0pLFxuICAgIHRzY29uZmlnUGF0aHMoKSxcbiAgICBkdHMoe1xuICAgICAgZXhjbHVkZTogWydzcmMvKiovKi5kb2NzLm1keCcsICdzcmMvKiovKi5zbmlwcGV0cy50c3gnLCAnc3JjLyoqLyoudGVzdC50cyonXSxcbiAgICAgIGJlZm9yZVdyaXRlRmlsZTogKGZpbGVQYXRoLCBjb250ZW50KSA9PiAoe1xuICAgICAgICBjb250ZW50LFxuICAgICAgICBmaWxlUGF0aDogZmlsZVBhdGgucmVwbGFjZSgnc3JjJywgJycpLFxuICAgICAgfSksXG4gICAgICBjb21waWxlck9wdGlvbnM6IHtcbiAgICAgICAgYmFzZVVybDogJy4vc3JjLycsXG4gICAgICAgIGVtaXREZWNsYXJhdGlvbk9ubHk6IHRydWUsXG4gICAgICAgIG5vRW1pdDogZmFsc2UsXG4gICAgICB9LFxuICAgICAgb3V0RGlyOiAnZGlzdC90eXBlcycsXG4gICAgfSksXG4gIF0sXG59KTtcbiIsICJ7XG4gIFwibmFtZVwiOiBcIkBrcGRzL3JlYWN0XCIsXG4gIFwidHlwZVwiOiBcIm1vZHVsZVwiLFxuICBcIm1haW5cIjogXCIuL2Rpc3QvaW5kZXguY2pzLmpzXCIsXG4gIFwibW9kdWxlXCI6IFwiLi9kaXN0L2luZGV4LmpzXCIsXG4gIFwidHlwZXNcIjogXCIuL2Rpc3QvdHlwZXMvaW5kZXguZC50c1wiLFxuICBcImV4cG9ydHNcIjoge1xuICAgIFwiLlwiOiB7XG4gICAgICBcInR5cGVzXCI6IFwiLi9kaXN0L3R5cGVzL2luZGV4LmQudHNcIixcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9kaXN0L2luZGV4LmpzXCIsXG4gICAgICBcInJlcXVpcmVcIjogXCIuL2Rpc3QvaW5kZXguY2pzLmpzXCJcbiAgICB9LFxuICAgIFwiLi9zdHlsZXNcIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL2Rpc3Qvc3R5bGUuY3NzXCIsXG4gICAgICBcInJlcXVpcmVcIjogXCIuL2Rpc3Qvc3R5bGUuY3NzXCJcbiAgICB9XG4gIH0sXG4gIFwiZmlsZXNcIjogW1xuICAgIFwiZGlzdC8qKlwiXG4gIF0sXG4gIFwic2lkZUVmZmVjdHNcIjogZmFsc2UsXG4gIFwidmVyc2lvblwiOiBcIjEuMC4wXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcImJ1aWxkXCI6IFwidml0ZSBidWlsZFwiLFxuICAgIFwiZGV2XCI6IFwidml0ZSBidWlsZCAtLXdhdGNoXCIsXG4gICAgXCJjbGVhblwiOiBcInJpbXJhZiBkaXN0XCJcbiAgfSxcbiAgXCJrZXl3b3Jkc1wiOiBbXSxcbiAgXCJhdXRob3JcIjogXCJcIixcbiAgXCJsaWNlbnNlXCI6IFwiSVNDXCIsXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBrcGRzL2Nzc1wiOiBcIndvcmtzcGFjZTpeXCIsXG4gICAgXCJAdHlwZXMvcmVhY3RcIjogXCJeMTguMi4zN1wiLFxuICAgIFwiQHR5cGVzL3JlYWN0LWRvbVwiOiBcIl4xOC4yLjE1XCIsXG4gICAgXCJAdmFuaWxsYS1leHRyYWN0L2Nzc1wiOiBcIl4xLjEzLjBcIixcbiAgICBcImNsc3hcIjogXCJeMi4wLjBcIixcbiAgICBcInJlYWN0XCI6IFwiXjE4LjIuMFwiLFxuICAgIFwicmVhY3QtZG9tXCI6IFwiXjE4LjIuMFwiXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkB2YW5pbGxhLWV4dHJhY3Qvdml0ZS1wbHVnaW5cIjogXCJeMy45LjBcIixcbiAgICBcInZpdGVcIjogXCJeNC41LjBcIixcbiAgICBcInZpdGUtcGx1Z2luLWR0c1wiOiBcIl4zLjYuM1wiLFxuICAgIFwidml0ZS10c2NvbmZpZy1wYXRoc1wiOiBcIl40LjIuMVwiXG4gIH0sXG4gIFwicGVlckRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJyZWFjdFwiOiBcIl4xOFwiLFxuICAgIFwicmVhY3QtZG9tXCI6IFwiXjE4XCJcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF3YSxTQUFTLG9CQUFvQjtBQUNyYyxTQUFTLDRCQUE0QjtBQUNyQyxPQUFPLFNBQVM7QUFDaEIsT0FBTyxtQkFBbUI7OztBQ0gxQjtBQUFBLEVBQ0UsTUFBUTtBQUFBLEVBQ1IsTUFBUTtBQUFBLEVBQ1IsTUFBUTtBQUFBLEVBQ1IsUUFBVTtBQUFBLEVBQ1YsT0FBUztBQUFBLEVBQ1QsU0FBVztBQUFBLElBQ1QsS0FBSztBQUFBLE1BQ0gsT0FBUztBQUFBLE1BQ1QsUUFBVTtBQUFBLE1BQ1YsU0FBVztBQUFBLElBQ2I7QUFBQSxJQUNBLFlBQVk7QUFBQSxNQUNWLFFBQVU7QUFBQSxNQUNWLFNBQVc7QUFBQSxJQUNiO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBUztBQUFBLElBQ1A7QUFBQSxFQUNGO0FBQUEsRUFDQSxhQUFlO0FBQUEsRUFDZixTQUFXO0FBQUEsRUFDWCxhQUFlO0FBQUEsRUFDZixTQUFXO0FBQUEsSUFDVCxPQUFTO0FBQUEsSUFDVCxLQUFPO0FBQUEsSUFDUCxPQUFTO0FBQUEsRUFDWDtBQUFBLEVBQ0EsVUFBWSxDQUFDO0FBQUEsRUFDYixRQUFVO0FBQUEsRUFDVixTQUFXO0FBQUEsRUFDWCxjQUFnQjtBQUFBLElBQ2QsYUFBYTtBQUFBLElBQ2IsZ0JBQWdCO0FBQUEsSUFDaEIsb0JBQW9CO0FBQUEsSUFDcEIsd0JBQXdCO0FBQUEsSUFDeEIsTUFBUTtBQUFBLElBQ1IsT0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLGlCQUFtQjtBQUFBLElBQ2pCLGdDQUFnQztBQUFBLElBQ2hDLE1BQVE7QUFBQSxJQUNSLG1CQUFtQjtBQUFBLElBQ25CLHVCQUF1QjtBQUFBLEVBQ3pCO0FBQUEsRUFDQSxrQkFBb0I7QUFBQSxJQUNsQixPQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUNGOzs7QUQzQ0EsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBLE1BQ0gsT0FBTztBQUFBLE1BQ1AsVUFBVTtBQUFBLE1BQ1YsU0FBUyxDQUFDLE9BQU8sSUFBSTtBQUFBLElBQ3ZCO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVLE9BQU8sS0FBSyxnQkFBSSxnQkFBZ0I7QUFBQSxJQUM1QztBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLHFCQUFxQjtBQUFBLE1BQ25CLGFBQWE7QUFBQSxJQUNmLENBQUM7QUFBQSxJQUNELGNBQWM7QUFBQSxJQUNkLElBQUk7QUFBQSxNQUNGLFNBQVMsQ0FBQyxxQkFBcUIseUJBQXlCLG1CQUFtQjtBQUFBLE1BQzNFLGlCQUFpQixDQUFDLFVBQVUsYUFBYTtBQUFBLFFBQ3ZDO0FBQUEsUUFDQSxVQUFVLFNBQVMsUUFBUSxPQUFPLEVBQUU7QUFBQSxNQUN0QztBQUFBLE1BQ0EsaUJBQWlCO0FBQUEsUUFDZixTQUFTO0FBQUEsUUFDVCxxQkFBcUI7QUFBQSxRQUNyQixRQUFRO0FBQUEsTUFDVjtBQUFBLE1BQ0EsUUFBUTtBQUFBLElBQ1YsQ0FBQztBQUFBLEVBQ0g7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
