import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

// Components
import { Button, Stepper, ChevronRightIcon, OnboardingFeatureCard } from '@/components';

// Themes
import { colors, typography, spacing } from '@/theme';

// Constants
import { ROUTES, SCREEN_HEIGHT, SCREEN_WIDTH, IMAGES } from '@/constants';

export const OnboardingBibleClassesScreen = () => {
  const navigation = useNavigation();

  const handleNext = () => {
    navigation.navigate(ROUTES.ONBOARDING_DEVOTIONALS as never);
  };

  const handleSkip = () => {
    navigation.navigate(ROUTES.LOGIN as never);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      {/* Background with gradients */}
      <View style={styles.backgroundContainer}>
        {/* Main background image */}
        <ImageBackground
          source={IMAGES.onboardingBibleClassBackground}
          style={styles.mainBackground}
          resizeMode="cover"
        />

        {/* Bottom gradient overlay */}
        <LinearGradient
          colors={[colors.black[0], colors.black[100]]}
          locations={[0, 0.42]}
          style={styles.gradientOverlay}
        />
      </View>

      {/* Content */}
      <View style={styles.contentContainer}>
        {/* Stepper */}
        <View style={styles.header}>
          <Stepper
            steps={5}
            currentStep={1}
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

        {/* Card with content */}
        <OnboardingFeatureCard
          backgroundColor={colors.white[10]}
          borderColor={colors.white[50]}
          borderWidth={1}
          borderRadius={16}
          padding={16}
        >
          <View style={styles.textContainer}>
            <Text style={styles.title}>Live Weekly Bible Classes</Text>
            <Text style={styles.description}>
              Gain a deeper biblical understanding in the Weekly Bible Class, where we deep dive
              into each chapter Live, and you can ask your questions.
            </Text>
          </View>

          <Button
            label="Next"
            variant="primary"
            size="medium"
            backgroundColor={colors.accent[3] + '33'}
            iconRight={<ChevronRightIcon size={20} color={colors.white[100]} />}
            onPress={handleNext}
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

  mainBackground: {
    width: '100%',
    height: 717,
  },

  gradientOverlay: {
    position: 'absolute',
    bottom: 0,
    width: SCREEN_WIDTH + 72,
    height: 457,
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
    lineHeight: typography.fontSize.xl * 1.263,
    color: colors.white[100],
    textShadowColor: colors.white[50],
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 2,
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
    lineHeight: typography.fontSize.xl * 1.263,
    color: colors.white[100],
  },

  button: {
    marginTop: spacing[12],
    width: '100%',
  },
});
