import "@testing-library/jest-dom";
import React from "react";
import GifGriditem from "../components/GifGridItem";
import { shallow } from "../setupTest";
//import { shallow, configure } from "enzyme";

describe("Pruebas GifGridItem", () => {
  test("should be retrun the correct component", () => {
    const wrapper = shallow(<GifGriditem title="" url="" />);
    expect(wrapper).toMatchSnapshot();
  });
});
