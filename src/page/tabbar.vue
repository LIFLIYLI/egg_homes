<template>
  <div>
    <main>
      <router-view></router-view>
      <footer>
        <ul>
          <li>
            <!-- <img src="../assets/index.png" alt=""> -->
            首页
          </li>
          <li>快速找房</li>
          <li>房屋委托</li>
          <li>我的</li>
        </ul>
      </footer>
    </main>
  </div>
</template>
<script>
  export default {
    name:'Tabbar'
  }
</script>
<style scoped="" >
  footer ul{
    margin:0;
    border:1px solid red;
  }
</style>
