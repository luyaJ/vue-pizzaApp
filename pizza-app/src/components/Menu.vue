<template>
  <div class="menu">
    <el-table :data="getMenuItems" style="width: 100%">
      <el-table-column prop="date" label="尺寸" width="180"></el-table-column>
      <el-table-column prop="name" label="价格" width="180"></el-table-column>
      <el-table-column prop="address" label="加入"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      getMenuItems:{
        1: {
          'description': '这是喜欢吃榴莲朋友的最佳选择',
          'options': [{
            'size': 榴莲pizza-9,
            'price': 38
          }, {
            'size': 榴莲pizza-12,
            'price': 48
          }]
        },
        2: {
          'name': '芝士pizza',
          'description': '芝士杀手,浓浓的芝士丝, 食欲瞬间爆棚',
          'options': [{
            'size': 9,
            'price': 38
          }, {
            'size': 12,
            'price': 48
          }]
        },
        3: {
          'name': '夏威夷pizza',
          'description': '众多人的默认选择',
          'options': [{
            'size': 9,
            'price': 36
          }, {
            'size': 12,
            'price': 46
          }]
        }
      }
    }
  }
}
</script>
