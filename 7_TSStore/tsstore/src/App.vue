<template>
  <div id="app">
    <ul>
      <li v-for="i in items" :key="i.id">{{i.name}}</li>
    </ul>
    <button @click="loadData('1.json')">Load from 1 source</button>
    <button @click="loadData('2.json')">Load from 2 source</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapActions, mapState } from 'vuex';
import { EducationMethod, LoadOptions } from './store/education_methods.d';

@Component({
  computed: {
    ...mapState('EducationMethods', ['items'])
  },
  methods: {
    ...mapActions('EducationMethods', ['getItems'])
  }
})
export default class App extends Vue {
  private items!: Array<EducationMethod>;
  private getItems!: (payload: LoadOptions) => Promise<Array<EducationMethod>>;

  curPage = 1;
  pageSize = 10;
  backend = '';

  get loadOptions(): LoadOptions
  {
    return {
      db: this.backend,
      page: this.curPage,
      size: this.pageSize
    };
  }

  loadData(source: string)
  {
    this.backend = source;

    this.getItems(this.loadOptions)
      .then(r => {
        console.log("%cDATA LOADED", 'color: green')
        console.log(r);
      })
      .catch(() => {
        console.log("%cFATAL ERROR!", 'color: orange')
      });
  }
}
</script>

<style>
</style>
