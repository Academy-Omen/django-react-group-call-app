// Custom room styles
const roomStyles = (theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  gridContainer: {
    width: "100%",
    display: "grid",
    "grid-template-columns": "repeat(1, 1fr)",
    "grid-template-rows": "auto",
    gap: "1rem",
    "justify-content": "center",
    "grid-template-areas": `
    "description"
    "buttons"
    "copy_btn";`,

    [theme.breakpoints.up("md")]: {
      "grid-template-columns": "3fr, 1fr",
      "grid-template-areas": `
    "description buttons"
    "copy_btn copy_btn"`,
    },
  },
  gridItemA: {
    width: "100%",
    "grid-area": "description",
  },
  gridItemB: {
    width: "100%",
    "grid-area": "buttons",
  },
  gridItemC: {
    "grid-area": "copy_btn",
  },

  enterBtn: {
    "background-image": "#114B5F",

    transition: "0.5s",
    "background-size": " 200% auto",

    "&:hover": {
      "background-position": "right center",
    },
  },
});
export default roomStyles;
