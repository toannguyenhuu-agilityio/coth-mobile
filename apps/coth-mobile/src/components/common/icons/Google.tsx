import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

type GoogleIconProps = {
  width?: number;
  height?: number;
  color?: string;
};

export const GoogleIcon = ({ width = 20, height = 20, ...rest }: GoogleIconProps) => (
  <Svg width={width} height={height} fill="none" {...rest}>
    <G clipPath="url(#a)">
      <Path
        fill="#4285F4"
        d="M19.804 10.23c0-.68-.055-1.363-.172-2.032h-9.433v3.851h5.402a4.63 4.63 0 0 1-2 3.039v2.498h3.223c1.893-1.741 2.98-4.313 2.98-7.356Z"
      />
      <Path
        fill="#34A853"
        d="M10.202 20c2.697 0 4.971-.885 6.629-2.413l-3.223-2.499c-.897.61-2.054.955-3.402.955-2.61 0-4.821-1.76-5.615-4.126H1.266v2.576A10.001 10.001 0 0 0 10.202 20Z"
      />
      <Path
        fill="#EA4335"
        d="M10.202 3.958a5.434 5.434 0 0 1 3.836 1.5l2.855-2.856A9.61 9.61 0 0 0 10.202.001a9.998 9.998 0 0 0-8.936 5.511l3.321 2.576c.79-2.37 3.006-4.13 5.615-4.13Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
