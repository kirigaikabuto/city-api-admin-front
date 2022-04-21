<template>
  <div>
    <div class="page-title">
      <h3>Заявки</h3>
    </div>

    <!--    <div class="history-chart">-->
    <!--      <canvas></canvas>-->
    <!--    </div>-->

    <section>
      <table>
        <thead>
        <tr>
          <th>#</th>
          <th>Адресс</th>
          <th>Статус</th>
          <th>Категория</th>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>Отчество</th>
          <th>Изображение</th>
        </tr>
        </thead>

        <tbody>
        <tr v-for="(item, index) in xdata" :key="item.id">
          <td>{{ index }}</td>
          <td>{{ item.address }}</td>
          <td>{{ item.app_status }}</td>
          <td>{{ item.app_type }}</td>
          <td>{{ item.first_name }}</td>
          <td>{{ item.last_name }}</td>
          <td>{{ item.patronymic }}</td>
          <td><img v-bind:src=item.photo_url width="50" height="50"></td>
          <td>
            <button class="btn-small btn">
              <i class="material-icons">open_in_new</i>
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </section>
  </div>

</template>

<script>
import axios from 'axios'

export default {
  name: "History",
  data: () => ({
    applications: [],
    xdata: null,
  }),
  mounted() {
    axios.get('http://ec2-3-224-35-128.compute-1.amazonaws.com:8080/application/list').then((response) => {
      this.xdata = response.data.applications
      console.log(this.xdata)
    })
  }
}
</script>

<style scoped>

</style>