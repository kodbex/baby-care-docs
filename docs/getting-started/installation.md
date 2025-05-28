---
sidebar_position: 1
title: Installation
description: Step-by-step guide to set up the Baby Development UI Kit locally using React Native Expo.
---

# Installation

Follow these steps to set up the **Baby Development UI Kit** on your local machine and start development quickly.

### 1. Obtain the Project

- Purchase or download the project repository.
- Unzip the project folder and navigate into it:

```bash
cd baby-development-ui-kit
```

### 2. Install Dependencies

- Install all required dependencies using npm or yarn:

```bash
npm ci
```

### 3. Start the App

- To launch the app in development mode, run:

```bash
npx run start
```

- This will open the Expo DevTools in your browser, allowing you to:
    * Run the app on an iOS simulator or Android emulator
    * Scan the QR code to open the app on a physical device using the Expo Go app

### 4. Running on Native Simulators (Optional)

- If you want to run the app directly using React Native CLI commands, ensure you have native build tools installed:

- iOS Simulator:

```bash
npx react-native run-ios
```

- Android Emulator:

```bash
npx react-native run-android
```