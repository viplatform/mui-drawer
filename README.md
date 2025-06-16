# mui-drawer

A reusable drawer component for React applications built with Material-UI (MUI).

## Installation

```bash
# Using npm
npm install mui-drawer

# Using yarn
yarn add mui-drawer
```

## Storybook

You can view all the components and their variations in our [Storybook](https://storybook.viplatform.net/mui-drawer/index.html).

## Features

- Built with Material-UI (MUI) components
- TypeScript support
- Multiple drawer types:
  - Information
  - Input
- Customizable widths and layouts
- Support for primary, secondary, and tertiary actions
- Responsive design
- Theme customization
- Sticky header and footer

## Usage

```tsx
import { MuiDrawer } from "mui-drawer";
import { DRAWER_TYPES, INFORMATION_SUBTYPES } from "mui-drawer";

// Basic Information Drawer
const MyComponent = () => {
  const [open, setOpen] = useState(false);

  return (
    <MuiDrawer
      type={DRAWER_TYPES.INFORMATION}
      subtype={INFORMATION_SUBTYPES.PASSIVE}
      open={open}
      onClose={() => setOpen(false)}
      title="Drawer Title"
      description="This is a drawer description"
      actions={{
        primaryCtaTitle: "Confirm",
        onPrimaryCtaClick: () => {
          // Handle primary action
          setOpen(false);
        },
      }}
    >
      {/* Optional content */}
    </MuiDrawer>
  );
};
```

## Drawer Types

| Type          | Description                         | Subtypes                 | Dismissibility    |
| ------------- | ----------------------------------- | ------------------------ | ----------------- |
| `information` | For displaying information to users | `progress`, `passive`    | Varies by subtype |
| `input`       | For collecting user input           | `default`, `destructive` | `partial`         |

### Subtype Details

#### Information Drawer Subtypes

| Subtype    | Description                            | Dismissibility |
| ---------- | -------------------------------------- | -------------- |
| `progress` | For showing progress or status updates | `partial`      |
| `passive`  | For passive information display        | `full`         |

#### Input Drawer Subtypes

| Subtype       | Description                   | Dismissibility |
| ------------- | ----------------------------- | -------------- |
| `default`     | Standard input                | `partial`      |
| `destructive` | For destructive input actions | `partial`      |

## Props Reference

### Base Props

| Prop                   | Type                        | Required | Default | Description                     |
| ---------------------- | --------------------------- | -------- | ------- | ------------------------------- |
| `type`                 | `"information" \| "input"`  | Yes      | -       | Type of the drawer              |
| `subtype`              | `string`                    | Yes      | -       | Subtype of the drawer           |
| `open`                 | `boolean`                   | Yes      | -       | Controls drawer visibility      |
| `onClose`              | `() => void`                | Yes      | -       | Callback when drawer is closed  |
| `title`                | `string`                    | No       | -       | Drawer title                    |
| `subTitle`             | `string \| React.ReactNode` | No       | -       | Drawer subtitle                 |
| `description`          | `string`                    | No       | -       | Drawer description              |
| `children`             | `React.ReactNode`           | Yes      | -       | Drawer content                  |
| `wrapperClassName`     | `string`                    | No       | -       | Custom class for drawer wrapper |
| `bodyWrapperClassName` | `string`                    | No       | -       | Custom class for body wrapper   |
| `showCloseIcon`        | `boolean`                   | No       | `true`  | Show/hide close icon            |
| `showDivider`          | `boolean`                   | No       | `true`  | Show/hide divider               |
| `showActions`          | `boolean`                   | No       | `true`  | Show/hide action buttons        |
| `width`                | `string`                    | No       | -       | Custom width of the drawer      |
| `maxWidth`             | `string`                    | No       | -       | Maximum width of the drawer     |

### Action Props

| Prop                      | Type              | Required | Default                                         | Description                             |
| ------------------------- | ----------------- | -------- | ----------------------------------------------- | --------------------------------------- |
| `primaryCtaTitle`         | `string`          | No       | -                                               | Primary button text                     |
| `secondaryCtaTitle`       | `string`          | No       | -                                               | Secondary button text                   |
| `tertiaryCtaTitle`        | `string`          | No       | -                                               | Tertiary button text                    |
| `primaryCtaTooltipText`   | `string`          | No       | -                                               | Tooltip text for primary button         |
| `secondaryCtaTooltipText` | `string`          | No       | -                                               | Tooltip text for secondary button       |
| `tertiaryCtaTooltipText`  | `string`          | No       | -                                               | Tooltip text for tertiary button        |
| `isPrimaryCtaLoading`     | `boolean`         | No       | `false`                                         | Show loading state for primary button   |
| `isSecondaryCtaLoading`   | `boolean`         | No       | `false`                                         | Show loading state for secondary button |
| `isTertiaryCtaLoading`    | `boolean`         | No       | `false`                                         | Show loading state for tertiary button  |
| `isPrimaryCtaDisabled`    | `boolean`         | No       | `isSecondaryCtaLoading or isTertiaryCtaLoading` | Disable primary button                  |
| `isSecondaryCtaDisabled`  | `boolean`         | No       | `isPrimaryCtaLoading or isTertiaryCtaLoading`   | Disable secondary button                |
| `isTertiaryCtaDisabled`   | `boolean`         | No       | `isPrimaryCtaLoading or isSecondaryCtaLoading`  | Disable tertiary button                 |
| `onPrimaryCtaClick`       | `() => void`      | No       | -                                               | Primary button click handler            |
| `onSecondaryCtaClick`     | `() => void`      | No       | -                                               | Secondary button click handler          |
| `onTertiaryCtaClick`      | `() => void`      | No       | -                                               | Tertiary button click handler           |
| `tertiaryCtaStartIcon`    | `React.ReactNode` | No       | -                                               | Icon for tertiary button                |

## Responsive Design

The drawer component is fully responsive and adapts to different screen sizes:

- On mobile devices (max-width: 600px):
  - Takes full width and height
  - Stacks action buttons vertically
  - Adjusts content height based on header and footer presence
  - Optimizes spacing for different numbers of action buttons

## Development

### Local Setup

```bash
# Install dependencies
yarn install

# Build package
yarn build
```

### Local Development with yarn link

To test the package in another project locally:

1. In the `mui-drawer` directory:

```bash
# Build the package
yarn build

# Create a global symlink
yarn link
```

2. In your project directory:

```bash
# Link to the package
yarn link "mui-drawer"
```

3. To unlink when done:

```bash
# In your project directory
yarn unlink "mui-drawer"

# In the mui-drawer directory
yarn unlink
```

Note: After making changes to the package, you'll need to:

1. Rebuild the package (`yarn build`)

## License

© [Virtual Internships]
