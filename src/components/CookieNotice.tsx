import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export const CookieNotice = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const accepted = localStorage.getItem("pp-cookie-consent");
    if (!accepted) setVisible(true);
  }, []);

  if (!visible) return null;
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container py-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-sm">
        <p>
          We use basic analytics to improve your experience. By using this site you agree to our use of cookies.
        </p>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => { localStorage.setItem("pp-cookie-consent", "dismissed"); setVisible(false); }}>Dismiss</Button>
          <Button onClick={() => { localStorage.setItem("pp-cookie-consent", "accepted"); setVisible(false); }}>OK</Button>
        </div>
      </div>
    </div>
  );
};
