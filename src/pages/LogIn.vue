<template>
  <div class="link">
    <div class="logIn" v-show="pageStep === 1">
      <div class="container mt-4">
        <div class="row">
          <div class="col-sm-4 mx-auto">
            <form @change.prevent="logError" @submit.prevent="loginUser" novalidate>
              <div class="mb-3">
                <label for="name" class="form-label">Login</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  v-model="name"
                  required
                />
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  v-model="pass"
                  required
                />
              </div>
                <transition name="fade">
                  <span class="error" v-if="isVisible" >Логтин или пароль неверные. Попробуйте еще раз</span>
                </transition>
              <button
                @click="loginUser"
                v-bind:disabled="!isDisabledLogin"
                type="submit"
                class="btn btn-success btn-lg"
              >
                Вход
              </button>
                <span class="spanReg" @click="RegisterPage">Еще не зарегестрированны?</span>
                <br>
                <div v-for="name in tbUser" :key="name.id">
                    
                      </div>
            </form>
          </div>
        </div>
      </div>
    </div>
      <div class="register" v-show="pageStep === 2">
        <div class="container mt-4">
          <div class="row">
            <div class="col-sm-4 mx-auto">
                <form @change.prevent="logErrorReg" @submit.prevent="registerUser">
                      <div class="mb-3">
                        <label for="name" class="form-label">User Name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="name"
                          v-model="newname"
                          required
                        />
                      </div>

                      <transition name="fade">
                          <span class="error" v-if="isVisibleRegError" >Пароли не совпадают</span>
                        </transition>

                      <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input
                          type="password"
                          class="form-control"
                          id="exampleInputPassword1"
                          v-model="newpass"
                          required
                        />
                      </div>

                      <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Repeat Password</label>
                        <input
                          type="password"
                          class="form-control"
                          id="exampleInputPassword1"
                          v-model="passrepeat"
                          required
                        />
                      </div>

                      <button class="btn btn-success btn-lg" @click="cancelReg"> Отмена регистрации </button>

                      <button
                        @click="addNewUser && registerUser"
                        v-bind:disabled="!isDisabled"
                        type="submit"
                        class="btn btn-success btn-lg"
                      >
                        Регистрация
                      </button>

                  </form>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>
  
  <script>

export default {
  data() {
    return {
      pageStep: 1,
      name: "",
      pass: "",
      newpass: '',
      newname:'',
      NaMe: 'admin',
      PaSs: 'admin',
      passrepeat:'',
      tbUser:[
        { 
          id:1,
          NaMe: "admin",
          PaSs: "admin",
        },
        { 
          id:2,
          NaMe: "admin123",
          PaSs: "admin123",
        },
        { 
          id:3,
          NaMe: "admin123321",
          PaSs: "admin123321",
        },
      ],
      NextUserId: 4,
      erorr:"",
      isVisible: false,
      isVisibleRegError: false,
    };
  },
  computed: {
    isDisabled() {
      return this.newpass.length > 0 ;
    },
    isDisabledLogin() {
      return this.pass.length > 0 ;
    },
  },
  methods: {
    cancelReg(){
      this.pageStep = 1
    },
    registerUser(){
      if(this.newpass != this.passrepeat)
      this.isVisibleRegError = true
      else
        this.tbUser.push({
          id: this.NextUserId++,
          NaMe: this.newname,
          PaSs: this.newpass
        })
        this.newname = '',
        this.newpass = ''
        this.pageStep = 1
    },
    logErrorReg(){
      if(this.isVisibleRegError === true)
      this.isVisibleRegError = false
    },
    RegisterPage(){
      this.pageStep++
    },
    loginUser() {
      if(this.name === this.NaMe && this.pass === this.PaSs)
      this.$router.push('/AdminPanel')
      else
      console.log(this.tbUser.name)
      this.isVisible = true
    },
    logError() {
      if(this.isVisible === true)
      this.isVisible = false
    },
    addNewUser() {
      this.tbUser.push({
        id: this.nextUserId++,
        NaMe: this.newname,
        PaSs: this.newpass
      })
      this.newname = '',
      this.newpass = ''
    },
  }
};
</script>
  
  <style>
</style>
  