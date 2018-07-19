import * as React from "react";

import * as Enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

import { shallow } from "enzyme";
import { App } from "./../src/App";

import * as NumberFormatAll from "react-number-format";
import NumberFormatDefault from "react-number-format";
console.log("NumberFormatAll", NumberFormatAll);
console.log("NumberFormatDefault", NumberFormatDefault);

describe("<App />", () => {
  it("should render", () => {
    shallow(<App />);
  });
});
