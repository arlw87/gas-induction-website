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
