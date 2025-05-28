---
sidebar_position: 4
title: Reset Password
description: Allow users to set a new password after initiating a password reset.
---

## Purpose

Allow users to set a new password after initiating a password reset.

## Overview

- This screen collects a new password and confirmation, validates both, and updates the user password.

## Key Components

* `TopBannerContainer` Displays top banner.
* `Formik` Manages password fields.
* `Input Fields`:
    * password
    * confirm_password
* `ValidationError` Displays validation errors.
* `LanguageChanger` Switches app language.
* `MNSingleButton` Triggers password reset.
* `Resend Email Button` Displays toaster for resend confirmation.

## User Flow

1. User enters and confirms the new password.
2. Spinner shown during update.
3. Success toaster displayed.
4. User is redirected to Sign In screen.
5. Optionally, user can resend the reset email.

**Navigation Links**

- `Sign In` navigates to user Sign.

**Loading State**

Disables buttons and reduces opacity during sign-in processing to prevent duplicate submissions.
