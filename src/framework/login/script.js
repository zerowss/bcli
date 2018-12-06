import Cookies from "js-cookie";
import { local } from "../../common/units/storage";
export default {
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
        password: ""
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码"
          }
        ]
      },
      activeName: "login",
      registerForm: {
        username: "",
        password: "",
        checkPass: ""
      },
      registerRules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
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
    submintForm(formName) {
      console.log(this.ruleForm, "ss");
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.login();
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.ruleForm = {
        username: "",
        password: "",
        checkPass: ""
      };
      this.$refs[formName].resetFields();
    },
    async login() {
      const params = this.ruleForm;
      const res = await this.$http.post("/api/login", params);
      console.log(res);
      if (res.data && res.data.code === 0) {
        local.setItem("userInfo", res.data.data);
        Cookies.set("token", res.data.token);
        Cookies.set("token-exp", new Date().getTime());
        Cookies.set("userName", res.data.data.username);
        this.$message.success("登录成功");
        this.$router.push("/");
      }
    },
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
