import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

// Components
import { Button, Stepper, OnboardingFeatureCard, ChevronRightIcon } from '@/components';

// Themes
import { colors, typography, spacing } from '@/theme';

// Constants
import { ROUTES, SCREEN_HEIGHT, SCREEN_WIDTH, IMAGES } from '@/constants';

export const OnboardingSpiritualUnlockScreen = () => {
  const navigation = useNavigation();

  const handleSignUp = () => {
    navigation.navigate(ROUTES.SIGNUP as never);
  };

  const handleSkip = () => {
    navigation.navigate(ROUTES.LOGIN as never);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      <View style={styles.backgroundContainer}>
        <View style={styles.ellipse1}>
          <LinearGradient
            colors={[colors.accent[4], colors.black[100]]}
            locations={[0.03, 1]}
            start={{ x: 0.36, y: 0.81 }}
            end={{ x: 1, y: 0 }}
            style={StyleSheet.absoluteFill}
          />
        </View>

        <View style={styles.ellipse2}>
          <LinearGradient
            colors={[colors.black[100], colors.accent[3], colors.gray[50]]}
            locations={[0.4307, 0.7044, 0.8923]}
            start={{ x: 0.5, y: 1 }}
            end={{ x: 0.5, y: 0 }}
            style={StyleSheet.absoluteFill}
          />
        </View>
      </View>

      {/* Content */}
      <View style={styles.contentContainer}>
        {/* Stepper */}
        <View style={styles.header}>
          <Stepper
            steps={5}
            currentStep={5}
            completedColor={colors.vermilion[100]}
            currentColor={colors.accent[3]}
            incompleteColor={colors.gray[800]}
          />

          {/* Skip Button */}
          <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
            <Text style={styles.skipText}>Skip</Text>
            <ChevronRightIcon size={20} color={colors.white[100]} />
          </TouchableOpacity>
        </View>

        {/* Growth Chart */}
        <View style={styles.chartContainer}>
          <Image
            source={IMAGES.onboardingGrowChart}
            style={styles.growthChartImage}
            resizeMode="contain"
          />
        </View>

        {/* Card with content */}
        <OnboardingFeatureCard
          backgroundColor={colors.white[10]}
          borderColor={colors.white[50]}
          borderWidth={1}
          borderRadius={16}
          padding={16}
        >
          <View style={styles.textContainer}>
            <Text style={styles.title}>Spiritual Unlock</Text>
            <Text style={styles.description}>
              When you follow this program for 14 days, you will experience your first spiritual
              unlock.
            </Text>
          </View>

          <Button
            label="Sign Up"
            variant="primary"
            size="medium"
            backgroundColor={colors.accent[3] + '33'}
            iconRight={<ChevronRightIcon size={20} color={colors.white[100]} />}
            onPress={handleSignUp}
            style={styles.button}
          />
        </OnboardingFeatureCard>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black[100],
  },
  backgroundContainer: {
    position: 'absolute',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    overflow: 'hidden',
  },

  ellipse1: {
    position: 'absolute',
    left: -227,
    top: -46,
    width: 856,
    height: 966,
    borderRadius: 856 / 2,
    opacity: 0.6,
    overflow: 'hidden',
  },

  ellipse2: {
    position: 'absolute',
    left: -107,
    top: -202,
    width: 616,
    height: 1188,
    borderRadius: 616 / 2,
    overflow: 'hidden',
  },

  starsBackground: {
    position: 'absolute',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },

  contentContainer: {
    flex: 1,
    paddingHorizontal: spacing[24],
    paddingTop: spacing[66],
    paddingBottom: 34,
    justifyContent: 'space-between',
  },

  header: {
    width: '100%',
  },

  skipButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingVertical: spacing[8],
    paddingHorizontal: spacing[8],
    marginTop: spacing[16],
    alignSelf: 'flex-end',
  },

  skipText: {
    fontFamily: typography.fontWeight.medium,
    fontSize: typography.fontSize.xl,
    color: colors.white[100],
    textShadowColor: colors.white[50],
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 2,
  },

  chartContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  growthChartImage: {
    width: '100%',
    height: '100%',
  },

  textContainer: {
    gap: spacing[8],
  },
  title: {
    fontFamily: typography.fontWeight.bold,
    fontSize: typography.fontSize['5xl'],
    color: colors.white[100],
  },
  description: {
    fontFamily: typography.fontWeight.bold,
    fontSize: typography.fontSize.xl,
    color: colors.white[100],
  },
  button: {
    marginTop: spacing[12],
    width: '100%',
  },
});
