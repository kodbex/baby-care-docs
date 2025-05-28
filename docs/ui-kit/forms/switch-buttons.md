---
sidebar_position: 4
title: MNSwitchButton
description: A customizable toggle switch button with an optional label, supporting icons/images for on/off states and disabled mode.

---

# Purpose

`MNSwitchButton` is a React Native toggle switch component that lets users switch between two states: on and off. It
features:

- A label displayed next to the switch.
- Customizable colors for switch background and toggle circle in both states.
- Optional icons or images inside the toggle circle for on/off states.
- Disabled mode to prevent interaction.
- Controlled internal state with callback on change.

---

## Import

```tsx
import MNSwitchButtons from '@/components/ui/forms/switchBtns/MNSwitchButtons';
```

---

## Props

| Prop           | Type                        | Required | Default           | Description                                                  |
|----------------|-----------------------------|----------|-------------------|--------------------------------------------------------------|
| `label`        | `string`                    | Yes      | -                 | Text label displayed beside the switch                       |
| `onChange`     | `(value: boolean) => void`  | Yes      | -                 | Callback called when switch state changes                     |
| `value`        | `boolean`                   | No       | `false`           | Initial or controlled value of the switch                     |
| `checkedImage` | `ImageSourcePropType`       | No       | -                 | Image or icon shown inside toggle when switch is ON          |
| `unCheckImage` | `ImageSourcePropType`       | No       | -                 | Image or icon shown inside toggle when switch is OFF         |
| `disabled`     | `boolean`                   | No       | `false`           | Whether the switch is disabled (non-interactive)             |
| `bgOnColor`    | `string`                    | No       | `LIGHTBLUE_COLOR` | Background color of switch when ON                            |
| `bgOffColor`   | `string`                    | No       | `LIGHTBLUE_COLOR` | Background color of switch when OFF                           |
| `circleOn`     | `string`                    | No       | `'transparent'`   | Color of toggle circle when ON                                |
| `circleOff`    | `string`                    | No       | `'transparent'`   | Color of toggle circle when OFF                               |
| `onIcon`       | `string`                    | No       | -                 | Ionicons icon name shown when ON                              |
| `offIcon`      | `string`                    | No       | -                 | Ionicons icon name shown when OFF                             |

---

## Usage Example

```tsx
<MNSwitchButton
    label="Enable notifications"
    value={switchOn}
    onChange={setSwitchOn}
    bgOnColor="#4CAF50"
    bgOffColor="#CCC"
    circleOn="#FFF"
    circleOff="#FFF"
    onIcon="notifications"
    offIcon="notifications-off"
/>
```

---

> **NOTE:**
> All example can be founded in `radio_buttons.tsx`