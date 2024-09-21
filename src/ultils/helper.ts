// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isEmpty = (value: any): boolean => {
  if (value === null || value === undefined) return true;

  if (typeof value === "string" && value.trim().length === 0) return true;

  if (Array.isArray(value) && value.length === 0) return true;

  if (typeof value === "object" && Object.keys(value).length === 0) return true;

  return false;
};
