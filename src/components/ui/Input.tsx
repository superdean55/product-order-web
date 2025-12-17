import React from "react";
import { BorderColor, BorderColorMap, FocusRingColor, FocusRingColorMap, TextColor, TextColorMap } from "../../styles/colors";
import { FocusRingSize, FocusRingSizeMap, FontSize, FontSizeClassMap } from "../../styles/dimensions";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export default function Input({ label, error, ...rest }: InputProps) {
  return (
    <div className="mb-4 text-left">
      <label
        className={`block mb-1 font-medium uppercase ${
          FontSizeClassMap[FontSize.SM]
        } ${TextColorMap[TextColor.LABEL]}`}
        htmlFor={rest.name}
      >
        {label}
      </label>

      <input
        {...rest}
        className={`w-full px-3 py-2 border rounded-md outline-none ${
          TextColorMap[TextColor.TEXT]
        } ${FocusRingSizeMap[FocusRingSize.SM]} 
        ${
          error
            ? `${BorderColorMap[BorderColor.ERROR]} ${TextColorMap[TextColor.ERROR]} ${FocusRingColorMap[FocusRingColor.ERROR]}`
            : `${BorderColorMap[BorderColor.MAIN]} ${FocusRingColorMap[FocusRingColor.PRIMARY]}`
        }`}
      />

      {error && (
        <p
          className={`mt-1 ${FontSizeClassMap[FontSize.SM]} ${
            TextColorMap[TextColor.ERROR]
          }`}
        >
          {error}
        </p>
      )}
    </div>
  );
}
