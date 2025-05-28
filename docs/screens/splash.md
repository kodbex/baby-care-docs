---
sidebar_position: 1
title: Splash
description: The app uses a custom animated splash screen to enhance the user experience during the initial loading phase.
---

## Purpose

This screen is implemented using Expo and the `lottie-react-native` animation library.

### Overview

- **Frameworks Used:**
    - [React Native](https://reactnative.dev/)
    - [Expo Splash Screen](https://docs.expo.dev/versions/latest/sdk/splash-screen/)
    - [Lottie React Native](https://github.com/lottie-react-native/lottie-react-native)

- **Purpose:**  
  This splash screen displays a short animation using [Lottie](https://airbnb.io/lottie/) before transitioning into the
  main app UI.

---

### Features

- Prevents automatic hiding of the native splash screen using `preventAutoHideAsync()`.
- Displays a Lottie animation named **`splash_animation.json`** located in the `assets` folder.
- Hides the splash screen programmatically after 1 second using `hideAsync()`.

---

### Notes

- The animation file is:  
  `assets/splash_animation.json`
- The animation runs **once** (`loop={false}`) and is set to **autoPlay**.
- This screen is fully centered and stretches the animation to cover the screen dimensions.

---

### Developer Tip

If you want to change the splash animation:

1. Replace the `splash_animation.json` file in the `assets` directory.
2. Ensure the new file path matches the one used in the `require()` statement.

---

### Folder Structure (related files only)

```plaintext
    assets
      ├── splash_animation.json
    app
      ├── screens
          └── AnimatedSplashScreen.tsx
```
