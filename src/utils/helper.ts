export const getPxLength = (text: string) => {
  const tempElem = document.createElement("span");
  tempElem.style.visibility = "hidden";
  tempElem.style.position = "absolute";
  tempElem.style.left = "-9999px";
  tempElem.style.top = "-9999px";
  tempElem.style.fontFamily = "AppleSDGothicNeo";
  tempElem.style.fontStyle = "bold";
  tempElem.style.fontSize = "16";
  tempElem.textContent = text;
  document.body.appendChild(tempElem);

  const width = tempElem.offsetWidth;
  document.body.removeChild(tempElem);
  return width;
};
