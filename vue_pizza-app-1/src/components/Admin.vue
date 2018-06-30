<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <new-pizza></new-pizza>
    </div>
    <div class="col-sm-12 col-md-4">
      <h3 class="text-muted my-5">菜单</h3>
      <table class="table">
        <thead>
          <tr>
            <th>品种</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.name">
          <tr>
            <td>{{item.name}}</td>
            <td>
              <button @click="deleteData(item)" class="btn btn-outline btn-sm">&times;</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import newPizza from './NewPizza'

export default {
  data () {
    return {
      getMenuItems: []
    }
  },
  components: {
    newPizza
  },
  created () {
    fetch('https://wd6086063450enyxno.wilddogio.com/menu.json')
      .then(res => {
        return res.json()
      })
      .then(data => {
        let menuArray = []
        for (let key in data) {
          // console.log(data[key]) 每一条数据
          data[key].id = key
          menuArray.push(data[key])
        }
        this.getMenuItems = menuArray
      })
  },
  methods: {
    deleteData (item) {
      fetch('https://wd6086063450enyxno.wilddogio.com/menu/' + item.id + '/.json', {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => this.$router.push('/menu'))
        .catch(err => console.log(err))
    }
  }
}
</script>
