<template>
  <div class="admin-panel">
      <div class="admin-bar">
            <div><p class="logo">Admin</p></div>
            <div class="line"></div>
              <div class="first_nav"
                @click="Dashboard">
                  <img class="exit" src="../assets/cube-outline-svgrepo-com.svg">Главная</div>
                <div class="but-exit"
                @click="AdminPanel">
                <img class="user" src="../assets/user-identity-svgrepo-com.svg">Пользователи</div>
                <div class="but-exit"
                @click="openExitDialog"
                ><img class="exit" src="../assets/arrow-left-svgrepo-com.svg">Выход</div>
      </div>
      <div class="admin-body">
        <div class="admin-dashboard">
          Добро пожаловать в учетную запись {{ NaMe }}!
              
            <div id="lvTable" class="lvTable">              
                  <table>
                    <thead> 
                      <tr> 
                        <th>№</th>
                        <th>Пользователь</th>
                        <th>Номер телефона</th>
                        <th class="th-3">Х</th>
                      </tr>
                    </thead>
                    <tbody>
                      <transition-group name="fade"> 
                      <tr v-for="(entry, index) in paginatedData" :key="entry.id"> 
                        <td style="text-align:center"><b>{{index + 1}}</b></td> 
                        <td><input class="th180" v-model="entry['name']" placeholder="Имя пользователя"></td> 
                        <td><input class="th60" v-model="entry['count']" v-imask="phoneNumberMask" type="tel" placeholder="Номер телефона"></td> 
                        <td class="th-3"><button class="btn btn-success" v-if="tbData.length > 1" @click="delRow(index)">Удалить строку</button></td> 
                      </tr>
                    </transition-group></tbody>
                    </table>
                    <div class="button-pagenumber">
                        <button class="btn btn-success btn-lg" @click="addNewRow()">Добавить строку</button>
                        <button 
                        class="btn btn-success btn-lg"
                            :disabled="pageNumber === 0" 
                            @click="prevPage">
                            Предыдущая 
                        </button>
                        <button 
                        class="btn btn-success btn-lg"
                            :disabled="pageNumber >= pageCount -1" 
                            @click="nextPage">
                            Следующая ->
                        </button>
                    </div>
            </div>

        </div>
      </div>
  </div>

  <transition-group name="fade">
          <div class='dialog' v-if="IsVisibleDialog" @click="HideDialog"> 
              <div class="dialog-exit-content" @click.stop>
                    <div class="dialog-head" style="color:red">Вы точно желаете выйти?</div>
                    <br>
                    <div class="exit-button-exit">
                      <button class="btn btn-success" @click="AcceptExit()">Да</button>
                      <button class="btn btn-success" @click="HideDialog()">Нет</button>
                    </div>
              </div>
          </div>
      </transition-group>

  </template>
  
  <script>
  import {IMaskDirective} from 'vue-imask'

  export default({
    el: '#lvTable',
        data(){
        return {
          pageNumber: 0,
          NaMe: "admin",
          IsVisibleDialog: false,
          tbData: [ 
            { name: '', count: '+7'}
          ],
          phoneNumberMask: {
            mask: '+{7}(000)000-00-00',
            lazy: true
          }
        }
        },
        props:{
            listData:{
              type:Array,
              required:true
            },
            size:{
              type:Number,
              required:false,
              default: 9
            }
        },
        computed:{
          pageCount(){
                let l = this.tbData.length,
                    s = this.size;
                return Math.ceil(l/s);
          },
          paginatedData(){
              const start = this.pageNumber * this.size,
                    end = start + this.size;
              return this.tbData.slice(start, end);
          }
        },
        methods: {
          addNewRow() { 
            this.tbData.push({ name: '', count: '+7'});
            if(this.tbData.length === 10)
            this.nextPage()
          },
          delRow(index) { 
            this.tbData.splice(index, 1);
          },
          AcceptExit(){
            this.$router.push('/')
          },
          Dashboard(){
            this.$router.push('/Dashboard')
          },
          AdminPanel(){
            this.$router.push('/AdminPanel')
          },
          openExitDialog(){
            this.IsVisibleDialog = true
          },
          HideDialog(){
              this.IsVisibleDialog = false
            },
            nextPage(){
            this.pageNumber++;
          },
          prevPage(){
            this.pageNumber--;
          }
        },
        directives:{
          imask: IMaskDirective
        }
      })

  </script>
  
  <style>
  
  </style>
  