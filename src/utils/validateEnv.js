/**
 * Validates required environment variables at app startup
 * Provides helpful error messages if variables are missing
 */

const requiredEnvVars = {
  VITE_APP_EMAILJS_SERVICE_ID: "EmailJS Service ID",
  VITE_APP_EMAILJS_TEMPLATE_ID: "EmailJS Template ID",
  VITE_APP_EMAILJS_PUBLIC_KEY: "EmailJS Public Key",
};

export function validateEnv() {
  const missing = [];
  const invalid = [];

  // Check each required environment variable
  Object.entries(requiredEnvVars).forEach(([key, description]) => {
    const value = import.meta.env[key];

    if (!value) {
      missing.push({ key, description });
    } else if (value.includes("your_") || value.includes("_here")) {
      // Detect placeholder values from .env.example
      invalid.push({ key, description, value });
    }
  });

  // Report missing variables
  if (missing.length > 0) {
    const errorMessage = [
      "❌ Missing required environment variables:",
      "",
      ...missing.map((v) => `  - ${v.key} (${v.description})`),
      "",
      "Please create a .env file in the root directory with these variables.",
      "See .env.example for reference.",
      "",
      "Get your EmailJS credentials from: https://www.emailjs.com/",
    ].join("\n");

    console.error(errorMessage);

    if (import.meta.env.DEV) {
      // In development, throw error to make it obvious
      throw new Error(
        `Missing environment variables: ${missing.map((v) => v.key).join(", ")}`
      );
    }
  }

  // Report invalid/placeholder values
  if (invalid.length > 0) {
    const warningMessage = [
      "⚠️  Environment variables contain placeholder values:",
      "",
      ...invalid.map((v) => `  - ${v.key} = "${v.value}"`),
      "",
      "Please replace these with your actual EmailJS credentials.",
      "Get them from: https://www.emailjs.com/",
    ].join("\n");

    console.warn(warningMessage);

    if (import.meta.env.DEV) {
      // Show warning in development
      console.warn(
        "Contact form will not work with placeholder values!"
      );
    }
  }

  // Return validation result
  return {
    isValid: missing.length === 0 && invalid.length === 0,
    missing,
    invalid,
  };
}

/**
 * Get a specific environment variable with fallback
 * @param {string} key - Environment variable key
 * @param {string} fallback - Fallback value if not found
 * @returns {string}
 */
export function getEnvVar(key, fallback = "") {
  return import.meta.env[key] || fallback;
}

/**
 * Check if we're in production mode
 * @returns {boolean}
 */
export function isProduction() {
  return import.meta.env.PROD;
}

/**
 * Check if we're in development mode
 * @returns {boolean}
 */
export function isDevelopment() {
  return import.meta.env.DEV;
}
