// TaskList.tsx - Task list with persistence
// This component shows a list of tasks that are saved to device storage
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'tasks_v1';

export const TaskList: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [items, setItems] = useState<string[]>([]);
  const [text, setText] = useState('');

  // Load tasks from storage when component mounts
  useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(STORAGE_KEY);
        if (raw) setItems(JSON.parse(raw));
      } catch {}
    })();
  }, []);

  // Save tasks to storage whenever items change
  useEffect(() => {
    (async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(items));
      } catch {}
    })();
  }, [items]);

  // Add new task to the list
  const add = () => {
    const value = text.trim();
    if (!value) return;
    setItems(prev => [...prev, value]);
    setText('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('list.title')}</Text>
      {items.length === 0 ? (
        <Text style={styles.empty}>{t('list.empty')}</Text>
      ) : (
        items.map((it, idx) => (
          <View key={`${it}-${idx}`} style={styles.item}><Text style={styles.itemText}>• {it}</Text></View>
        ))
      )}
      <View style={styles.row}>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder={t('list.addPlaceholder')}
          placeholderTextColor={colors.textSecondary}
          style={styles.input}
        />
        <Pressable onPress={add} style={({ pressed }) => [styles.addBtn, pressed && { opacity: 0.85 }]}>
          <Text style={styles.addText}>{t('list.addButton')}</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { gap: 16, alignItems: 'center' },
  title: { color: colors.textPrimary, fontSize: 20, fontWeight: '700', textAlign: 'center', marginBottom: 8 },
  empty: { color: colors.textSecondary, textAlign: 'center', fontSize: 16 },
  item: {
    backgroundColor: colors.card,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    width: '100%',
  },
  itemText: { color: colors.textPrimary, fontSize: 16 },
  row: { flexDirection: 'row', gap: 12, alignItems: 'center', width: '100%' },
  input: {
    flex: 1,
    backgroundColor: colors.card,
    color: colors.textPrimary,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    fontSize: 16,
  },
  addBtn: { backgroundColor: colors.accent, borderRadius: 12, paddingHorizontal: 20, paddingVertical: 12 },
  addText: { color: '#fff', fontWeight: '700', fontSize: 16 },
});


