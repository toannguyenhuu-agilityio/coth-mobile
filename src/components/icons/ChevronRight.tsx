import Svg, { Path } from 'react-native-svg';
import { colors } from 'src/theme';

export const ChevronRightIcon = ({
  size = 20,
  color = colors.white[100],
}: {
  size?: number;
  color?: string;
}) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    <Path
      d="M7 5L12 10L7 15"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
