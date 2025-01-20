const { dest, series, src } = require("gulp");
let imagemin;

const images = series(
  async () => {
    imagemin = await import("gulp-imagemin");
  },
  () =>
    src("./src/images/**/*")
      .pipe(
        imagemin.default(
          [
            imagemin.mozjpeg({ quality: 60, progressive: true }),
            imagemin.optipng({ optimizationLevel: 5, interlaced: null }),
          ],
          {
            silent: true,
          }
        )
      )
      .pipe(dest("./dist/images"))
);

module.exports = images;
