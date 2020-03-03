<template>
    <div>
        <b-form-group id="input-group-1" label="Firstname:" label-for="input-1">
            <b-form-input id="input-1" v-model="obj.firstname" type="text" placeholder="Enter Firstname">
            </b-form-input>
        </b-form-group>
        <b-form-group id="input-group-1" label="Lastname:" label-for="input-1">
            <b-form-input id="input-1" v-model="obj.lastname" type="text" placeholder="Enter Lastname">
            </b-form-input>
        </b-form-group>
        <b-form-group id="input-group-1" label="Birthday:" label-for="input-1">
            <b-form-datepicker id="example-datepicker" v-model="obj.birthday" class="mb-2"></b-form-datepicker>
        </b-form-group>
        <b-form-group id="input-group-1" label="Age:" label-for="input-1">
            <b-form-input id="input-1" v-model="obj.age" type="number">
            </b-form-input>
        </b-form-group>

        <b-button type="submit" variant="success" @click="postUpdate">Submit</b-button>
        <b-button type="reset" variant="danger" @click="clearData">Reset</b-button>
        <b-button type="reset" variant="primary" @click="Back">Back</b-button>
    </div>
</template>

<script>
    import {
        mapActions
    } from 'vuex'
    export default {
        data() {
            return {
                actions: null,
                id: this.$route.params.id,
                obj: {
                    firstname: null,
                    lastname: null,
                    birthday: null,
                    age: null,
                    history_working: [],
                    history_education: []
                }
            }
        },
        mounted() {
            this.actions = this.$route.params.action
        },
        methods: {
            ...mapActions('employee_store', ['Post', 'Update', 'initGetId']),
            postUpdate() {
                if (this.actions == 'update') {
                    this.Update({
                        id: this.id,
                        obj: this.obj
                    }).then(() => {
                        this.$swal.fire(
                            'Update',
                            'success',
                            'success'
                        ).then(() => {
                            this.Back();
                        })
                    })
                } else {
                    this.Post(this.obj).then(() => {
                        this.$swal.fire(
                            'Create',
                            'success',
                            'success'
                        ).then(() => {
                            this.Back();
                        })
                    })
                }

            },
            clearData() {
                this.obj.id = null
                this.obj.firstname = null
                this.obj.lastname = null
                this.obj.birthday = null
                this.obj.age = null
            },
            Back() {
                this.$router.push('/')
            }
        },
        computed: {

        },
        watch: {
            actions(val) {
                if (val == 'update') {
                    this.initGetId(this.id).then(res => {
                        this.obj.firstname = res[0].firstname
                        this.obj.lastname = res[0].lastname
                        this.obj.birthday = res[0].birthday
                        this.obj.age = res[0].age
                    })
                }
            }
        },
    }
</script>