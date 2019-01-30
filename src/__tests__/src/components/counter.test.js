import React from "react";
import renderer from "react-test-renderer";
import Counter from "../../../components/counter/counter.js";

describe("<counter />", () => {
  it("exists", () => {
    let component = shallow(<Counter />);
    expect(component.find('section').exists()).toBeTruthy();
  });

  it("changes state on a click down", () => {
    let component = mount(<Counter />);
    let button = component.find("a.down");
    button.simulate("click");
    expect(component.state("count")).toEqual(-1);
  });

  it("changes state on a click up", () => {
    let component = mount(<Counter />);
    let button = component.find("a.up");
    button.simulate("click");
    expect(component.state("count")).toEqual(1);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Counter />).toJSON();
    expect(tree).toMatchSnapshot();
  })
});
