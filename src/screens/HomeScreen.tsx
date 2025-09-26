// HomeScreen.tsx - Main landing screen
// This screen shows welcome message, features, and navigation to details
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useTranslation } from 'react-i18next';
import { colors } from '../theme/colors';
import { LanguageToggle } from '../components/LanguageToggle';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.header}> 
        <LanguageToggle variant="compact" style={styles.topRight} />
      </View>
      <View style={styles.content}>
        <Text style={styles.welcome}>{t('home.welcome')}</Text>
        <Text style={styles.tagline}>{t('home.tagline')}</Text>
        <View style={{ height: 16 }} />
        <View style={{ height: 24 }} />
        <Pressable onPress={() => navigation.navigate('Details')} style={({ pressed }) => [styles.cta, pressed && { opacity: 0.9 }]}>
          <Text style={styles.ctaText}>{t('home.getStarted')}</Text>
        </Pressable>
        <View style={{ height: 24 }} />
        <Text style={styles.featuresTitle}>{t('home.featuresTitle')}</Text>
        <View style={styles.grid}>
          <View style={styles.card}><Text style={styles.cardText}>{t('home.features.fast')}</Text></View>
          <View style={styles.card}><Text style={styles.cardText}>{t('home.features.unified')}</Text></View>
          <View style={styles.card}><Text style={styles.cardText}>{t('home.features.theming')}</Text></View>
          <View style={styles.card}><Text style={styles.cardText}>{t('home.features.i18n')}</Text></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: { paddingTop: 60, paddingHorizontal: 24, position: 'relative', marginBottom: 20 },
  topRight: { position: 'absolute', right: 16, top: 60 },
  content: { flex: 1, padding: 24, gap: 16, alignItems: 'center' },
  welcome: { color: colors.textPrimary, fontSize: 36, fontWeight: '800', textAlign: 'center' },
  tagline: { color: colors.textSecondary, fontSize: 18, textAlign: 'center', lineHeight: 24 },
  cta: { backgroundColor: colors.accentDark, borderRadius: 16, paddingVertical: 16, paddingHorizontal: 32, alignItems: 'center', minWidth: 200 },
  ctaText: { color: '#fff', fontWeight: '800', fontSize: 18 },
  featuresTitle: { color: colors.textPrimary, fontSize: 20, fontWeight: '700', textAlign: 'center', marginTop: 8 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 16, justifyContent: 'center', marginTop: 8 },
  card: { backgroundColor: colors.card, borderRadius: 16, padding: 20, minWidth: '45%', alignItems: 'center' },
  cardText: { color: colors.textPrimary, fontWeight: '600', textAlign: 'center' },
});


