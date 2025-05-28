---
sidebar_position: 2
title: Alerts
description: A React Native screen that demonstrates different types of alert UIs such as simple alerts, alerts with actions, and styled text alerts—some with dismissable options. Designed with reusability and clarity in mind.
---

# MNAlertText Component

A simple alert text component that displays a message with different alert types and corresponding background and text
colors.

##  Import

```tsx
import MNAlertText from '@/components/MNAlertText';
```

---

## ⚙️ Props

| Prop      | Type                                               | Default      | Description                      |
|-----------|----------------------------------------------------|--------------|----------------------------------|
| `type`    | `'primary' \| 'secondary' \| 'error' \| 'warning'` | `'primary'`  | Type of alert determining colors |
| `message` | `string`                                           | **required** | The alert message to display     |

---

## UI Structure

1. **Header Toggle Section**
    - Tapping the header shows/hides a list of alert types.
    - Uses an icon to indicate expansion state.

2. **Simple Alert Section**
    - Tapping "Press me!" triggers `MNSimpleAlert`.

3. **Alert With Action Buttons**
    - Tapping "Press me!" triggers `MNAlertWithActions`.
    - Includes `onConfirm` and `onCancel` callbacks that call `MNSimpleAlert`.

4. **Static Text Alerts**
    - Show different alert types: primary, secondary, error, warning.
    - Non-interactive and styled by alert type.

5. **Dismissable Text Alerts**
    - Same types as above but can be closed by user interaction.

## Usage

### Basic Primary Alert (default)

```tsx
<MNAlertText message="This is a primary alert!"/>
```

### Secondary Alert

```tsx
<MNAlertText type="secondary" message="This is a secondary alert!"/>
```

### Error Alert

```tsx
<MNAlertText type="error" message="An error occurred."/>
```

### Warning Alert

```tsx
<MNAlertText type="warning" message="Please be cautious."/>
```

---

## MNAlertTextCloseAble Component

An alert text component with a close button that allows the alert to be dismissed with animation.

---

### Import

```tsx
import MNAlertTextCloseAble from '@/components/MNAlertTextCloseAble';
```

---

### ⚙️ Props

| Prop      | Type                                               | Default      | Description                      |
|-----------|----------------------------------------------------|--------------|----------------------------------|
| `type`    | `'primary' \| 'secondary' \| 'error' \| 'warning'` | `'primary'`  | Type of alert determining colors |
| `message` | `string`                                           | **required** | The alert message to display     |

---

### Usage

### Basic Primary Alert (default)

```tsx
<MNAlertTextCloseAble message="This is a closable primary alert!"/>
```

### Secondary Alert

```tsx
<MNAlertTextCloseAble type="secondary" message="This is a closable secondary alert!"/>
```

### Error Alert

```tsx
<MNAlertTextCloseAble type="error" message="An error occurred."/>
```

### Warning Alert

```tsx
<MNAlertTextCloseAble type="warning" message="Please be cautious."/>
```

---

##  Example Usage

> **NOTE:**
> All example can be founded in `alerts.tsx`