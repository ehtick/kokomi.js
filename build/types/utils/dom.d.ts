declare const preloadImages: (sel?: string) => Promise<unknown>;
declare const preventDefaultAndStopBubble: (e: Event) => void;
declare const detectDeviceType: () => "Mobile" | "Desktop";
export { preloadImages, preventDefaultAndStopBubble, detectDeviceType };
