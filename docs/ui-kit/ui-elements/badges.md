---
sidebar_position: 4
title: Badges
description: A flexible badge component that supports dot, number, or text badges, and can be positioned either inline or at the top-right corner of its children.

---

## Purpose

A flexible badge component that supports dot, number, or text badges, and can be positioned either inline or in the
top-right corner of its children.

##  Import

```tsx
import MNBadge from '@/components/MNBadge';
```

---

## Props

| Prop             | Type                          | Default           | Description                                         |
|------------------|-------------------------------|-------------------|-----------------------------------------------------|
| `type`           | `'dot' \| 'number' \| 'text'` | `'dot'`           | Type of badge to display                            |
| `value`          | `number \| string`            | `undefined`       | Value to display inside the badge (for number/text) |
| `color`          | `string`                      | `SECONDARY_COLOR` | Background color of the badge                       |
| `position`       | `'topRight' \| 'inline'`      | `'topRight'`      | Position of the badge relative to its children      |
| `children`       | `React.ReactNode`             | `undefined`       | The child elements to wrap with the badge           |
| `containerStyle` | `ViewStyle`                   | `undefined`       | Optional additional styles for the container view   |

---

## Usage Examples

### Dot badge at top right

```tsx
<MNBadge>
    <YourComponent/>
</MNBadge>
```

### Number badge at top right with custom value and color

```tsx
<MNBadge type="number" value={5} color="#ff0000">
    <YourComponent/>
</MNBadge>
```

### Inline text badge

```tsx
<MNBadge type="text" value="New" position="inline" color="#00ff00">
    <YourComponent/>
</MNBadge>
```

---

## MNTextualBadge Component

A simple textual badge component used to display small status or label information, supporting different visual types.

---

##  Import

```tsx
import MNTextualBadge from '@/components/MNTextualBadge';
```

---

## Props

| Prop   | Type                                  | Default      | Description                             |
|--------|---------------------------------------|--------------|-----------------------------------------|
| `text` | `string`                              | **Required** | The text content displayed in the badge |
| `type` | `'primary'` \| `'info'` \| `'danger'` | `'primary'`  | Style variant for the badge             |

---

## 🧠 Usage Examples

### Default (Primary) Badge

```tsx
<MNTextualBadge text="Active"/>
```

### Info Badge

```tsx
<MNTextualBadge text="In Progress" type="info"/>
```

### Danger Badge

```tsx
<MNTextualBadge text="Failed" type="danger"/>
```

> **NOTE:**
> All example can be founded in `badges.tsx`