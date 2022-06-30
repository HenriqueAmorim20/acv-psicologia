export const reveal = (
  element: string,
  duration: number,
  distance: number,
  origin: string,
  delay: number,
  interval?: number
) => {
  if (process.client)
    ScrollReveal().reveal(element, {
      duration,
      distance: `${distance}px`,
      origin,
      delay,
      opacity: 0,
      interval: interval ? interval : 0,
    });
};
