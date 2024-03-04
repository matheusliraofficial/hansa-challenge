import { AvailableColorsT } from './ProgressIndicator.types'

export const gradientMap: Record<AvailableColorsT, Array<string>> = {
  blue: ['#5B5BFF', '#44C4ED'],
  green: ['#4A9D2F', '#AEFCC9'],
  yellow: ['#F0C52B', '#F8FFA9'],
  orange: ['#EE8132', '#FFF3B5'],
  purple: ['#5B5BFF', '#DECAF2'],
};

export const baseColorMap: Record<AvailableColorsT, string> = {
  blue: 'stroke-blue-500',
  green: 'stroke-green-400',
  yellow: 'stroke-yellow-400',
  orange: 'stroke-orange-400',
  purple: 'stroke-purple-500',
};