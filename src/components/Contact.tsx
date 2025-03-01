// Contact.tsx
import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">General Inquries</h1>
      <p className="text-base">
        For any interest/inquries, please email me at{" "}
        <a
          href="mailto:nikhil.meruva959@gmail.com"
          className="text-blue-500 underline"
        >
          nikhil.meruva959@gmail.com
        </a>
        . I’ll do my best to respond to you within 1-2 business days.
      </p>
    </div>
  );
};

export default Contact;
