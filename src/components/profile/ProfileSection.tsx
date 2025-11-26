interface ProfileSectionProps {
  label: string;
  children: React.ReactNode;
}
export const ProfileSection = ({ label, children }: ProfileSectionProps) => {
  return (
    <>
      <div className="w-full flex flex-col items-start">
        <span
          className="
        text-[12px] font-medium uppercase tracking-wider 
        text-gray-500 dark:text-gray-400
      "
        >
          {label}
        </span>
        <div className="px-2 w-full">{children}</div>
      </div>
    </>
  );
};
