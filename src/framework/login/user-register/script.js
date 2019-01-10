import { isEmail } from "../../../common/units/validatorFunction";
import { deepCopy } from "../../../common/units/tools";
export default {
  name: "userRegister",
  data() {
    const validateName = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入昵称"));
      } else {
        if (this.isSameName) {
          callback(new Error("昵称不可用"));
        }
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.registerForm.validateField("checkPass");
        }
        callback();
      }
    };
    const validatePass2 = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    const validateCode = (rule, value, callback) => {
      if (!value) {
        callback(new Error("验证码不能为空"));
      } else if (isNaN(value) || value.length != 6) {
        callback(new Error("验证码格式错误!"));
      } else {
        callback();
      }
    };
    const validateEmail = (rule, value, callback) => {
      if (!value) {
        callback(new Error("邮箱不能为空"));
      } else if (!isEmail(value)) {
        callback(new Error("邮箱格式错误!"));
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
            validator: validateName,
            trigger: "blur"
          }
        ],
        email: [
          {
            required: true,
            validator: validateEmail,
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
        ],
        code: [
          {
            required: true,
            validator: validateCode,
            trigger: "blur"
          }
        ]
      },
      isShowCode: false,
      isCanCode: false,
      emailTip: "获取验证码",
      countDown: 60,
      isSameName: false
    };
  },
  props: {
    changeTab: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    // 注册
    async register() {
      const params = deepCopy(this.ruleForm);
      const res = await this.$http.post("/api/register", params);
      console.log(res, "ppos");
      if (res.data && res.data.code === 0) {
        this.$message.success("注册成功");
        console.log("ss", this.changeTab);
        this.changeTab(1);
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
    changEmail(value) {
      if (value && isEmail(value)) {
        this.isShowCode = true;
      } else {
        this.isShowCode = false;
      }
    },
    getEmailCode() {
      this.isCanCode = true;
      let timer = setInterval(() => {
        this.countDown--;
        this.emailTip = `${this.countDown}秒后获取`;
        if (this.countDown == 0) {
          clearInterval(timer);
          this.emailTip = "获取验证码";
          this.isCanCode = false;
          this.countDown = 60;
        }
      }, 1000);
      this.getCode();
    },
    async getCode() {
      const params = deepCopy(this.ruleForm);
      const res = await this.$http.post("/api/getEmailCode", {
        username: params.username,
        email: params.email
      });
      if (res.data && res.data.code === 0) {
        this.$message.success("验证码已发送");
      }
    },
    ruleName() {
      this.getIsSameName().then(res => {
        this.isSameName = res;
        this.$refs.registerForm.validateField("username");
      });
    },
    async getIsSameName() {
      let isSameName = false;
      const params = deepCopy(this.ruleForm);
      const res = await this.$http.get("/api/isSameName", {
        username: params.username
      });
      if (res.data && res.data.code === 0) {
        isSameName = res.data.data.status == 1 ? false : true;
      }
      return isSameName;
    }
  }
};
