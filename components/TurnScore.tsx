import { cn } from '@/utils';
import { Text } from 'react-native';

interface TurnScoreProps {
  player: number;
  points: number;
}

export default function TurnScore({ player, points }: TurnScoreProps) {
  return (
    <Text
      testID={`turn-score-${player}`}
      className={cn(
        'absolute font-bold text-7xl',
        player === 1
          ? 'text-player-one left-8 rotate-180 bottom-[65%]'
          : 'text-player-two right-8 top-[65%]'
      )}>
      {points}
    </Text>
  );
}
