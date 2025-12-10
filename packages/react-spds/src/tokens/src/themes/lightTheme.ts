import { brandSharePoint } from '../global/brandColors';
import type { Theme } from '../types';
import { createLightTheme } from '../utils/createLightTheme';

/**
 * @public
 * SharePoint Design System predefined light theme
 */
export const lightTheme: Theme = { ...createLightTheme(brandSharePoint) };
