const app = new VUE({
  el: '#app',
  data: {
    albums: [],
  },
  created() {
    axios
      .get('http://localhost/php-ajax-dischi/backend.php')
      .then((response) => {
        console.log(response);
      });
  },
});
