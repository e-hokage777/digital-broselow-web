import React from "react";
import GradientBackground from "./gradient-background";

export default function ThreeDBackgroundContainer(props: {
  children: Readonly<React.ReactNode>;
}) {
  return (
    <div className="relative h-screen">
      <div className="size-full fixed left-0 top-0 -z-1">
        <div
          className="size-full absolute left-0 top-0"
          style={{ backgroundColor: "#c0e8f0" }}
        />
        <GradientBackground />
        <div
          className="size-full absolute left-0 top-0"
          style={{ backdropFilter: "blur(200px)" }}
        />
      </div>
      <div className="container mx-auto">{props.children}</div>
    </div>
  );
}
