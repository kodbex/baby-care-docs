---
sidebar_position: 5
title: MNDatePicker
description: MNDatePicker is a customizable React Native date and time picker component
---

# Purpose

`MNDatePicker` is a customizable React Native date and time picker component built using
`@react-native-community/datetimepicker` and a BottomSheet for modal presentation. It supports various modes (date,
time, datetime, countdown) and display styles.


---

## Import

```tsx
import MNDatePicker from '@/components/ui/forms/dateTimePicker/MNDatePicker';
```

---

## Props

| Prop           | Type                                              | Default      | Description                                                                                     |
|----------------|---------------------------------------------------|--------------|-------------------------------------------------------------------------------------------------|
| `onChange`     | `(date: string \| Date) => void`                  | **Required** | Callback called when the date/time changes or picker is dismissed. Receives selected date/time. |
| `calendarMode` | `'date' \| 'time' \| 'datetime' \| 'countdown'`   | `'date'`     | Mode of the picker, selects what to pick: date, time, both, or countdown timer.                 |
| `displayMode`  | `'default' \| 'compact' \| 'inline' \| 'spinner'` | `'inline'`   | Display style of the picker (platform dependent).                                               |
| `pickerHeight` | `number`                                          | `350`        | Height of the BottomSheet modal containing the picker.                                          |
| `maximumDate`  | `Date`                                            | `-`  | Optional maximum date allowed for selection.                                                    |
| `minimumDate`  | `Date`                                            | `-`  | Optional minimum date allowed for selection.                                                    |
| `title`        | `string`                                          | `''`         | Optional title text displayed on the BottomSheet modal.                                         |

---

## Usage Example

```tsx
<MNSingleButton
    text={'Open Date & Time'}
    icon={'calendar-outline'}
    fullWidth={false}
    onPress={() => {
        dateTimePicker.current?.openPicker();
    }}
/>
<MNDatePicker
    onChange={(value) => {
        debug(value, 'DATE PICKER');
    }}
    ref={dateTimePicker}
    calendarMode={'datetime'}
    pickerHeight={450}
/>
```

---

> **NOTE:**
> All example can be founded in `date_time_picker.tsx`