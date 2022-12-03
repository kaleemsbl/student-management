<template>
  <div class="q-pa-md">
    <!-- Student Table List -->
    <q-table class="my-sticky-header-table" style="height: 100%;" :rows="rows" :columns="columns"
      :rows-per-page-options="[10, 20, 30, 40, 50, 0]" row-key="name" flat bordered>

      <template v-slot:top>
        <q-btn outline style="color: goldenrod;" @click="isOpen = true">
          <q-icon name="add"></q-icon> Add New
          <q-tooltip>Add New Student</q-tooltip>
        </q-btn>
      </template>
    
      <template v-slot:body-cell-skills="props">
        <q-td :props="props">
          <q-chip class="glossy" square color="teal" text-color="white" icon="star">
            {{ formatSubject(props?.row?.subjects) }}
          </q-chip>
        </q-td>
      </template>
    
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-btn color="primary" icon="visibility" class="q-mr-sm" size="sm" @click="showStudent(props.row)">
            <q-tooltip>View Details</q-tooltip>
          </q-btn>
          <q-btn color="secondary" icon="mode_edit" class="q-mr-sm" size="sm">
            <q-tooltip>Edit Student</q-tooltip>
          </q-btn>
          <q-btn color="red" icon="delete" size="sm">
            <q-tooltip>Delete Student</q-tooltip>
          </q-btn>
        </q-td>
      </template>
    
    </q-table>
    <!-- End Table List -->

    <!-- Modal or dilog to register student -->
    <q-dialog v-model="isOpen">
      <q-layout view="Lhh lpR fff" container class="bg-white">
        <q-header class="bg-primary">
          <q-toolbar>
            <q-toolbar-title>Register Student</q-toolbar-title>
            <q-btn flat v-close-popup round dense icon="close" />
          </q-toolbar>
        </q-header>
        <q-page padding>
          <!-- child register form component -->
          <student-register></student-register>
        </q-page>
      </q-layout>
    </q-dialog>
    <!-- End modal or dilog to register student -->

    <!-- Modal for show tecaher full details -->
    <q-dialog v-model="isOpenDetails">
      <q-layout view="Lhh lpR fff" container class="bg-white">
        <q-header class="bg-primary">
          <q-toolbar>
            <q-toolbar-title>Student Detail</q-toolbar-title>
            <q-btn flat v-close-popup round dense icon="close" />
          </q-toolbar>
        </q-header>
        <q-page padding>
          <!-- Student full details component -->
          <student-details :student="student"></student-details>
        </q-page>
      </q-layout>
    </q-dialog>

  </div>
</template>

<script>
import StudentRegister from './StudentRegister.vue';
import StudentDetails from './StudentDetailsModel.vue';
export default {
  name: 'Student',
  components: {
    StudentRegister,
    StudentDetails
  },
  data() {
    return {
      isOpen: false,
      isOpenDetails: false,
      student: {},
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
          name: 'subjects',
          required: true,
          label: 'Subjects',
          align: 'left',
          field: row => row.subjects,
          format: val => val.join(', '),
          sortable: true
        },
        {
          name: 'class',
          required: true,
          label: 'Class',
          align: 'left',
          field: row => row.class,
          format: val => `${val}`,
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
          subjects: ['Hindi', 'English', 'Math', 'Physics', 'Chemistry'],
          class: '12th',
          address: 'Asrafpur, Nagli'
        }
      
      ]
    }
  },
  methods: {
    formatSubject(subjects) {
      const subjectArr = subjects ? subjects : [];
      return subjectArr.length > 0 ? subjectArr.join(", ") : 'Not Available';
    },
    showStudent(data) {
      this.student = {...data};
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