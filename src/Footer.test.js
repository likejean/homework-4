import React from 'react';
import { shallow } from "enzyme";
import Footer from './components/Footer';

it('should render customer service phone#', () => {
    const wrapper = shallow(<Footer/>);
    const span = wrapper.find('span');
    const result = span.text();
    expect(result).toBe('Phone Number: 1-800-101-4444');
});