---
sidebar_position: 4
title: MNSelectPicker
description: MNSelectPicker is a customizable select picker component for React Native that supports single or multiple option selection with a bottom sheet UI.

---

# Purpose

`MNSelectPicker` is a customizable select picker component for React Native that supports single or multiple option
selection with a bottom sheet UI. It integrates theming and icons for a polished user experience.

---

## Import

```tsx
import MNSelectPicker from '@/components/ui/pickers/MNSelectPicker';
```

---

## Props

| Prop       | Type                      | Required | Default | Description                                            |
|------------|---------------------------|----------|---------|--------------------------------------------------------|
| `label`    | `string`                  | Yes      | —       | The label text displayed above the picker.             |
| `options`  | `string[]`                | Yes      | —       | Array of option strings to display in the picker.      |
| `value`    | `string \| string[]`      | Yes      | —       | Currently selected value(s). Can be a string or array. |
| `onChange` | `(value: string) => void` | Yes      | —       | Callback function triggered on option selection.       |
| `icon`     | `string`                  | Yes      | —       | Name of the icon to display on the right side.         |
| `multiple` | `boolean`                 | No       | `false` | Allows multiple option selection if set to true.       |
| `editable` | `boolean`                 | No       | `true`  | Enables or disables user interaction with the picker.  |

---

## Usage Example

```tsx
const options = ['Option 1', 'Option 2', 'Option 3'];

<MNSelectPicker
    label="Select an Option"
    options={options}
    value="Option 1"
    onChange={(value) => console.log(value)}
    icon="arrow-down"
    multiple={false}
    editable={true}
/>
```

---

> **NOTE:**
> All example can be founded in `select_picker.tsx`