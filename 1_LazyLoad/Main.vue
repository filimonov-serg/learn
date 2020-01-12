<template>
    <div>
        <Header></Header>
    </div>
</template>

<script>
// Static loading component
import {Header} from './components/Header'

export default {
    components: {
        Header
    }
}

// Lazy loading (dynamic)
// export default {
//     components: {
//         Header: () => import('./components/Header')
//     }
// }

</script>