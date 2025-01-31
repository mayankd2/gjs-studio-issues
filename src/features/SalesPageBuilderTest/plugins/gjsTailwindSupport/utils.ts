// Handle tailwind's use of slashes in css names
export const gjsTailwindEscapeName = (name: string) =>
  `${name}`.trim().replace(/([^a-z0-9\w-:/]+)/gi, "-");
