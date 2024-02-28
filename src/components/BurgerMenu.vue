<template>
  <div class="bar">
    <div class="admin-burger" @click="BurgerMenuToggle">
      <img class="burger" src="../assets/burger-menu-svgrepo-com.svg">
    </div>
    <transition-group name="fade">
      <div class="admin-bar" v-if="BurgerMenuOn" :class="{ active: isActive}">
        <div class="bar-mobile">
          <div><p class="logo">Admin</p></div>
          <div class="line"></div>
          <div class="first_nav" @click="Dashboard()">
            <img class="exit" src="../assets/cube-outline-svgrepo-com.svg">Главная
          </div>
          <div class="but-exit" @click="LogIn()">
            <img class="user" src="../assets/user-identity-svgrepo-com.svg">Пользователи
          </div>
          <div class="but-exit" @click="handleExitButtonClick()">
            <img class="exit" src="../assets/arrow-left-svgrepo-com.svg">Выход
          </div>
        </div>
      </div>
    </transition-group>
  </div>
  <dialog-exit v-if="IsVisibleDialogExit" @exitConfirmed="handleExitConfirmed"></dialog-exit>
</template>

<script>
import { onUnmounted } from 'vue';

export default {
  data() {
    return {
      screenWidth: undefined,
      BurgerMenuOn: true,
      isActive: true,
      IsVisibleDialogExit: false,
      isExiting: false
    };
  },
  methods: {
    BurgerMenuToggle() {
      this.BurgerMenuOn = !this.BurgerMenuOn;
      this.isActive = !this.isActive;
    },
    Dashboard() {
      this.$router.push('/Dashboard');
    },
    LogIn() {
      this.$router.push('/AdminPanel');
    },
    AcceptExit() {
      this.$router.push('/');
    },
    OpenDialogExit() {
      this.IsVisibleDialogExit = true;
    },
    handleExitButtonClick() {
      if (!this.isExiting) {
        this.isExiting = true;
        this.IsVisibleDialogExit = true;
        this.OpenDialogExit();
      }
    },
    handleExitConfirmed() {
      this.isExiting = false;
      this.IsVisibleDialogExit = false;
      this.AcceptExit();
    }
  },
  mounted() {
    this.screenWidth = window.innerWidth;
    onUnmounted(() => this.screenWidth = undefined);
  }
};
</script>
