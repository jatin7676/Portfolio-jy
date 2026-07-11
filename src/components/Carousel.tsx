import { useRef, useEffect, ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  children: ReactNode;
  className?: string;
}

const Carousel = ({ children, className = '' }: CarouselProps) => {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByDir = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    const amount = first ? first.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  // Translate vertical mouse-wheel into horizontal scroll while hovering the
  // track — but release back to the page once we hit either edge.
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return; // already horizontal
      const atStart = el.scrollLeft <= 0;
      const atEnd = Math.ceil(el.scrollLeft + el.clientWidth) >= el.scrollWidth;
      const down = e.deltaY > 0;
      if ((down && !atEnd) || (!down && !atStart)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  return (
    <div className={`relative ${className}`}>
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth pb-2 px-1"
      >
        {children}
      </div>

      <button onClick={() => scrollByDir(-1)} aria-label="Previous" className="carousel-btn left-0 sm:-left-4">
        <ChevronLeft size={20} />
      </button>
      <button onClick={() => scrollByDir(1)} aria-label="Next" className="carousel-btn right-0 sm:-right-4">
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default Carousel;
