import { useEffect, useState } from "react";

export default function PWAInstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showButton, setShowButton] = useState(false);
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    // Detect Safari (macOS & iOS)
    const isIOS = /iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    
    setIsSafari(isIOS || isSafari);

    // Handle Chromium-based browsers
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowButton(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log("User choice:", outcome);
      setShowButton(false);
    } else if (isSafari) {
      alert(
        "To install this app on iOS or Safari, tap the Share button and select 'Add to Home Screen'."
      );
    }
  };

  return (
    <>
      {(showButton || isSafari) && (
        <button onClick={handleInstallClick} className="action primary">
          {isSafari ? "Add to Home Screen" : "Install App"}
        </button>
      )}

      {/* Inline Styles */}
      <style>
        {`
          .action {
            display: inline-flex;
            gap: 0.5em;
            align-items: center;
            border-radius: 999rem;
            padding: 0.5rem 1.125rem;
            color: var(--sl-color-white);
            line-height: 1.1875;
            text-decoration: none;
            font-size: var(--sl-text-sm);
            border: none;
            cursor: pointer;
          }
          .action.primary {
            background: var(--sl-color-text-accent);
            color: var(--sl-color-black);
          }
          .action.secondary {
            border: 1px solid;
          }
          .action.minimal {
            padding-inline: 0;
          }
          @media (min-width: 50rem) {
            .action {
              font-size: var(--sl-text-base);
              padding: 1rem 1.25rem;
            }
          }
        `}
      </style>
    </>
  );
}