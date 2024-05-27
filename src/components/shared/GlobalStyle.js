import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body,
  html{
    margin: 0;
    padding: 0;
    height: 100%;
    text-align: center;
  }

  html{
    scroll-snap-type: y mandatory;
    timeline-scope: --sectionscroller;
  }

  /* Hide scrollbar for Chrome, Safari and Opera */
  body::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  body {
    -ms-overflow-style: none;  /* IE and Edge */
  }

  .section {
    /* Creating a snapping rule on the section element */
    scroll-snap-align: start;
    scroll-snap-stop: always;
    view-timeline: --section;

    /* Set each section to the full dynamic height of the viewport */
    height: 100dvh;
  }
`

export default GlobalStyle