<template>
  <div>
    <b-button variant="primary" @click="PushCreate()">Create</b-button>
    <b-table :fields="fields" :items="Data">
      <template v-slot:cell(action)="data">
        <b-button variant="warning" @click="PushUpdate(data.item._id)">Update</b-button>
        <b-button variant="danger" @click="DeleteAction(data.item._id)">Delete</b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
  import {
    mapActions,
    mapGetters
  } from 'vuex'
  export default {
    data() {
      return {
        fields: [{
            key: 'firstname',
            label: 'Firstname',
          },
          {
            key: 'lastname',
            label: 'Lastname',
          },
          {
            key: 'birthday',
            label: 'Birthday',
          },
          {
            key: 'age',
            label: 'Age',
          },
          {
            key: 'action',
            label: 'Action',
          },
        ],
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      ...mapActions('employee_store', ['init', "Update", 'Delete']),
      UpdateAction() {

      },
      DeleteAction(id) {
        this.Delete(id).then(() => {
          this.$swal.fire(
            'Delete',
            'success',
            'success'
          )
        })
      },
      PushCreate() {
        this.$router.push({
          name: 'Form',
          params: {
            id: '_',
            action: 'create'
          }
        })
      },
      PushUpdate(id) {
        this.$router.push({
          name: 'Form',
          params: {
            id: id,
            action: 'update'
          }
        })
      }
    },
    computed: {
      // mix the getters into computed with object spread operator
      ...mapGetters({
        Data: 'employee_store/getData'
      })
    },
    watch: {
    
    },
  }
</script>