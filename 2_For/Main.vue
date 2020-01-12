<template>
    <div>
        <ul>
            <!-- Need v-key !!!! -->
            <li v-for="item in aData">{{item.t}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            aData: [
                {id: 0, t: '1'},
                {id: 1, t: '2'},
                {id: 2, t: '3'}
            ]
        }
    }
}
</script>