---
sidebar_position: 14
title: TopTabs
description: TopTabs is a customizable top tab navigation component for React Native. It provides a clean, animated underline indicator and supports rendering dynamic tab content based on the selected tab.
---

# TabBar

## Import

```tsx
import TopTabs from '@/components/ui/tabs/TopTabs'; 
```

---

## Props

| Prop           | Type        | Default      | Description                                                           |
|----------------|-------------|--------------|-----------------------------------------------------------------------|
| `tabs`         | `TabItem[]` | **Required** | An array of tab objects containing a `label` and a `render` function. |
| `defaultIndex` | `number`    | `0`          | Index of the tab to show initially.                                   |

---

## Basic Usage

```tsx
const MyTabs = () => (
    <TopTabs
        defaultIndex={1}
        tabs={[
            {
                label: 'Overview',
                render: () => <Text>This is the Overview tab.</Text>,
            },
            {
                label: 'Details',
                render: () => <Text>This is the Details tab.</Text>,
            },
        ]}
    />
);
```

---

> **NOTE:**
> All example can be founded in `tabs_preview.tsx`