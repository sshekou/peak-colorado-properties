import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useAnalytics = () => {
  const location = useLocation();
  useEffect(() => {
    // Stub analytics – replace with real provider later
    console.info("page_view", { path: location.pathname, ts: Date.now() });
  }, [location.pathname]);
};
