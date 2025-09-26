// DetailsScreen.tsx - Details and demo screen
// This screen shows app highlights and a task list for testing
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { colors } from '../theme/colors';
import { TaskList } from '../components/TaskList';
import { LanguageToggle } from '../components/LanguageToggle';

export const DetailsScreen: React.FC = () => {
  const { t, i18n } = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.header}> 
        <LanguageToggle variant="compact" style={styles.topRight} />
      </View>
      <Text style={styles.desc}>{t('details.description')}</Text>
      <View style={{ height: 20 }} />
      <Text style={styles.sectionTitle}>{t('details.highlightsTitle')}</Text>
      <View style={styles.row}>
        <View style={styles.pill}><Text style={styles.pillText}>{t('details.highlights.i18n')}</Text></View>
        <View style={styles.pill}><Text style={styles.pillText}>{t('details.highlights.storage')}</Text></View>
        <View style={styles.pill}><Text style={styles.pillText}>{t('details.highlights.web')}</Text></View>
      </View>
      <View style={{ height: 20 }} />
      <TaskList key={i18n.language} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 24 },
  header: { paddingTop: 12, position: 'relative', marginBottom: 20 },
  topRight: { position: 'absolute', right: 16, top: 12 },
  desc: { color: colors.textSecondary, fontSize: 18, textAlign: 'center', lineHeight: 24, marginTop: 30, marginBottom: 24 },
  sectionTitle: { color: colors.textPrimary, fontSize: 20, fontWeight: '700', marginBottom: 16, textAlign: 'center' },
  row: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, justifyContent: 'center', marginBottom: 24 },
  pill: { backgroundColor: colors.card, borderRadius: 999, paddingVertical: 10, paddingHorizontal: 16 },
  pillText: { color: colors.textPrimary, fontWeight: '600', fontSize: 14 },
});


