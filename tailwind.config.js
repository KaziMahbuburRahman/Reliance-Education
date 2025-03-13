/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: ["light", "cupcake"],
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        rotateY: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
      },
      animation: {
        rotateY: "rotateY 1s ease-in-out",
      },
      colors: {
        base_color: "#24255D",
        color_navbar_hover: "#157FFB",
        color_red: "#E41F3F",
        color_primary_text: "#012D6E",
      },
      margin: {
        m_6px: "6px",
        m_4px: "4px",
        m_8px: "8px",
        m_medium: "12px",
        m_16px: "16px",
        m_large: "20px",
        m_secondary: "40px",
        m_24px: "24px",
        m_40px: "40px",
        m_80px: "80px",
        m_100px: "100px",
        mt_medium: "12px",
      },
      gap: {
        gap_6px: "6px",
        gap_8px: "8px",
        gap_primary: "12px",
        gap_24px: "24px",
      },
      fontSize: {
        text_small: "12px",
        text_standard: "14px",
        text_sm2: "15px",
        text_medium: "16px",
        text_title: "18px",
        text_large: "20px",
        text_xl: "24px",
        text_30px: "30px",
        text_xxl: "34px",
        text_40px: "40px",
        text_xxxl: "50px",
        text_60px: "60px",
      },
      padding: {
        p_3px: "3px",
        p_4px: "4px",
        p_6px: "6px",
        p_8px: "8px",
        p_10px: "10px",
        p_12px: "12px",
        p_16px: "16px",
        p_18px: "18px",
        p_20px: "20px",
        p_24px: "24px",
        p_28px: "28px",
        p_30px: "30px",
        p_40px: "40px",
        p_60px: "60px",
      },
      borderRadius: {
        rounded_4px: "4px",
        rounded_primary: "6px",
        rounded_secondary: "10px",
        rounded_medium: "12px",
      },
      height: {
        primary: "40px",
        h_secondary: "192px",
      },
    },
  },
  plugins: [require("daisyui")],
  keyframes: {
    zoom: {
      "0%, 100%": { transform: "scale(1)" },
      "50%": { transform: "scale(1.2)" },
    },
  },
  animation: {
    zoom: "zoom 2s infinite",
  },
};
