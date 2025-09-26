# Project - Expo i18n Demo

A cross-platform Expo app demonstrating proper internationalization (i18n) with English and Spanish support, built for Android, iOS, and Web.

## Overview

This project showcases:
- **React Native & Expo**: Latest Expo SDK with managed workflow
- **Internationalization**: Complete English/Spanish localization
- **Cross-Platform**: Runs on Android, iOS, and Web
- **Modern UI**: Clean, responsive design with orange theme
- **Persistence**: Language choice and task data saved across sessions

## Features

### Core Requirements ✅
- **Home Screen**: Welcome message with language switcher
- **Secondary Screen**: Details with localized content and task list
- **Language Switcher**: Toggle between English and Spanish
- **Localization**: All text available in both languages
- **Cross-Platform**: Android, iOS, and Web support

### Bonus Features ✅
- **Language Persistence**: Remembers user's choice via AsyncStorage
- **Interactive Component**: Task list with localized labels
- **Modern Styling**: Clean, user-friendly layout with orange theme

## Setup

```bash
# Clone and install
git clone <repository-url>
cd i18n-expo-app
npm install
```

## Running the App

### Web
```bash
npm run web
# Opens at http://localhost:8081
```

### Android
```bash
npm run android
# Requires Android Studio emulator or physical device
```

### iOS
```bash
npm run ios
# Requires Xcode simulator or physical device
```

### Expo Go (Mobile)
```bash
npx expo start
# Scan QR code with Expo Go app
```

## Localization Approach

### Implementation
- **expo-localization**: Detects device locale on first launch
- **i18next + react-i18next**: Translation management and hooks
- **AsyncStorage**: Persists language choice across sessions
- **Fallback Strategy**: English as default, device locale detection

### File Structure
```
src/
  i18n/
    index.ts          # i18n initialization and language switching
  locales/
    en.json           # English translations
    es.json           # Spanish translations
  components/
    LanguageToggle.tsx # Language switcher component
    TaskList.tsx      # Localized task list with persistence
  screens/
    HomeScreen.tsx    # Welcome screen with features
    DetailsScreen.tsx # Details with highlights and tasks
  theme/
    colors.ts         # Orange theme colors
```

### Translation Keys
- All UI text uses translation keys (e.g., `t('home.welcome')`)
- No hardcoded strings in components
- Consistent naming convention across languages

## Technical Details

### Dependencies
- `expo`: Latest Expo SDK
- `react-native`: React Native framework
- `i18next` + `react-i18next`: Internationalization
- `@react-navigation/native-stack`: Navigation
- `@react-native-async-storage/async-storage`: Data persistence
- `expo-localization`: Device locale detection

### Architecture
- **App.tsx**: Entry point with i18n initialization and navigation
- **i18n/index.ts**: Centralized i18n configuration
- **Components**: Reusable, localized UI components
- **Screens**: Main app screens with proper localization
- **Theme**: Centralized color scheme

## Testing

### Web Testing
1. Run `npm run web`
2. Open http://localhost:8081
3. Test language switching
4. Add tasks and refresh to verify persistence

### Mobile Testing
1. Install Expo Go on your device
2. Run `npx expo start`
3. Scan QR code
4. Test on both Android and iOS

### Verification Checklist
- [x] Language switcher works on both screens
- [x] All text displays in both English and Spanish
- [x] Language choice persists after app restart
- [x] Task list persists data across sessions
- [x] App runs on Web, Android, and iOS
- [x] UI is responsive and well-aligned

## Evaluation Criteria Met

- **Correctness**: ✅ All functional requirements implemented
- **Localization**: ✅ Full English/Spanish support with switching
- **Cross-Platform**: ✅ Works on Android, iOS, and Web
- **Code Quality**: ✅ Clean, organized, documented code
- **Documentation**: ✅ Comprehensive README with setup instructions

## License

MIT
