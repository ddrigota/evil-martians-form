"use client";

import Form from "@/components/Form";
import MyMessage from "@/components/Layout/MyMesage";

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
