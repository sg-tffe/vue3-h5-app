<template>
  <div id="list" class="m-list">
    <header>
      <h2 class="title">{{ title }}</h2>
    </header>
    <div class="main">
      <ul>
        <li v-for="item in list" :key="item.id">
          <label class="label">{{ item.title }}</label>
          <button @click="toRemove(item)">删除</button>
        </li>
      </ul>
    </div>
    <button @click="toAdd">添加</button>
    <br /><br /><br />
    <MyChild title="子组件" msg="我是子组件" @on-delete="handleRemove" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { getList } from '@/api'
import MyChild from './MyChild.vue'

defineProps<{
  title?: string
  likes?: number
}>()

const title = ref('列表页')
const list: any = ref([])
let id = 10

function toAdd() {
  list.value.push({
    id: id++,
    title: '测试列表测试列表测试列表'
  })
}

function toRemove(row: any) {
  list.value = list.value.filter((item: any) => item !== row)
}

function _getList() {
  getList({}, (res: any) => {
    if (+res.status === 0) {
      list.value = res.data || []
    }
  })
}

function handleRemove() {
  list.value.pop()
}

_getList()
</script>
<style lang="scss" scoped>
h2 {
  font-size: 0.15rem;
}
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
.label {
  margin-right: 0.05rem;
}
</style>
