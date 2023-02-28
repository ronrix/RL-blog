import { RefObject, useEffect, useState } from "react";

export default function useTargetElement(footerRef: RefObject<HTMLDivElement>, reload?: boolean) {
  const [show, setShow] = useState<Boolean>(true);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShow(false);
        } else {
          setShow(true);
        }
      });
    });

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [footerRef, reload]);

  return show;
}