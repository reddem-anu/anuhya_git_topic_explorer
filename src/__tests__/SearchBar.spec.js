import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SearchBar } from '../components';

const mockedSubmitFunc = jest.fn();
describe('SearchBar', () => {
  test('search initializes with default value', () => {
    render(<SearchBar topicName='react' handleSubmit={mockedSubmitFunc} />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveValue('react');
  });

  test('can change input value', () => {
    render(<SearchBar topicName='react' handleSubmit={mockedSubmitFunc} />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'angular' } });
    expect(inputElement).toHaveValue('angular');
  });
  test('button click submits form with latest input value', () => {
    render(<SearchBar topicName='react' handleSubmit={mockedSubmitFunc} />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'angular' } });
    const btnElement = screen.getByRole('button');
    userEvent.click(btnElement);
    expect(mockedSubmitFunc).toHaveBeenCalledWith('angular');
  });
});
