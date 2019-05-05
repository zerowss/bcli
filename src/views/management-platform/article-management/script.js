import { parseTime } from "../../../common/units/tools";
export default {
  name: "article-management",
  data() {
    return {
      tableData: [],
      params: {
        pageNum: 1,
        pageSize: 10
      }
    };
  },
  props: {},
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      const params = { ...this.ruleForm };
      const res = await this.$http.post("/api/get-artilces-list", params);
      if (res.data && res.data.code == 0) {
        console.log(res.data);
        this.tableData = res.data.data;
      }
    },
    formatTime(date) {
      return parseTime(date);
    }
  }
};
