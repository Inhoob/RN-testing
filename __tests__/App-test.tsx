// ./__tests__/App-test.js

import React from 'react';
import App from '../App';
import {render} from '@testing-library/react-native';

let props;
let component;

function getTempComponent(props) {
  return <App {...props} />;
}

describe('[App] render', () => {
  props = {}; // fill test props
  component = getTempComponent(props);
  test('renders without crashing', () => {
    const rendered = render(component);
    expect(rendered).toMatchSnapshot(); //스냅샷이 기존의 스냅샷과 일치하는지
    expect(rendered).toBeTruthy(); // 컴포넌트가 null,undefined처럼 falsy한 값을 가지진 않는지.
  });
});
