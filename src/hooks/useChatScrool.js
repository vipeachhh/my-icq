import React, { useEffect } from "react";

function useChatScroll() {
  const ref = React.useRef();
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  });
  return ref;
}

export { useChatScroll };
