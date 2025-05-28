---
sidebar_position: 1
title: MNTextInput
description: MNTextInput is a customizable and reusable input field component for React Native that supports labels, icons, and various input configurations like secure text, multiline input, and custom event handlers.
---

# TextInput

## MNTextInput

MNTextInput is a customizable and reusable input field component for React Native that supports labels, icons, and
various input configurations like secure text, multiline input, and custom event handlers.

---

### Import

```tsx
import MNTextInput from '@/components/ui/forms/MNTextInput';
```

---

### Props

| Prop            | Type                     | Default      | Description                                                    |
|-----------------|--------------------------|--------------|----------------------------------------------------------------|
| `label`         | `string`                 | **Required** | The text label displayed above the input field.                |
| `value`         | `string`                 | `''`         | The current value of the input.                                |
| `onChangeText`  | `(text: string) => void` | **Required** | Callback when the text value changes.                          |
| `icon`          | `string`                 | **Required** | Ionicon name for the icon displayed on the right.              |
| `autoComplete`  | `string`                 | `undefined`  | Optional autoComplete value (e.g., `email`, `username`, etc.). |
| `multipleLines` | `boolean`                | `false`      | Whether the input supports multiple lines.                     |
| `editable`      | `boolean`                | `true`       | Whether the input is editable.                                 |
| `secureText`    | `boolean`                | `false`      | Whether the text should be obscured (e.g., for passwords).     |
| `iconClick`     | `() => void`             | `undefined`  | Optional callback for when the icon is pressed.                |
| `onFocus`       | `() => void`             | `undefined`  | Optional callback when the input is focused.                   |
| `onBlur`        | `() => void`             | `undefined`  | Optional callback when the input loses focus.                  |

---

### Usage Example

```tsx
<MNTextInput
    label="Email"
    value={email}
    onChangeText={setEmail}
    icon="mail-outline"
    autoComplete="email"
    secureText={false}
/>
```

---

## MNTextInputAnimated

A customizable and animated MNTextInput component with floating label support and optional icon
interaction.

---

### Import

```tsx
import MNTextInputAnimated from '@/components/MNTextInputAnimated';
```

---

### Props

| Prop            | Type                     | Required | Default     | Description                                                          |
|-----------------|--------------------------|----------|-------------|----------------------------------------------------------------------|
| `label`         | `string`                 | ✅        | –           | Text to display as the floating label.                               |
| `value`         | `string`                 | ❌        | `''`        | Current value of the input field.                                    |
| `onChangeText`  | `(text: string) => void` | ✅        | –           | Function called when the text changes.                               |
| `icon`          | `string`                 | ✅        | –           | Name of Ionicon to display on the right side.                        |
| `autoComplete`  | `string`                 | ❌        | `undefined` | Optional autocomplete setting for input (e.g., `email`, `username`). |
| `multipleLines` | `boolean`                | ❌        | `false`     | Whether to allow multiline input.                                    |
| `editable`      | `boolean`                | ❌        | `true`      | Determines if the input can be edited.                               |
| `secureText`    | `boolean`                | ❌        | `false`     | Masks the text input (for passwords).                                |
| `iconClick`     | `() => void`             | ❌        | `undefined` | Function triggered when the icon is pressed.                         |
| `onFocus`       | `() => void`             | ❌        | `undefined` | Callback fired on focus event.                                       |
| `onBlur`        | `() => void`             | ❌        | `undefined` | Callback fired on blur event.                                        |

### Usage Example

```tsx
<MNTextInputAnimated
    label="Email"
    value={email}
    onChangeText={setEmail}
    icon="mail-outline"
    autoComplete="email"
    secureText={false}
    editable={true}
    onFocus={() => console.log('Focused')}
    onBlur={() => console.log('Blurred')}
    iconClick={() => console.log('Icon clicked')}
/>
```

---

## MNTextInputRounded

A customizable and reusable rounded input field component with an optional icon and label, designed for React Native
applications.


---

### Import

```tsx
import MNTextInputRounded from '@/components/MNTextInputRounded';
```

---

### Props

