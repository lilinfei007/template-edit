<template>
  <div class="home">
    <div class="page-title">项目列表
      <el-button @click="showCreateProjectDialog" style="margin-left:16px" size="small" type="primary" icon="el-icon-plus"></el-button>
    </div>
    <div class="project-list">
      <div @click="goEdit(item)" class="project-item" v-for="(item) in projectList" :key="item.id">
        <img class="cover" :src="item.cover" />
        <div class="name">{{item.name}}</div>
      </div>
    </div>
    <el-dialog @closed="createDialogClose" title="创建项目" :visible.sync="createProjectVisible">
      <el-form ref="createProjectForm" :model="projectBase" label-width="100px" :rules="rules">
        <el-form-item label="项目封面" prop="cover">
          <el-input v-model="projectBase.cover" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="项目名称" prop="name">
          <el-input v-model="projectBase.name" placeholder=""></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="createProjectVisible = false">取 消</el-button>
        <el-button type="primary" @click="createProjectConfirm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { localStorage,RandomCode } from '@/js/utils'
export default {
  name: 'HomeView',
  data(){
    return {
      projectBase:{
        cover:"https://image.qll-times.com/2024/04/2c5a0a6aad524160a10903992616802b.webp",
        name:"",
        config:{}
      },
      rules:{
        cover:[{ required:true,message:"请输入项目封面" }],
        name:[{ required:true,message:"请输入项目名称" }],
      },
      createProjectVisible:false,
      projectList:localStorage('projectList') || []
    }
  },
  mounted(){
//     let obj = {
//       component:() => import('@/views/Index.vue')
//     }
//     console.log(obj);
// // console.log();
//     console.log(require('@/views/Index.vue'));
  },
  methods:{
    goEdit(item){
      window.open(`/project-edit?id=${item.id}`);
    },
    showCreateProjectDialog(){
      this.createProjectVisible = true;
    },
    createProjectConfirm(){
      this.$refs.createProjectForm.validate(valid => {
        if(!valid) return false;
        this.createProject();
        this.createProjectVisible = false;
      })
    },
    createProject(){
      let {cover,name,config} = this.projectBase;
      let project = {
        id:RandomCode(),
        cover,
        name,
        config
      }
      this.projectList.push(project);
      localStorage("projectList",this.projectList);
      this.$message.success("创建成功")
    },
    createDialogClose(){
      this.projectBase = {
        cover:"",
        name:"",
        config:{}
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.page-title{
  display: flex;
  align-items: center;
  margin:20px;
  font-weight: bold;
  font-size: 20px;
  color:#000;
  text-align: left;
}

.project-list{
  display: flex;
  flex-wrap: wrap;
  margin:20px;
  // margin-right: -30px;
  .project-item{
    position: relative;
    width:170px;
    border-radius: 8px;
    background-color: #fff;
    filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.2));
    overflow: hidden;
    cursor: pointer;
    transition-duration: 0.3s;
    margin-right:30px;
    margin-bottom:30px;
    &:hover{
      transform: scale(1.05);
    }
    .cover{
      display: block;
      width: 100%;
      height:200px;
      object-fit: cover;
    }
    .name{
      font-size: 16px;
      padding:6px;
      text-align: center;
    }
  }
}
</style>