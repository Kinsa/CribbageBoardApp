import { cn } from '@/utils';
import { Text, View } from 'react-native';

interface TotalScoreProps {
  player: number;
  points: number;
}

export default function TotalScore({ player, points }: TotalScoreProps) {
  return (
    <View
      testID={`total-score-${player}`}
      className={cn(
        'absolute font-bold text-base flex flex-row items-end',
        player === 1
          ? 'text-player-one left-40 rotate-180 bottom-[75%]'
          : 'text-player-two right-40 top-[75%]'
      )}>
      <Text
        testID={`total-score-${player}-text`}
        className={cn('font-bold text-base', player === 1 ? 'text-player-one' : 'text-player-two')}>
        {points}
      </Text>
      <Text className="text-sm text-surface-subtle font-normal"> / 121</Text>
    </View>
  );
}
