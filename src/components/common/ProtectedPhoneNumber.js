// components/common/ProtectedPhoneNumber.js
import React, { useEffect, useState } from "react";

// This component protects the phone number from being scraped by bots
const ProtectedPhoneNumber = ({ phoneNumber }) => {
  const [isClient, setIsClient] = useState(false);

  // Only reveal the phone number on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Server-side rendering or bot - show obfuscated number
    return (
      <span className="phone-number">
        {Array.from(phoneNumber).map((_, i) => (
          <span key={i}>•</span>
        ))}
      </span>
    );
  }

  // Client-side rendering - human visitor
  // Reverse the number and apply CSS to display it correctly
  const reversedNumber = phoneNumber.split("").reverse().join("");

  // Format the phone number for display (e.g., XXX-XXX-XXX)
  const formatPhoneNumber = (number) => {
    if (number.length === 9) {
      return `${number.slice(0, 3)}-${number.slice(3, 6)}-${number.slice(
        6,
        9
      )}`;
    }
    return number;
  };

  return (
    <a
      href={`tel:${phoneNumber}`}
      className="phone-number hover:text-secondary transition duration-300"
      aria-label="Zadzwoń do nas"
    >
      {formatPhoneNumber(reversedNumber)}
    </a>
  );
};

export default ProtectedPhoneNumber;
