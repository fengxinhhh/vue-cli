<template>
  <div>
    B
    <span @click="changeName">{{ store.state.name }}</span>
  </div>
</template>

<script setup>
import { onMounted } from "vue"
import { useStore } from "vuex"

let store = useStore()
onMounted(() => {
  console.log("B页面渲染了")
})
const changeName = () => {
  store.commit("changeName", "Mike")
}
</script>

<style lang="scss" scoped></style>
