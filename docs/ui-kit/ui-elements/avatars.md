---
sidebar_position: 3
title: Avatars
description: A React Native screen that demonstrates different types of alert UIs such as simple alerts, alerts with actions, and styled text alerts—some with dismissable options. Designed with reusability and clarity in mind.
---

## MNAvatar

The `MNAvatar` component is a customizable avatar display used in React Native applications. It can render either an
image or fallback text within a circular or rectangular shape, and comes in multiple predefined sizes.

### Features

- Supports **image** or **text fallback**.
- Customizable **size**, **shape**, **colors**, and **style**.
- Responsive design using size mappings.

### Import

```tsx
import MNAvatar from '@/components/MNAvatar';
```

### Props

| Prop              | Type                                   | Default         | Description                               |
|-------------------|----------------------------------------|-----------------|-------------------------------------------|
| `size`            | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'`          | Size of the avatar.                       |
| `shape`           | `'circle' \| 'rectangle'`              | `'circle'`      | Shape of the avatar.                      |
| `imageUrl`        | `string`                               | `-`     | URL of the image to display.              |
| `fallbackText`    | `string`                               | `''`            | Text to show when image is not available. |
| `backgroundColor` | `string`                               | `PRIMARY_COLOR` | Background color of the avatar.           |
| `textColor`       | `string`                               | `WHITE_COLOR`   | Text color for fallback text.             |
| `style`           | `StyleProp<ViewStyle>`                 | `-`     | Custom styles for the avatar container.   |

### Usage

#### Show an Avatar with Image

```tsx
<MNAvatar
    size="lg"
    shape="circle"
    imageUrl="https://example.com/avatar.jpg"
/>
```

#### Show an Avatar with Fallback Text

```tsx
<MNAvatar
    size="md"
    fallbackText="AB"
    backgroundColor="#4B5563"
    textColor="#F9FAFB"
/>
```

#### Rectangle Avatar

```tsx
<MNAvatar
    size="sm"
    shape="rectangle"
    fallbackText="CD"
/>
```

### Size Mapping

| Size | Dimension (px) |
|------|----------------|
| `xs` | 32             |
| `sm` | 40             |
| `md` | 50             |
| `lg` | 64             |
| `xl` | 80             |

--- 

## MNAvatarGroup Component

The `MNAvatarGroup` component renders a group of avatars in a horizontal row with overlapping styles. It shows a limited
number of visible avatars and displays a "+X" avatar if there are more than the maximum visible.

---

### Import

```tsx
import MNAvatarGroup from '@/components/MNAvatarGroup';
```

---

### Props

| Prop         | Type                                   | Default      | Description                                        |
|--------------|----------------------------------------|--------------|----------------------------------------------------|
| `data`       | `AvatarItem[]`                         | **required** | Array of avatar data objects                       |
| `maxVisible` | `number`                               | `4`          | Maximum number of visible avatars                  |
| `size`       | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'`       | Size of each avatar                                |
| `shape`      | `'circle' \| 'rectangle'`              | `'circle'`   | Shape of each avatar                               |
| `overlap`    | `number`                               | `16`         | Number of pixels each avatar overlaps the previous |
| `style`      | `StyleProp<ViewStyle>`                 | `-`  | Custom style for the avatar group container        |

---

## Usage

### Basic Avatar Group

```tsx
const avatars = [
    {id: 1, imageUrl: 'https://example.com/avatar1.jpg'},
    {id: 2, fallbackText: 'AB', backgroundColor: '#ff5722', textColor: '#fff'},
    {id: 3, imageUrl: 'https://example.com/avatar3.jpg'},
    {id: 4, fallbackText: 'CD'},
    {id: 5, fallbackText: 'EF'},
];

<MNAvatarGroup
    data={avatars}
    maxVisible={4}
    size="sm"
    shape="circle"
    overlap={12}
/>
```

---

## 🔍 Behavior

- Displays up to `maxVisible` avatars from the `data` array.
- Avatars overlap horizontally by the `overlap` amount.
- If there are more avatars than `maxVisible`, the last avatar shows a `+N` count of remaining avatars.
- Supports both image and fallback text avatars.
- Shape and size customizable for all avatars.

---

## Types

### AvatarItem

```ts
type AvatarItem = {
    id: string | number;
    imageUrl?: string;
    fallbackText?: string;
    backgroundColor?: string;
    textColor?: string;
};
```

### MNAvatarGroupProps

```ts
type MNAvatarGroupProps = {
    data: AvatarItem[];
    maxVisible?: number;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    shape?: 'circle' | 'rectangle';
    overlap?: number;
    style?: StyleProp<ViewStyle>;
};
```

---

## Styling

```ts
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    avatarWrapper: {
        zIndex: 1,
    },
});
```

---



> **NOTE:**
> All example can be founded in `avatars.tsx`