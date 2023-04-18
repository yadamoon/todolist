<template>
  <div
    class="bg-white flex flex-wrap text-left lg:text-left ml-8 gap-8 justify-center"
  >
    <!--todolist  of todoform  -->
    <div class="max-w-screen-2xlxl max-h-screen">
      <form
        class="bg-gray-50 rounded px-8 pt-6 pb-8 drop-shadow-md h-80"
        @submit.prevent="addDocu()"
      >
        <h1 class="font-bold text-green-600 text-xl">TodoList Form</h1>
        <div class="">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Email
          </label>
          <input
            class="outline-none bg-gray-200 py-1 px-2 w-60 rounded border-2 border-transparent focus:border-blue-500"
            id="username"
            v-model.lazy="email"
            type="text"
            placeholder="Username"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Message
          </label>

          <textarea
            class="outline-none bg-gray-200 py-1 px-2 w-6/12 rounded border-2 border-transparent focus:border-blue-500 resize-none"
            name=""
            id=""
            cols="30"
            rows="4"
            v-model.lazy="feedback"
          ></textarea>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            @click="addDocu()"
          >
         Add
          </button>
        </div>
      </form>
    </div>
    <!--todo end of todo form  -->


<!--!? display information  -->
<div>
  <div v-for="person in personslInformation" :key="person">
 <h3> {{ person.email  }}</h3>

  <h3>{{ person.personslInformation }}</h3>

<div>
    <button>{{ btnDelete }}</button>
</div>
  </div>
</div>

      </div>
  
   

   
  
    <!--todo end of information  -->

</template>

<script>
import { ref } from "vue";

export default {
props:['personslInformation'],
  
setup (props,context) {
    // context has attrs, slots, and emit()
    console.log(props.personslInformation) // access a prop to our component
    const email = ref("");
  const feedback = ref("");
  const btnDelete=ref("Delete");
   

    function addDocu() {

      context.emit('addDocu', email.value, feedback.value)
      email.value = '',
      feedback.value = '';
     
      };
 
    function deleteDocu() {
   
    }
    return{email,feedback,addDocu,deleteDocu,btnDelete}
  },
     
};
</script>

<style lang="scss" scoped></style>
