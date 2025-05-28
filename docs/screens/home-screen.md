---
sidebar_position: 5
title: Home Screens
description: We've Three different type of Home Screens.

---

The **Home Screen** serves as the main dashboard for the user. It displays daily activity progress, a feed of recent
activities, and allows switching between children profiles using an interactive bottom sheet.

## HOME Screen (v1) (Daily Activity Overview)

To provide a centralized, engaging interface where users (typically parents or guardians) can:

- View a child’s progress for selected days.
- Scroll through a week's schedule.
- Switch between multiple children profiles.
- See related media or activity feeds.

### Key Components

| Component             | Description                                                                 |
|-----------------------|-----------------------------------------------------------------------------|
| **TopBar**            | Displays a banner image, localized title & subtitle, and clickable avatars. |
| **WeekDateScroller**  | Allows scrolling through week days to pick a date and view progress.        |
| **ProgressDetails**   | Shows progress bars or summary data of activities on the selected date.     |
| **MyFeeds**           | Displays media or activity content (e.g., images, posts).                   |
| **ChildListingSheet** | A bottom sheet modal to switch between children.                            |
| **ScrollView**        | Custom scrollable container with themed background.                         |

---

### User Flow

1. **Initial Load**
    - Loads current date and displays random mock progress using `getRandomBetween()`.
    - Banner image is displayed from local asset via `expo-asset`.
2. **Changing Date**
    - User selects a different day using `WeekDateScroller`.
    - `onWeekDateClick()` updates `progressDate` and simulates progress with a random number.
3. **Viewing Progress**
    - `ProgressDetails` component receives the selected date and progress value.
    - Displays visual summary styled using `StyleSheet`.
4. **Switching Children**
    - Clicking on child avatars in `TopBar` opens `ChildListingSheet`.
    - Sheet opens with smooth animation via `react-native-reanimated`.
5. **Viewing Feeds**
    - `MyFeeds` renders activity/media content tied to the selected date or child.

---

### Folder Structure (Related Only)

`ScrollView.tsx`        Themed scrollable container

`ChildListingSheet.tsx` Bottom sheet to select children

`MyFeeds.tsx`           Activity/media feed

`TopBar.tsx`            Header with avatar, image, and titles

`ProgressDetails.tsx`   Progress bar/details component

`WeekDateScroller.tsx`  Week view selector

`API_RESPONSES.ts`      Mock data (`PROGRESS_SUMMARIES`)

`helper.ts`             `getRandomBetween()`, date utilities

`HomeScreen.tsx`        Main screen logic

--- 

## HOME Screen (v2)  (Milestone Tracker Dashboard)

The **Home Screen v2** presents a progress-based overview with enhanced visual elements such as badges, charts, and
summaries. It’s designed to help users track a child's activity level, category engagement, and historical trends in a
clear, motivating layout.

### Purpose

To provide users with a visually enriched summary of a child’s daily and historical performance, including:

- Activity completion tracking
- Game category breakdown
- Historical performance trends
- Easy avatar switching

---

### Key Components

| Component             | Description                                                               |
|-----------------------|---------------------------------------------------------------------------|
| **TopBarV2**          | Displays a label ("Today") and avatars; an enhanced top bar variant.      |
| **ActivityBadge**     | Shows the total and played games as a gamified badge.                     |
| **PlayedGamesCard**   | Lists or showcases the games played for the day.                          |
| **CategoriesSummary** | A chart or visual summary showing engagement across different categories. |
| **HistoricalSummary** | Graph showing historical activity or performance over time.               |
| **ScrollView**        | Custom scrollable container with themed styling.                          |
| **ThemedText**        | Typography wrapper for consistent text theming and localization.          |

---

### User Flow

1. **Top Bar Display**
    - `TopBarV2` loads with label "Today" and clickable child avatars.
    - Avatar click action is passed but currently does nothing.

2. **Activity Overview**
    - ThemedText renders the child-specific message: “Activities for Maya.”
    - ActivityBadge shows a total of 3 games, with 2 already played.

3. **Played Games Display**
    - `PlayedGamesCard` shows the list of games played today.
    - Encourages the user to complete the third game.

4. **Progress Summary Charts**
    - `CategoriesSummary` visualizes which game categories the child engaged with.
    - `HistoricalSummary` shows a chart of performance across previous days.

---

### Folder Structure (Related Only)

`ScrollView.tsx`            Themed scrollable container

`ActivityBadge.tsx`         Badge showing total and played games

`PlayedGamesCard.tsx`       Card-style component listing games played

`CategoriesSummary.tsx`     Chart showing activity category breakdown

`HistoricalSummary.tsx`     Graph for past activity performance

`TopBarV2.tsx`              Enhanced top bar with label and avatar actions

`ThemedText.tsx`            Themed and localized text component

`API_RESPONSES.ts`          Mock data for `categories` and `HistoricalSummaryGraph`

`home.ts`                   Shared styles for the Home screens

--- 

## Home Screen (v3)

The **Home Screen v3** enhances the user experience with a motivational banner, dynamic progress tracking, and an
interactive child selector. This version focuses on a visually engaging layout, making use of shared values and animated
UI behavior to drive interaction.

---

### Purpose

To display a child's current progress for the day, offer insights through charts, and allow seamless switching between
children via an interactive bottom sheet. It improves the visual appeal using a background image banner and animated
transitions.

--- 

### Key Components

| Component             | Description                                                                                                 |
|-----------------------|-------------------------------------------------------------------------------------------------------------|
| **TopBarV3**          | Displays title, subtitle, and banner image. Includes avatar click action to open bottom sheet.              |
| **ProgressCard**      | Shows progress bar for today's activities, includes a pressable card to navigate to "view_progress" screen. |
| **CategoriesSummary** | Displays pie or bar chart for activity category engagement.                                                 |
| **HistoricalSummary** | Chart showing performance across previous days.                                                             |
| **ScrollView**        | Themed scroll view with optional banner image and colored background.                                       |
| **ChildListingSheet** | Bottom sheet to allow switching between children.                                                           |
| **useSharedValue**    | Reanimated hook to animate sheet height on open.                                                            |
| **Asset.fromModule**  | Used to resolve banner image from static assets.                                                            |

---

### User Flow

1. **Header Display**
    - `TopBarV3` loads with a custom background image and localized title/subtitle.
    - Avatar click triggers `openBottomSheet()` which uses `withTiming()` to animate the sheet height.

2. **Scrollable Content**
    - `ProgressCard` shows current completion percentage (`60%`), date, and a navigation button.
    - `CategoriesSummary` and `HistoricalSummary` visualize child activity.

3. **Child Selector**
    - `ChildListingSheet` opens as a bottom sheet when triggered.
    - Enables the user to switch between children.

---

### Folder Structure (Related Only)

`TopBarV3.tsx`             Top bar with background image and avatar click handling

`ProgressCard.tsx`         Displays daily progress with percentage and pressable navigation

`CategoriesSummary.tsx`    Visual breakdown of game categories

`HistoricalSummary.tsx`    Past activity graph

`ScrollView.tsx`           Themed scrollable view with optional banner

`ChildListingSheet.tsx`    Bottom sheet to select children

`API_RESPONSES.ts`         Sample data for categories and history graph

`home.ts`                  Style definitions for the Home screens

`helper.ts`                Utility for date formatting (`todayDate`)