import { DrawerProps } from "@mui/material";
import {
  INFORMATION_SUBTYPES,
  INPUT_SUBTYPES,
  DRAWER_TYPES,
  TERTIARY_CTA_TYPES,
} from "./muiDrawer.types";

interface IActions {
  primaryCtaTitle?: string;
  secondaryCtaTitle?: string;
  tertiaryCtaTitle?: string;
  primaryCtaTooltipText?: string;
  secondaryCtaTooltipText?: string;
  tertiaryCtaTooltipText?: string;
  isPrimaryCtaLoading?: boolean;
  isPrimaryCtaDisabled?: boolean;
  isSecondaryCtaLoading?: boolean;
  isSecondaryCtaDisabled?: boolean;
  onPrimaryCtaClick?: () => void;
  onSecondaryCtaClick?: () => void;
  tertiaryCtaStartIcon?: React.ReactNode;
  isTertiaryCtaLoading?: boolean;
  isTertiaryCtaDisabled?: boolean;
  onTertiaryCtaClick?: () => void;
}
export interface BaseDrawerProps extends DrawerProps {
  wrapperClassName?: string;
  bodyWrapperClassName?: string;
  onClose: () => void;
  open: boolean;
  showCloseIcon?: boolean;
  title?: string;
  subTitle?: string | React.ReactNode;
  description?: string;
  children: React.ReactNode;
  actions?: IActions;
  showActions?: boolean;
  showDivider?: boolean;
  width?: string;
  maxWidth?: string;
}

export interface InformationDrawerProps extends BaseDrawerProps {
  type: typeof DRAWER_TYPES.INFORMATION;
  subtype: (typeof INFORMATION_SUBTYPES)[keyof typeof INFORMATION_SUBTYPES];
  tertiaryCtaType?: (typeof TERTIARY_CTA_TYPES)[keyof typeof TERTIARY_CTA_TYPES];
}

export interface InputDrawerProps extends BaseDrawerProps {
  type: typeof DRAWER_TYPES.INPUT;
  subtype: (typeof INPUT_SUBTYPES)[keyof typeof INPUT_SUBTYPES];
  tertiaryCtaType?: (typeof TERTIARY_CTA_TYPES)[keyof typeof TERTIARY_CTA_TYPES];
}
