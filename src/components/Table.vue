<template>
  <div>
    <b-table :fields="fields" :items="items" >
    
    </b-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fields: [
          {
            key: 'name',
            label: 'Full Name',
            formatter: 'fullName'
          },
        ],
        items: [
          { name: { first: 'John', last: 'Doe' }, sex: 'Male', age: 42 },
          { name: { first: 'Jane', last: 'Doe' }, sex: 'Female', age: 36 },
          { name: { first: 'Rubin', last: 'Kincade' }, sex: 'male', age: 73 },
          { name: { first: 'Shirley', last: 'Partridge' }, sex: 'female', age: 62 }
        ]
      }
    },
    methods: {
      fullName(value) {
        return `${value.first} ${value.last}`
      }
    }
  }
</script>