export const formatDate = (dateString: string | null) => {
  if (!dateString) {
    return "";
  }
  try {
    return new Date(dateString).toLocaleDateString("hr-HR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return "invalid Date";
  }
};
