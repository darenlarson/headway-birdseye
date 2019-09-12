import { createMuiTheme } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#071584",
      light: "#7857FF"
    },
    secondary: {
      main: grey[400],
      light: grey[100]
    }
  },
  shadows: ['none'],
});
