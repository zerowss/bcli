import Cookies from "js-cookie";
import { local } from "../../../common/units/storage";
export default {
  name: "userLogin",
  data() {
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          {
            required: true,
            message: "会员名/邮箱/手机号不能为空"
          }
        ],
        password: [
          {
            required: true,
            message: "密码不能为空"
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
    }
  }
};
