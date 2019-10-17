import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";

test("renders", () => {
    shallow(<Header/>);
});