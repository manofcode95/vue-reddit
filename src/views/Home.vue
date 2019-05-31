<template>
  <v-btn color="success" @click="login">Log In</v-btn>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapActions } = createNamespacedHelpers('auth');
export default {
  components: {},
  methods: {
    ...mapActions(['login']),
  },
};
</script>
