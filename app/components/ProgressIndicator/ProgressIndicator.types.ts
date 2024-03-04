export const AvailableColors = ['blue', 'green', 'yellow', 'orange', 'purple'] as const

export type AvailableColorsT = typeof AvailableColors[number]

export interface ProgressIndicatorProps {
  /**
   * The percentage of progress to be shown
   */
  percentComplete: number;

  /**
   * The color style
   */
  color: AvailableColorsT;
}