import * as React from 'react';
import Svg, { G, Path, Defs } from 'react-native-svg';

type ArrowRightProps = {
  width?: number;
  height?: number;
  color?: string;
};

export const ArrowRight = ({ width = 20, height = 20, ...rest }: ArrowRightProps) => (
  <Svg width={width} height={height} fill="none" {...rest}>
    <G filter="url(#a)">
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m7 5 5 5-5 5"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
