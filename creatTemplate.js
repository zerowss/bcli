const fs = require("fs");
const chalk = require("chalk");
const path = require("path");
const process = require("process");
const resolve = (...files) => path.resolve(...files);
const log = message => console.log(chalk.green(`${message}`));
const successLog = message => console.log(chalk.blue(`${message}`));
const errorLog = error => console.log(chalk.red(`${error}`));
let pt, fname;
process.argv.forEach((val, index, array) => {
  if (!array[2]) {
    errorLog("缺少文件路径");
    return;
  }
  const _a = array[2].split("/");
  fname = array[3] || _a[_a.length - 1];
  pt = path.join(__dirname, `src/${array[2]}`);
});
class creatFile {
  constructor(componentsName, pathFile) {
    this.componentsName = componentsName;
    this.pathFile = pathFile;
  }

  init() {
    this.mkFile();
  }

  templateVue() {
    return `<template>
    <div class="${this.componentsName}" > 
        ${this.componentsName}组件
    </div>
</template>
<script src='./script.js'></script>
<style scoped lang='scss' src='./style.scss'></style>
`;
  }

  templateJS() {
    return `export default {
  name: "${this.componentsName}",
  data() {
    return {};
  },
  props: {},
  methods: {}
};
`;
  }

  templateStyle() {
    return `.${this.componentsName}{}`;
  }
  // 创建目录
  mkdir(dir, callback) {
    const absolutePath = resolve(dir);
    let currentFileName;
    if (path.extname(absolutePath)) {
      currentFileName = path.dirname(absolutePath);
    } else {
      currentFileName = absolutePath;
    }

    if (fs.existsSync(currentFileName)) {
      errorLog(`${currentFileName}存在`);
      return;
    }

    fs.mkdir(currentFileName, { recursive: true }, err => {
      if (err) {
        if (err.code == "EEXIST") {
          errorLog(`${currentFileName}文件夹存在`);
          return false;
        } else if (err.code == "ENOENT") {
          errorLog(`${currentFileName}文件夹路径不存在`);
          return false;
        }
      } else {
        successLog(`${currentFileName}文件夹创建成功`);
        callback();
      }
    });
  }

  mkFile() {
    this.mkdir(this.pathFile, err => {
      if (err) {
        return false;
      } else {
        fs.open(
          // path.join(__dirname, `${this.pathFile}/index.vue`),
          `${this.pathFile}/index.vue`,
          `w+`,
          (err, fd) => {
            if (err) {
              errorLog(`创建.vue文件失败`);
              return;
            } else {
              successLog(`创建.vue文件成功`);
              fs.writeFile(fd, this.templateVue(), `utf8`, err1 => {
                if (err1) {
                  errorLog(`写入.vue文件失败`);
                  return;
                }
                successLog(`写入.vue文件成功`);
              });
            }
          }
        );
        fs.open(
          // path.join(__dirname, `${this.pathFile}/script.js`),
          `${this.pathFile}/script.js`,
          `w+`,
          (err, fd) => {
            if (err) {
              errorLog(`创建.js文件失败`);
              return;
            } else {
              successLog(`创建.js文件成功`);
              fs.writeFile(fd, this.templateJS(), `utf8`, err1 => {
                if (err1) {
                  errorLog(`写入.js文件失败`);
                  return;
                }
                successLog(`写入.js文件成功`);
              });
            }
          }
        );
        fs.open(
          // path.join(__dirname, `${this.pathFile}/style.less`),
          `${this.pathFile}/style.scss`,
          `w+`,
          (err, fd) => {
            if (err) {
              errorLog(`创建.scss文件失败`);
              return;
            } else {
              successLog(`创建.scss文件成功`);
              fs.writeFile(fd, this.templateStyle(), `utf8`, err1 => {
                if (err1) {
                  errorLog(`写入.scss文件失败`);
                  return;
                }
                successLog(`写入.scss文件成功`);
              });
            }
          }
        );
      }
    });
  }
}

fname ? new creatFile(fname, pt).init() : errorLog("文件路径错误");
