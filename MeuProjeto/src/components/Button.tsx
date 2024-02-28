// src/components/Button.tsx
import React from 'react';
import { Button } from 'react-native-paper';
import { buttonStyles } from '../styles/globalStyles';

interface ButtonProps {
  onPress: () => void;
  text: string;
}

export default function ButtonComponent({ onPress, text }: ButtonProps) {
  return (
    <Button mode="contained" onPress={onPress} style={buttonStyles.button}>
      {text}
    </Button>
  );
}
