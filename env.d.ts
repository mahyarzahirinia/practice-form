/// <reference types="vite/client" />

/**
 * Type declarations for Vuetify modules that have no or incomplete typings.
 * Fixes TS2307 for "vuetify/styles" in both Cursor and WebStorm.
 */
declare module "vuetify/styles" {
  const styles: string;
  export default styles;
}
