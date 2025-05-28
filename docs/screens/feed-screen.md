---
sidebar_position: 6
title: Feed Screens
description: The **Feed Screens** serve as a central hub for viewing updates, media posts, and activities related to a child. It offers a scrollable, engaging interface showcasing daily moments, notes from caregivers, and important milestones. The design is focused on usability, media presentation, and structured content delivery.
---

# Purpose

To present daily child-related updates (such as images, text notes, and videos) in a feed-style format. It helps parents
stay informed and connected with their child's day-to-day activities at school or daycare.

## Component

- **FeedList**: A vertical scroll list displaying feed cards (images, videos, and text updates).
- **FeedCard**: Represents an individual post or activity with media, timestamp, and optional notes.
- **ChildSelectorHeader**: Optional child-switching functionality when multiple children are associated with the parent.
- **PullToRefresh**: Enables manual refresh of the feed content.
- **Media Viewer Modal**: Expands images or videos in full screen when tapped.

---

## User Flow

1. User opens the Feed screen; feed data is fetched from the API.
2. FeedList renders feed items sorted by timestamp.
3. User scrolls through the feed; more items load dynamically (infinite scroll or “Load More”).
4. User can pull down to refresh the feed manually.
5. Tapping a media item opens the Media Viewer Modal.
6. User can switch between children profiles using the ChildSelectorHeader.
7. Empty feed state displays a friendly illustration and message if no data is available.

---

## Folder Structure (Related Only)

`ScrollView.tsx`        Themed scrollable container
`shorts.tsx`            Video Shorts
`FeedDetails.tsx`       Images Feed details