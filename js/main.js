const app = new Vue({
  el: '#app',
  data: {
    albums: [],
  },
  created() {
    axios
      .get('http://localhost/php-ajax-dischi/backend.php')
      .then((response) => {
        console.log(response);
        this.albums = response.data;
      });
  },
});
