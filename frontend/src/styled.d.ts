import "styled-components";

interface IPalette {
  main: string;
  contrastText: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    COLORS: {
      BACKGROUND_DARKER: string;
      BACKGROUND_DARK: string;
      BACKGROUND_LIGHT: string;
      DARK_ORANGE: string;

      WHITE: string;
      GRAY_TEXT: string;

      ORANGE: string;
    };
  }
}
