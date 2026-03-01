import { useEffect, useCallback } from "react";
import css from "./ImageModal.module.css";
import type { Deal } from "../../features/deals/dealTypes";

interface Props {
  deals: Deal[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  onClose: () => void;
}

export default function ImageModal({ deals, activeIndex, setActiveIndex, onClose }: Props) {
  const prev = useCallback(() => {
    setActiveIndex(activeIndex === 0 ? deals.length - 1 : activeIndex - 1);
  }, [activeIndex, deals.length, setActiveIndex]);

  const next = useCallback(() => {
    setActiveIndex(activeIndex === deals.length - 1 ? 0 : activeIndex + 1);
  }, [activeIndex, deals.length, setActiveIndex]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "auto";
    };
  }, [prev, next, onClose]);

  return (
    <div
      className={css.backdrop}
      onClick={e => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className={css.modal} onClick={e => e.stopPropagation()}>
        <button className={css.prev} onClick={prev}>
          ‹
        </button>

        <div className={css.imageWrapper}>
          <img src={deals[activeIndex].image} alt={deals[activeIndex].title} className={css.image} />
        </div>

        <button className={css.next} onClick={next}>
          ›
        </button>
      </div>
    </div>
  );
}
