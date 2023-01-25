import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Profile from '../Profile';

describe('[Profile] Test', () => {
  const props = {
    userName: 'Luka',
    name: '박인후',
  };
  test('유저 이름이 알맞게 나온다.', () => {
    const rendered = render(<Profile {...props} />);
    rendered.getByText(/Luka/);
  });
  test('버튼이 눌리면 메시지가 적절히 변경된다.', () => {
    const rendered = render(<Profile {...props} />);
    // rendered.debug();
    rendered.getByText('Select your status');
    const byeBtn = rendered.getByText('Bye!');
    const helloBtn = rendered.getByText('Hello!');
    fireEvent(byeBtn, 'onPress');
    rendered.getByText('Seeya!');
    fireEvent(helloBtn, 'onPress');
    rendered.getByText('Welcome!');
  });
});
