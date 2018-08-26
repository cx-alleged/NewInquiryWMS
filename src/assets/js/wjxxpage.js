export default {
    data() {
      return {
         radio2:"",
         value:"",
         options: [{
          value: '1',
          label: '正常'
        }, {
          value: '2',
          label: '适中'
        }, {
          value: '3',
          label: '异常'
        }],
         checkList:[],
         formInline: {
          user: '',
          region: ''
        }
      }
    },
    methods: {
      rowClassname() {
        return "rowClassname";
      },
      headerClassname() {
        return "headerClassname";
      },
      handleClick(row) {
        console.log(row);
      },
      //跳转到药方界面
      gotoyfpage(row,pagename) {
        this.$router.push({
             name: pagename,
             params:row
        });
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }