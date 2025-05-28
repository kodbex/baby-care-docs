---
sidebar_position: 3
title: Product Structure
description: Overview of the folder and navigation structure of the Baby Development UI Kit project.
---

# Product Structure

This section provides an overview of the **folder structure** and **navigation design** of the Baby Development UI Kit
project to help you understand how the app is organized.

---

## Folder Structure

```plaintext
    app
    ├── (auth)
    ├── (sidemenu)
        ├──── (tabs)
    assets
    components
    config
    constants
    helpers
    hooks
    stores
    app.json
```    

---

### 1. `(app)` Folder

The `app` folder contains the main application logic and is divided into two key parts:

- **`auth` folder**  
  Contains authentication-related screens and flows such as onboarding, login, registration, and password reset.
  > **Note:** The `auth` section does **not** include any navigation bars (neither bottom tab nor sidebar navigation)
  since these screens are designed to be standalone.

- **`sidemenu` folder**  
  Contains the main app navigation structure with two layers:

    - **Sidebar Menu Navigation:**  
      Provides a side drawer navigation that lists various **UI components** and other app sections.

    - **Bottom Tab Navigation (Tabs):**  
      Nested inside the sidebar menu, the tabs provide quick access to core app screens, including:
        - **Home**
        - **Activities**
        - **Activities Details**
        - **Feeds**
        - **Feeds Details**
        - **Profile**

---

### 2. `assets` Folder

This folder stores **static assets** such as:

- Images (icons, illustrations, backgrounds)
- Fonts (if applicable)
- Any local media resources

It helps maintain clean imports and centralizes all UI visuals in one place.

---

### 3. `components` Folder

This folder contains a collection of reusable UI components used throughout the app, such as forms, skeleton, charts,
avatars, progress bars, and more. These modular components help maintain a consistent design system and accelerate
development.

---

### 4. `config` Folder

The `config` folder is used for **environment-specific configurations** or settings shared across the app. Examples:

- Base URLs
- API endpoints
- App environment flags (e.g., dev/staging/prod)

> You can extend this folder to support `.env` handling, feature flags, or localized config profiles.

---

### 5. `constants` Folder

A centralized folder for defining all reusable constant values, including:

- **App-wide constants** (e.g., string literals, app titles)
- **Color palettes** (primary, secondary, grayscale, etc.)
- **Font sizes, spacing values, animation durations**
- **API response prototypes or status codes**
- **App enums or roles**

> Keeping constants here helps improve maintainability, reduces duplication, and ensures design consistency.

---

### 6. `helpers` Folder

Contains **utility or helper functions** used across the app. These are pure functions with no dependencies on React
state, examples:

- Date/time formatting
- Validation logic
- Local storage access
- Deep object cloning or comparison functions

> These improve code reusability and help keep components clean.

---

### 7. `hooks` Folder

A collection of **custom React Hooks** used throughout the app. Examples include:

- `useTheme()` – to switch between light and dark mode
- `useAuth()` – to handle user login state
- `useMediaQuery()` – for responsive behavior
- `useAsyncStorage()` – custom wrapper for local storage

> Hooks here encapsulate reusable logic that interacts with state, context, or platform APIs.

---

### 8. `stores` Folder

This folder contains **Redux stores and slices** that manage global state for the app, such as:

- Authentication state
- User profile and settings
- UI theme preferences
- Activity or feed data

> Organized state management makes it easy to debug, test, and extend the app.

---

## 9. `app.json` Configuration File

The `app.json` file is a **central configuration file** for Expo apps. It defines:

- App name, slug, version, and entry point
- iOS & Android permissions
- Required plugins and native modules
- Splash screens and app icons
- Deep linking or notification settings

```json
{
  "expo": {
    "name": "Baby Development UI Kit",
    "slug": "baby-development-ui-kit",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "ios": {
      "bundleIdentifier": "com.example.babydev",
      "supportsTablet": true,
      "infoPlist": {
        "NSCameraUsageDescription": "This app needs camera access for media uploads"
      }
    },
    "android": {
      "package": "com.example.babydev",
      "permissions": [
        "CAMERA",
        "READ_EXTERNAL_STORAGE"
      ]
    }
  }
}
```

## Navigation Flow Summary

- Users start in the **auth** flow when not logged in, with simple standalone screens.
- After authentication, users enter the **main app** interface.
- The main app features a **sidebar menu** combined with **bottom tab navigation**:
    - The sidebar menu allows quick access to UI components and other global screens.
    - The bottom tabs enable switching between core functional areas (Home, Activities, Feeds, Profile).

---

This modular structure makes the Baby Development UI Kit highly scalable and easy to customize based on your app’s
needs.

> For more details on navigation setup, check the documentation in the `app/sidemenu` and `app/sidemenu/tabs` folders.