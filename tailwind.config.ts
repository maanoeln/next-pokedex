import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    backgroundColor: {
      primary: {
        dark: '#202124',
      },
      secondary: {
        dark: '#37373A',
      },
      button: {
        light: '#9DC0F9',
        main: '#8AB4F7',
      },
    },
    borderColor: {
      DEFAULT: '#5F6367',
    },
    colors: {
      primary: {
        light: '#9DC0F9',
        main: '#8AB4F7',
      },
      secondary: {
        light: '#E7EAED',
        main: '#5F6367',
      },
    },
    fill: {
      primary: '#8AB4F7',
      secondary: '#5F6367',
    },
    extend: {
      gridTemplateRows: {
        '2fr': 'repeat(3, minmax(180px, 1fr))',
      },
    },
    // colors: {
    //   bg: {
    //     light: 'white',
    //     dark: '#202124',
    //     'mid-dark': '#37373A',
    //   },
    // },
    // backgroundColor: {
    //   primary: {
    //     light: '#FFFFFF', // Light mode primary background
    //     dark: '#202124', // Dark mode primary background
    //   },
    //   secondary: {
    //     light: '#FFFFFF', // Light mode secondary background
    //     dark: '#37373A', // Dark mode secondary background
    //   },
    //   buttonBg: {
    //     primary: {
    //       dark: '#8Ab4F7',
    //     },
    //     hover: {
    //       primary: {
    //         dark: '#9DC0F9',
    //       },
    //     },
    //   },
    // },
    // extend: {
    //   backgroundImage: {
    //     waves: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1001%26quot%3b)' fill='none'%3e%3cpath d='M 0%2c29 C 32%2c90.2 96%2c290 160%2c335 C 224%2c380 256%2c232.4 320%2c254 C 384%2c275.6 416%2c491.4 480%2c443 C 544%2c394.6 576%2c37.8 640%2c12 C 704%2c-13.8 736%2c278 800%2c314 C 864%2c350 896%2c197.6 960%2c192 C 1024%2c186.4 1056%2c284 1120%2c286 C 1184%2c288 1216%2c160.6 1280%2c202 C 1344%2c243.4 1408%2c434.8 1440%2c493L1440 560L0 560z' fill='%8CAB22'%3e%3c/path%3e%3cpath d='M 0%2c37 C 48%2c138 144%2c530.6 240%2c542 C 336%2c553.4 384%2c144.2 480%2c94 C 576%2c43.8 624%2c278.8 720%2c291 C 816%2c303.2 864%2c114.8 960%2c155 C 1056%2c195.2 1104%2c496.2 1200%2c492 C 1296%2c487.8 1392%2c205.6 1440%2c134L1440 560L0 560z' fill='%232264ab'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1001'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`,
    //   },
    //   screens: {
    //     xs: '280px',
    //   },
    //   colors: {
    //     primary: {
    //       light: 'white',
    //       dark: '#E7EAED',
    //     },
    //     'black-mid': '#202124',
    //     'black-light': '#5F6367',
    //     'border-gray': '#D9DCE0',
    //     'icons-gray': '#5F6367',
    //     foreground: 'var(--foreground)',
    //   },
    // },
  },
  plugins: [],
} satisfies Config;
