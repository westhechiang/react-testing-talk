import React from 'react';
import { shallow } from 'enzyme';
import Page from '../';

let wrapper;

beforeEach(() => (wrapper = shallow(<Page />)));

describe('<Page />', () => {
  it('should render 13 <div /> elements', () => {
    expect(wrapper.find('div')).toHaveLength(13);
  });
});
