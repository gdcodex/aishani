export const store = [
  { name: "Style of text", values: ["bold", "italic", "underline"] },
  {
    name: "sans serif",
    command: "fontName",
    values: [
      "Arial",
      "Helvetica",
      "Verdana",
      "sans serif",
      "Georgia,sans serif",
      "Times, Times New Roman, serif",
      "Arial Narrow, sans-serif",
    ],
  },
  { name: "medium" },
  {
    name: "3",
    command: "fontSize",
    values: ["1", "2", "3", "4", "5", "6", "7"],
  },
  { img: "./Icon-colour.svg", color: "color" },
  {
    none: "none",
    img: "./Icon-highlighter.svg",
    command: "HiliteColor",
    highlight: "highlight",
  },
  { none: "none", x: "x", img: "./Icon-quote.svg" },
  {
    img: "./Icon-align-left.svg",
    list: [
      { src: "./Icon-align-left.svg", val: "justifyLeft" },
      { src: "./Icon-align-center.svg", val: "justifyCenter" },
      { src: "./Icon-align-justify.svg", val: "justifyFull" },
      { src: "./Icon-align-right.svg", val: "justifyRight" },
    ],
  },
  { none: "none", x: "x", unlist: "unlist", img: "./Icon-bullets.svg" },
];
