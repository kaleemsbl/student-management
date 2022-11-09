<template>
  <div class="q-pa-md">
    
    <!-- Modal or dilog to register teacher -->
    <div class="mb-5">
      <q-btn class="" color="secondary" @click="isOpen = true">
        <q-icon name="add"></q-icon> Register Teacher
      </q-btn>
    
      <q-dialog v-model="isOpen">
        <q-layout view="Lhh lpR fff" container class="bg-white">
          <q-header class="bg-primary">
            <q-toolbar>
              <q-toolbar-title>Register Teacher</q-toolbar-title>
              <q-btn flat v-close-popup round dense icon="close" />
            </q-toolbar>
          </q-header>
          <q-page padding>
            <Register />
          </q-page>
        </q-layout>
      </q-dialog>
    </div>

    <!-- Table List -->
    <q-table
      class="my-sticky-header-table"
      title='Teachers'
      :rows="rows"
      :columns="columns"
      row-key="name" flat
      bordered
      />
  </div>
</template>

<script>
import Register from './Register.vue';
export default {
  name: 'Teacher',
  components: {
    Register
  },
  data() {
    return {
      isOpen: false,
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Name',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'email',
          required: true,
          label: 'Email',
          align: 'left',
          field: row => row.email,
          sortable: true
        },
        {
          name: 'mobile',
          required: true,
          label: 'Mobile',
          align: 'left',
          field: row => row.mobile,
          format: val => `+91- ${val}`,
          sortable: true
        },
        {
          name: 'qualification',
          required: true,
          label: 'Quali.',
          align: 'left',
          field: row => row.qualification,
          sortable: true
        },
        {
          name: 'designation',
          required: true,
          label: 'Designation',
          align: 'left',
          field: row => row.designation,
          sortable: true
        },
        {
          name: 'classTeacher',
          required: true,
          label: 'C.T',
          align: 'left',
          field: row => row.classTeacher,
          format: val => val ? val : 'N/A',
          sortable: true
        },
        {
          name: 'skills',
          required: true,
          label: 'Skills',
          align: 'left',
          field: row => row.skills,
          format: val => `P - ${val.primary.join(", ")} S - ${val.secondary.join(", ")}`,
          sortable: true
        },
        {
          name: 'address',
          required: true,
          label: 'Address',
          align: 'left',
          field: row => row.address
        },
      ],
      rows: [
        {
          name: 'Kaleem Khan',
          email: 'kaleemk@yopmail.com',
          mobile: '9876543210',
          qualification: 'M.com',
          designation: 'Teacher',
          classTeacher: '11th',
          skills: {
            primary: ['Acounts', 'frsdf'],
            secondary: ['Stastics', 'Economics']
          },
          address: 'Asrafpur, Nagli'
        },
        {
          name: 'Shahnawaz Khan',
          email: 'sk@yopmail.com',
          mobile: '8876543210',
          qualification: 'M.sc',
          designation: 'Teacher',
          classTeacher: '12th',
          skills: {
            primary: ['Math'],
            secondary: ['Physics', 'Chemistery']
          },
          address: 'Sambhal Niyawali'
        },
        {
          name: 'Shahrukh Khan',
          email: 'srk@yopmail.com',
          mobile: '8886543210',
          qualification: 'B.Tech',
          designation: 'Teacher',
          classTeacher: '',
          skills: {
            primary: ['Physics'],
            secondary: ['Math', 'Chemistery']
          },
          address: 'Sambhal Niyawali'
        },
      
      ]
    }
  }
}
</script>

<style>
.my-sticky-header-table {

  height: 310px
}

.q-table__top,
.q-table__bottom,
thead tr:first-child th {
  background-color: #c1f4cd
}

.q-table--loading thead tr:last-child th {
  top: 48px
}
</style>