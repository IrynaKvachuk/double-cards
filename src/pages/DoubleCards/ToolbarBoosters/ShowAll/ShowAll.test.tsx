import { render, screen } from '../../../../test-utils';
import ShowAll from '.';

const setUp = () => {
  const mockData = {
    title: 'show all cards for 3 sec'
  };

  const utils = render(<ShowAll />);
  const boosterContainer = screen.getByTestId('booster');
  const boosterButton = screen.getByTitle(mockData.title);
  const countSpan = screen.getByTitle(/booster count/i);

  return {
    mockData,
    boosterContainer,
    boosterButton,
    countSpan,
    ...utils
  };
};

describe('ShowAll Booster', () => {
  test('renders correctly', () => {
    const { boosterContainer, boosterButton, countSpan } = setUp();
    expect(boosterContainer).toBeInTheDocument();
    expect(boosterButton).toBeInTheDocument();
    expect(countSpan).toBeInTheDocument();
  });
});
