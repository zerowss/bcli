export default {
  name: "userRegister",
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.registerForm.checkPass !== "") {
          this.$refs.registerForm.validateField("checkPass");
        }
        callback();
      }
    };
    const validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        email: "",
        password: "",
        checkPass: ""
      },
      rules: {
        username: [
          {
            required: true,
            message: "昵称不能为空"
          }
        ],
        email: [
          {
            required: true,
            message: "邮箱不能为空"
          }
        ],
        password: [
          {
            required: true,
            validator: validatePass,
            trigger: "blur"
          }
        ],
        checkPass: [
          {
            required: true,
            validator: validatePass2,
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    // 注册
    async register() {
      const params = this.registerForm;
      const res = await this.$http.post("/api/register", params);
      console.log(res, "ppos");
      if (res.data && res.data.code === 0) {
        this.$message.success("注册成功");
        this.activeName = "login";
      }
    },
    submintRegisterForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.register();
        } else {
          return false;
        }
      });
    },
    resetRegisterForm(formName) {
      this.registerForm = {
        username: "",
        password: "",
        checkPass: ""
      };
      this.$refs[formName].resetFields();
    },
    handleClick() {
      this.resetRegisterForm("registerForm");
      this.resetForm("ruleForm");
    }
  }
};
