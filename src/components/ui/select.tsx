"use client";
import React, { createContext, useContext, useState } from "react";

// Context for select value
const SelectContext = createContext<any>(null);

export const Select = ({ children, ...props }: { children: React.ReactNode; [key: string]: any }) => {
  const [value, setValue] = useState("");
  return (
    <SelectContext.Provider value={{ value, setValue }}>
      <div {...props}>{children}</div>
    </SelectContext.Provider>
  );
};

export const SelectTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ children, ...props }, ref) => {
    const { value } = useContext(SelectContext);
    return (
      <button ref={ref} {...props} type="button">
        {children || value}
      </button>
    );
  }
);
SelectTrigger.displayName = "SelectTrigger";

export const SelectValue = ({ placeholder }: { placeholder?: string }) => {
  const { value } = useContext(SelectContext);
  return <span>{value || placeholder}</span>;
};

export const SelectContent = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export const SelectItem = ({ value, children }: { value: string; children: React.ReactNode }) => {
  const { setValue } = useContext(SelectContext);
  return (
    <div onClick={() => setValue(value)} style={{ cursor: "pointer" }}>
      {children}
    </div>
  );
}; 