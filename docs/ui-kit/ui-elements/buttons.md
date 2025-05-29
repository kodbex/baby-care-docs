---
sidebar_position: 6
title: Buttons
description: A customizable button component that supports icons, loading states, full-width layout, and both left/right icon alignment.

---

# Buttons

## MNSingleButton

```tsx
import MNSingleButton from '@/components/ui/buttons/MNSingleButton';
```

---

### Props

| Prop           | Type                | Default         | Description                                                               |
|----------------|---------------------|-----------------|---------------------------------------------------------------------------|
| `text`         | `string`            | **Required**    | Text label to display inside the button.                                  |
| `icon`         | `string`            | **Required**    | Ionicons icon name to display.                                            |
| `onPress`      | `() => void`        | `-`     | Function triggered on button press (not called if `isLoading` is `true`). |
| `color`        | `string`            | `WHITE_COLOR`   | Color of the icon and text.                                               |
| `bgColor`      | `string`            | `PRIMARY_COLOR` | Background color of the button.                                           |
| `isLoading`    | `boolean`           | `false`         | If `true`, shows a loading spinner instead of the text.                   |
| `fullWidth`    | `boolean`           | `true`          | If `true`, button will expand to full width.                              |
| `iconPosition` | `'left' \| 'right'` | `'left'`        | Determines if the icon appears on the left or right of the text.          |

---

### Basic Usage

```tsx
<MNSingleButton
    text="Submit"
    icon="checkmark-outline"
    onPress={() => console.log('Submitted')}
/>
```

### Button with Right-Aligned Icon

```tsx
<MNSingleButton
    text="Next"
    icon="arrow-forward-outline"
    iconPosition="right"
    onPress={() => console.log('Next pressed')}
/>
```

### Loading State Button

```tsx
<MNSingleButton
    text="Saving"
    icon="save-outline"
    isLoading={true}
/>
```

### Non-Full Width Button with Custom Colors

```tsx
<MNSingleButton
    text="Cancel"
    icon="close-outline"
    bgColor="#ccc"
    color="#333"
    fullWidth={false}
    onPress={() => console.log('Cancelled')}
/>
```

---

## MNCompoundButton Component

A dual-button component used to display two side-by-side action buttons with customizable text, icon, colors, and
actions.

---

### Import

```tsx
import MNCompoundButton from '@/components/ui/buttons/MNCompoundButton';
```

---

### Props

| Prop                      | Type         | Required | Default     | Description                                 |
|---------------------------|--------------|----------|-------------|---------------------------------------------|
| `firstButtonText`         | `string`     | ✅        | –           | Label for the first button.                 |
| `firstButtonIcon`         | `string`     | ✅        | –           | Icon name for the first button (Ionicons).  |
| `firstButtonColor`        | `string`     | ✅        | –           | Text/icon color for the first button.       |
| `firstButtonBgColor`      | `string`     | ✅        | –           | Background color for the first button.      |
| `firstButtonCloseAction`  | `() => void` | ✅        | –           | Callback when the first button is pressed.  |
| `secondButtonText`        | `string`     | ✅        | –           | Label for the second button.                |
| `secondButtonIcon`        | `string`     | ✅        | –           | Icon name for the second button (Ionicons). |
| `secondButtonColor`       | `string`     | ❌        | `-` | Text/icon color for the second button.      |
| `secondButtonBgColor`     | `string`     | ✅        | –           | Background color for the second button.     |
| `secondButtonCloseAction` | `() => void` | ✅        | –           | Callback when the second button is pressed. |

---

### Usage Examples

```tsx
<MNCompoundButton
    firstButtonText="Cancel"
    firstButtonIcon="close-outline"
    firstButtonColor="#fff"
    firstButtonBgColor="#999"
    firstButtonCloseAction={() => console.log('Cancelled')}
    secondButtonText="Confirm"
    secondButtonIcon="checkmark-outline"
    secondButtonColor="#fff"
    secondButtonBgColor="#4CAF50"
    secondButtonCloseAction={() => console.log('Confirmed')}
/>
```

---

## MNDropdown Component

A reusable dropdown component in React Native using a bottom sheet for option selection.

---

### Import

```tsx
import MNDropdown from '@/components/ui/buttons/MNDropdown';
```

---

### Props

| Prop       | Type                      | Required | Default | Description                                                    |
|------------|---------------------------|----------|---------|----------------------------------------------------------------|
| `label`    | `string`                  | ✅        | –       | Label text displayed on the dropdown button.                   |
| `options`  | `string[]`                | ✅        | –       | List of selectable options.                                    |
| `value`    | `string`                  | ✅        | –       | Currently selected value.                                      |
| `onChange` | `(value: string) => void` | ✅        | –       | Callback fired when an option is selected.                     |
| `icon`     | `string`                  | ✅        | –       | Ionicons icon name shown on the button (e.g., `chevron-down`). |
| `active`   | `boolean`                 | ❌        | `true`  | Enables or disables the dropdown interaction.                  |

---

### Usage Examples

```tsx
 <MNDropdown
    label={'I am dropdown button'}
    options={['Option 01', 'Option 02']}
    value={'Option 01'}
    onChange={function (value: string): void {
        alert('Selected Option: ' + value);
    }}
    icon={'chevron-down'}
/>
```

> **NOTE:**
> All example can be founded in `buttons.tsx`