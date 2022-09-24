<template>
  <div class="modal" v-if="modalShow">
    <modal>
        teste
    </modal>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'ModalVue',
    computed: mapState(['IsModalVisible'])
}
</script>

<style>

</style>