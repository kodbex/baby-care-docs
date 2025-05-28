---
sidebar_position: 3
title: Pre-Question Screen
description: This screen follows the onboarding slides and helps categorize the user by asking a simple question about their child’s age/status.
---

### Purpose

This module handles onboarding questions after the initial onboarding process, helping to categorize users based on
their child’s birth status or age for a tailored experience.

## Overview

- The `PreQuestion` screen presents users with three options about their child’s status.
- Each option includes an image, title, and subtitle and is clickable.
- Upon selection, users are routed to the `AddPreMatureBaby` screen for detailed child information input.
- The navigation uses parameters to identify the user’s selection.

## Key Components

- **PreQuestion Screen** Displays the list of questions with avatars and navigates to the child addition form based on
  user selection.
- **AddPreMatureBaby Screen** Presents a form for adding child details. Submission or skipping redirects to the sign-in
  screen.
- **PRE_QUESTION_LIST** An array defining question options, including images, titles, subtitles, and action identifiers.

## User Flow

1. User completes initial onboarding.
2. Redirected to PreQuestion screen with child-related questions.
3. User selects one option (e.g., `"My baby is on the way"`).
4. App navigates to **AddPreMatureBaby** screen with the selection passed as a parameter.
5. User fills child details or skips.
6. User is redirected to the sign-in screen.