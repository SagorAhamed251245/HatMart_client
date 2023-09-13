"use client";
import React from "react";
import { FacebookProvider, CustomChat } from "react-facebook";

const Chatbot = () => (
  <div>
    <FacebookProvider appId="624884016421394" chatSupport>
      <CustomChat pageId="138874569299940" minimized={true} />
    </FacebookProvider>
  </div>
);

export default Chatbot;
