<template>
  <div id="myChild">
    <div>
      title: <span>{{ title }}</span>
    </div>
    <div>
      msg: <span>{{ msg }}</span>
    </div>
    <button @click="delParentData">删除父组件最后一条数据</button>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title?: string
  msg?: string
}>()

const emit = defineEmits(['on-delete'])

function delParentData() {
  emit('on-delete')
}
</script>
