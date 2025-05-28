---
sidebar_position: 3
title: Forget Password
description: Allow users to initiate a password reset by providing their email address.
---

## Purpose

Allow users to initiate a password reset by providing their email address.

## Overview

This screen captures the user's email and sends a password reset request. It provides user feedback via a toaster
notification.

## Key Components

- `TopBannerContainer` Displays banner image.
- `Formik` Manages the email input field.
- `ValidationError` Displays validation errors.
- `LanguageChanger` Enables language switch.
- `MNSingleButton` Triggers reset email sending.
- `Toaster` Displays confirmation message.

## User Flow

1. User enters their email and submits.
2. Spinner shows during processing.
3. On success, a toaster confirms email is sent.
4. User is navigated to Reset Password screen.
5. Option provided to navigate back to Sign In.

**Navigation Links**

- `Sign In` navigates to user Sign.

**Loading State**

Disables buttons and reduces opacity during sign-in processing to prevent duplicate submissions.
