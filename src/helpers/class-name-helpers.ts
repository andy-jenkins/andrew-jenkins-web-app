/**
 * Compute the resulting class name from the supplied classes.
 *
 * This function will trim excess whitespace to avoid
 * unevenly spaced class names when some classes are null or undefined.
 */
const getClassName = (...classNames: any[]) => classNames
  .join(' ')
  .trim()
  .replace(/\s+/g, ' ');

export const ClassNameHelpers =  {
  getClassName
}
