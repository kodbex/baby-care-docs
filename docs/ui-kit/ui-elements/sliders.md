---
sidebar_position: 8
title: Sliders
description: A customizable button component that supports icons, loading states, full-width layout, and both left/right icon alignment.

---

# MNImageSlider

## MNImageSlider

### Import

```tsx
import MNImageSlider from '@/components/ui/MNImageSlider';
```

---

### Props

| Prop               | Type                            | Required | Default     | Description                                                                            |
|--------------------|---------------------------------|----------|-------------|----------------------------------------------------------------------------------------|
| `slider`           | `IMAGE_SLIDES_PROPS[]`          | ✅        | –           | Array of slide objects, each with an `id` and `bannerImage` for display in the slider. |
| `prevBtn`          | `boolean`                       | ❌        | `false`     | Whether to show the previous button.                                                   |
| `nextBtn`          | `boolean`                       | ❌        | `false`     | Whether to show the next button.                                                       |
| `doneBtn`          | `boolean`                       | ❌        | `false`     | Whether to show the done button.                                                       |
| `onDonePress`      | `() => void`                    | ❌        | `-` | Callback function called when the done button is pressed.                              |
| `prevBtnComponent` | `() => React.ReactNode`         | ❌        | `-` | Custom component to render as the previous button.                                     |
| `nextBtnComponent` | `() => React.ReactNode`         | ❌        | `-` | Custom component to render as the next button.                                         |
| `doneBtnComponent` | `() => React.ReactNode`         | ❌        | `-` | Custom component to render as the done button.                                         |
| `onSlidePress`     | `(slideNumber: number) => void` | ❌        | `-` | Callback called with the slide id when a slide is pressed.                             |

---

### Basic Usage

```tsx
const slides = [
    {id: 1, bannerImage: {uri: 'https://example.com/image1.jpg'}},
    {id: 2, bannerImage: {uri: 'https://example.com/image2.jpg'}},
    {id: 3, bannerImage: {uri: 'https://example.com/image3.jpg'}},
];

<MNImageSlider
    slider={slides}
    prevBtn={true}
    nextBtn={true}
    doneBtn={true}
    onDonePress={() => console.log('Done pressed')}
    onSlidePress={(slideId) => console.log('Slide pressed:', slideId)}
/>
```

## MNTextSlider

### Import

```tsx
import MNTextSlider from '@/components/ui/MNTextSlider';
```

---

### Props

| Prop               | Type                            | Required | Default     | Description                                                                      |
|--------------------|---------------------------------|----------|-------------|----------------------------------------------------------------------------------|
| `slider`           | `TEXT_SLIDES_PROPS[]`           | ✅        | –           | Array of slide objects with `id`, `text`, `bgColor`, and `color` for each slide. |
| `prevBtn`          | `boolean`                       | ❌        | `false`     | Whether to show the previous button.                                             |
| `nextBtn`          | `boolean`                       | ❌        | `false`     | Whether to show the next button.                                                 |
| `doneBtn`          | `boolean`                       | ❌        | `false`     | Whether to show the done button.                                                 |
| `onDonePress`      | `() => void`                    | ❌        | `-` | Callback when the done button is pressed.                                        |
| `prevBtnComponent` | `() => React.ReactNode`         | ❌        | `-` | Custom component to render as the previous button.                               |
| `nextBtnComponent` | `() => React.ReactNode`         | ❌        | `-` | Custom component to render as the next button.                                   |
| `doneBtnComponent` | `() => React.ReactNode`         | ❌        | `-` | Custom component to render as the done button.                                   |
| `onSlidePress`     | `(slideNumber: number) => void` | ❌        | `-` | Callback called with the slide id when a slide is pressed.                       |

---

### Basic Example

```tsx
const textSlides = [
    {id: 1, text: 'Welcome to our app!', bgColor: '#FFD700', color: '#000000'},
    {id: 2, text: 'Swipe to learn more.', bgColor: '#00BFFF', color: '#FFFFFF'},
    {id: 3, text: 'Enjoy your experience.', bgColor: '#32CD32', color: '#FFFFFF'},
];

<MNTextSlider
    slider={textSlides}
    prevBtn={true}
    nextBtn={true}
    doneBtn={true}
    onDonePress={() => console.log('Done pressed')}
    onSlidePress={(slideId) => console.log('Slide pressed:', slideId)}
/>

```

---

> **NOTE:**
> All example can be founded in `cards.tsx`