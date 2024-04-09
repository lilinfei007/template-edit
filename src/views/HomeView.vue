<template>
  <div class="home">
    <div class="page-title">项目列表</div>  
    <div class="project-list">
      <div class="project-item">
        <img class="cover" src="https://image.qll-times.com/2024/04/2c5a0a6aad524160a10903992616802b.webp" />
        <div class="name">项目名称</div>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/login';
export default {
  name: 'HomeView',
  mounted(){

  }
}
</script>
<style lang="scss" scoped>
.page-title{
  margin:20px;
  font-weight: bold;
  font-size: 20px;
  color:#000;
  text-align: left;
}

.project-list{
  margin:20px;
  .project-item{
    position: relative;
    width:170px;
    border-radius: 8px;
    background-color: #fff;
    filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.2));
    overflow: hidden;
    cursor: pointer;
    transition-duration: 0.3s;
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
    }
  }
}
</style>