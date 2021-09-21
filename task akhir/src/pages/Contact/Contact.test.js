import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
 
import Contact from './Contact';
 
describe('ContactPage', () => {
  test('renders Form component', () => {
    render(<Contact />);
    expect(screen.getByText(/Contact us/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Full Name/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone Number/)).toBeInTheDocument();
  });
  test('input text for name ,email,and phone number with false value', () => {
    render(<Contact />);
    fireEvent.input(screen.getByRole("textbox", { name: /name/i }), {
      target: { value: 'Ary4' },
    });
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: 'Aryaaaa' },
    });
    fireEvent.input(screen.getByRole("spinbutton", { name: /phone/i }), {
      target: { value: parseInt('012131') },
    });

    expect(screen.getByText('Nama Lengkap Harus Berupa Huruf')).toBeInTheDocument();
    expect(screen.getByText('Email Format Wrong')).toBeInTheDocument();
    expect(screen.getByText('Phone Number Format Wrong')).toBeInTheDocument();
    expect(screen.getByLabelText(/Full Name/)).toHaveValue('Ary4');
    expect(screen.getByLabelText(/Email Address/)).toHaveValue('Aryaaaa');
    expect(screen.getByLabelText(/Phone Number/)).toHaveValue(parseInt('012131'));
  });

  test('input text for ideal value', () => {
    render(<Contact />);
    fireEvent.input(screen.getByRole("textbox", { name: /name/i }), {
      target: { value: 'Arya' },
    });
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: 'arya@gmail.com' },
    });
    fireEvent.input(screen.getByRole("spinbutton", { name: /phone/i }), {
      target: { value: parseInt('082222222222') },
    });


    expect(screen.queryByText('Nama Lengkap Harus Berupa Huruf')).not.toBeInTheDocument();
    expect(screen.queryByText('Email Format Wrong')).not.toBeInTheDocument();
    expect(screen.queryByText('Phone Number Format Wrong')).not.toBeInTheDocument();
    expect(screen.getByLabelText(/Full Name/)).toHaveValue('Arya');
    expect(screen.getByLabelText(/Email Address/)).toHaveValue('arya@gmail.com');
    expect(screen.getByLabelText(/Phone Number/)).toHaveValue(parseInt('082222222222'));
  });
});
