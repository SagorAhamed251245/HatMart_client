import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UserSearch from '@/components/Dashboard/User/UserSearch';

describe('UserSearch component', () => {
  it('updates searchData when input value changes', () => {
    const setSearchDataMock = jest.fn();

    render(<UserSearch searchData="" setSearchData={setSearchDataMock} />);

    const inputField = screen.getByPlaceholderText('Filter name and email...');

    fireEvent.change(inputField, { target: { value: 'Test Input' } });

    expect(setSearchDataMock).toHaveBeenCalledWith('Test Input');
  });
});