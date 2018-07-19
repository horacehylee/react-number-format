import * as React from "react";
import * as ReactDOM from "react-dom";
// import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import NumberFormat from "../../src/number_format";
// import TextField from "material-ui/TextField";
// import { cardExpiry } from "../../custom_formatters/card_expiry";
import { App } from "./App";

const ThemedApp = () => {
  return (
    // <MuiThemeProvider>
    <App />
    // </MuiThemeProvider>
  );
};

ReactDOM.render(<ThemedApp />, document.getElementById("app"));
