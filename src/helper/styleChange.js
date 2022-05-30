export const counterStyle = (value) => {
  const style = {
    color: "gray",
  };

  if (value === 0) {
    return (style.color = "gray");
  } else if (value > 0) {
    return (style.color = "#1cde5a");
  } else if (value < 0) {
    return (style.color = "crimson");
  } else {
    console.error("Style is Invalid");
  }
};
