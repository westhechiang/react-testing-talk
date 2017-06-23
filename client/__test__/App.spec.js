import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import App from '../App';
import Button from '../components/Button';

chai.use(chaiEnzyme());
let wrapper;

beforeEach(() => (wrapper = shallow(<App />)));

describe('<App />', () => {
  it('should render 4 <div /> elements', () => {
    expect(wrapper.find('div').length).to.equal(4);
  });

  it('should render 1 <h1 /> elements', () => {
    expect(wrapper.find('h1').length).to.equal(1);
  });

  it('should render 1 <h2 /> elements', () => {
    expect(wrapper.find('h2').length).to.equal(1);
  });

  it('should render 1 <Button /> component', () => {
    expect(wrapper.find(Button).length).to.equal(1);
  });
});
