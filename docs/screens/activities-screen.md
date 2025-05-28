---
sidebar_position: 7
title: Activity Screen
description: The **Activities** screen presents a curated set of child activities focused on development areas such as "Gross Motor" skills. It features a banner header, horizontally scrollable activity category selectors, and a detailed scrollable list of activities filtered by the selected category. Users can also switch between children and apply filters via bottom sheets.
---

## Purpose

To provide parents with an engaging interface to explore and track various developmental activities for their child. The
screen encourages daily play with targeted activities and supports easy navigation through child profiles and activity
filters.

## Key Components

- **TopBar**  
  Displays the screen title, subtitle, and a background banner image. Includes clickable child avatars to open the child
  selection bottom sheet.

- **HorizontalCardsScroller**  
  Horizontally scrollable selector for different activity categories (e.g., Gross Motor). Updates the displayed
  activities on selection.

- **ScrollView**  
  Vertical scroll container that holds the main activity feed content with optional banner background.

- **ChildActivities**  
  Component rendering a list of activities filtered by the selected category, showing relevant content and media.

- **ChildListingSheet**  
  Bottom sheet allowing users to switch between child profiles.

- **BottomSheet (Filter)**  
  Bottom sheet for future filtering options (currently empty).

- **Animation with Reanimated**  
  Controls smooth opening animations for bottom sheets.

---

## User Flow

1. Screen loads with default activity category and today's date.
2. User sees a motivational banner with child's name and a subtitle encouraging daily activities.
3. User scrolls horizontally through activity categories using `HorizontalCardsScroller`.
4. Selecting a category updates the list of activities displayed via `ChildActivities`.
5. User can tap the child avatar in the top bar to open the child listing bottom sheet and switch profiles.
6. User can tap the filter button (currently opening an empty bottom sheet) for potential filtering.
7. Activities related to the selected category display inside a scrollable view.
8. All interactions animate smoothly for enhanced user experience.

---