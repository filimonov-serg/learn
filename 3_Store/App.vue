<template>
    <div>
        App {{fullname}} {{user.personal.age}}
    </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex'

export default {
    name: 'App',

    mounted() {
        this.getUserPersonal()
    },

    methods: {
        ...mapActions('user', ['getUserPersonal']),
    },

    computed: {
        ...mapState('user', ['user']),
        ...mapGetters('user', ['fullname'])
    }
}
</script>