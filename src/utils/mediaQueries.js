const mediaQueries = [
  // Smartphones
  //height beyond 699px
  {
    mqCondition:
      "(min-width: 320px) and (max-width: 500px) and (min-height: 699px) and (orientation: portrait)",
    navHeight: "100vh",
    navWidth: "200vw",
    navTranslateX: "0vw",
    navLinkTranslateX: "50vw",
    navLinkTranslateY: "-200%",
    linkFontSize: "3rem",
    linkHeight: "3rem",
  },
  //height less than 700px
  {
    mqCondition:
      "(min-width: 320px) and (max-width: 500px) and (max-height: 700px) and (orientation: portrait)",
    navHeight: "100vh",
    navWidth: "200vw",
    navTranslateX: "0vw",
    navLinkTranslateX: "50vw",
    navLinkTranslateY: "-300%",
    linkFontSize: "3rem",
    linkHeight: "3.5rem",
  },
  //Tablets/Bigger Smartphones height less than 800px
  {
    mqCondition:
      "(min-width: 500px) and (max-width: 900px) and (max-height: 800px) ",
    navHeight: "100vh",
    navWidth: "175vw",
    navTranslateX: "0vw",
    navLinkTranslateX: "50vw",
    navLinkTranslateY: "-250%",
    linkFontSize: "6rem",
    linkHeight: "6rem",
  },
  //Tablets/Bigger Smartphones height beyond 800px
  {
    mqCondition:
      "(min-width: 500px) and (max-width: 900px) and (min-height: 799px) ",
    navHeight: "100vh",
    navWidth: "175vw",
    navTranslateX: "0vw",
    navLinkTranslateX: "50vw",
    navLinkTranslateY: "-225%",
    linkFontSize: "6rem",
    linkHeight: "6rem",
  },
  // Large screens
  //Tablets/Bigger Smartphones height less than 800px
  {
    mqCondition: "(min-width: 900px) ",
    navHeight: "100vh",
    navWidth: "150vw",
    navTranslateX: "0vw",
    navLinkTranslateX: "50vw",
    navLinkTranslateY: "-250%",
    linkFontSize: "6rem",
    linkHeight: "6rem",
  },
];

export default mediaQueries;
