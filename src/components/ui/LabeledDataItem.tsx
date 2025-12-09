import React from "react";
import { Padding, PaddingClassMap, type PaddingType } from "../../styles/dimensions";
import { BackgroundColor, BackgroundColorMap, TextColor, TextColorMap, type BackgroundColorType } from "../../styles/colors";

interface LabeledDataItemProps {
  label: string;
  value: React.ReactNode;
  className?: string;
  padding?: PaddingType
  backgroundColor?: BackgroundColorType 
}

export const LabeledDataItem = ({
  label,
  value,
  className = "",
  padding = Padding.SM,
  backgroundColor = BackgroundColor.CARD_DETAIL
}: LabeledDataItemProps) => {
  return (
    <div
      className={`w-full flex flex-col items-start ${PaddingClassMap[padding]} ${BackgroundColorMap[backgroundColor]} rounded-lg ${className}`}
    >
      <span
        className=
        {`text-[10px] font-medium uppercase tracking-wider 
        ${TextColorMap[TextColor.LABELS]}`}
      
      >
        {label}
      </span>
      <span
        className=
        {`text-lg font-semibold ${TextColorMap[TextColor.MAIN]}`}
        
      
      >
        {value}
      </span>
    </div>
  );
};
