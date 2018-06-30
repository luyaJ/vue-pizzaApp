<template>
  <div class="menu row">
    <div class="col-sm-12 col-md-8">
      <table class="table">
        <thead class="thead-default">
          <tr>
            <th>尺寸</th>
            <th>价格</th>
            <th>加入</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.name">
          <tr>
            <td><strong>{{item.name}}</strong></td>
          </tr>
          <tr v-for="option in item.options" :key="option.size">
            <td>{{option.size}}</td>
            <td>{{option.price}}</td>
            <td><button @click="addToBasket(item, option)" class="btn btn-sm btn-outline-success">+</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-sm-12 col-md-4" v-if="baskets.length > 0">
      <table class="table">
        <thead class="thead-default">
          <tr>
            <td>数量</td>
            <td>品种</td>
            <td>价格</td>
          </tr>
        </thead>
        <tbody v-for="item in baskets" :key="item.size">
          <tr>
            <td>
              <button @click="decreaseQuantity(item)" class="btn btn-sm">-</button>
              <span>{{item.quantity}}</span>
              <button @click="increaseQuantity(item)" class="btn btn-sm">+</button>
            </td>
            <td>{{item.name}}{{item.size}}寸</td>
            <td>{{item.price * item.quantity}}</td>
          </tr>
        </tbody>
      </table>
      <p>总价：{{total + 'RMB'}}</p>
      <button class="btn btn-success btn-block">提交</button>
    </div>
    <div v-else>{{basketText}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      baskets: [],
      basketText: '购物中还没有东西 φ(>ω<*) ',
      getMenuItems: {}
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      // 方法一：fetch
      // fetch('https://wd6086063450enyxno.wilddogio.com/menu.json', {
      //   method: 'GET',
      //   'Content-type': 'application/json'
      // })
      // .then(res => res.json())
      // .then(data => {
      //   this.getMenuItems = data
      // })
      // .catch(err => console.log(err))

      // 方法二：axios
      // axios.get('menu.json')
      //   .then(res => this.getMenuItems = res.data)

      // 方法三：axios 全局
      this.$axios.get('menu.json')
        .then(res => {
          this.getMenuItems = res.data
        })
    },
    addToBasket (item, option) {
      // 把当前需要增加到购物车的那条信息，存入一个数组中
      let basket = {
        name: item.name,
        size: option.size,
        price: option.price,
        quantity: 1
      }

      if (this.baskets.length > 0) {
        // 过滤
        let result = this.baskets.filter(basket => {
          return (basket.name === item.name && basket.price === option.price)
        })

        if (result != null && result.length > 0) {
          result[0].quantity++
        } else {
          this.baskets.push(basket)
        }
      } else {
        this.baskets.push(basket)
      }
    },
    decreaseQuantity (item) {
      item.quantity--
      if (item.quantity <= 0) {
        this.removeFromBasket(item)
      }
    },
    increaseQuantity (item) {
      item.quantity++
    },
    removeFromBasket (item) {
      // 当数量少于0，清除当前行
      this.baskets.splice(this.baskets.indexOf(item), 1)
    }
  },
  computed: {
    total () {
      let totalCost = 0
      for (let index in this.baskets) {
        // 拿到basket中的每一条数据
        let individualItem = this.baskets[index]
        totalCost += individualItem.quantity * individualItem.price
      }
      return totalCost
    }
  }
}
</script>
