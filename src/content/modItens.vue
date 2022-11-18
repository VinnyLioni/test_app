<template>
  <div class="mod-itens">
    <div id="show-itens">
      <header-itens title="Cadastro de Itens" icon="fas fa-shapes pr-2" @backRouter="goBack()"/>  
      <edit-vue @openMyModal1="showModal()" @openMyModal2="showEditModal()" @reloadPage="refreshPage()"/>
      <transition name="slide">
        <modal-vue v-if="isModalVisible" @closeMd="closeModal()">
            <div class="header-modal" slot="header">
                Cadastro do Item
            </div>
            <main class="body-modal" slot="body">
                <div class="modal-register">
                    <input type="hidden" id="codi-item" v-model="item.selected">
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
                    <button id="save-itens"  @click="deleteItem" v-if="mode==='edit'"><i class="fas fa-trash-can"></i> Excluir</button>
                    <button id="save-itens"  @click="editItem" v-if="mode==='edit'"><i class="fas fa-upload ml-2"></i> Atualizar</button>
                    <button id="save-itens"  @click="saveItem" v-if="mode==='save'"><i class="fas fa-upload"></i> Salvar</button>
                </div>
            </footer>
        </modal-vue>
      </transition>
    </div>
    <div class="table-itens">
        <table class="table">
            <thead>
                <tr class="table-header">
                    <th scope="col">Código</th>
                    <th scope="col">Descrição</th>
                    <th scope="col">Descrição Completa</th>
                    <th scope="col">Grupo</th>
                    <th scope="col">UN.</th>
                </tr>
            </thead>
            <tbody>
                <tr :class="item.selected ? 'active' : ''" class="table-row" v-for="(item,id) in myItems" :key="id" @click="selectItem(id)">
                    <th scope="row">{{ item.id }}</th>
                    <td scope="row">{{ item.des  }}</td>
                    <td scope="row">{{ item.des2  }}</td>
                    <td scope="row">{{ item.gru  }}</td>
                    <td scope="row">{{ item.un }}</td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>

<script>
import headerItens from '../components/headerItens.vue'
import ModalVue from '../components/ModalVue.vue'
// import TableVue from '../components/tabVue.vue'
import editVue from '../components/editButtons.vue'
import { mapState } from 'vuex'

export default {
  name: "modItens",
  components: { headerItens,ModalVue,editVue },
  computed: mapState(['IsItemSelected']),
  data(){
    return {
        isModalVisible: false,
        mode: 'save',
        finalUrl: '',
        unity: "",
        id: null,
        selected: false,
        item: {
            des: null,
            des2: null,
            gru: null,
            un: null,
            selected: false
        },
        selectedClass: 'inative',
        myItems: {}
    }
  },
  methods: {
    limpar(){
        this.item.id = null
        this.item.des = null
        this.item.des2 = null
        this.item.gru = null
        this.item.un = null
        this.myItems.map(obj => {
            obj.selected = false
        })
    },
    goBack(){
          this.$router.go(-1)
    },
    showModal(mode='save'){
        this.limpar()
        this.isModalVisible=true
        this.mode=mode
    },
    showEditModal(mode='edit'){
            this.isModalVisible=true
            this.mode=mode
    },
    closeModal(){
        this.isModalVisible=false
        this.limpar()
    },
    loadItem(id){
    this.id=id
    this.$http('mpalmo.json').then(res => {
        const obj = Object.keys(res.data).map(key => {
            return {id: key, ...res.data[key]}
        })
        this.myItems = obj.map(obj => {
            return { ...obj, selected: false }
        })
    })
    },
    refreshPage(){
        this.loadItem()
        this.limpar()
    },
    saveItem(){
        this.$http.post('mpalmo.json',this.item)
            .then(() => {
                this.limpar()
                this.loadItem()
                this.closeModal()
            })
    },
    editItem(){
        const finalUrl = `/${this.item.id}.json`
        this.$http.put(`/mpalmo${finalUrl}`, this.item)
            .then(() => {
                this.limpar()
                this.loadItem()
                this.closeModal()
            })
        console.log(`/mpalmo${finalUrl}`, this.item.id)
    },
    selectItem(id,mode='edit'){
        this.myItems.map(obj => {
            obj.selected = false
        })
        this.item = { ...this.myItems[id] }
        this.id = id
        this.myItems[id].selected = !this.myItems[id].selected
        this.mode = mode
    },
    deleteItem(){
        const finalUrl = `/${this.item.id}.json`
        this.$http.delete(`/mpalmo${finalUrl}`)
            .then(() => {
                this.limpar()
                this.loadItem()
                this.closeModal()
            })
            console.log(`/mpalmo${finalUrl}`)
    }
  },
  mounted(){
    this.loadItem()
  }
};

</script>

<style>

    .table-header, th[scope="col"] {
        background-color: #7e76d1;
        color: #ffffff;
        cursor: pointer;
        transition: .2s;
    }

    th[scope="col"]:hover {
        background-color: #6e67b4;
        transition: .2s;
    }

    tbody tr {
        background-color: #f6f6f6;
    }

    .table-row {
        transition: .2s;
    }

    .table-row:hover {
        cursor: pointer;
        background-color: #d6d6d6;
        transition: .2s
    }

    .active {
        background-color: #d6d6d6;
    }

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

</style>
