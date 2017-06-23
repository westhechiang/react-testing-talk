import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Button from '../components/Button';

let wrapper;
App.prototype.handleClick = jest.fn(App.prototype.handleClick);

beforeEach(() => (wrapper = shallow(<App />)));

describe('<App />', () => {
  it('should render 4 <div /> elements', () => {
    expect(wrapper.find('div').length).toEqual(4);
  });

  it('should render 1 <h1 /> elements', () => {
    expect(wrapper.find('h1').length).toEqual(1);
  });

  it('should render 1 <h2 /> elements', () => {
    expect(wrapper.find('h2').length).toEqual(1);
  });

  it('should render 1 <Button /> component', () => {
    expect(wrapper.find(Button).length).toEqual(1);
    expect(wrapper.find(Button).prop('buttonContent')).toEqual('Click Me');
  });

  it('should change App.state.clicked to true when handleClick() is called', () => {
    wrapper.instance().handleClick();
    expect(wrapper.instance().state.clicked).toEqual(true);
  });
});
