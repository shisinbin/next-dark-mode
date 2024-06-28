## Next “Dark Mode” implementation

This repository shows the code used in the “Dark Mode” lessons of [The Joy of React](https://joyofreact.com/).

Specifically, it shows how to set up a “Dark mode” implementation using the `cookies()` helper.

## Different Approaches

Josh's `initial-approach` updates the `data-color-theme` and `style` attributes of the `<html>` tag from within the `DarkLightToggle` component.

My `main` approach does much the same, but tries to do this using context. So there's a `ThemeProvider` component that encapsulates much of the theme logic, where the main benefit is making `DarkLightToggle` leaner.

Discord user Andrew came up with a cool `alternative-approach`. It makes `DarkLightToggle` leaner in much the same way, but there's no reaching into part of the markup owned by another component. The main difference is that the `data-color-theme` and `style` attributes are updated on the `<body>` tag instead of the `<html>` tag.

The flow goes like:

- `layout.js`: substitutes `<body>` for `<ThemedBody>`

- `ThemedBody`: server component, handles grabbing saved theme from cookies

- `ThemeProvider`: provides the theme context, which wraps around the...

- `Body`: uses the theme to help set attributes

There are now 3 files managing the theme but this is necessary. We need one of them (`ThemedBody`) to be a server component so that it can grab that initial cookie, if we're gonna use context then it makes sense to have a separate context file (`ThemeProvider`), then we need a third to use that theme and apply the styles to the `<body>` tag.
