import React from "react";
import {
  FontSize,
  FontSizeClassMap,
  PaddingSize,
  PaddingSizeMap,
  type PaddingType,
} from "../../styles/dimensions";
import {
  BackgroundColor,
  BackgroundColorMap,
  TextColor,
  TextColorMap,
  type BackgroundColorType,
} from "../../styles/colors";

interface LabeledDataItemProps {
  label: string;
  value: React.ReactNode;
  className?: string;
  padding?: PaddingType;
  backgroundColor?: BackgroundColorType;
}

export const LabeledDataItem = ({
  label,
  value,
  className = "",
  padding = PaddingSize.SM,
  backgroundColor = BackgroundColor.CARD_DETAIL,
}: LabeledDataItemProps) => {
  return (
    <div
      className={`w-full flex flex-col items-start ${PaddingSizeMap[padding]} ${BackgroundColorMap[backgroundColor]} rounded-lg ${className}`}
    >
      <span
        className={`${
          FontSizeClassMap[FontSize.XS]
        } font-medium uppercase tracking-wider 
        ${TextColorMap[TextColor.LABEL]}`}
      >
        {label}
      </span>
      <span
        className={`${FontSizeClassMap[FontSize.LG]} font-semibold ${
          TextColorMap[TextColor.MAIN]
        }`}
      >
        {value}
      </span>
    </div>
  );
};
