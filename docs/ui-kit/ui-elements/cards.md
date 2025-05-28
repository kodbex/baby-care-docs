---
sidebar_position: 7
title: Cards
description: A customizable button component that supports icons, loading states, full-width layout, and both left/right icon alignment.

---

# Cards

## MNAvatarOnLeftCard

### Import

```tsx
import MNAvatarOnLeftCard from '@/components/ui/cards/MNAvatarOnLeftCard';
```

---

### Props

| Prop           | Type         | Required | Default           | Description                                            |
|----------------|--------------|----------|-------------------|--------------------------------------------------------|
| `image`        | `string`     | ✅        | –                 | URL or local path for the image displayed on the left. |
| `subtitle`     | `string`     | ✅        | –                 | Subtitle text shown under the title (e.g., date).      |
| `title`        | `string`     | ✅        | –                 | Main title text shown in the card.                     |
| `imageSize`    | `number`     | ❌        | `60`              | Size (width and height) of the avatar image.           |
| `clickAction`  | `() => void` | ❌        | `undefined`       | Callback fired when the card is pressed.               |
| `imageBgColor` | `string`     | ❌        | `LIGHTBLUE_COLOR` | Background color of the image avatar circle.           |

---

### Basic Usage

```tsx
<MNAvatarOnLeftCard
    image="https://example.com/avatar.png"
    title="John Doe"
    subtitle="Joined on May 27, 2025"
    imageSize={60}
    clickAction={() => console.log('Card clicked')}
    imageBgColor="#f0f0f0"
/>
```

## MNCard

### Import

```tsx
import MNCard from '@/components/ui/cards/MNCard';
```

---

### Props

| Prop              | Type              | Required | Default       | Description                                       |
|-------------------|-------------------|----------|---------------|---------------------------------------------------|
| `children`        | `React.ReactNode` | ✅        | –             | Content to be rendered inside the card.           |
| `style`           | `ViewStyle`       | ❌        | `undefined`   | Additional styles to apply to the card container. |
| `padding`         | `number`          | ❌        | `16`          | Padding inside the card container.                |
| `borderRadius`    | `number`          | ❌        | `12`          | Border radius of the card container corners.      |
| `backgroundColor` | `string`          | ❌        | `WHITE_COLOR` | Background color of the card.                     |
| `shadow`          | `boolean`         | ❌        | `true`        | Whether to apply shadow styling to the card.      |

---

```tsx
<MNCard
    padding={20}
    borderRadius={16}
    backgroundColor="#fff"
    shadow={true}
    style={{marginTop: 10}}
>
    {/* Your content goes here */}
    <Text>This is content inside the card</Text>
</MNCard>
```

## MNImageOnTopCard

### Import

```tsx
import MNImageOnTopCard from '@/components/ui/cards/MNImageOnTopCard';
```

---

| Prop                | Type                                         | Required | Default     | Description                                                                      |     |
|---------------------|----------------------------------------------|----------|-------------|----------------------------------------------------------------------------------|-----|
| `image`             | `ImageSourcePropType \| string \| undefined` | ✅        | –           | Image source to display at the top of the card.                                  |     |
| `leftText`          | `string`                                     | ❌        | `undefined` | Optional text displayed on the top-left overlay of the image.                    |     |
| `rightIcons`        | `string[]`                                   | ❌        | `undefined` | Array of icon names (Ionicons) displayed on top-right overlay.                   |     |
| `subtitle`          | `string`                                     | ✅        | –           | Subtitle text displayed below the image, on the left side.                       |     |
| `subtitleAlongText` | `string[]`                                   | ❌        | `undefined` | Optional array of texts shown on the right side alongside subtitle, joined by \` | \`. |
| `title`             | `string`                                     | ✅        | –           | Title text displayed below the subtitle section.                                 |     |
| `onPress`           | `() => void`                                 | ❌        | `undefined` | Optional callback fired when the card is pressed.                                |     |

---

### Basic Usage

```tsx
<MNImageOnTopCard
    image={{uri: 'https://example.com/image.jpg'}}
    leftText="Featured"
    rightIcons={['heart', 'share-social']}
    subtitle="12 Jan 2025"
    subtitleAlongText={['100 likes', '50 comments']}
    title="This is the card title"
    onPress={() => console.log('Card pressed')}
/>
```

---

## MNProductCard

### Import

```tsx
import MNProductCard from '@/components/ui/cards/MNProductCard';
```

---

### Props

| Prop        | Type                                         | Required | Default     | Description                                      |
|-------------|----------------------------------------------|----------|-------------|--------------------------------------------------|
| `image`     | `ImageSourcePropType \| string \| undefined` | ✅        | –           | Image source for the product card.               |
| `title`     | `string`                                     | ✅        | –           | Product title displayed below the image.         |
| `subtitle`  | `string`                                     | ✅        | –           | Subtitle or price displayed below the title.     |
| `onPress`   | `() => void`                                 | ❌        | `undefined` | Optional callback when the card is pressed.      |
| `cardStyle` | `object`                                     | ❌        | `{}`        | Optional style overrides for the card container. |

### Basic Usage

```tsx
<MNProductCard
    image={{uri: 'https://example.com/product.jpg'}}
    title="Product Name"
    subtitle="$99.99"
    onPress={() => console.log('Product card pressed')}
/>
```

---

## MNImageOnTopCard

---

### Import

```tsx
import MNImageOnTopCard from '@/components/ui/cards/MNImageOnTopCard';
```

### Props

| Prop        | Type                                         | Required | Default     | Description                                                        |
|-------------|----------------------------------------------|----------|-------------|--------------------------------------------------------------------|
| `image`     | `ImageSourcePropType \| string \| undefined` | ✅        | –           | Image source for the card's main image.                            |
| `rightIcon` | `string \| boolean`                          | ❌        | `true`      | Icon name to show on the right side. If `false`, no icon is shown. |
| `subtitle`  | `string[]`                                   | ✅        | –           | Array of strings to display as subtitle, joined by "•".            |
| `title`     | `string`                                     | ✅        | –           | Title text displayed next to the image.                            |
| `onPress`   | `() => void`                                 | ❌        | `undefined` | Function called when the card is pressed.                          |

---

### Basic Usage

```tsx
<MNImageOnTopCard
    image={{uri: 'https://example.com/image.jpg'}}
    title="Activity Title"
    subtitle={['Detail 1', 'Detail 2', 'Detail 3']}
    rightIcon="chevron-forward"
    onPress={() => console.log('Card pressed')}
/>
```

---

> **NOTE:**
> All example can be founded in `cards.tsx`