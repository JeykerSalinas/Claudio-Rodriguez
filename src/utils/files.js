const getFiles = (path) => {
  const fs = require("fs");
  const files = fs.readdirSync(path);
  console.log(files);
  return files;
};
let myFiles = [];
// getFiles("/home/jeyker/Documents/Claudio-Rodriguez/public/img/reviews");
getFiles("/home/jeyker/Documents/CATALOGOS Y LIBROS").map((file) => {
  myFiles.push({
    main: file,
    files: getFiles(`/home/jeyker/Documents/CATALOGOS Y LIBROS/${file}`),
  });
});
