import { useEffect, useRef, useState } from 'react';
import {
  Image,
  StyleSheet,
  Dimensions,
  Platform,
  StatusBar,
  Animated,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import * as SplashScreenExpo from 'expo-splash-screen';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('screen');

// Keep splash visible until manually hidden
SplashScreenExpo.preventAutoHideAsync();

type SplashStatus = 'loading' | 'error' | 'success';

export const SplashScreen = () => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const [status, setStatus] = useState<SplashStatus>('loading');
  const [errorMessage, setErrorMessage] = useState('');
  const [retryCount, setRetryCount] = useState(0);

  const performInitialization = async () => {
    try {
      setStatus('loading');
      setErrorMessage('');

      // Run initialization tasks
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setStatus('success');
      await SplashScreenExpo.hideAsync();

      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: true,
      }).start(() => {
        navigation.navigate('Intro1' as never);
      });
      await SplashScreenExpo.hideAsync();
    } catch (error: any) {
      console.error('Initialization error:', error);
      setStatus('error');

      // Customize error messages based on error type
      if (error.message?.includes('Network') || error.message?.includes('fetch')) {
        setErrorMessage('Unable to connect to the server.\nPlease check your internet connection.');
      } else if (error.message?.includes('timeout')) {
        setErrorMessage('Connection timed out.\nPlease try again.');
      } else if (error.message?.includes('auth')) {
        setErrorMessage('Authentication failed.\nPlease try again.');
      } else {
        setErrorMessage('Something went wrong.\nPlease try again.');
      }

      // Hide expo splash screen to show error UI
      await SplashScreenExpo.hideAsync();
    }
  };

  useEffect(() => {
    performInitialization();
  }, [retryCount]);

  const handleRetry = () => {
    setRetryCount((prev) => prev + 1);
  };

  const handleSkip = () => {
    navigation.navigate('Intro1' as never, { offline: true } as never);
  };

  // Loading State
  if (status === 'loading') {
    return (
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        <StatusBar hidden translucent backgroundColor="transparent" />
        <Image
          source={require('../../../assets/splash-screen-mobile.png')}
          style={styles.image}
          resizeMode="cover"
        />
        {/* Optional: Show loading indicator */}
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#ffffff" />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      </Animated.View>
    );
  }

  // Error State
  if (status === 'error') {
    return (
      <View style={styles.container}>
        <StatusBar hidden translucent backgroundColor="transparent" />
        <Image
          source={require('../../../assets/splash-screen-mobile.png')}
          style={styles.image}
          resizeMode="cover"
        />

        {/* Error Overlay */}
        <View style={styles.errorOverlay}>
          <View style={styles.errorContainer}>
            {/* Error Icon */}
            <View style={styles.errorIcon}>
              <Text style={styles.errorIconText}>⚠️</Text>
            </View>

            {/* Error Message */}
            <Text style={styles.errorTitle}>Oops!</Text>
            <Text style={styles.errorMessage}>{errorMessage}</Text>

            {/* Retry Count */}
            {retryCount > 0 && <Text style={styles.retryText}>Attempt {retryCount + 1}</Text>}

            {/* Action Buttons */}
            <TouchableOpacity style={styles.retryButton} onPress={handleRetry} activeOpacity={0.8}>
              <Text style={styles.retryButtonText}>Try Again</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.skipButton} onPress={handleSkip} activeOpacity={0.8}>
              <Text style={styles.skipButtonText}>Continue Anyway</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  image: {
    width,
    height: Platform.OS === 'android' ? height + (StatusBar.currentHeight || 0) : height,
  },
  loadingOverlay: {
    position: 'absolute',
    bottom: 100,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    color: '#ffffff',
    fontSize: 16,
    marginTop: 16,
    fontWeight: '500',
  },
  errorOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  errorContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
    maxWidth: 340,
    width: '100%',
  },
  errorIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#FFF3CD',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  errorIconText: {
    fontSize: 32,
  },
  errorTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 12,
  },
  errorMessage: {
    fontSize: 15,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 8,
  },
  retryText: {
    fontSize: 13,
    color: '#999999',
    marginBottom: 20,
  },
  retryButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 10,
    marginBottom: 12,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#007AFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  retryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  skipButton: {
    backgroundColor: 'transparent',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  skipButtonText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '500',
  },
});
