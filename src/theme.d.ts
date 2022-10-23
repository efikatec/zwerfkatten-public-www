import {
  Theme as MUITheme,
  ThemeOptions as MUIThemeOptions,
  Palette as MUIPalette,
  PaletteOptions as MUIPaletteOptions,
} from "@mui/material/styles";
import React from "react";

// declare module "@mui/material/styles" {
//   interface CustomTheme extends MUITheme {
//     custom: {
//       sbBgColor: React.CSSProperties["color"];
//     };
//   }

//   interface CustomThemeOptions extends MUIThemeOptions {
//     custom: {
//       sbBgColor: string;
//     };
//   }
//   export function createTheme(options?: CustomThemeOptions): CustomTheme;
// }

declare module "@mui/material/styles" {
  interface CustomPalette extends MUIPalette {
    sbBgColor: React.CSSProperties["color"];
  }

  interface CustomPaletteOptions extends MUIPaletteOptions {
    sbBgColor: string;
  }

  interface CustomTheme extends MUITheme {
    palette: CustomPalette;
  }

  interface CustomThemeOptions extends MUIThemeOptions {
    palette: CustomPaletteOptions;
  }

  export function createTheme(options?: CustomThemeOptions): CustomTheme;
}
