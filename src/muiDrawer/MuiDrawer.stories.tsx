import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import MuiDrawer from "./index";
import {
  DRAWER_TYPES,
  INFORMATION_SUBTYPES,
  INPUT_SUBTYPES,
  TERTIARY_CTA_TYPES,
} from "./constants/muiDrawer.types";
import { Button } from "@mui/material";
import { action } from "@storybook/addon-actions";
import { IActions } from "./constants/muiDrawer.interfaces";

const meta = {
  title: "Components/MuiDrawer",
  component: MuiDrawer,
  parameters: {
    layout: "centered",
    docs: {
      story: {
        inline: false,
        iframeHeight: "500px",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: Object.values(DRAWER_TYPES),
      description: "The type of drawer",
    },
    subtype: {
      control: "select",
      options: [
        ...Object.values(INFORMATION_SUBTYPES),
        ...Object.values(INPUT_SUBTYPES),
      ],
      description: "The subtype of drawer",
    },
    anchor: {
      control: "select",
      options: ["left", "right", "top", "bottom"],
      description: "The anchor of the drawer",
    },
    open: {
      control: "boolean",
      description: "If true, the drawer is open",
    },
    onClose: {
      action: "closed",
      description: "Callback fired when the component requests to be closed",
    },
    width: {
      control: "text",
      description: 'The width of the drawer (e.g., "300px", "50%")',
    },
    maxWidth: {
      control: "text",
      description: 'The maximum width of the drawer (e.g., "600px")',
    },
    wrapperClassName: {
      control: "text",
      description: "CSS class for the drawer wrapper",
    },
    bodyWrapperClassName: {
      control: "text",
      description: "CSS class for the drawer body wrapper",
    },
    title: {
      control: "text",
      description: "The title of the drawer",
    },
    subTitle: {
      control: "text",
      description: "The subtitle of the drawer",
    },
    description: "The description text of the drawer",
    showActions: {
      control: "boolean",
      description: "If true, the action buttons are shown",
    },
    showDivider: {
      control: "boolean",
      description: "If true, a divider is shown above actions",
    },
    showCloseIcon: {
      control: "boolean",
      description: "If true, the close icon is shown",
    },
    tertiaryCtaType: {
      control: "select",
      options: Object.values(TERTIARY_CTA_TYPES),
      description: "The type of the tertiary CTA",
    },
    primaryCtaTitle: {
      control: "text",
      description: "Title for the primary call-to-action button",
    },
    secondaryCtaTitle: {
      control: "text",
      description: "Title for the secondary call-to-action button",
    },
    tertiaryCtaTitle: {
      control: "text",
      description: "Title for the tertiary call-to-action button",
    },
    primaryCtaTooltipText: {
      control: "text",
      description: "Tooltip text for the primary CTA when disabled",
    },
    secondaryCtaTooltipText: {
      control: "text",
      description: "Tooltip text for the secondary CTA when disabled",
    },
    tertiaryCtaTooltipText: {
      control: "text",
      description: "Tooltip text for the tertiary CTA when disabled",
    },
    isPrimaryCtaLoading: {
      control: "boolean",
      description: "If true, the primary CTA is in a loading state",
    },
    isPrimaryCtaDisabled: {
      control: "boolean",
      description: "If true, the primary CTA is disabled",
    },
    isSecondaryCtaLoading: {
      control: "boolean",
      description: "If true, the secondary CTA is in a loading state",
    },
    isSecondaryCtaDisabled: {
      control: "boolean",
      description: "If true, the secondary CTA is disabled",
    },
    isTertiaryCtaLoading: {
      control: "boolean",
      description: "If true, the tertiary CTA is in a loading state",
    },
    isTertiaryCtaDisabled: {
      control: "boolean",
      description: "If true, the tertiary CTA is disabled",
    },
    tertiaryCtaStartIcon: {
      control: "text",
      description:
        "The start icon for the tertiary CTA (e.g., a letter or symbol)",
    },
    onPrimaryCtaClick: { action: "primaryCtaClick" },
    onSecondaryCtaClick: { action: "secondaryCtaClick" },
    onTertiaryCtaClick: { action: "tertiaryCtaClick" },
  },
};

export default meta;

const getActionsFromArgs = (args: Record<string, any>): IActions => {
  return {
    primaryCtaTitle: args.primaryCtaTitle,
    secondaryCtaTitle: args.secondaryCtaTitle,
    tertiaryCtaTitle: args.tertiaryCtaTitle,
    primaryCtaTooltipText: args.primaryCtaTooltipText,
    secondaryCtaTooltipText: args.secondaryCtaTooltipText,
    tertiaryCtaTooltipText: args.tertiaryCtaTooltipText,
    isPrimaryCtaLoading: args.isPrimaryCtaLoading,
    isPrimaryCtaDisabled: args.isPrimaryCtaDisabled,
    isSecondaryCtaLoading: args.isSecondaryCtaLoading,
    isSecondaryCtaDisabled: args.isSecondaryCtaDisabled,
    onPrimaryCtaClick: args.onPrimaryCtaClick,
    onSecondaryCtaClick: args.onSecondaryCtaClick,
    tertiaryCtaStartIcon: args.tertiaryCtaStartIcon,
    isTertiaryCtaLoading: args.isTertiaryCtaLoading,
    isTertiaryCtaDisabled: args.isTertiaryCtaDisabled,
    onTertiaryCtaClick: args.onTertiaryCtaClick,
  };
};

export const InformationDrawer = {
  render: (args: any) => {
    const [open, setOpen] = useState(false);
    const actions = getActionsFromArgs(args);
    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open Information Drawer
        </Button>
        <MuiDrawer
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          actions={actions}
        />
      </>
    );
  },
  args: {
    type: DRAWER_TYPES.INFORMATION,
    subtype: INFORMATION_SUBTYPES.PASSIVE,
    anchor: "right",
    title: "Information Drawer",
    subTitle: "This is a passive information drawer",
    description: "Use this drawer to display information to users.",
    children: (
      <div className="drawer-children">
        <p>This is the content of the information drawer.</p>
      </div>
    ),
    primaryCtaTitle: "Confirm",
    secondaryCtaTitle: "Cancel",
    onPrimaryCtaClick: action("primaryCtaClick"),
    onSecondaryCtaClick: action("secondaryCtaClick"),
    showActions: true,
    showDivider: true,
    showCloseIcon: true,
  },
};

