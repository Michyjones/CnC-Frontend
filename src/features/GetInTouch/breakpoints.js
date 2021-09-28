import { css } from "styled-components";

export default (
  cssProp = "padding",
  values = [],
  mediaQueryType = "max-width"
) => {
  const breakpointProps = values.reduce((mediaQueries, value) => {
    const [screenBreakpoint, cssPropBreakpoint] = [
      Object.keys(value)[0],
      Object.values(value)[0],
    ];
    mediaQueries += `
    @media screen and (${mediaQueryType}: ${screenBreakpoint}px) {
      ${cssProp}: ${cssPropBreakpoint};
    }
    `;
    return mediaQueries;
  }, "");
  return css([breakpointProps]);
};
