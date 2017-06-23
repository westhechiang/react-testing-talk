import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import Button from '../';

chai.use(chaiEnzyme());

let wrapper;
const props = {
  buttonContent: 'Click Me',
  handleClick: jest.fn(),
};

Button.prototype.handleClick = jest.fn(Button.prototype.handleClick);

beforeEach(() => (wrapper = shallow(<Button {...props} />)));

describe('<Button />', () => {
  it('should render 1 <div /> element', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should call handleClick() when the div element is clicked', () => {
    wrapper.simulate('click');
    expect(Button.prototype.handleClick).toBeCalled();
  });
});
