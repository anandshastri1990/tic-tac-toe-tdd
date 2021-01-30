import React from "react";
import {shallow} from "enzyme";
import App from "./App";

test('should contain application header Tic Tac Toe', () => {
    const component = shallow(<App/>);

    expect(component.find('#header').text()).toEqual('Tic Tac Toe');
});