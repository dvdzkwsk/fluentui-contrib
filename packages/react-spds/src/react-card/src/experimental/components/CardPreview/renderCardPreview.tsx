import { renderCardPreview_unstable } from '@fluentui/react-card';
import type { CardPreviewState } from './CardPreview.types';
import { JSXElement } from '@fluentui/react-utilities';

/**
 * Render the final JSX of CardPreview.
 * @param state - CardPreview state object.
 * @returns JSX element of CardPreview.
 * @alpha
 */
export const renderCardPreview = (state: CardPreviewState): JSXElement =>
  renderCardPreview_unstable(state);
