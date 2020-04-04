import React from 'react';
import Enzyme, { shallow, render, mount } from "enzyme";
import { createSerializer } from 'enzyme-to-json'
import { Stateless, Stateful } from './components/Home';
import sinon from 'sinon';
import Adapter from "enzyme-adapter-react-16";


Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

describe('spying on "incrementCounter" method', () => {
    test('shallow wrapper instance should be null', () => {
        const wrapper = mount(<Stateless/>);
        const instance = wrapper.instance();
        expect(instance).toBe(null);
    });
    test('shallow wrapper instance should be null', () => {
        const wrapper = mount(<Stateful />);
        const instance = wrapper.instance();
        console.log(instance)
        expect(instance).to.be.instanceOf(Stateful);

    });
});