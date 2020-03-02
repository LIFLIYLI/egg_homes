<template>
  <div>
    <div class="title_seach">
      <div class="input">
        <input @click="changePageSeach" type="text" placeholder="短期过渡 免费换租" />
        <img src="../../assets/seach.png" alt />
      </div>
      <img src="../../assets/dingwei.png" alt />
    </div>
    <find-slide></find-slide>
    <find-seeting></find-seeting>
    <find-list class="bottom_rem"></find-list>
  </div>
</template>
<script>
import findSlide from "@/page/find/find_slide.vue";
import findSeeting from "@/page/find/find_seeting.vue";
import findList from "@/page/find/find_list.vue";
import eventHub from '@/js/eventHub.js'
export default {
  components: {
    findSlide,
    findSeeting,
    findList
  },
  data() {
    return {};
  },
  computed: {},
  created() {
    eventHub.$emit('changeBar')
  },
  mounted() {},
  methods: {
    changePageSeach: function() {
      this.$router.push({ path: "seach" });
    }
  }
};
</script>
<style lang="" scoped>
.title_seach {
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  box-sizing: border-box;
  height: 4rem;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  background: white;
  z-index: 10;
}
.title_seach > img {
  width: 1.6rem;
  height: 1.6rem;
}
.title_seach .input {
  width: 80%;
}
.input {
  border: 1px solid #e0e0e0;
  position: relative;
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: 0 0 8px 1px #dddada;
}
.input > input {
  height: 2rem;
  padding-left: 2rem;
  border: none;
  width: 80%;
}
.input > img {
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
}
/*  */
.bottom_rem {
  margin-bottom: 6rem;
}
</style>