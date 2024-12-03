<template>
  <div class="about">
    <el-button size="small" type="primary" icon="el-icon-plus" @click="pushData"></el-button>
    <el-tree ref="tree" node-key="id" :default-checked-keys="checkedKeys" show-checkbox :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
  </div>
</template>
<script>
export default {
  name:"AbouteView",
  data(){
    return {
      checkedKeys:[2],
      data:[{
        label:"1级 1",
        id:1,
        children:[{
          id:2,
          label:"2级 1-1"
        },{
          id:3,
          label:'2级 1-2'
        }]
      }],
      defaultProps:{
        children:'children',
        label:"label"
      }
    }
  },
  methods:{
    pushData(){
      this.$refs.tree.append({
        label:`2级 1-${this.data[0].children.length+1}`
      },1)
    },
    handleNodeClick(data){
      console.log(data);
    }
  }
}
</script>
<style scoped lang="scss">
.about{
  padding:20px;
  border:1px solid #999;
}
</style>