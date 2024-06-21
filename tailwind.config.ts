import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // 추가적인 속성 이름 지정
    extend: {
      borderRadius: {
        "sexy-name": "17.2323px",
      },
    },
  },
  plugins: [],
};
export default config;
