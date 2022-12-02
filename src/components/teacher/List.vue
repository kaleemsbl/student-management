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
    <!-- End modal or dilog to register teacher -->

    <!-- Teachers Table List -->
    <q-table class="my-sticky-header-table" style="height: 100%;" :rows="rows" :columns="columns"
      :rows-per-page-options="[10, 20, 30, 40, 50, 0]" row-key="name" flat bordered>
    
      <template v-slot:body-cell-skills="props">
        <q-td :props="props">
          <q-chip class="glossy" square color="teal" text-color="white" icon="star">
            {{ formatSkills(props?.row?.skills?.primary) }}
          </q-chip>
          <q-chip square color="orange" text-color="white" icon="bookmark">
            {{ formatSkills(props?.row?.skills?.secondary) }}
          </q-chip>
        </q-td>
      </template>
    
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <!-- <q-icon name="visibility" color="primary" size="md"></q-icon>
                <q-icon name="mode_edit" color="secondary" size="md"></q-icon>
                <q-icon name="delete" color="red" size="md"></q-icon> -->
          <q-btn color="primary" icon="visibility" class="q-mr-sm" size="sm" @click="showTeacher(props.row)"></q-btn>
          <q-btn color="secondary" icon="mode_edit" class="q-mr-sm" size="sm"></q-btn>
          <q-btn color="red" icon="delete" size="sm"></q-btn>
        </q-td>
      </template>
    
    </q-table>
    <!-- End Table List -->

    <!-- Modal for show tecaher full details -->
    <q-dialog v-model="isOpenDetails">
      <q-layout view="Lhh lpR fff" container class="bg-white">
        <q-header class="bg-primary">
          <q-toolbar>
            <q-toolbar-title>Teacher Detail</q-toolbar-title>
            <q-btn flat v-close-popup round dense icon="close" />
          </q-toolbar>
        </q-header>
        <q-page padding>
          <TeacherDetail :teacher="singleTeacherDetail"></TeacherDetail>
        </q-page>
      </q-layout>
    </q-dialog>

  </div>
</template>

<script>
import Register from './Register.vue';
import TeacherDetail from './DetailsModel.vue';
export default {
  name: 'Teacher',
  components: {
    Register,
    TeacherDetail
  },
  data() {
    return {
      isOpen: false,
      isOpenDetails: false,
      singleTeacherDetail: {},
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
          name: 'actions',
          label: 'Actions'
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
        }
      
      ]
    }
  },
  methods: {
    formatSkills(skills) {
      const skillArr = skills ? skills : [];
      return skillArr.length > 0 ? skillArr.join(", ") : 'N/A';
    },
    showTeacher(data) {
      this.singleTeacherDetail = {...data};
      this.isOpenDetails = !this.isOpenDetails;
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