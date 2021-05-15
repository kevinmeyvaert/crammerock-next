import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      base: string;
      primary: string;
      secondary: string;
      thirtiary: string;
    };
  }
}
