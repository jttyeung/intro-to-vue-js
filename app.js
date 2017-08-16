Vue.component('tasks', {

  template:
      `<div>
        <li v-for="item in list" v-text="item"></li>
      </div>`,

  data() {

    return {
      list: ['a', 'b', 'c']
    };

  }

});

new Vue({

  el: '#main'

})
