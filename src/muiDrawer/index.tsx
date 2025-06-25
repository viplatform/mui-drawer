import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { Tooltip, Drawer, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LoadingButton from "@mui/lab/LoadingButton";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import _noop from "lodash/noop";
import _isEmpty from "lodash/isEmpty";

import { muiTheme, drawerTypography } from "../muiTheme";
import {
  DRAWER_TYPES,
  DRAWER_CONFIGS,
  TERTIARY_CTA_TYPES,
} from "./constants/muiDrawer.types";
import {
  InformationDrawerProps,
  InputDrawerProps,
} from "./constants/muiDrawer.interfaces";
import { IS_SAFARI } from "./constants/muiDrawer.general";

import "./muiDrawer.scss";

type DrawerProps = InformationDrawerProps | InputDrawerProps;

const MuiDrawer = (props: DrawerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [actionsMaxWidth, setActionsMaxWidth] = useState<string>("50%");
  const drawerRef = useRef<HTMLDivElement>(null);
  const parentTheme = useTheme();
  const currentTheme = _isEmpty(parentTheme)
    ? muiTheme
    : {
        ...parentTheme,
        typography: {
          ...parentTheme.typography,
          ...drawerTypography,
        },
      };

  const subtype =
    props.type === DRAWER_TYPES.INFORMATION
      ? (props as InformationDrawerProps).subtype
      : props.type === DRAWER_TYPES.INPUT
        ? (props as InputDrawerProps).subtype
        : "default";

  const {
    anchor = "right",
    wrapperClassName,
    bodyWrapperClassName,
    open,
    type,
    title,
    subTitle,
    description,
    onClose,
    children,
    actions,
    width,
    maxWidth,
    showActions = true,
    showDivider = true,
    showCloseIcon = true,
    tertiaryCtaType = "default",
    ...rest
  } = props;
  const {
    primaryCtaTitle,
    secondaryCtaTitle,
    isPrimaryCtaLoading = false,
    isPrimaryCtaDisabled,
    isSecondaryCtaLoading = false,
    isSecondaryCtaDisabled,
    onPrimaryCtaClick = _noop,
    onSecondaryCtaClick = _noop,
    tertiaryCtaTitle,
    tertiaryCtaStartIcon,
    isTertiaryCtaLoading = false,
    isTertiaryCtaDisabled,
    onTertiaryCtaClick = _noop,
    primaryCtaTooltipText,
    secondaryCtaTooltipText,
    tertiaryCtaTooltipText,
  } = actions || {};

  const config = DRAWER_CONFIGS[type][subtype] || DRAWER_CONFIGS[type].default;
  const showFooter =
    showActions && (primaryCtaTitle || secondaryCtaTitle || tertiaryCtaTitle);
  const footerCtaCount = [
    primaryCtaTitle,
    secondaryCtaTitle,
    tertiaryCtaTitle,
  ].filter(Boolean).length;

  const handleClose = () => {
    if (config?.DISMISSIBLE === "full") {
      onClose();
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (drawerRef.current) {
        const width = drawerRef.current.getBoundingClientRect().width;

        if (width < 600) setActionsMaxWidth("100%");
        if (width >= 600) setActionsMaxWidth("50%");
        if (width >= 900) setActionsMaxWidth("33%");
        if (width >= 1200) setActionsMaxWidth("25%");
      }
    }, 0); // Small delay to ensure DOM is ready

    return () => clearTimeout(timer);
  }, [drawerRef.current]);

  useEffect(() => setIsOpen(open), [open]);

  return (
    <ThemeProvider theme={currentTheme}>
      <Drawer
        className={classNames("vi-drawer", wrapperClassName)}
        open={isOpen}
        anchor={anchor}
        onClose={handleClose}
        transitionDuration={300}
        {...rest}
      >
        <div ref={drawerRef} style={{ width, maxWidth }} className={classNames('h-fill', IS_SAFARI &&  'safari-flex-container')}>
          {title && (
            <div className="vi-drawer-title">
              <div className="d-f ai-c jc-sb">
                <div className="d-f fd-col gap-8">
                  <Typography variant="semiBoldLabelL">{title}</Typography>
                  {subTitle && (
                    <Typography variant="subtextM">{subTitle}</Typography>
                  )}
                </div>
                {showCloseIcon && (
                  <CloseIcon
                    fontSize="small"
                    className="close-icon"
                    aria-label="Close drawer"
                    onClick={onClose}
                  />
                )}
              </div>
              {description && (
                <Typography
                  component="div"
                  className="description"
                  variant="subtextM"
                >
                  {description}
                </Typography>
              )}
            </div>
          )}
          <div
            className={classNames(
              "drawer-children",
              title && showFooter
                ? "with-header-footer"
                : title
                  ? "with-header"
                  : showFooter
                    ? "with-footer"
                    : "",
              footerCtaCount === 3 ? "three-ctas" : "",
              footerCtaCount === 2 ? "two-ctas" : "",
              footerCtaCount === 1 ? "one-cta" : "",
              showFooter && !showDivider ? "no-divider" : "",
              bodyWrapperClassName
            )}
          >
            {children}
          </div>
          {showFooter && (
            <div
              className={classNames(
                "vi-drawer-actions",
                showDivider ? "divider" : "",
                tertiaryCtaTitle ? "tertiary-cta" : ""
              )}
            >
              {tertiaryCtaTitle && (
                <Tooltip
                  title={isTertiaryCtaDisabled ? tertiaryCtaTooltipText : ""}
                  arrow
                >
                  <LoadingButton
                    className={classNames(
                      tertiaryCtaType === TERTIARY_CTA_TYPES.DESTRUCTIVE
                        ? "tertiary-cta-destructive"
                        : ""
                    )}
                    variant="text"
                    onClick={onTertiaryCtaClick}
                    startIcon={tertiaryCtaStartIcon}
                    loading={isTertiaryCtaLoading}
                    disabled={
                      isTertiaryCtaDisabled !== undefined
                        ? isTertiaryCtaDisabled
                        : !!(isPrimaryCtaLoading || isSecondaryCtaLoading)
                    }
                  >
                    {tertiaryCtaTitle}
                  </LoadingButton>
                </Tooltip>
              )}
              <div
                style={{ width: actionsMaxWidth }}
                className="vi-drawer-action-ctas"
              >
                {secondaryCtaTitle && (
                  <Tooltip
                    title={
                      isSecondaryCtaDisabled ? secondaryCtaTooltipText : ""
                    }
                    arrow
                  >
                    <LoadingButton
                      className="vi-drawer-cta"
                      variant="outlined"
                      onClick={onSecondaryCtaClick}
                      loading={isSecondaryCtaLoading}
                      disabled={
                        isSecondaryCtaDisabled !== undefined
                          ? isSecondaryCtaDisabled
                          : !!(isPrimaryCtaLoading || isTertiaryCtaLoading)
                      }
                    >
                      {secondaryCtaTitle}
                    </LoadingButton>
                  </Tooltip>
                )}
                {primaryCtaTitle && (
                  <Tooltip
                    title={isPrimaryCtaDisabled ? primaryCtaTooltipText : ""}
                    arrow
                  >
                    <LoadingButton
                      className={classNames(
                        "vi-drawer-cta",
                        subtype === "destructive" ? "destructive" : ""
                      )}
                      variant="contained"
                      onClick={onPrimaryCtaClick}
                      loading={isPrimaryCtaLoading}
                      disabled={
                        isPrimaryCtaDisabled !== undefined
                          ? isPrimaryCtaDisabled
                          : !!(isSecondaryCtaLoading || isTertiaryCtaLoading)
                      }
                    >
                      {primaryCtaTitle}
                    </LoadingButton>
                  </Tooltip>
                )}
              </div>
            </div>
          )}
        </div>
      </Drawer>
    </ThemeProvider>
  );
};

export default MuiDrawer;
