// i18n/index.ts - Internationalization setup
// This file handles language switching and persistence
import * as Localization from 'expo-localization';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n, { i18n as I18nType } from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../locales/en.json';
import es from '../locales/es.json';

const STORAGE_KEY = 'app_language';

// Get saved language from device storage
export async function getStoredLanguage(): Promise<string | null> {
  try {
    const value = await AsyncStorage.getItem(STORAGE_KEY);
    return value;
  } catch {
    return null;
  }
}

// Save language choice to device storage
export async function setStoredLanguage(lang: string): Promise<void> {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // ignore storage errors
  }
}

// Get device's default language
function getDevicePrimaryLocale(): string {
  const locales = Localization.getLocales();
  if (locales && locales.length > 0) {
    return locales[0].languageTag;
  }
  return 'en';
}

// Initialize i18n with saved language or device default
export async function initializeI18n(): Promise<I18nType> {
  const stored = await getStoredLanguage();
  const device = getDevicePrimaryLocale();
  const initial = (stored || device).startsWith('es') ? 'es' : 'en';

  await i18n
    .use(initReactI18next)
    .init({
      compatibilityJSON: 'v3',
      resources: { en: { translation: en }, es: { translation: es } },
      lng: initial,
      fallbackLng: 'en',
      interpolation: { escapeValue: false },
      returnNull: false,
    });

  return i18n;
}

// Change language and save the choice
export async function changeLanguage(lang: 'en' | 'es'): Promise<void> {
  await i18n.changeLanguage(lang);
  await setStoredLanguage(lang);
}

export default i18n;


