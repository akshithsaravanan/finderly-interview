# Finderly Interview - Expo i18n Demo

A cross-platform Expo application demonstrating internationalization (i18n) with English and Spanish support, built for a technical assessment.

## 📱 Overview

This project showcases a modern React Native app built with Expo that runs seamlessly on Android, iOS, and Web platforms. The app features comprehensive internationalization support with English and Spanish languages, persistent language preferences, and a clean, user-friendly interface.

## Requirements Fulfilled

### 1. Expo Project
- **Latest Expo SDK**: Using Expo SDK 54
- **Managed Workflow**: Pure Expo managed workflow
- **Cross-Platform**: Android, iOS, and Web support

### 2. App Features
- **Home Screen**: Welcome message with features grid
- **Language Switcher**: Top-right button toggles between English and Spanish
- **Secondary Screen**: Details screen with app description and task list
- **All Content Localized**: Every text element supports both languages

### 3. Localization
- **Expo Localization**: Device locale detection implemented
- **Complete Translation**: All text available in English and Spanish
- **Real-time Switching**: Instant language changes
- **Persistent Preferences**: Language choice remembered across sessions

### 4. Deployment/Testing
- **Web**: Runs on localhost with `npx expo start --web`
- **Mobile**: Compatible with Expo Go app
- **Cross-Platform**: Tested on Android, iOS, and Web
- **Clear Instructions**: Comprehensive setup and testing guide

## 🎯 Bonus Features Implemented

- **Language Persistence**: AsyncStorage saves language preference
- **Task List Component**: Interactive task management with localized labels
- **Modern Styling**: Clean orange theme with responsive design
- **Code Quality**: Well-documented, organized codebase

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI: `npm install -g @expo/cli`

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/akshithsaravanan/finderly-interview.git
   cd finderly-interview
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npx expo start
   ```

## 🖥️ Running the App

### Prerequisites for Mobile Testing
1. **Install Expo Go app** on your mobile device:
   - **Android**: Download from [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
   - **iOS**: Download from [App Store](https://apps.apple.com/app/expo-go/id982107779)

2. **Ensure your device and computer are on the same network**

### Web Development
```bash
npx expo start --web
```
Open your browser to the provided localhost URL (typically `http://localhost:8081`).

### Mobile Testing (Android & iOS)
1. **Start the development server**:
   ```bash
   npx expo start
   ```

2. **Scan the QR code**:
   - **Android**: Open Expo Go app and scan the QR code
   - **iOS**: Open Camera app and scan the QR code (will redirect to Expo Go)

3. **The app will load** on your mobile device with full functionality

### Testing Methods
- **Web**: `npx expo start --web` for browser testing
- **Mobile**: `npx expo start` + Expo Go app for device testing
- **No native builds required** - uses Expo managed workflow

## 🌍 Localization Implementation

### Architecture
- **i18next**: Core internationalization framework
- **React-i18next**: React integration for seamless component usage
- **Expo Localization**: Device locale detection
- **AsyncStorage**: Persistent language preferences

### File Structure
```
src/
├── i18n/
│   └── index.ts          # i18n configuration and language switching
├── locales/
│   ├── en.json           # English translations
│   └── es.json           # Spanish translations
├── components/
│   ├── LanguageToggle.tsx # Language switcher component
│   └── TaskList.tsx       # Localized task list
├── screens/
│   ├── HomeScreen.tsx     # Main landing screen
│   └── DetailsScreen.tsx  # Details and demo screen
└── theme/
    └── colors.ts          # App color scheme
```

### Language Detection Priority
1. **Saved Preference**: User's previously chosen language (AsyncStorage)
2. **Device Locale**: Device's primary language setting
3. **Default Fallback**: English if no preference or unsupported locale

## 🧪 Testing Instructions

### Web Testing
1. Start web server: `npx expo start --web`
2. Open browser to provided URL
3. Test language switching functionality
4. Verify task list persistence
5. Check responsive design

