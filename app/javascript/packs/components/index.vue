<template>
<div>
    <p v-for="(t, index, key) in todo" :key=index>
        {{key}}{{t.title}}{{t.memo}}{{t.date}}
    </p>
</div>
</template>

<script>
import axios from 'axios'

export default {
    data: function() {
      return {
        todo: {},
      }
    },
    created: function() {
    axios.get("/api/todos")
    .then(response => {
      console.log(response.data)
      this.todo = response.data
    })
    .catch(response => {
      alert('サーバーエラーが発生しました。')
      window.location.href = '/';
    });
  },
}
</script>