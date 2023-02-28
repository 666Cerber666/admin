<template>
  <div class="link">
    <div class="logIn" v-show="pageStep === 1">
      <div class="container mt-4">
        <div class="row">
          <div class="col-sm-4 mx-auto">
            <form @change.prevent="logError" @submit.prevent="loginUser">
              <div class="mb-3">
                <label for="name" class="form-label">Login</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="name"
                  required
                />
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input
                  type="password"
                  class="form-control"
                  v-model="pass"
                  required
                />
              </div>
                <transition name="fade">
                  <span class="error" v-if="isVisible" >Логин или пароль неверные. Попробуйте еще раз</span>
                </transition>
                <div class="exit-button">
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
                          v-model="newname"
                          required
                        />

                        <transition name="fade">
                          <span class="error" v-if="this.v$.newname.minLength.$invalid"> Должно содержать от 5 символов </span>
                        </transition>
                      </div>

                      <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input
                          type="password"
                          class="form-control"
                          v-model="newpass"
                          required
                        />

                        <transition name="fade">
                          <span class="error" v-if="this.v$.newpass.minLength.$invalid"> Должно содержать от 5 символов </span>
                        </transition>
                      </div>
                      
                      <transition name="fade">
                          <span class="error" v-if="this.v$.passrepeat.sameAs.$invalid" >Пароли не совпадают</span>
                        </transition>

                      <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Repeat Password</label>
                        <input
                          type="password"
                          class="form-control"
                          v-model="passrepeat"
                          required
                        />
                      </div>

                      <div class="mb-3">
                        <label for="exampleInputEmail" class="form-label">Email</label>
                        <input
                          type="email"
                          class="form-control"
                          id="exampleInputEmail"
                          v-model="email"
                          required
                        />

                        <transition name="fade">
                          <span class="error" v-if="this.v$.email.email.$invalid" >Некорректная почта</span>
                        </transition>

                      </div>

                      <div class="exit-button">

                        <button class="btn btn-success btn-lg" @click="cancelReg"> Отмена регистрации </button>

                        <button
                          @click="logErrorReg && registerUser"
                          type="submit"
                          class="btn btn-success btn-lg , button-reg"
                        >
                          Регистрация
                        </button>

                      </div>

                      

                  </form>
                </div>
            </div>
          </div>
      </div>
  </div>
</template>
  
  <script>
import {required, minLength, maxLength, sameAs, email} from 'vuelidate/lib/validators'
import useVuelidate from '@vuelidate/core'

export default {
  setup () {
    return { v$: useVuelidate() }
  },

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
      email:'',
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
      isVisible: false,
      isVisibleRegError: false,
    };
  },

  validations:{
    newname:{required, minLength:minLength(5), maxLength:maxLength(10)},
    newpass:{required, minLength:minLength(5), maxLength:maxLength(30)},
    email:{required, email},
    passrepeat:{required, sameAs:sameAs('newpass')}
  },

  computed: {
    isDisabledLogin() {
      return this.pass.length > 0 && this.name.length > 0;
    },
    isDisabledReg() {
      return this.newpass.length > 0 && this.newname.length > 0 && this.passrepeat.length > 0 && this.email.length > 0 ;
    },
  },
  methods: {
    HideDialog(){
      this.IsVisibleDialog = false
            },
    cancelReg(){
      this.pageStep = 1
    },
    registerUser(){
      this.v$.$validate()
      if (this.v$.$error){
        console.log('Не все поля правильно заполнены!')
      }
      else{
        this.tbUser.push({
          id: this.NextUserId++,
          NaMe: this.newname,
          PaSs: this.newpass,
        })
        this.pageStep = 1
        this.newname = '',
        this.newpass = '',
        this.email = '',
        this.repeatpass =''
      } 
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
      this.$router.push('/Dashboard')
      else
      console.log(this.tbUser.name)
      this.isVisible = true
    },
    logError() {
      if(this.isVisible === true)
      this.isVisible = false
    },
  }
};
</script>
  
  <style>
</style>
  