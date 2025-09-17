import { useState } from "react";
import "../CopyEmailButton.css"; // importér vores CSS

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);
  const email = "jacob.aa.trier@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <button className="copy-btn" onClick={copyToClipboard}>
      {copied ? (
        <p className="copy-text fade-in-out">
          <img src="img/icons/copy-done.svg" className="icon" alt="copy success" />
          Email Kopieret
        </p>
      ) : (
        <p className="copy-text fade-in">
          <img src="img/icons/copy.svg" className="icon" alt="copy icon" />
          Kopiér min mail adresse
        </p>
      )}
    </button>
  );
};

export default CopyEmailButton;
