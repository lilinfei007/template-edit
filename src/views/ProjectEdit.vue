<template>
  <div>
    {{ curProject }}
  </div>
</template>
<script>
import { localStorage } from '@/js/utils';
export default {
  name:"ProjectEdit",
  data(){
    return {
      curProject:{},
      projectList:localStorage("projectList")
    }
  },
  created(){
    this.curProject = this.projectList.find(item => item.id == this.$route.query.id) || {};
    if(Object.values(this.curProject).length === 0) this.$message.error("获取项目配置信息失败")
  }
}
</script>