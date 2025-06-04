"use client";
import React, { createContext, useContext, useState } from "react";

// Context for select value
interface SelectContextType {
  value: string;
  setValue: (value: string) => void;
}

const SelectContext = createContext<SelectContextType | null>(null);

interface SelectProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Select = ({ children, ...props }: SelectProps) => {
  const [value, setValue] = useState("");
  return (
    <SelectContext.Provider value={{ value, setValue }}>
      <div {...props}>{children}</div>
    </SelectContext.Provider>
  );
};

export const SelectTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ children, ...props }, ref) => {
    const context = useContext(SelectContext);
    if (!context) throw new Error("SelectTrigger must be used within a Select");
    return (
      <button ref={ref} {...props} type="button">
        {children || context.value}
      </button>
    );
  }
);
SelectTrigger.displayName = "SelectTrigger";

export const SelectValue = ({ placeholder }: { placeholder?: string }) => {
  const context = useContext(SelectContext);
  if (!context) throw new Error("SelectValue must be used within a Select");
  return <span>{context.value || placeholder}</span>;
};

export const SelectContent = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export const SelectItem = ({ value, children }: { value: string; children: React.ReactNode }) => {
  const context = useContext(SelectContext);
  if (!context) throw new Error("SelectItem must be used within a Select");
  return (
    <div onClick={() => context.setValue(value)} style={{ cursor: "pointer" }}>
      {children}
    </div>
  );
}; 