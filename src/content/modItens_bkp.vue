<template>
  <div class="mod-itens">
    <div id="show-itens">
      <header-itens title="Cadastro de Itens" icon="fas fa-shapes pr-2" @backRouter="goBack()"/>  
      <edit-vue @openMyModal1="showModal()" @openMyModal2="showEditModal()"/>
      <transition name="slide">
        <modal-vue v-if="isModalVisible" @closeMd="closeModal()">
            <div class="header-modal" slot="header">
                Cadastro do Item
            </div>
            <main class="body-modal" slot="body">
                <div class="modal-register">
                    <input type="hidden" id="codi-item">
                    <div id="first-line">
                        <div class="first-input">
                            <label>Descrição</label>
                            <br>
                            <input type="text" id="first-input" v-model="item.des">
                        </div>
                        <div class="second-input">
                            <label>Descrição Completa</label>
                            <br>
                            <input type="text" id="second-input" v-model="item.des2">
                        </div>
                    </div>
                    <div id="second-line">
                        <div class="first-input">
                            <label>Grupo de Item</label>
                            <br>
                            <div id="group-input">
                                <input type="text" v-model="item.gru">
                                <button><i class="fas fa-bars"></i></button>
                            </div>
                        </div>
                        <div class="second-input">
                            <label for="units">Unidade de Medida</label>
                            <br>
                            <select name="unit-select" id="unity-select" v-model="item.un">
                                <option value="" disabled>Selecione o Controle</option>
                                <option value="UN">Unidade</option>
                                <option value="CX">Caixa</option>
                                <option value="PC">Pacote</option>
                                <option value="KG">Quilograma</option>
                                <option value="MG">Miligrama</option>
                                <option value="L">Litros</option>
                            </select>
                        </div>
                    </div>
                </div>
            </main>
            <footer slot="footer">
                <div class="footer-modal">
                    <button id="save-itens" v-if="mode === 'save'"  @click="saveItem"><i class="fas fa-upload"></i> Salvar</button>
                    <button id="save-itens" v-if="mode === 'edit'"  @click="editItem"><i class="fas fa-upload"></i> Atualizar</button>
                </div>
            </footer>
        </modal-vue>
      </transition>
    </div>
    <div class="myTab">
        <div class="table-vue">
            <b-table sticky-header hover :fields="myHeaders" :items="myItems">
                <template #cell(selected)="data">
                    <b-btn variant="primary" @click="selectItem(data.item)" class="span-selected">
                        <i class="fas fa-circle-dot"></i>
                    </b-btn>
                    <!-- <button @click="selectItem(data.item)"></button> -->
                </template>
            </b-table>
            <!-- <b-table sticky-header hover :fields="myHeaders" :items="myItems" 
            responsive="sm" ref="selectableTable" selectable :select-mode="selectMode" @row-selected="onRowSelected">
                <template #cell(selected)="{ rowSelected }">
                    <template v-if="rowSelected">
                        <span aria-hidden="true">&check;</span>
                    </template>
                    <template v-else>
                        <span aria-hidden="true">&nbsp;</span>
                        <span class="sr-only">Not Selected</span>
                    </template>
                </template>
            </b-table>
            <p>
                selecionada:<br>
                {{ item }}
            </p> -->
        </div>
    </div>
  </div>
</template>

<script>
import headerItens from '../components/headerItens.vue'
import ModalVue from '../components/ModalVue.vue'
// import TableVue from '../components/tabVue.vue'
import editVue from '../components/editButtons.vue'

