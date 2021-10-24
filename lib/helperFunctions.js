// import path from "path";
// import matter from "gray-matter";
// import fs from "fs";

// export const returnGetStaticProps = (sectionName) => {
//   console.log("test");

//   //get files from the content/non-clinical folder
//   const files = fs.readdirSync(path.join("content", sectionName));

//   //get pages and front matter
//   const pages = files.map((filename) => {
//     const slug = filename.replace(".md", "");

//     //get front matter
//     const markdownWithMatter = fs.readFileSync(
//       path.join("content", "non-clinical", filename),
//       "utf-8"
//     );

//     const { data: frontMatter } = matter(markdownWithMatter);

//     return {
//       slug,
//       frontMatter,
//     };
//   });

//   return pages;
// };

import sections from "../config/sections";

export const getMediaTypeColor = (type) => {
  switch (type.toUpperCase()) {
    case "PDF":
      return "#7eb52c";
    case "VIDEO":
      return "#b52c7e";
    default:
      return "#eee";
  }
};

export const getSectionDetails = (url) => {
  return sections.find((section) => url.includes(section.link));
};

export const randomNumberArray = (numOfElements) => {
  return [2, 5, 1];
};

//https://css-tricks.com/snippets/javascript/lighten-darken-color/
export const LightenDarkenColor = (col, amt) => {
  var usePound = false;

  if (col[0] == "#") {
    col = col.slice(1);
    usePound = true;
  }

  var num = parseInt(col, 16);

  var r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  var b = ((num >> 8) & 0x00ff) + amt;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  var g = (num & 0x0000ff) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
};
