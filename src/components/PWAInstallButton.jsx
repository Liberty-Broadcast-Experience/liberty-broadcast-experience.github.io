import { useEffect, useState } from "react";

export default function PWAInstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showButton, setShowButton] = useState(false);
  const [isSafari, setIsSafari] = useState(false);
  const [alreadyInstalled, setAlreadyInstalled] = useState(false);

  useEffect(() => {
    // Detect Safari (macOS & iOS)
    const isIOS = /iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    
    setIsSafari(isIOS || isSafari);

    // Check if the app is already installed
    const checkIfInstalled = () => {
      if (
        window.matchMedia("(display-mode: standalone)").matches ||
        window.navigator.standalone
      ) {
        setAlreadyInstalled(true);
      }
    };

    checkIfInstalled(); // Run on component mount

    // Handle Chromium-based browsers
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowButton(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("DOMContentLoaded", checkIfInstalled);
    window.addEventListener("visibilitychange", checkIfInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("DOMContentLoaded", checkIfInstalled);
      window.removeEventListener("visibilitychange", checkIfInstalled);
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
      {alreadyInstalled ? (
        <p className="fallback-text">App is already installed.</p>
      ) : (showButton || isSafari) && (
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
          .fallback-text {
            font-size: var(--sl-text-base);
            color: var(--sl-color-text);
            text-align: left;
            margin-top: 1rem;
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