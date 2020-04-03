import React from 'react';
import Enzyme, { shallow, render, mount } from "enzyme";
import { createSerializer } from 'enzyme-to-json'
import Main from './components/Main';
import Counter from './components/Counter';
import sinon from 'sinon';
import Adapter from "enzyme-adapter-react-16";

const props = {
    spy: sinon.spy(),
    buttonMap: {lower: [-1], upper: [1]}
};

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));


describe("Counter Component", () => {


    it('renders hr element', () => {
        const wrapper = shallow(<Main />);
        expect(wrapper.find('hr').length).toEqual(1);
        expect(wrapper.find('h1').length).toEqual(1);
    });

    it('renders the html of the title', () => {
        const wrapper = shallow(<Main />);
        const expectedOutput =
            '<h1 style="text-align:center;color:#26a69a"></h1>';
        const realOutput = wrapper.find('h1').html();
        expect(realOutput.indexOf(expectedOutput) > -1).toEqual(true);
    });

    it('renders the html of the title', () => {
        const wrapper = shallow(<Main />);
        const expectedOutput =
            '<h1 style="text-align:center;color:#26a69a"></h1>';
        const realOutput = wrapper.find('h1').html();
        expect(realOutput.indexOf(expectedOutput) > -1).toEqual(true);
    });

    it('renders Counter Component correctly', () => {
        const wrapper = shallow(
            <Counter { ...props } />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('outputs html markup result correctly', () => {
        const wrapper = render(
            <Counter { ...props } />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('outputs html markup result correctly', () => {
        const wrapper = render(
            <Counter { ...props } />
        );
        const text = wrapper.find('h2.counter-label').text();
        expect(text).toBe('Counter: 0');
    });

    it('calls "handleCounterReset" on button click', () => {
        const wrapper = shallow(
            <Counter { ...props } />
        );
        expect(wrapper).toMatchSnapshot();

        wrapper.find('#reset-button').simulate('click');
        expect(props.spy.calledOnce).toBe(true);
    });

});


