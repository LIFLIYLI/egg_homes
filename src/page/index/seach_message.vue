<template>
  <div class="seach_box">
      <div class="citys">深圳</div>
      <div class="input">
        <input type="text" placeholder="蜗牛壳半价月 万房5折">
        <img src="../../assets/seach.png" alt="">
      </div>
      <div class="message"><img src="../../assets/message.png" alt=""></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.seach_box{
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding:0.6rem 1rem;
}
.input{
    border:1px solid #e0e0e0;
    position:relative;
     border-radius: 2rem;
     overflow: hidden;
     box-shadow: 0 0 8px 1px #dddada;
}
.input>input{
    height:2rem;
    padding-left:2rem;
    border:none
}
.input>img{
    position:absolute;
    top:0.5rem;
    left:0.5rem;
}
.citys{
    font-weight: bold;
    font-size:1rem;
    position: relative;
    padding-right:14px;
}
.citys::after{
    content:'';
    display: block;
    width:0;
    height:8px;
    border:6px solid #35323260;
    border-bottom:4px solid transparent;
    border-left:4px solid transparent;
    border-right: 4px solid transparent;
    position:absolute;
    top:0.5rem;
    right:0;
}
.message{
    width:1.5rem;
    height:1.5rem;

}
.message img{
    width:100%;
    height:100%;
}
</style>