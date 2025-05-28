---
sidebar_position: 5
title: BottomSheet | Modal
description: A customizable bottom sheet component built using `react-native-raw-bottom-sheet`. It supports optional title display, close actions, dynamic height, and styled content areas.

---

## Import

```tsx
import BottomSheet from '@/components/shared/bottomsheet/BottomSheet';
```

---

## Props

| Prop                  | Type              | Default           | Description                                                        |
|-----------------------|-------------------|-------------------|--------------------------------------------------------------------|
| `children`            | `React.ReactNode` | **Required**      | The content to render inside the bottom sheet.                     |
| `height`              | `number`          | `350`             | Height of the bottom sheet (ignored if `fullHeight` is `true`).    |
| `title`               | `string`          | `'Choose Option'` | Optional title shown at the top of the bottom sheet.               |
| `bottomSheetRef`      | `Ref<RBSheetRef>` | **Required**      | Ref object used to control the bottom sheet externally.            |
| `closeOnPressMask`    | `boolean`         | `true`            | If `true`, tapping outside the sheet will close it.                |
| `closeAction`         | `() => void`      | `undefined`       | Callback fired when the close icon is pressed.                     |
| `fullHeight`          | `boolean`         | `false`           | If `true`, expands the bottom sheet to (screen height - 60).       |
| `containerStyle`      | `StyleProps`      | `undefined`       | Optional custom style for the bottom sheet container.              |
| `childContainerStyle` | `StyleProps`      | `undefined`       | Optional style applied to the children container inside the sheet. |

---

## Usage Examples

## Usage Examples

### Basic Usage

```tsx
<BottomSheet
    bottomSheetRef={bottomSheetRef}
>
    <Text>Sheet content here</Text>
</BottomSheet>
```

### With Title and Close Action

```tsx
<BottomSheet
    title="Select Item"
    bottomSheetRef={bottomSheetRef}
    closeAction={() => console.log('Closed')}
>
    <Text>List of options</Text>
</BottomSheet>
```

### Full Height Sheet

```tsx
<BottomSheet
    fullHeight
    bottomSheetRef={bottomSheetRef}
>
    <Text>Full screen modal content</Text>
</BottomSheet>
```

---

> **NOTE:**
> All example can be founded in `modal_bottomSheet.tsx`