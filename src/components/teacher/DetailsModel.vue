<template>
  <div class="q-mt-xl">
    <div class="q-table__container q-table--horizontal-separator q-table__card q-table--no-wrap">
      <div class="q-table__middle">
        <table class="q-table">
          <tbody>
            <tr class="">
              <td class="text-left"><strong>Full Name</strong></td>
              <td class="text-center">{{ teacher.name }}</td>
            </tr>
            <tr class="">
              <td class="text-left"><strong>Email</strong></td>
              <td class="text-center">{{ teacher.email }}</td>
            </tr>
            <tr class="">
              <td class="text-left"><strong>Mobile</strong></td>
              <td class="text-center">{{ teacher.mobile }}</td>
            </tr>
            <tr class="">
              <td class="text-left"><strong>Qualification</strong></td>
              <td class="text-center">{{ teacher.qualification }}</td>
            </tr>
            <tr class="">
              <td class="text-left"><strong>Designation</strong></td>
              <td class="text-center">{{ teacher.designation }}</td>
            </tr>
            <tr class="">
              <td class="text-left"><strong>Class Teacher</strong></td>
              <td class="text-center">{{ teacher.isClassTeacher }}</td>
            </tr>
            <tr class="">
              <td class="text-left"><strong>Skills</strong></td>
              <td class="text-center">
                <q-chip class="glossy" square color="teal" text-color="white" icon="star">
                  {{ formatSkills(teacher?.skills?.primary) }}
                  <q-tooltip>Primary Skills</q-tooltip>
                </q-chip>
                <q-chip square color="orange" text-color="white" icon="bookmark">
                  {{ formatSkills(teacher?.skills?.secondary) }}
                  <q-tooltip>Secondary Skills</q-tooltip>
                </q-chip>
              </td>
            </tr>
            <tr class="">
              <td class="text-left"><strong>Address</strong></td>
              <td class="text-center">{{ teacher.address }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["teacher"],
  data() {
    return {
    };
  },
  methods: {
    formatSkills(skills) {
      const skillArr = skills ? skills : [];
      return skillArr.length > 0 ? skillArr.join(", ") : 'Not Available';
    }
  }
};
</script>
