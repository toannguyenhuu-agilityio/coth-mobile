import React from 'react';
import { View } from 'react-native';
import { EventTicket } from './index';

export default {
  title: 'Components/EventTicket',
  component: EventTicket,
  argTypes: {
    title: { control: 'text' },
    badgeText: { control: 'text' },
    badgeBackgroundColor: { control: 'color' },
    badgeTextColor: { control: 'color' },
    instructionText: { control: 'text' },
    warningText: { control: 'text' },
    backgroundColor: { control: 'color' },
    qrCodeBackgroundColor: { control: 'color' },
    instructionBackgroundColor: { control: 'color' },
    instructionBorderColor: { control: 'color' },
  },
  args: {
    title: 'My Events Ticket',
    badgeText: 'Gold Member',
    badgeTextColor: '#000000',
    instructionText: "Scan this QR code to get free entry to any of Johnny Chang's Live Events.",
    warningText: 'This is your unique code. Do not share.',
    backgroundColor: '#000000',
    qrCodeBackgroundColor: '#FFFFFF',
    instructionBackgroundColor: 'rgba(255, 255, 255, 0.05)',
    instructionBorderColor: 'rgba(255, 255, 255, 0.2)',
  },
};

// Mock QR Code component
const MockQRCode = ({ size = 260 }: { size?: number }) => (
  <View
    style={{
      width: size,
      height: size,
      backgroundColor: '#000',
      padding: 8,
    }}
  >
    <View style={{ flex: 1, backgroundColor: '#FFF' }}>
      {/* Simulated QR code pattern */}
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {Array.from({ length: 20 }).map((_, i) => (
          <View
            key={i}
            style={{
              width: size / 20,
              height: size / 20,
              backgroundColor: Math.random() > 0.5 ? '#000' : '#FFF',
            }}
          />
        ))}
      </View>
    </View>
  </View>
);

export const Default = (props: any) => (
  <View style={{ padding: 20, backgroundColor: '#000' }}>
    <EventTicket {...props} qrCode={<MockQRCode />} />
  </View>
);

export const GoldMember = () => (
  <View style={{ padding: 20, backgroundColor: '#000' }}>
    <EventTicket
      title="My Events Ticket"
      qrCode={<MockQRCode />}
      badgeText="Gold Member"
      badgeBackgroundColor="#C2A05F"
      badgeTextColor="#000000"
      instructionText="Scan this QR code to get free entry to any of Johnny Chang's Live Events."
      warningText="This is your unique code. Do not share."
    />
  </View>
);

export const SilverMember = () => (
  <View style={{ padding: 20, backgroundColor: '#000' }}>
    <EventTicket
      title="My Events Ticket"
      qrCode={<MockQRCode />}
      badgeText="Silver Member"
      badgeBackgroundColor="#AAAAAA"
      badgeTextColor="#000000"
      instructionText="Scan this QR code to get free entry to any of Johnny Chang's Live Events."
      warningText="This is your unique code. Do not share."
    />
  </View>
);

export const BronzeMember = () => (
  <View style={{ padding: 20, backgroundColor: '#000' }}>
    <EventTicket
      title="My Events Ticket"
      qrCode={<MockQRCode />}
      badgeText="Bronze Member"
      badgeBackgroundColor="#CD7F32"
      badgeTextColor="#FFFFFF"
      instructionText="Scan this QR code to get free entry to any of Johnny Chang's Live Events."
      warningText="This is your unique code. Do not share."
    />
  </View>
);

export const WithoutBadge = () => (
  <View style={{ padding: 20, backgroundColor: '#000' }}>
    <EventTicket
      title="My Events Ticket"
      qrCode={<MockQRCode />}
      instructionText="Scan this QR code to get free entry to any of Johnny Chang's Live Events."
      warningText="This is your unique code. Do not share."
    />
  </View>
);

export const WithoutTitle = () => (
  <View style={{ padding: 20, backgroundColor: '#000' }}>
    <EventTicket
      title=""
      qrCode={<MockQRCode />}
      badgeText="Gold Member"
      badgeBackgroundColor="#C2A05F"
      badgeTextColor="#000000"
      instructionText="Scan this QR code to get free entry to any of Johnny Chang's Live Events."
      warningText="This is your unique code. Do not share."
    />
  </View>
);

export const CustomInstructions = () => (
  <View style={{ padding: 20, backgroundColor: '#000' }}>
    <EventTicket
      title="My VIP Ticket"
      qrCode={<MockQRCode />}
      badgeText="VIP Member"
      badgeBackgroundColor="#8B00FF"
      badgeTextColor="#FFFFFF"
      instructionText="Show this QR code at the entrance to access VIP areas and exclusive perks."
      warningText="Keep this code private. Screenshot not allowed."
    />
  </View>
);

export const LongInstructions = () => (
  <View style={{ padding: 20, backgroundColor: '#000' }}>
    <EventTicket
      title="My Events Ticket"
      qrCode={<MockQRCode />}
      badgeText="Gold Member"
      badgeBackgroundColor="#C2A05F"
      badgeTextColor="#000000"
      instructionText="Scan this QR code to get free entry to any of Johnny Chang's Live Events. Present this code at the venue entrance and our staff will verify your membership status. Enjoy exclusive member benefits and priority access."
      warningText="This is your unique code. Do not share it with anyone or post it online. Sharing this code may result in membership suspension."
    />
  </View>
);

export const CustomColors = () => (
  <View style={{ padding: 20, backgroundColor: '#000' }}>
    <EventTicket
      title="My Events Ticket"
      qrCode={<MockQRCode />}
      badgeText="Gold Member"
      badgeBackgroundColor="#C2A05F"
      badgeTextColor="#000000"
      instructionText="Scan this QR code to get free entry to any of Johnny Chang's Live Events."
      warningText="This is your unique code. Do not share."
      instructionBackgroundColor="rgba(37, 135, 160, 0.1)"
      instructionBorderColor="#2587A0"
    />
  </View>
);

export const SmallQRCode = () => (
  <View style={{ padding: 20, backgroundColor: '#000' }}>
    <EventTicket
      title="My Events Ticket"
      qrCode={<MockQRCode size={200} />}
      badgeText="Gold Member"
      badgeBackgroundColor="#C2A05F"
      badgeTextColor="#000000"
      instructionText="Scan this QR code to get free entry to any of Johnny Chang's Live Events."
      warningText="This is your unique code. Do not share."
    />
  </View>
);

export const WithoutWarning = () => (
  <View style={{ padding: 20, backgroundColor: '#000' }}>
    <EventTicket
      title="My Events Ticket"
      qrCode={<MockQRCode />}
      badgeText="Gold Member"
      badgeBackgroundColor="#C2A05F"
      badgeTextColor="#000000"
      instructionText="Scan this QR code to get free entry to any of Johnny Chang's Live Events."
      warningText=""
    />
  </View>
);
