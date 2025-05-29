---
sidebar_position: 12
title: MNSpinner
description: MNSpinner providing default styling and customization for consistent usage throughout the app.
---

## Skeleton

### Import

```tsx
import MNSpinner from '@/components/ui/spinner/MNSpinner';
```

---

### Props

| Prop    | Type                           | Default         | Description                                                             |
|---------|--------------------------------|-----------------|-------------------------------------------------------------------------|
| `color` | `string`                       | `PRIMARY_COLOR` | Sets the color of the spinner. Uses the app's primary color by default. |
| `size`  | `'small'` \| `'large'`         | `'small'`       | Defines the size of the spinner.                                        |
| `style` | `StyleProps` (from Reanimated) | `-`     | Additional styling for the spinner container.                           |

---

### Basic Usage

```tsx
<MNSpinner/>
```

```tsx
<MNSpinner size="large" color="#FF5733" style={{marginVertical: 10}}/>
```

---

> **NOTE:**
> All example can be founded in `spinners.tsx`