import { useCallback, useEffect, useRef, useState } from "react";

export function useCarousel(itemCount: number) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(itemCount > 1);

  const updatePosition = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const items = Array.from(viewport.querySelectorAll<HTMLElement>("[data-carousel-item]"));
    if (!items.length) return;
    const viewportCenter = viewport.scrollLeft + viewport.clientWidth / 2;
    const closestIndex = items.reduce((closest, item, index) => {
      const center = item.offsetLeft + item.offsetWidth / 2;
      const closestItem = items[closest];
      const closestCenter = closestItem.offsetLeft + closestItem.offsetWidth / 2;
      return Math.abs(center - viewportCenter) < Math.abs(closestCenter - viewportCenter) ? index : closest;
    }, 0);
    setActiveIndex(closestIndex);
    setCanGoBack(viewport.scrollLeft > 4);
    setCanGoForward(viewport.scrollLeft + viewport.clientWidth < viewport.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updatePosition();
    const viewport = viewportRef.current;
    if (!viewport) return;
    const resizeObserver = new ResizeObserver(updatePosition);
    resizeObserver.observe(viewport);
    return () => resizeObserver.disconnect();
  }, [itemCount, updatePosition]);

  const move = (direction: -1 | 1) => {
    const viewport = viewportRef.current;
    viewport?.scrollBy({ left: direction * viewport.clientWidth * 0.9, behavior: "smooth" });
  };

  return { viewportRef, activeIndex, canGoBack, canGoForward, move, updatePosition };
}
