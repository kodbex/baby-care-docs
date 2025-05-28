---
sidebar_position: 2
title: Sign Up
description: Enable new users to create an account using their email and password or via social media logins.
---

## Purpose

Enable new users to create an account using their email and password or via social media logins.

## Overview

- The `Sign Up` screen collects user details such as `full name`, `email`, `password`, and `confirm password`.
- It uses `Formik` for form handling and Yup for validation.
- Users can also register via social logins like `Google`, `Facebook`, and `Instagram`.

## Key Components

- `TopBannerContainer`: Displays top banner image.
- `ScrollView`: Scrollable content wrapper.
- `Formik`: Manages form state and validation.
- `Input Fields`:
    - full_name
    - email
    - password (with visibility toggle)
    - confirm_password (with visibility toggle)

- `ValidationError`: Displays validation errors.
- `LanguageChanger`: Allows dynamic language switching.
- `MNSingleButton`: Primary submission button.
- `Social login buttons`: Triggers sign-up via social media.

## User Flow

1. User enters details and submits the form.
2. Spinner is shown while data is processed.
3. `Upon success`, user is logged in and redirected to the home screen.
4. Alternatively, user can select a social login.
5. Navigation option provided to Sign In screen.

**Navigation Links**

- `Sign In` navigates to user Sign.

**Loading State**

Disables buttons and reduces opacity during sign-in processing to prevent duplicate submissions.
