---
sidebar_position: 9
title: In App Notifications
description: In App Notifications.

---

## MNToaster Component

### Import

```tsx
import {MNToaster} from '@/components/ui/MNToaster';
```

---

### Props

| Prop             | Type                             | Required | Default     | Description                                                  |
|------------------|----------------------------------|----------|-------------|--------------------------------------------------------------|
| `type`           | `'success' \| 'error' \| 'info'` | ❌        | `'success'` | Type of toast notification                                   |
| `head`           | `string`                         | ✅        | `''`        | Title or header text of the toast                            |
| `body`           | `string`                         | ❌        | `''`        | Optional body or message below the header                    |
| `onPress`        | `() => void`                     | ❌        | `undefined` | Callback when toast is pressed                               |
| `position`       | `'top' \| 'bottom'`              | ❌        | `'top'`     | Position of the toast on screen                              |
| `visibilityTime` | `number`                         | ❌        | `4000`      | Duration in milliseconds the toast stays visible             |
| `topOffset`      | `number`                         | ❌        | `60`        | Distance from the top edge when positioned at the top        |
| `bottomOffset`   | `number`                         | ❌        | `40`        | Distance from the bottom edge when positioned at the bottom  |
| `keyboardOffset` | `number`                         | ❌        | `30`        | Offset to avoid keyboard overlap                             |
| `autoHide`       | `boolean`                        | ❌        | `true`      | Whether the toast hides automatically after `visibilityTime` |
| `onShow`         | `() => void`                     | ❌        | `undefined` | Callback when toast appears                                  |
| `onHide`         | `() => void`                     | ❌        | `undefined` | Callback when toast disappears                               |

---

### Basic Usage

```tsx
MNToaster({
    type: 'success',
    head: 'Success!',
    body: 'Your operation completed successfully.',
    position: 'top',
    visibilityTime: 3000,
    autoHide: true,
    topOffset: 70,
    onShow: () => console.log('Toast shown'),
    onHide: () => console.log('Toast hidden'),
    onPress: () => console.log('Toast pressed'),
});
```

---

> **NOTE:**
> All example can be founded in `push_notifications.tsx`