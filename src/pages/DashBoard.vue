<template>
    <div class="admin-panel">
        <div class="admin-bar">
              <div><p class="logo">Admin</p></div>
              <div class="line"></div>
                <div class="first_nav" 
                  @click="DashBoard"
                  ><img class="exit" src="../assets/cube-outline-svgrepo-com.svg">Главная</div>
                  <div class="but-exit"
                  @click="LogIn">
                  <img class="user" src="../assets/user-identity-svgrepo-com.svg">Пользователи</div>
                  <div class="but-exit"
                  @click="OpenDialogExit"
                  ><img class="exit" src="../assets/arrow-left-svgrepo-com.svg">Выход</div>
        </div>
          <div class="dashboard">
              <div class="dashboard-left">
                <div class="slider">

                </div>
                <div class="node-add-space">
                  <button class="btn btn-success , button-add" @click="OpenDialog()">Добавить заметку</button>
                </div>
              </div>
                <div class="nodelist">
                  <transition-group name="fade">
                    <div class="node"
                      v-for="(node, index) in tbNodes"
                      v-bind:key="node.id"
                      v-bind:name="node.name"
                      >+++{{ node.name }}<br><button class="btn btn-success" @click="delNode(index)">Удалить заметку</button><br>
                      </div>
                  </transition-group>
                </div>   
          </div>          
    </div>
      <transition-group name="fade">

          <div class='dialog' v-if="IsVisibleDialog" @click="HideDialog"> 
              <div class="dialog-content" @click.stop>
                    <div class="dialog-head">Добавление заметки:</div>
                    <textarea class="th180" v-model="newNodeText" placeholder="Напишите заметку"></textarea><br>
                    <button class="btn btn-success" @click="addNewNode()">Сохранить</button>
            </div>
          </div>

          <div class='dialog' v-if="IsVisibleDialogExit" @click="HideDialogExit"> 
              <div class="dialog-exit-content" @click.stop>
                    <div class="dialog-head" style="color:red">Вы точно желаете выйти?</div>
                    <br>
                    <div class="exit-button">
                      <button class="btn btn-success" @click="AcceptExit()">Да</button>
                      <button class="btn btn-success" @click="HideDialogExit()">Нет</button>
                    </div>
            </div>
          </div>

      </transition-group>
    </template>
    
    <script>
  
    export default({
          data(){
          return {
            IsVisibleDialog: false,
            IsVisibleDialogExit: false,
            newNodeText: '',
              tbNodes: [
                {
                  id: 1,
                  name: 'Помыть кота'
                },
                {
                  id: 2,
                  name: 'Покормить кота'
                },
                {
                  id: 3,
                  name: 'Покорить кота'
                }
              ],
              nextNodeId: 4
          }
          },
          methods: {
            OpenDialogExit(){
              this.IsVisibleDialogExit = true
            },
            AcceptExit(){
              this.$router.push('/')
            },
            LogIn(){
              this.$router.push('/AdminPanel')
            },
            DashBoard(){
              this.$router.push('/Dashboard')
            },
            OpenDialog(){
              this.IsVisibleDialog = true
            },
            HideDialog(){
              this.IsVisibleDialog = false
            },
            HideDialogExit(){
              this.IsVisibleDialogExit = false
            },
            addNewNode() {
              this.tbNodes.push({
                id: this.nextNodeId++,
                name: this.newNodeText
              })
              this.newNodeText = ''
            },
            delNode(index){
              this.tbNodes.splice(index, 1);
            }
          }
        })
  
    </script>
    
    <style>
    
    </style>
    