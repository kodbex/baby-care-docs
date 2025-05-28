---
sidebar_position: 2
title: MNCheckboxes
description: These components are part of a React Native UI library to render customizable checkboxes and checkbox groups with a consistent theme.

---

# Checkboxes

## MNCheckboxes

These components are part of a React Native UI library to render customizable checkboxes and checkbox groups with a
consistent theme.

---

### Import

```tsx
import {MNCheckbox} from '@/components/ui/forms/checkboxes/MNCheckBoxes';
```

---

### Props

| Prop             | Type                        | Required  | Default | Description                                |
|------------------|-----------------------------|-----------|---------|--------------------------------------------|
| `label`          | `string`                    | No        | -       | Group label displayed above the checkboxes |
| `options`        | `string[]`                  | Yes       | -       | Array of option labels/values              |
| `selectedValues` | `string[]`                  | Yes       | -       | Currently selected checkbox values         |
| `onChange`       | `(value: string[]) => void` | No        | -       | Callback when selection changes            |
| `direction`      | `'row'                      | 'column'` | No      | `'row'`                                    | Layout direction of the checkboxes |
| `editable`       | `boolean`                   | No        | `true`  | Whether checkboxes are editable            |

---

### Usage Example

```tsx
<MNCheckboxes
    label="Select Interests"
    options={['Music', 'Movies', 'Books']}
    selectedValues={selectedInterests}
    onChange={(newValues) => setSelectedInterests(newValues)}
    direction="column"
/>
```

--- 

## MNCheckBoxWithLongLabel

A customizable checkbox component with a long descriptive label and a progress line separator.

### Import

```tsx
import MNCheckBoxWithLongLabel from '@/components/ui/forms/checkboxes/MNCheckBoxWithLongLabel';
```

---

### Props

| Prop        | Type                           | Required | Default | Description                                                 |
|-------------|--------------------------------|----------|---------|-------------------------------------------------------------|
| `desc`      | `string`                       | Yes      | -       | The descriptive label text shown beside the checkbox        |
| `isChecked` | `boolean`                      | No       | `false` | Initial checked state of the checkbox                       |
| `lastRow`   | `boolean`                      | No       | `false` | If true, removes the bottom border line                     |
| `onToggle`  | `(isChecked: boolean) => void` | Yes      | -       | Callback function called when checkbox state toggles        |
| `editable`  | `boolean`                      | No       | `true`  | If false, disables interaction and styles label as disabled |

---

### Usage Example

```tsx
 <MNCheckBoxWithLongLabel
    key={index}
    desc={label}
    isChecked={false}
    onToggle={(isChecked) =>
        debug(isChecked, 'Checkbox is checked or not?')
    }
    lastRow={details.milestonesCheckList.length - 1 == index}
/>
```

---

> **NOTE:**
> All example can be founded in `checkboxes.tsx`