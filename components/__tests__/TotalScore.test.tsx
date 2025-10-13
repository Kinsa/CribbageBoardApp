import { render, screen } from '@testing-library/react-native';
import TotalScore from '../TotalScore';

describe('TotalScore Component', () => {
  test('renders points and maximum score', () => {
    const { getByTestId, getByText } = render(<TotalScore player={1} points={7} />);

    // Check component renders
    expect(getByTestId(`total-score-1`)).toBeOnTheScreen();

    // Check maximum score text
    expect(getByText('7')).toBeOnTheScreen();
    expect(getByText(' / 121')).toBeOnTheScreen();
  });

  test.each([
    { player: 1, points: 5, expectedClass: 'text-player-one' },
    { player: 2, points: 42, expectedClass: 'text-player-two' },
  ])('player $player is styled correctly', ({ player, points, expectedClass }) => {
    const { getByTestId } = render(<TotalScore player={player} points={points} />);
    const element = getByTestId(`total-score-${player}`);
    expect(element.props.className).toContain(expectedClass);

    const text = screen.getByText(`${points}`);
    expect(text).toBeOnTheScreen();
  });
});

// snapshot tests
test.each([
  { player: 1, points: 5 },
  { player: 2, points: 42 },
])('renders correctly for player $player with $points points', ({ player, points }) => {
  const tree = render(<TotalScore player={player} points={points} />).toJSON();
  expect(tree).toMatchSnapshot();
});
