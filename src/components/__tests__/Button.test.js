import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';

import Button from '../Button';

describe('Button', () => {

  it('should render', () => {
    const component = renderer.create(<Button />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should display as active', () => {
    const wrapper = shallow(<Button active />);

    expect(wrapper.hasClass('active')).toBe(true);
  });

  it('should render as a button', () => {
    const wrapper = shallow(<Button />);

    expect(wrapper.type()).toBe('button');
  });

  it('should render children', () => {
    const wrapper = shallow(<Button>Test</Button>);

    expect(wrapper.text()).toBe('Test');
  });

  it('should render additional props', () => {
    const wrapper = shallow(<Button data-test="my-attribute" />);

    expect(wrapper.find('[data-test="my-attribute"]')).toHaveLength(1);
  });

  it('calls onClick handler', () => {
    const onClick = jest.fn();
    const wrapper = mount(<Button onClick={onClick} />);

    wrapper.find('button').simulate('click');

    expect(onClick).toHaveBeenCalled();
  });
});
