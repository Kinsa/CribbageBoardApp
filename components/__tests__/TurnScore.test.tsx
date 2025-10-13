import { render } from '@testing-library/react-native';
import TurnScore from '../TurnScore';

describe('TurnScore Component', () => {
  test('renders points and maximum score', () => {
    const { getByTestId, getByText } = render(<TurnScore player={1} points={7} />);

    // Check component renders
    expect(getByTestId(`turn-score-1`)).toBeOnTheScreen();

    // Check turn score text
    expect(getByText('7')).toBeOnTheScreen();
  });

  test.each([
    { player: 1, points: 5, expectedClass: 'text-player-one' },
    { player: 2, points: 42, expectedClass: 'text-player-two' },
  ])('player $player is styled correctly', ({ player, points, expectedClass }) => {
    const { getByTestId } = render(<TurnScore player={player} points={points} />);
    const element = getByTestId(`turn-score-${player}`);
    expect(element.props.className).toContain(expectedClass);
  });
});

// snapshot tests
test.each([
  { player: 1, points: 5 },
  { player: 2, points: 42 },
])('renders correctly for player $player with $points points', ({ player, points }) => {
  const tree = render(<TurnScore player={player} points={points} />).toJSON();
  expect(tree).toMatchSnapshot();
});
