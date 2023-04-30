import { fireEvent, render, screen } from '@testing-library/react';
import Modal from './Modal';

describe('Modal', () => {
  test('renders content properly', async () => {
    const content = 'Modal content';
    render(
      <Modal isOpen>
        <h1>{content}</h1>
      </Modal>
    );

    await expect(screen.getByText(content)).toBeInTheDocument();
  });

  test('calls onOpen function', () => {
    const mockOnOpenFn = jest.fn();
    render(<Modal isOpen onOpen={mockOnOpenFn} />);
    expect(mockOnOpenFn).toBeCalledTimes(1);
  });

  test('calls onClose function', () => {
    const mockOnCloseFn = jest.fn();
    render(<Modal isOpen onClose={mockOnCloseFn} />);
    fireEvent.click(screen.getByTestId('button-close'));
    expect(mockOnCloseFn).toBeCalledTimes(1);
  });

  test('calls onClose on overlay click', async () => {
    const mockOnCloseFn = jest.fn();
    render(<Modal isOpen onClose={mockOnCloseFn} shouldCloseOnOverlayClick />);

    await fireEvent.click(screen.getByTestId('modal'));
    expect(mockOnCloseFn).toBeCalledTimes(1);
  });
});
