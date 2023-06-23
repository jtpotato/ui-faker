"use client";

import ScreenshotBuilder from "./screenshotBuilder";
import { useState } from "react";
import { MessageType } from "./messageType";
import Faker from "./faker";

export default function Home() {
  const [message, setMessage] = useState<MessageType>();

  return (
    <>
      <div className="flex flex-row">
        <div className="w-1/4 p-4">
          <ScreenshotBuilder message={message!} messageUpdater={setMessage} />
        </div>
        <Faker message={message!} />
      </div>
    </>
  );
}
