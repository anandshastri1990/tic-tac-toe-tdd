import {shallow} from "enzyme";
import {ControlPanel} from "./ControlPanel";
import React from "react";

describe('Restart Game', () => {
    it('should contain restart game button', function () {
        const component = shallow(<ControlPanel/>);

        expect(component.find('#restart').text()).toEqual('Restart game');
    });

    it('should contain a restart icon', function () {
        const component = shallow(<ControlPanel/>);

        expect(component.find('#restart-icon')).toHaveLength(1);
    });
});

describe('Undo a move', () => {
    it('should contain undo a move button', function () {
        const component = shallow(<ControlPanel/>);

        expect(component.find('#undo').text()).toEqual('Undo a move');
    });

    it('should contain a undo icon', function () {
        const component = shallow(<ControlPanel/>);

        expect(component.find('#undo-icon')).toHaveLength(1);
    });
});