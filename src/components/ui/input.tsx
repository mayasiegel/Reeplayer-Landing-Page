import React from "react";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  (props, ref) => {
    return <input ref={ref} className={"bg-zinc-900 focus:bg-zinc-900 text-white " + (props.className || "")} {...props} />;
  }
);

Input.displayName = "Input"; 