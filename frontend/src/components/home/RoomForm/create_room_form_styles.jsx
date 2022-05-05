// Custom form styles
const createRoomFormStyles = (theme) => ({
  formPaper: {
    padding: "2rem",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    [theme.breakpoints.up("md")]: { width: "40%" },
  },
  createRoomBtn: {
    margin: "1rem 0",
    // color: "#fff",
    background: "#114B5F",

    transition: "0.5s",
    "background-size": " 200% auto",

    "&:hover": {
      "background-position": "right center",
      background: "#114B5F",
    },
    "&:disabled": {
      background: "#114B5F",
      color: "#E4FDE1",
    },
  },
});
export default createRoomFormStyles;
