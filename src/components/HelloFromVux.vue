<template>
  <div>
    <div>获取从当前时间的第二天开始的日期到本月结束的日期可选</div>
    <group gutter='-2%' style='padding:10px'>
      <datetime title='日期' v-model="treatmentDate" :start-date='startDate' :end-date='endDate' placeholder="请选择日期">
      </datetime>
    </group>
  </div>
</template>

<script>
import { Group,Datetime } from "vux";

export default {
  components: {
    Group,
    Datetime
  },
  data() {
    return {
      treatmentDate: "", //治疗日期
      startDate: "",
      endDate: ""
    };
  },
  mounted() {
    this.getCurrentDate();
  },

  methods: {
    getCurrentDate(){
      var date = new Date();
      date.setDate(date.getDate()+ 1);  //获取明天的日期
      var year = date.getFullYear();
      var month = date.getMonth()+1;
      var day = date.getDate();
      this.startDate = year + "-" + month + "-" + day;  //开始日期

      var nextYear = year;
      var nextMonth = this.startDate.split("-")[1]; //取明天日期的月份  若为2月,即为2

      // 本月最后一天
      if (nextMonth > 12) {
        //如果当前大于12月，则年份转到下一年
        nextMonth -= 12; //月份减
        nextYear++; //年份增
      }
      var nextMonthFirstDay = new Date(nextYear, nextMonth, 1);
      var oneDay = 1000 * 60 * 60 * 24;
      var ak = new Date(nextMonthFirstDay.getTime() - oneDay);
      var endYear = ak.getFullYear();
      var endMonth = ak.getMonth() + 1;
      var endDay = ak.getDate();
      this.endDate = endYear + "-" + endMonth + "-" + endDay;

    }
  },
};
</script>

<style lang="less" scoped>

</style>

