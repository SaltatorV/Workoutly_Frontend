export function convertCmToIn(value) {
  return Math.round((value / 2.54) * 10) / 10;
}

export function convertInToCm(value) {
  return Math.round(value * 2.54);
}

export function convertKgToLbs(value) {
  return Math.round(value * 2.2 * 10) / 10;
}

export function convertLbsToKg(value) {
  return Math.round(value / 2.2);
}
