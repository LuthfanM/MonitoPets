const determineValue = (status: string): string => {
  switch (status) {
    case "justify":
      return "center";
    case "right":
      return "flex-end";
    case "left":
      return "left";
    default:
      return "center";
  }
};

export { determineValue };
