// Custom styling for authentication forms
const formStyles = (theme) => ({
  formPaper: {
    margin: "2rem auto",
    width: "80%",
    padding: theme.spacing(3),
    textAlign: "center",
    borderRadius: "1rem",
    [theme.breakpoints.up("md")]: { margin: "4rem auto", width: "40%" },
  },
  fullName: {
    display: "flex",
    "flex-direction": "column",
    "justify-content": "space-between",
    [theme.breakpoints.up("md")]: {
      "flex-direction": "row",
      "justify-content": "space-evenly",
    },
  },
  formButton: {
    margin: "1.5rem 0",
    color: "#fff",
    "background-image": "#114B5F",

    transition: "0.5s",
    "background-size": " 200% auto",

    "&:hover": {
      "background-position": "right center",
    },
    "&:disabled": {
      background: "#456990",
      color: "#E4FDE1",
    },
  },
});
export default formStyles;