export const InputDrawer = {
  render: (args: any) => {
    const [open, setOpen] = useState(false);
    const actions = getActionsFromArgs(args);
    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open Input Drawer
        </Button>
        <MuiDrawer
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          actions={actions}
        />
      </>
    );
  },
  args: {
    type: DRAWER_TYPES.INPUT,
    subtype: INPUT_SUBTYPES.DEFAULT,
    anchor: "right",
    title: "Input Drawer",
    subTitle: "This is a default input drawer",
    description: "Use this drawer to collect input from users.",
    children: (
      <div className="drawer-children">
        <p>This is the content of the input drawer.</p>
      </div>
    ),
    primaryCtaTitle: "Save",
    secondaryCtaTitle: "Cancel",
    tertiaryCtaTitle: "Delete",
    onPrimaryCtaClick: action("primaryCtaClick"),
    onSecondaryCtaClick: action("secondaryCtaClick"),
    onTertiaryCtaClick: action("tertiaryCtaClick"),
    tertiaryCtaStartIcon: "💡",
    showActions: true,
    showDivider: true,
    showCloseIcon: true,
  },
};

export const DestructiveInputDrawer = {
  render: (args: any) => {
    const [open, setOpen] = useState(false);
    const actions = getActionsFromArgs(args);
    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open Destructive Drawer
        </Button>
        <MuiDrawer
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          actions={actions}
        />
      </>
    );
  },
  args: {
    type: DRAWER_TYPES.INPUT,
    subtype: INPUT_SUBTYPES.DESTRUCTIVE,
    anchor: "right",
    title: "Delete Confirmation",
    subTitle: "This is a destructive input drawer",
    description:
      "Use this drawer for destructive actions that require confirmation.",
    children: (
      <div className="drawer-children">
        <p>Are you sure you want to delete this item?</p>
      </div>
    ),
    primaryCtaTitle: "Delete",
    secondaryCtaTitle: "Cancel",
    onPrimaryCtaClick: action("primaryCtaClick"),
    onSecondaryCtaClick: action("secondaryCtaClick"),
    showActions: true,
    showDivider: true,
    showCloseIcon: true,
  },
};
