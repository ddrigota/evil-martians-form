"use client";

import Form from "@/components/Form";
import MyMessage from "@/components/Layout/MyMessage";

export default function Home() {
  return (
    <>
      <Form
        title="Login"
        subtitle="Enter your email and password"
      />
      <MyMessage />
    </>
  );
}
