---
sidebar_position: 10
title: Progress Bars
description: ProgressBars is a customizable component that displays a circular progress indicator.

---

# Progress Bars

## Purpose

`ProgressCircle` is a customizable component that displays a circular progress indicator. with an optional percentage
text
inside

### Import

```tsx
import ProgressCircle from '@/components/ui/progressBars/ProgressCircle';
```

---

### Props

| Prop        | Type        | Default | Description                                                |
|-------------|-------------|---------|------------------------------------------------------------|
| `progress`  | `number`    | —       | Progress value between 0 and 1 (e.g., 0.75 for 75%)        |
| `showText`  | `boolean`   | `true`  | Whether to show progress percentage text inside the circle |
| `size`      | `number`    | `65`    | Diameter of the progress circle                            |
| `thickness` | `number`    | `3`     | Thickness of the progress ring                             |
| `textStyle` | `TextStyle` | —       | Optional custom style for the percentage text              |

---

### Basic Usage

```tsx
<ProgressCircle
    progress={0.5}
    showText={true}
    size={80}
    thickness={4}
    textStyle={{color: 'red', fontWeight: 'bold'}}
/>

```

---

## ProgressHorizontal

### Import

```tsx
import ProgressHorizontal from '@/components/ui/progressBars/ProgressHorizontal';
```

---

### Props

| Prop            | Type             | Default           | Description                                                      |
|-----------------|------------------|-------------------|------------------------------------------------------------------|
| `progress`      | `number`         | —                 | Progress value between 0 and 1 (e.g., 0.75 for 75%)              |
| `height`        | `number`         | `10`              | Height of the progress bar                                       |
| `width`         | `number \| null` | `null`            | Width of the progress bar (if `null`, stretches to parent width) |
| `color`         | `string`         | `PRIMARY_COLOR`   | Color of the filled portion of the progress bar                  |
| `unFilledColor` | `string`         | `LIGHTGRAY_COLOR` | Color of the unfilled portion of the progress bar                |
| `borderWidth`   | `number`         | `0`               | Border width of the progress bar                                 |
| `style`         | `ViewStyle`      | —                 | Optional additional styles for the progress bar container        |

---

### Basic Usage

```tsx
<ProgressHorizontal
    progress={0.6}
    height={12}
    width={200}
    color="#3498db"
    unFilledColor="#ecf0f1"
    borderWidth={1}
    style={{borderRadius: 8}}
/>

```

---

> **NOTE:**
> All example can be founded in `progress_bars.tsx`