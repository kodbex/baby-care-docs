---
sidebar_position: 1
title: Accordion
description: A reusable accordion UI component that displays collapsible sections with titles and content. It supports multiple open items, customizable icons, optional borders, and an overall clean design.
---

## Default Accordion

To provide an easy-to-use accordion list where users can expand or collapse multiple items independently. It can
optionally show a main title and description above the accordion items and supports flexible styling and icon
customization.

---

### Key Components

- **AccordionItem**  
  Represents each accordion entry with an `id`, `title`, and `content`.

- **ThemedText**  
  Used for displaying all text content with theming support.

- **TouchableOpacity**  
  Wraps each accordion header to capture user taps for toggling.

- **Ionicons**  
  Displays the open/close icons on each accordion header, customizable via props.

---

### User Flow

1. The component optionally displays a main `title` and a descriptive `desc` at the top.
2. Each accordion item is rendered with a clickable header showing its title and an icon indicating expanded/collapsed
   state.
3. When the user taps an accordion header:
    - If the item was closed, it opens (content becomes visible).
    - If the item was open, it closes (content hidden).
4. Multiple items can be open simultaneously by default but can be controlled via the `openItems` prop.
5. Accordion styles (bordered or not) and icons are customizable.

### Props

| Prop             | Type              | Default          | Description                                          |
|------------------|-------------------|------------------|------------------------------------------------------|
| `data`           | `AccordionItem[]` | **required**     | Array of accordion items to render.                  |
| `title`          | `string`          | `-`      | Optional main title shown above all accordion items. |
| `desc`           | `string`          | `-`      | Optional description shown below the main title.     |
| `openIcon`       | `string`          | `'chevron-up'`   | Icon name for expanded state (Ionicons).             |
| `closeIcon`      | `string`          | `'chevron-down'` | Icon name for collapsed state (Ionicons).            |
| `shouldShowIcon` | `boolean`         | `true`           | Whether to show the expand/collapse icon.            |
| `openItems`      | `(string          | number)[]`       | `[0]`                                                | Array of IDs representing which items are initially open.    |
| `isBordered`     | `boolean`         | `false`          | Whether accordion items have a bordered card style.  |

---

## Animated Accordion

A reusable animated accordion UI component for React Native that displays collapsible sections with titles and content.
It supports multiple open items, animated transitions, customizable icons, optional borders, and a smooth user
experience.

---

### Purpose

To provide an expandable and collapsible list of items with animated transitions. This component supports multiple open
sections simultaneously, optional heading and description, and configurable icons for open/close states.

---

### `AccordionItem`

Represents a single accordion section.

| Field     | Type               | Description                              |
|-----------|--------------------|------------------------------------------|
| `id`      | `string \| number` | Unique identifier for the item.          |
| `title`   | `string`           | Title displayed on the accordion header. |
| `content` | `string`           | Content revealed when expanded.          |

---

### Props

| Prop Name        | Type              | Default          | Description                                        |
|------------------|-------------------|------------------|----------------------------------------------------|
| `data`           | `AccordionItem[]` | **Required**     | List of items to display in the accordion.         |
| `title`          | `string`          | `-`      | Main heading displayed above the accordion list.   |
| `desc`           | `string`          | `-`      | Description displayed under the main title.        |
| `openIcon`       | `string`          | `'chevron-up'`   | Icon when the section is expanded.                 |
| `closeIcon`      | `string`          | `'chevron-down'` | Icon when the section is collapsed.                |
| `shouldShowIcon` | `boolean`         | `true`           | Whether to show toggle icons in headers.           |
| `openItems`      | `number[]`        | `[0]`            | List of initially expanded item IDs.               |
| `isBordered`     | `boolean`         | `false`          | Whether each section should have a bordered style. |

---

##  Example Usage

> **NOTE:**
> All example can be founded in `accordions.tsx`

