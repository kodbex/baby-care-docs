---
sidebar_position: 11
title: Skeleton Component
description: Skeleton component is a customizable shimmer loading placeholder for React Native. It provides a visually appealing animated gradient effect while content is loading.
---

## Skeleton Component

```tsx
import Skeleton from '@/components/ui/Skeleton';
```

---

### Props

| Prop                | Type                             | Default         | Description                                                     |
|---------------------|----------------------------------|-----------------|-----------------------------------------------------------------|
| `width`             | `string`                         | `'100%'`        | Width of the skeleton container.                                |
| `height`            | `number`                         | `15`            | Height of the skeleton block.                                   |
| `borderRadius`      | `number`                         | `4`             | Border radius for the skeleton shape.                           |
| `animationDuration` | `number`                         | `800` (fixed)   | Duration of the shimmer animation (currently fixed internally). |
| `direction`         | `'leftToRight' \| 'rightToLeft'` | `'leftToRight'` | Direction of shimmer animation.                                 |
| `containerStyle`    | `object`                         | `undefined`     | Additional style to apply to the outer container.               |

---

## Basic Usage

```tsx
<Skeleton height={20} width="80%" borderRadius={8} direction="rightToLeft"/>
```

---

> **NOTE:**
> All example can be founded in `skeleton.tsx`