import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';

export interface CheckIconProps {
  /** Size of the icon */
  size?: number;
  /** Check mark color */
  checkColor?: string;
  /** Background color */
  backgroundColor?: string;
  /** Border color */
  borderColor?: string;
  /** Border width */
  borderWidth?: number;
  /** Container style */
  style?: StyleProp<ViewStyle>;
  /** Test ID */
  testID?: string;
}

/** CheckIcon component for displaying completion/check marks */
export const CheckIcon = ({
  size = 24,
  checkColor = '#7099A7',
  backgroundColor = 'rgba(255, 255, 255, 0.9)',
  borderColor,
  borderWidth,
  style,
  testID = 'check-icon',
}: CheckIconProps) => {
  return (
    <View
      style={[
        styles.container,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor,
          borderColor,
          borderWidth,
        },
        style,
      ]}
      testID={testID}
    >
      <Text
        style={[
          styles.checkMark,
          {
            color: checkColor,
            fontSize: size * 0.6,
          },
        ]}
        testID={`${testID}-check`}
      >
        ✓
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkMark: {
    fontWeight: '700',
    textAlign: 'center',
  },
});
