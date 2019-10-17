import React from "react";
import NavBar from "./NavBar";
import { shallow } from "enzyme";

test("renders", () => {
    shallow(<NavBar/>);
});