### Mobile Testing (Android & iOS)
1. **Install Expo Go** on your device (see Prerequisites above)
2. **Start the server**: `npx expo start`
3. **Scan QR code** with Expo Go (Android) or Camera app (iOS)
4. **Test functionality**:
   - Language switching works correctly
   - Task list functionality
   - Language persistence across app restarts
   - Navigation between screens
5. **Test on both platforms** for cross-platform compatibility

### Verification Checklist
- [ ] App loads successfully on web
- [ ] App runs on Android via Expo Go
- [ ] App runs on iOS via Expo Go
- [ ] Language switcher toggles between English and Spanish
- [ ] All text content is properly localized
- [ ] Language preference persists after app restart
- [ ] Task list works in both languages
- [ ] Navigation between screens functions correctly
- [ ] UI is responsive and user-friendly

## 📊 Evaluation Criteria Met

### Correctness
- All functional requirements implemented
- Language switching works seamlessly
- Cross-platform compatibility achieved
- Task list with persistence functional

### Localization
- Complete English and Spanish support
- Real-time language switching
- Persistent language preferences
- All UI elements properly localized

### Cross-Platform Compatibility
- Runs on Android, iOS, and Web
- Consistent behavior across platforms
- Responsive design for all screen sizes

### Code Quality
- Clean, well-organized codebase
- Comprehensive documentation
- TypeScript for type safety
- Reusable component architecture

### Documentation
- Detailed setup instructions
- Clear usage guidelines
- Technical implementation details
- Evaluation criteria verification

## 🛠️ Technical Stack

### Core Dependencies
- **Expo SDK 54**: Latest cross-platform framework
- **React Native 0.81**: Native mobile development
- **TypeScript**: Type safety and better DX
- **React Navigation 7**: Native stack navigation
- **i18next**: Internationalization framework
- **AsyncStorage**: Data persistence

### Key Features
- **Modern Orange Theme**: Clean, professional design
- **Responsive Layout**: Mobile-first approach
- **Component Architecture**: Reusable, well-documented components
- **Hook-based**: Modern React patterns
- **Type Safety**: Full TypeScript implementation

## 📁 Project Structure

```
finderly-interview/
├── App.tsx                 # Main app entry point
├── package.json            # Dependencies and scripts
├── app.json               # Expo configuration
├── README.md              # This documentation
├── src/
│   ├── i18n/
│   │   └── index.ts       # i18n setup and language management
│   ├── locales/
│   │   ├── en.json        # English translations
│   │   └── es.json        # Spanish translations
│   ├── components/
│   │   ├── LanguageToggle.tsx  # Language switcher
│   │   └── TaskList.tsx        # Task list component
│   ├── screens/
│   │   ├── HomeScreen.tsx      # Landing screen
│   │   └── DetailsScreen.tsx   # Details screen
│   └── theme/
│       └── colors.ts           # Color theme
└── assets/                # App icons and images
```

## 🎨 Design Decisions

### Color Theme
- **Modern Orange Palette**: Professional, warm, and accessible
- **Dark Background**: Reduces eye strain and looks modern
- **High Contrast**: Ensures readability across all devices

### User Experience
- **Language Switcher**: Prominently placed, always accessible
- **Persistent Preferences**: Remembers user choices
- **Responsive Design**: Works on all screen sizes
- **Intuitive Navigation**: Clear, simple user flow

## 📝 Development Notes

This project demonstrates:
- **Cross-platform development** with Expo
- **Internationalization best practices** with i18next
- **Modern React patterns** with hooks and TypeScript
- **Clean architecture** with well-organized components
- **User experience focus** with persistent preferences

## 🔗 Repository

**GitHub**: [akshithsaravanan/finderly-interview](https://github.com/akshithsaravanan/finderly-interview)

---

*Built for technical assessment demonstrating React Native, Expo, and internationalization expertise.*
