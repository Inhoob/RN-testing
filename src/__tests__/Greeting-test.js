import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Greeting from '../Greeting';

describe('[Greeting] Test', () => {
  const onPressMock = jest.fn();
  const props = {
    title: 'Hello!',
    onPress: onPressMock,
  };

  test('버튼이 눌린다.', () => {
    const rendered = render(<Greeting {...props} />);

    for (let i = 0; i < 5; i++) {
      fireEvent(rendered.getByText('Hello!'), 'onPress');
    }
    expect(onPressMock).toBeCalledTimes(5);
    expect(rendered.toJSON().children[0].children[0].children[0]).toEqual(
      'Hello!',
    ); //Hello! 라는 텍스트가 있는 컴포넌트를 5번 누르고, 5번이 잘 눌렸는지와 눌려진 컴포넌트의 텍스트가 변경되지 않았는지 테스트
  });
});
