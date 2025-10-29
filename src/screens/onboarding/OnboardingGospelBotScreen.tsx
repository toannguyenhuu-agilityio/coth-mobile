import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

// Components
import { Button, Stepper, ChevronRightIcon, OnboardingFeatureCard } from '@/components';

// Themes
import { colors, typography, spacing } from '@/theme';

// Constants
import { ROUTES, SCREEN_HEIGHT, SCREEN_WIDTH, IMAGES } from '@/constants';

export const OnboardingGospelBotScreen = () => {
  const navigation = useNavigation();

  const handleNext = () => {
    navigation.navigate(ROUTES.ONBOARDING_SPIRITUAL_TOOLS as never);
  };

  const handleSkip = () => {
    navigation.navigate(ROUTES.LOGIN as never);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      {/* Background with gradients */}
      <View style={styles.backgroundContainer}>
        {/* Stars background */}

        {/* Top Ellipse Gradients */}
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

        {/* Main background image with gradient overlay */}
        <View style={styles.imageContainer}>
          <ImageBackground
            source={IMAGES.onboardingGospelBotBackground}
            style={styles.mainBackground}
            resizeMode="stretch"
          >
            {/* Bottom gradient overlay */}
            <LinearGradient
              colors={[colors.black[0], colors.black[100]]}
              locations={[0, 0.42]}
              style={styles.gradientOverlay}
            />
          </ImageBackground>
        </View>
      </View>

      {/* Content */}
      <View style={styles.contentContainer}>
        {/* Stepper */}
        <View style={styles.header}>
          <Stepper
            steps={5}
            currentStep={4}
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
            <Text style={styles.title}>24/7 Chat with Gospel Bot</Text>
            <Text style={styles.description}>
              Ask personalized questions to Gospel Bot, our A.I. trained on hundreds of hours of
              biblical teachings and scripture.
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

  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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

  mainBackground: {
    width: 312,
    height: 638,
  },

  gradientOverlay: {
    position: 'absolute',
    left: -81,
    top: 218,
    width: 438,
    height: 522,
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
    color: colors.white[100],
  },

  button: {
    marginTop: spacing[12],
    width: '100%',
  },
});
