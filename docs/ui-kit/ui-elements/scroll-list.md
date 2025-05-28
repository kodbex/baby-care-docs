---
sidebar_position: 10
title: ScrollList
description: MNFlatList is a generic, reusable wrapper around React Native's `FlatList` component.
---

# Purpose

MNFlatList is a generic, reusable wrapper around React Native's `FlatList` component.
It simplifies usage by providing default styling and customizable props for flexible list rendering.

## MNFlatList

### Import

```tsx
import MNFlatList from '@/components/ui/scrollList/MNFlatList';
```

---

### Props

| Prop                    | Type                               | Optional | Description                                        |
|-------------------------|------------------------------------|----------|----------------------------------------------------|
| `data`                  | `T[]`                              | No       | Array of items to be rendered in the list          |
| `renderItem`            | `FlatListProps<T>['renderItem']`   | No       | Function that renders each item                    |
| `keyExtractor`          | `FlatListProps<T>['keyExtractor']` | Yes      | Function to extract a unique key for each item     |
| `ListHeaderComponent`   | `React.ReactElement \| null`       | Yes      | Component rendered at the top of the list          |
| `ListFooterComponent`   | `React.ReactElement \| null`       | Yes      | Component rendered at the bottom of the list       |
| `contentContainerStyle` | `object`                           | Yes      | Additional styles applied to the content container |

---

### Basic Usage

```tsx
 <MNFlatList
    data={children}
    renderItem={childRow}
    contentContainerStyle={styles.flatListContentContainerStyle}
/>

```

---

## MNPaginatedList

`MNPaginatedList` renders a paginated list using `FlatList`. It simulates API data
fetching with pagination, supports both vertical and horizontal scrolling, and shows a loading spinner when new data is
being fetched.

### Import

```tsx
import MNPaginatedList from '@/components/ui/scrollList/MNPaginatedList';
```

---

### Props

| Prop         | Type    | Default | Description                            |
|--------------|---------|---------|----------------------------------------|
| `horizontal` | boolean | false   | If true, renders the list horizontally |

---

### Basic Usage

```tsx
<MNPaginatedList horizontal={false}/>
```

---

> **NOTE:**
> All example can be founded in `paginated_list.tsx`