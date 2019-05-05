import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
export default {
  name: "article-edit",
  data() {
    return {
      ruleForm: {
        header_cover_url: "",
        title: "",
        summary: "",
        is_release: "0",
        handbook: ""
      },
      rules: {
        header_cover_url: [{ required: true, message: "图片不能为空" }],
        title: [{ required: true, message: "标题不能为空" }],
        summary: [{ required: true, message: "摘要不能为空" }],
        handbook: [{ required: true, message: "内容不能为空" }]
      },
      markdownOption: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true // 预览
      },
      dialogVisible: false,
      picAction: "",
      picData: {},
      fileList: []
    };
  },
  components: {
    mavonEditor
  },
  props: {},
  created() {
    this.getPolicy();
  },
  methods: {
    async getPolicy() {
      const res = await this.$http.get("/api/imagesPolicy/getPolicy", {});
      if (res.data && res.data.code == 0) {
        console.log(res.data);
        this.picAction = res.data.data.action;
        this.picData = {
          token: res.data.data.upload_token
        };
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.postFn();
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handlePictureCardPreview() {
      this.dialogVisible = true;
    },
    handleRemove() {},
    handleError(err, file, fileList) {
      console.log("err", err, file, fileList);
    },
    handleSuccess(response, file, fileList) {
      console.log("suc", response, file, fileList);
      this.ruleForm.header_cover_url = response.url;
    },
    handleBefore(file) {
      console.log("before", file);
      this.$set(this.picData, "key", file.name);
    },
    async postFn() {
      const params = { ...this.ruleForm };
      const res = await this.$http.post("/api/save-articles", params);
      if (res.data && res.data.code == 0) {
        console.log(res.data);
        this.$message.success("提交成功");
      }
    }
  }
};
