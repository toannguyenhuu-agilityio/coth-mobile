import { memo, ReactNode } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle, Text } from 'react-native';

export interface EventTicketProps {
  /** Title text */
  title?: string;
  /** QR code component */
  qrCode: ReactNode;
  /** Member badge text */
  badgeText?: string;
  /** Badge background color */
  badgeBackgroundColor?: string;
  /** Badge text color */
  badgeTextColor?: string;
  /** Instruction text (main) */
  instructionText?: string;
  /** Warning text (with icon) */
  warningText?: string;
  /** Background color */
  backgroundColor?: string;
  /** QR code container background color */
  qrCodeBackgroundColor?: string;
  /** Instruction box background color */
  instructionBackgroundColor?: string;
  /** Instruction box border color */
  instructionBorderColor?: string;
  /** Container style */
  style?: StyleProp<ViewStyle>;
  /** Test ID */
  testID?: string;
}

/** Event ticket component with QR code and member badge */
export const EventTicket = memo<EventTicketProps>(
  ({
    title = 'My Events Ticket',
    qrCode,
    badgeText,
    badgeBackgroundColor = 'linear-gradient(90deg, #C2A05F 0%, #F4E4B8 50%, #C2A05F 100%)',
    badgeTextColor = '#000000',
    instructionText = "Scan this QR code to get free entry to any of Johnny Chang's Live Events.",
    warningText = 'This is your unique code. Do not share.',
    backgroundColor = '#000000',
    qrCodeBackgroundColor = '#FFFFFF',
    instructionBackgroundColor = 'rgba(255, 255, 255, 0.05)',
    instructionBorderColor = 'rgba(255, 255, 255, 0.2)',
    style,
    testID = 'event-ticket',
  }) => {
    return (
      <View style={[styles.container, { backgroundColor }, style]} testID={testID}>
        {/* Title */}
        {title && (
          <Text style={styles.title} testID={`${testID}-title`}>
            {title}
          </Text>
        )}

        {/* QR Code Container */}
        <View
          style={[styles.qrCodeContainer, { backgroundColor: qrCodeBackgroundColor }]}
          testID={`${testID}-qr-container`}
        >
          {qrCode}
        </View>

        {/* Member Badge */}
        {badgeText && (
          <View
            style={[
              styles.badge,
              {
                backgroundColor: badgeBackgroundColor,
              },
            ]}
            testID={`${testID}-badge`}
          >
            <Text style={[styles.badgeText, { color: badgeTextColor }]}>{badgeText}</Text>
          </View>
        )}

        {/* Instructions Box */}
        <View
          style={[
            styles.instructionBox,
            {
              backgroundColor: instructionBackgroundColor,
              borderColor: instructionBorderColor,
            },
          ]}
          testID={`${testID}-instruction`}
        >
          {/* Main instruction text */}
          {instructionText && <Text style={styles.instructionText}>{instructionText}</Text>}

          {/* Warning text with icon */}
          {warningText && (
            <View style={styles.warningRow}>
              <View style={styles.warningIcon}>
                <Text style={styles.warningIconText}>ⓘ</Text>
              </View>
              <Text style={styles.warningText}>{warningText}</Text>
            </View>
          )}
        </View>
      </View>
    );
  },
);

EventTicket.displayName = 'EventTicket';

const styles = StyleSheet.create({
  container: {
    padding: 24,
    gap: 24,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 36,
    color: '#FFFFFF',
    alignSelf: 'flex-start',
  },
  qrCodeContainer: {
    width: 300,
    height: 300,
    borderRadius: 24,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 16,
    width: 300,
    alignItems: 'center',
  },
  badgeText: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 25,
  },
  instructionBox: {
    padding: 24,
    borderRadius: 16,
    borderWidth: 1,
    gap: 16,
    width: '100%',
  },
  instructionText: {
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: '#FFFFFF',
  },
  warningRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  warningIcon: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warningIconText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  warningText: {
    flex: 1,
    fontFamily: 'Akzidenz-Grotesk Pro',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    color: '#FFFFFF',
  },
});