| Prop Name       | Type                     | Required | Description                                                |
|-----------------|--------------------------|----------|------------------------------------------------------------|
| `label`         | `string`                 | ✅ Yes    | The text label displayed above the input.                  |
| `value`         | `string`                 | ❌ No     | The current value of the input field.                      |
| `onChangeText`  | `(text: string) => void` | ✅ Yes    | Callback function when the text is changed.                |
| `icon`          | `string`                 | ✅ Yes    | Icon name from Ionicons to be displayed on the right side. |
| `autoComplete`  | `string`                 | ❌ No     | Specifies autocomplete hints (e.g., `email`, `name`).      |
| `multipleLines` | `boolean`                | ❌ No     | Whether to allow multiline input. Default is `false`.      |
| `editable`      | `boolean`                | ❌ No     | If false, disables editing. Default is `true`.             |
| `secureText`    | `boolean`                | ❌ No     | Hides the input text (for passwords). Default is `false`.  |
| `iconClick`     | `() => void`             | ❌ No     | Callback when the icon is clicked.                         |
| `onFocus`       | `() => void`             | ❌ No     | Callback when the input field receives focus.              |
| `onBlur`        | `() => void`             | ❌ No     | Callback when the input field loses focus.                 |

---

### Usage Example

```tsx

<MNTextInputRounded
    label="Email"
    value={email}
    onChangeText={setEmail}
    icon="mail-outline"
    autoComplete="email"
    secureText={false}
    iconClick={() => console.log('Icon clicked')}
/>
```

---

## MNTextInputRounded

A customizable and reusable rounded input field component with an optional icon and label, designed for React Native
applications.

---

### Import

```tsx
import MNTextInputRounded from '@/components/MNTextInputRounded';
```

---

### Props

| Prop Name       | Type                     | Required | Description                                                |
|-----------------|--------------------------|----------|------------------------------------------------------------|
| `label`         | `string`                 | ✅ Yes    | The text label displayed above the input.                  |
| `value`         | `string`                 | ❌ No     | The current value of the input field.                      |
| `onChangeText`  | `(text: string) => void` | ✅ Yes    | Callback function when the text is changed.                |
| `icon`          | `string`                 | ✅ Yes    | Icon name from Ionicons to be displayed on the right side. |
| `autoComplete`  | `string`                 | ❌ No     | Specifies autocomplete hints (e.g., `email`, `name`).      |
| `multipleLines` | `boolean`                | ❌ No     | Whether to allow multiline input. Default is `false`.      |
| `editable`      | `boolean`                | ❌ No     | If false, disables editing. Default is `true`.             |
| `secureText`    | `boolean`                | ❌ No     | Hides the input text (for passwords). Default is `false`.  |
| `iconClick`     | `() => void`             | ❌ No     | Callback when the icon is clicked.                         |
| `onFocus`       | `() => void`             | ❌ No     | Callback when the input field receives focus.              |
| `onBlur`        | `() => void`             | ❌ No     | Callback when the input field loses focus.                 |

---

### Usage Example

```tsx
<MNTextInputRounded
    label="Email"
    value={email}
    onChangeText={setEmail}
    icon="mail-outline"
    autoComplete="email"
    secureText={false}
    iconClick={() => console.log('Icon clicked')}
/>
```

---

## MNOneLineTextInputAnimated

A customizable, animated single-line `TextInput` component for React Native, with support for floating labels, icons,
and various input behaviors. Designed for use in mobile forms.

---

### Import

```tsx
import MNOneLineTextInputAnimated from '@/components/ui/forms/textInputs/MNOneLineTextInputAnimated';
```

--- 

### Props

| Prop            | Type                     | Required | Default     | Description                                       |
|-----------------|--------------------------|----------|-------------|---------------------------------------------------|
| `label`         | `string`                 | ✅        | —           | Label text shown above the input field.           |
| `value`         | `string`                 | ❌        | `''`        | Input field value.                                |
| `onChangeText`  | `(text: string) => void` | ✅        | —           | Callback when input text changes.                 |
| `icon`          | `string`                 | ✅        | —           | Icon name (Ionicons) displayed on the right.      |
| `autoComplete`  | `string`                 | ❌        | `undefined` | HTML autocomplete value (ignored by TypeScript).  |
| `multipleLines` | `boolean`                | ❌        | `false`     | Allows multi-line input.                          |
| `editable`      | `boolean`                | ❌        | `true`      | Whether the input is editable.                    |
| `secureText`    | `boolean`                | ❌        | `false`     | Masks the text for secure entry (e.g., password). |
| `iconClick`     | `() => void`             | ❌        | `undefined` | Function called when the icon is pressed.         |
| `onFocus`       | `() => void`             | ❌        | `undefined` | Function called when the input is focused.        |
| `onBlur`        | `() => void`             | ❌        | `undefined` | Function called when the input loses focus.       |

---

### Example Usage

```tsx
<MNOneLineTextInputAnimated
  label="Email"
  value={email}
  onChangeText={setEmail}
  icon="mail"
  autoComplete="email"
  secureText={false}
/>

---

> **NOTE:**
> All example can be founded in `input_fields.tsx`