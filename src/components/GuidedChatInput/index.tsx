import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function GuidedChatInput() {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (!message.trim()) return;
    console.log('Message sent:', message);
    setMessage('');
  };

  return (
    <LinearGradient
      colors={['#101010', '#1a1a1a']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      {/* Remaining guided conversations */}
      <Text style={styles.statusText}>
        <Text style={styles.highlight}>100/150</Text> Guided Conversations Remain
      </Text>

      {/* Input field + send button */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ask anything..."
          placeholderTextColor="#888"
          value={message}
          onChangeText={setMessage}
          returnKeyType="send"
          onSubmitEditing={handleSend}
        />
        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <Ionicons name="send" size={18} color="#bbb" />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.35,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 6,
  },
  statusText: {
    color: '#aaa',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
  },
  highlight: {
    color: '#fff',
    fontWeight: '600',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222',
    borderRadius: 30,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  input: {
    flex: 1,
    color: '#fff',
    fontSize: 14,
  },
  sendButton: {
    padding: 6,
    borderRadius: 30,
  },
});
