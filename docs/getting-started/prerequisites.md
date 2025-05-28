---
sidebar_position: 2
title: Prerequisites
description: Before you begin, ensure you have the installed following libraries.
---

# Prerequisites

Before you begin, ensure you have the following installed:

* Node.js (v16 or higher)
* npm or Yarn
* React Native CLI
* Xcode (for iOS development)
* Android Studio (for Android development)

# Installation

Follow these steps to set up the Baby Development UI Kit on your local machine:

### 1. Obtain the Project

Unzip the project to your local machine and navigate into the folder:

```bash
cd baby-development-ui-kit
```

### 2. Install Dependencies

Install the required dependencies using npm or yarn:

```bash
npm ci
# or if you prefer yarn:
# yarn install
```

### 3. Ensure React Native Environment is Set Up

Make sure your React Native development environment is configured. Refer to the official React Native Environment Setup
Guide for detailed instructions.

### 4. Run the App

* For iOS:

```bash
npx react-native run-ios
```

* For Android:

```bash
npx react-native run-android
```

### 5. Start the App with Expo (Recommended)

Since the project uses Expo, start the development server with:

```bash
npx expo start
```

This opens the Expo DevTools in your browser, from where you can run on simulators or real devices.

---

> **Note:** The global Expo CLI install is deprecated. Always use `npx expo` to run Expo commands.