export default {
  name: "modItens",
  components: { headerItens,ModalVue,editVue },
  data(){
    return {
        isModalVisible: false,
        selectMode: 'single',
        finalUrl: '',
        unity: "",
        id: null,
        myHeaders: [
            { key: 'selected', label: ''},
            { key: 'id', label: 'Código', sortable: true},
            { key: 'des', label: 'Descrição', sortable: true},
            { key: 'des2', label: 'Descrição Completa', sortable: true},
            { key: 'gru', label: 'Grupo', sortable: true},
            { key: 'un', label: 'Unidade de Medida', sortable: true}
        ],
        item: {},
        selected: false,
        myItems: {}
    }
  },
  methods: {
    cleanUser(){
        this.item=''
        this.id=null
    },
    goBack(){
          this.$router.go(-1)
    },
    showModal(mode='save'){
        this.isModalVisible=true
        this.mode=mode
        console.log(this.isModalVisible)
    },
    showEditModal(mode='edit'){
        this.isModalVisible=true
        this.mode=mode
        console.log(this.isModalVisible)
    },
    closeModal(){
        this.isModalVisible=false
        console.log(this.isModalVisible)
        this.item = ''
    },
    saveItem(){
        this.$http.post('mpalmo.json', this.item)
            .then(() => {
                this.item.des = ''
                this.item.des2 = ''
                this.item.gru = ''
                this.item.un = 'UN'
            })
            console.log(this.item)
    },
    editItem(){
        this.$http.put(this.finalUrl)
            .then(() => {
                this.item.des = ''
                this.item.des2 = ''
                this.item.gru = ''
                this.item.un = 'UN'
            })
    },
    loadItem(id){
        this.id=id
        this.$http('mpalmo.json').then(res => {
            const obj = Object.keys(res.data).map(key => {
                return {id: key, ...res.data[key]}
            })
            this.myItems = obj
        })
        // this.$http('mpalmo.json').then(res => {
        //     this.myItems = res.data
        // })
    },
    // onRowSelected(items){
    //     this.item=items
    // },
    // selectItem(item,id,selected=true){
    //     this.id = id
    //     this.item={...item}
    //     this.selected=selected
    //     console.log(id)
    // }
    selectItem(id){
        this.item = id
        this.id = this.item.id
        this.finalUrl = `/mpalmo/${this.id}`
        console.log(this.finalUrl)
    }
  },
  mounted(){
    this.loadItem()
  }
};

</script>

<style>

    .btn-primary {
        color: #6a6886;
        border: none
    }

    .btn-primary:hover,
    .btn-primary:focus {
        color: #7e76d1;
        background: transparent;
    }

    .mod-itens {
            height: 80vh;
            background-color: #ffffff;
            border-radius: 5px;
    } 

    #show-itens {
        display: flex;
        justify-content: space-between;
        flex-flow: wrap;
        border-radius: 5px;
        padding: 10px;
    }

    .header-modal {
        font-size: 1.3rem;
    }

    .body-modal input {
        padding: 5px;
    }

    .modal-register input {
        width: 200px;
        outline: none;
    }

    #first-line,
    #second-line {
        display: flex;
        justify-content: space-around;
        padding-bottom: 30px;
    }

    #first-input {
        border-radius: 5px;
        text-align: left;
    }

    #second-input {
        border-radius: 5px;
    }

    #group-input {
        width: 200px;
    }

    #group-input input {
        width: 170px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    #group-input button {
        width: 30px;
        height: 34px;
        background-color: #ffffff;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }

    #group-input button i {
        font-size: 1rem;
        display: flex;
        padding: 10px;
        align-content: center;
        justify-content: center;
    }

    #unity-select {
        width: 200px;
        outline: none;
        border-radius: 5px;
        padding: 5px;
    }


    #save-itens {
        color: #127a5b;
        border-radius: 5px;
        padding: 5px;
        transition: .2s;
    }

    #save-itens:hover {
        background-color: #1ab486;
        transition: .2s;
        color: #ffffff;
    }

    #search-box span {
        width: 100%;
        display: flex;
    }

    #search-box input {
        border: none ;
        outline: none;
        border-radius: 5px;
    }

    #search-box input:focus {
        border: none ;
    }

    .myTab {
        display: flex;
        justify-content: space-around;
        height: 1vh;
    }
</style>
