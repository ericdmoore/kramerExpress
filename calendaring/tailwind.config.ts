import { type Config } from "tailwindcss";
import twForms from "@tailwindcss/forms";

export default {
  plugins: [
    twForms(),
  ],
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
} satisfies Config;

// satisfies Config;
