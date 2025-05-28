---
sidebar_position: 8
title: Profile Screen
description: The **Profile** screen allows users to view and update their profile information through a clean, focused interface. It features a compact top bar and a scrollable content area housing the profile management form within a styled card.

---

# Purpose

To provide users a dedicated space to manage their profile details, with an intuitive form layout and an easy-to-use
save button. The screen emphasizes simplicity and accessibility.

---

## Key Components

- **ShortTopBarV3**  
  A minimalistic top bar showing the screen title "Profile" without extra distractions.

- **ScrollView**  
  Scrollable container that includes a background banner image for visual appeal.

- **MNCard**  
  A styled card component that groups the profile management form, providing padding and margin for separation.

- **ProfileManagement**  
  The form component responsible for rendering profile fields and handling user input. It exposes an `onSave` callback
  that logs the saved data for debugging.

---

## User Flow

1. User opens the Profile screen and sees the title bar with "Profile".
2. User scrolls through the form inside the card container.
3. User updates profile details via input fields rendered by `ProfileManagement`.
4. On pressing the "Update Profile" button, the form data is captured and logged using the `debug` helper.
5. User can continue editing or leave the screen after saving.

---