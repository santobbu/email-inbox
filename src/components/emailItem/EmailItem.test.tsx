import React from 'react';
import { shallow, configure  } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


import EmailItem from './EmailItem';

describe('Email Item', () => {
    const props = {
        from: {
            name: 'Tester',
            email: 'Tester@gmail.com',
        }, 
        subject: 'This is test subject',
        body: 'This is email body',
        time: '10:00',
        isSelected: false,
        index: 0,
        onItemClick: () => {},
        color: 'blue',
    };

    it('should render component correctly for normal state', () => {
        const wrapper = shallow(<EmailItem {...props}/>);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component correctly for selected state', () => {
        const newProps = { ...props, isSelected: true }
        const wrapper = shallow(<EmailItem {...newProps}/>);

        expect(wrapper).toMatchSnapshot();
    });
});
