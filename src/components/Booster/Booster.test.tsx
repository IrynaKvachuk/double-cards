import { render, screen } from '../../test-utils';
import userEvent from '@testing-library/user-event';
import Booster from '.';
import { BoosterIF } from '../../features/Boosters/BoosterTypes';
import { BoosterNameType } from '../../features/Boosters/BoosterTypes';

const setUp = () => {
  const type = 'showAll' as BoosterNameType;
  const boosterData: BoosterIF = {
    type,
    value: 3,
    date: new Date()
  };
  const mockData = {
    boosterData,
    icon: '&#9903;',
    addByDay: 5,
    className: 'showAll',
    title: 'show all cards for 3 sec',
    callback: jest.fn()
  };

  const utils = render(<Booster {...mockData} />);
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

describe('Booster', () => {
  test('renders correctly', () => {
    const { boosterContainer, boosterButton, countSpan } = setUp();
    expect(boosterContainer).toBeInTheDocument();
    expect(boosterButton).toBeInTheDocument();
    expect(countSpan).toBeInTheDocument();
  });

  test('callback has been called', async () => {
    const user = userEvent.setup({ delay: null });
    const { mockData, boosterContainer, boosterButton } = setUp();

    await user.click(boosterButton);
    expect(boosterContainer).toHaveClass('selected');
    expect(mockData.callback).toHaveBeenCalledTimes(1);
  });
});
