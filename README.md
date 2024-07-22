# time-tracker

This is a lightweight time tracker function I wrote in TypeScript that helps me track how much time has passed since a specific event (categorized as A, B, C, or D for example) occurred. 

I often use this for limiting email notifications or error logging so I don't get spammed or waste space with my own logic.

### Features

- Categorize events with different required time thresholds (ex. A, B, C, D).

- Track the last time each event occurred.

- Check if enough time has passed since the last event for a specific category.

### Installation

This function is not intended to be a standalone package. You can copy and paste the code into your project.

### Usage

```
// TypeScript

import { EventCategory, hasBeenEnoughTime } from './has-been-enough-time'; // Replace './has-been-enough-time' with your file path with this code

const eventCategory: EventCategory = 'A'; // Choose your event category (A, B, C, or D; or, create your own)

if (hasBeenEnoughTime(eventCategory)) {
  console.log('Enough time has passed since the last event of category', eventCategory);
  // Perform your desired action for this event such as logging or sending an email
} else {
  console.log('Not enough time has passed since the last event of category', eventCategory);
}
```

### Explanation

The EventCategory type defines the four possible event categories (A, B, C, D).

The hasBeenEnoughTime function takes an EventCategory as input.

It checks the last recorded time for that category and the configured required time threshold.

If enough time has passed since the last event, it returns true, otherwise false.

### Customization

You can modify the pre-defined time thresholds for each event category (enoughTime property in timeTracker) to suit your needs.

The function currently uses milliseconds for time calculations. You can modify the provided constants (second, minute, hour, day) to represent different time units.

###  Note

This is a basic example and doesn't include features like persistence for storing timestamps across sessions. You can extend this code further (such as with a database or cache connection in the getters and setters) based on your specific requirements.
