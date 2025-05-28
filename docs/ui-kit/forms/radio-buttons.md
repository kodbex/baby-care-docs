---
sidebar_position: 3
title: MNRadioButtons
description: A customizable radio button group component with a label, supporting horizontal or vertical layouts and editable state.

---

# Purpose

`MNRadioButtons` renders a group of radio buttons with a main label. Each option can be selected exclusively. The
component supports a horizontal (row) or vertical (column) layout and can be disabled for editing, which visually and
functionally disables interaction.


---

## Import

```tsx
import MNRadioButtons from '@/components/ui/forms/radioes/MNRadioButtons';
```

---

## Props

| Prop            | Type                      | Required | Default | Description                                                                  |
|-----------------|---------------------------|----------|---------|------------------------------------------------------------------------------|
| `label`         | `string`                  | Yes      | -       | The main label shown above the radio button group                            |
| `options`       | `string[]`                | Yes      | -       | Array of options to render as radio buttons                                  |
| `selectedValue` | `string`                  | Yes      | -       | The currently selected option value                                          |
| `onChange`      | `(value: string) => void` | Yes      | -       | Callback fired when user selects a different option                          |
| `direction`     | `'row' \| 'column'`       | No       | `'row'` | Layout direction of radio buttons: horizontal (`row`) or vertical (`column`) |
| `editable`      | `boolean`                 | No       | `true`  | Whether the radio buttons are interactive or disabled                        |

---

## Usage Example

```tsx
<MNRadioButtons
    label={'This radio button is disabled'}
    options={['Apple', 'Banana', 'Orange', 'Mango']}
    onChange={(value) => {
        setRadioButtonValue(value);
        debug(value, 'Radio checkboxe checked.');
    }}
    direction={'row'}
    selectedValue={'Orange'}
    editable={false}
/>
```

---

> **NOTE:**
> All example can be founded in `radio_buttons.tsx`