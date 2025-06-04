import React from "react";

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  (props, ref) => {
    return <textarea ref={ref} className={"bg-zinc-900 focus:bg-zinc-900 text-white " + (props.className || "")} {...props} />;
  }
);

Textarea.displayName = "Textarea"; 