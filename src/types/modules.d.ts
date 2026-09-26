// These libraries predate bundled TypeScript types.

declare module "scroll-manager" {
  interface ScrollOptions {
    element: HTMLElement;
    to?: number;
    duration: number;
    ease: string;
  }
  export default class ScrollManager {
    scrollTo(options: ScrollOptions): void;
    scrollTop(options: Omit<ScrollOptions, "to">): void;
  }
}

declare module "is-mobile" {
  export default function isMobile(): boolean;
}

declare module "three" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const THREE: any;
  export = THREE;
}
