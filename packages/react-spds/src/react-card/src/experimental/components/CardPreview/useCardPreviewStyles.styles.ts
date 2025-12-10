import type { SlotClassNames } from '@fluentui/react-utilities';
import { makeStyles, mergeClasses } from '@griffel/react';
import { tokens } from '../../../../../tokens/src';

import type { CardPreviewSlots, CardPreviewState } from './CardPreview.types';
import { cardCSSVars } from '../Card/cssVariables';

/**
 * Class names for CardPreview component slots
 * @alpha
 */
export const cardPreviewClassNames: SlotClassNames<CardPreviewSlots> = {
  root: 'spui-CardPreview',
  logo: 'spui-CardPreview__logo',
};

/**
 * CSS variable names used for uniform styling in CardPreview.
 * @alpha
 */
export const cardPreviewCSSVars = {
  cardPreviewMarginHorizontalVar: '--spui-CardPreview-horizontal-margin',
  cardPreviewMarginVerticalVar: '--spui-CardPreview-vertical-margin',
};

const useStyles = makeStyles({
  root: {
    position: 'relative',
    margin: `
      var(${cardPreviewCSSVars.cardPreviewMarginVerticalVar})
      var(${cardPreviewCSSVars.cardPreviewMarginHorizontalVar})
    `,

    [`> :not(.${cardPreviewClassNames.logo})`]: {
      display: 'block',
      height: '100%',
      width: '100%',
    },
  },
  logo: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '32px',
    height: '32px',
    fontSize: tokens.fontSizeBase600,
    backgroundColor: tokens.colorNeutralBackground1,
    boxSizing: 'border-box',
    padding: `${tokens.spacingVerticalXS} ${tokens.spacingHorizontalXS}`,
  },
});

const useLayoutStyles = makeStyles({
  full: {
    // Flush against Card
    [cardPreviewCSSVars.cardPreviewMarginVerticalVar]: `calc(-1 * var(${cardCSSVars.cardPaddingVerticalVar}))`,
    [cardPreviewCSSVars.cardPreviewMarginHorizontalVar]: `calc(-1 * var(${cardCSSVars.cardPaddingHorizontalVar}))`,
  },
  contained: {
    [cardPreviewCSSVars.cardPreviewMarginVerticalVar]:
      tokens.spacingVerticalNone,
    [cardPreviewCSSVars.cardPreviewMarginHorizontalVar]: `calc(-1 * ${tokens.spacingHorizontalS})`,

    [`> :not(.${cardPreviewClassNames.logo})`]: {
      borderRadius: tokens.borderRadiusXLarge,
    },
  },
});

const useLogoStyles = makeStyles({
  full: {
    top: tokens.spacingVerticalM,
    left: tokens.spacingHorizontalM,
    borderRadius: tokens.borderRadiusXLarge,
  },
  contained: { borderBottomRightRadius: tokens.borderRadiusXLarge },
});

/**
 * Applies styling to the CardPreview component based on its state.
 * @param state - The state object for the CardPreview component
 * @returns The updated state object with applied styling.
 * @alpha
 */
export const useCardPreviewStyles = (
  state: CardPreviewState
): CardPreviewState => {
  const { layout } = state;
  const styles = useStyles();
  const layoutStyles = useLayoutStyles();
  const logoStyles = useLogoStyles();

  state.root.className = mergeClasses(
    cardPreviewClassNames.root,
    styles.root,
    layoutStyles[layout],
    state.root.className
  );

  if (state.logo) {
    state.logo.className = mergeClasses(
      cardPreviewClassNames.logo,
      styles.logo,
      logoStyles[layout],
      state.logo.className
    );
  }

  return state;
};
