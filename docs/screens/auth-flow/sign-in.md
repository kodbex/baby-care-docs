---
sidebar_position: 1
title: Sign In
description: This screen provides users with email/password sign-in, biometric authentication, and social login options.
---

## Purpose

The Sign In screen allows users to authenticate using their email and password, biometric authentication (fingerprint or
Face ID), or social login (Facebook, Instagram, Google). It also provides navigation to password recovery and
registration screens.

## Overview

* Uses `Formik` for form state management and validation of email and password inputs.
* Supports toggling password visibility.
* Provides biometric authentication using Expo's LocalAuthentication API.
* Displays social login icons for quick authentication alternatives.
* Navigation handlers direct users to "Forgot Password" and "Register" screens.
* Shows loading indicators during authentication attempts.

## Key Components

- `Formik Form` Manages input values for email and password with validation based on SIGN_IN_PASSWORD_VALIDATION
  schema.

- `MNTextInputAnimated`
  Custom animated text input components for Email and Password fields, including an icon for toggling password
  visibility.

- `Biometric Authentication`
  Uses Expo LocalAuthentication to detect and perform fingerprint/Face ID authentication with user feedback.

- `Social Login Buttons` Touchable icons for Facebook, Instagram, and Google login, each triggering the sign-in
  submission flow.

**Navigation Links**

- `Forgot Password` navigates to password recovery.
- `Sign Up` navigates to user registration.

**Loading State**

Disables buttons and reduces opacity during sign-in processing to prevent duplicate submissions.

## User Flow

1. User inputs email and password.
2. User can toggle password visibility.
3. User submits the form to sign in.
4. The app shows a loading state while processing.
5. On success, user data is stored and user is navigated to the home screen.
6. Alternatively, user can authenticate biometrically or use social login.
7. Users can access password recovery or registration if needed.

## Localization

All user-facing text is translatable using the react-i18next library.