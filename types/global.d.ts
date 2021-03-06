export {}

declare global {
  namespace React {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface HTMLAttributes<T> {
      content?: boolean | number | string | undefined
    }

    interface Navigator {
      canShare?: boolean;
      share? : (data? : ShareData) => Promise<void>;
    }
  }

  interface Navigator {
    canShare?: boolean;
  }
}