// LanguageToggle.tsx - Language switcher button
// This component lets users switch between English and Spanish
import React from 'react';
import { Pressable, Text, StyleSheet, ViewStyle } from 'react-native';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from '../i18n';
import { colors } from '../theme/colors';

type Props = { variant?: 'default' | 'compact'; style?: ViewStyle };

export const LanguageToggle: React.FC<Props> = ({ variant = 'default', style }) => {
  const { i18n, t } = useTranslation();
  const isEnglish = i18n.language.startsWith('en');

  // Switch language when button is pressed
  const handlePress = async () => {
    await changeLanguage(isEnglish ? 'es' : 'en');
  };

  const isCompact = variant === 'compact';

  return (
    <Pressable onPress={handlePress} style={({ pressed }) => [styles.button, isCompact && styles.compact, style, pressed && { opacity: 0.85 }]}> 
      <Text style={[styles.text, isCompact && styles.compactText]}>{t('language.switch')}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.accent,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
  },
  compact: { paddingHorizontal: 12, paddingVertical: 8, borderRadius: 10 },
  text: {
    color: '#0b0b0b',
    fontWeight: '700',
    fontSize: 16,
  },
  compactText: { fontSize: 14 },
});


