<template>
  <v-app>
    <Toolbar :toggleDrawer="toggleDrawer"/>
    <Drawer :drawer="drawer"/>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from "@/components/Toolbar.vue";
import Drawer from "@/components/Drawer.vue";

export default {
  name: "App",
  data() {
    return {
      drawer: false
    };
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    }
  },
  components: {
    Toolbar,
    Drawer
  }
};
</script>
