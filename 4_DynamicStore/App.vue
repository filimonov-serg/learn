<template>
    <div>
        App {{fullname}} {{user.personal.age}}
        <div v-for="i in list" :key="i">{{i}}</div>
    </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex'
import list from './store/modules/list.m'

export default {
    name: 'App',

    beforeCreate() {
        this.$store.registerModule('list', list);
    },

    mounted() {
        this.getUserPersonal()
        this.getList()
    },

    methods: {
        ...mapActions('user', ['getUserPersonal']),
        ...mapActions('list', ['getList'])
    },

    computed: {
        ...mapState('user', ['user']),
        ...mapState('list', ['list']),
        ...mapGetters('user', ['fullname'])
    }
}
</script>