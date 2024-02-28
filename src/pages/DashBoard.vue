<template>
    <div class="admin-panel">
      <burger-menu></burger-menu>
          <div class="dashboard">
              <div class="dashboard-left">
                <div class="slider">    
<div class="surface-ground px-4 py-5 md:px-6 lg:px-8">
    <div class="grid">
        <div class="col-12 md:col-6 lg:col-3">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Заказы</span>
                        <div class="text-900 font-medium text-xl">152</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-blue-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-shopping-cart text-blue-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-green-500 font-medium">24 новых </span>
                <span class="text-500">с момента последнего посещения</span>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Доход</span>
                        <div class="text-900 font-medium text-xl">$2.100</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-orange-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-map-marker text-orange-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-green-500 font-medium">%52+ </span>
                <span class="text-500">С прошлой недели</span>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Клиенты</span>
                        <div class="text-900 font-medium text-xl">28441</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-cyan-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-inbox text-cyan-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-green-500 font-medium">520  </span>
                <span class="text-500" style="word-wrap:break-word">новых зарегестрированных</span>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Комменты</span>
                        <div class="text-900 font-medium text-xl">152 непрочитанных</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-purple-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-comment text-purple-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-green-500 font-medium">85 </span>
                <span class="text-500">ответили</span>
            </div>
        </div>
    </div>
</div>

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
      <dialog-exit v-if="IsVisibleDialogExit"></dialog-exit>
          <div class='dialog' v-if="IsVisibleDialogExit" @click="HideDialogExit"> 
              <div class="dialog-exit-content" @click.stop>
                    <div class="dialog-head" style="color:red">Вы точно желаете выйти?</div>
                    <br>
                    <div class="exit-button-exit">
                      <button class="btn btn-success" @click="AcceptExit()">Да</button>
                      <button class="btn btn-success" @click="HideDialogExit()">Нет</button>
                    </div>
            </div>
          </div>

      </transition-group>
    </template>
    
    <script>
export default {
  data() {
    return {
      IsVisibleDialog: false,
      IsVisibleDialogExit: false,
      newNodeText: '',
      isActive: true,
      small: false,
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
    OpenDialogExit() {
      this.IsVisibleDialogExit = true
    },
    AcceptExit() {
      this.$router.push('/')
    },
    OpenDialog() {
      this.IsVisibleDialog = true
    },
    HideDialog() {
      this.IsVisibleDialog = false
    },
    HideDialogExit() {
      this.IsVisibleDialogExit = false
    },
    addNewNode() {
      this.tbNodes.push({
        id: this.nextNodeId++,
        name: this.newNodeText
      })
      this.newNodeText = ''
    },
    delNode(index) {
      this.tbNodes.splice(index, 1);
    },
    onResize() {
      this.small = window.innerWidth <= 820;
    }
  },
  created() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onResize)
  },
}
</script>
    
    <style>
    
    </style>
    