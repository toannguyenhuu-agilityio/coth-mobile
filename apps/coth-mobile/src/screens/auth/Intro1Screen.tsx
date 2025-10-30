import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, typography } from '@/theme';

export const Intro1Screen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      {/* Background Layer */}
      <View style={styles.backgroundLayer}>
        {/* Gradient Background */}
        <View style={styles.gradientEllipse}>
          <LinearGradient
            colors={['rgba(130, 150, 149, 0.6)', 'rgba(0, 0, 0, 0.6)']}
            style={StyleSheet.absoluteFill}
            start={{ x: 0.36, y: 0.81 }}
            end={{ x: 1, y: 0 }}
          />
        </View>

        {/* Stars Background */}
        <View style={styles.starsContainer}>
          <ImageBackground
            source={require('../../../assets/images/background.png')}
            resizeMode="cover"
          />
        </View>
      </View>

      {/* Hero Image */}
      {/* <View style={styles.heroImageContainer}>
        <ImageBackground source={heroImageSource} style={styles.heroImage} resizeMode="cover">
          {/* Dark gradient overlay */}
      <LinearGradient
        colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
        style={styles.heroGradient}
        locations={[0, 0.3]}
      />
      {/* </ImageBackground> */}
      {/* </View> */}

      {/* Content Layer */}
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          {/* <View style={styles.logoContainer}>
            <ImageBackground source={logoSource} style={styles.logo} resizeMode="contain" />
          </View> */}

          <View style={styles.spacer} />

          {/* Bottom Content */}
          <View style={styles.bottomContent}>
            {/* Text Content */}
            <View style={styles.textContent}>
              <Text style={styles.titleFirst}>Welcome to</Text>
              <Text style={styles.titleSecond}>Core of the Heart Daily</Text>
              <Text style={styles.subtitle}>Your daily guide to get closer to God</Text>
            </View>

            {/* Buttons */}
            <View style={styles.buttonsContainer}>
              {/* Get Started Button */}
              <TouchableOpacity style={styles.primaryButton} activeOpacity={0.8}>
                <Text style={styles.primaryButtonText}>Get Started</Text>
                <View style={styles.chevronIcon}>
                  <Text style={styles.chevronText}>›</Text>
                </View>
              </TouchableOpacity>

              {/* Log In Button */}
              <TouchableOpacity style={styles.linkButton} activeOpacity={0.8}>
                <Text style={styles.linkButtonText}>Log In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  // Background
  backgroundLayer: {
    ...StyleSheet.absoluteFillObject,
  },
  gradientEllipse: {
    position: 'absolute',
    left: -227,
    top: -46,
    width: 856,
    height: 966,
    borderRadius: 856 / 2,
    overflow: 'hidden',
  },
  starsContainer: {
    ...StyleSheet.absoluteFillObject,
  },

  heroGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '70%',
  },
  // Content
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 71,
  },
  logo: {
    width: 190,
    height: 32,
  },
  spacer: {
    flex: 1,
  },
  bottomContent: {
    gap: 32,
    paddingBottom: 70,
  },

  titleFirst: {
    fontFamily: typography.fontFamily.frankGothic,
    fontSize: 64,
    fontWeight: '400',
    lineHeight: 56,
    textTransform: 'uppercase',
    color: colors.accent[1],
    textAlign: 'justify',
  },
  titleSecond: {
    fontFamily: typography.fontFamily.frankGothic,
    fontSize: 64,
    fontWeight: '400',
    lineHeight: 56,
    textTransform: 'uppercase',
    color: colors.white[100],
    textAlign: 'justify',
  },
  subtitle: {
    fontFamily: typography.fontFamily.primary,
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 25,
    letterSpacing: -0.3,
    color: colors.gray[200],
    textAlign: 'justify',
  },
  // Buttons
  buttonsContainer: {
    gap: 16,
  },
  primaryButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(116, 139, 145, 0.2)',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    paddingVertical: 16,
    paddingHorizontal: 24,
    gap: 8,
    height: 48,
  },
  primaryButtonText: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontSize: 18,
    fontWeight: '800',
    lineHeight: 14,
    color: '#FFFFFF',
    textAlign: 'center',
    textShadowColor: 'rgba(255, 255, 255, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 2,
  },
  chevronIcon: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chevronText: {
    fontSize: 24,
    fontWeight: '300',
    color: '#FFFFFF',
  },
  linkButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    height: 48,
  },
  linkButtonText: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 14,
    color: '#FFFFFF',
    textAlign: 'center',
    textShadowColor: 'rgba(255, 255, 255, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 2,
  },
});
