<template>
  <div id="list" class="rui-flex">
    <header class="rui-header rui-header-bank-card">
      <h2 class="title">{{ title }}</h2>
    </header>
    <div class="flex">
      <ul class="rui-list">
        <li class="item" v-for="item in list" :key="item.id" @click="jump">
          <label class="label flex">{{ item.title }}</label>
          <button @click="toRemove(item)">删除</button>
        </li>
      </ul>
    </div>
    <button @click="toAdd">添加</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { getList } from '@/api'
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
.flex {
  margin-right: 0.05rem;
}
</style>
