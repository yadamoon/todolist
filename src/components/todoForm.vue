<template>
  <div
    class="bg-white flex flex-wrap text-left lg:text-left ml-8 gap-8 sm:justify-center"
  >
    <!--todolist  of todoform  -->
    <div class="">
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
            class="outline-none bg-gray-200 py-1 px-2 w-full rounded border-2 border-transparent focus:border-blue-500"
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
            class="outline-none bg-gray-200 py-1 px-2 w-full rounded border-2 border-transparent focus:border-blue-500 resize-none"
            name=""
            id=""
            cols="30"
            rows="3"
            v-model.lazy="feedback"
          ></textarea>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            @click="addDocu()"
          >
            POST
          </button>
        </div>
      </form>
    </div>
    <!--todo end of todo form  -->

    <!--todo details  -->
    <!--todo start information  -->
    <!-- <div class="flex flex-auto gap-4 justify-center items-center ml-16"> -->
    <div class="bg-gray-50 rounded px-8 pt-6 pb-8 drop-shadow-md w-2/3">
      <h1 class="font-bold text-green-600 text-xl">Information</h1>
      <br />
      <hr />
      <br /><br />
      <div class=" ">
      

        <div
          v-for="info in personalInformation"
          :key="info"
          class="shadow-2xl border"
        >
          <hr class="gap-4" />

          <a class="items-center flex hover:text-gray-200" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 hover:text-gray-200 m-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </a>
          <h1 class="text-sm2 text-purple-700 ml-6 font-bold flex">
            {{ info.email }}
          </h1>
          <hr />
          <p class="text-black text-xs m-8">{{ info.feedback }}</p>

          <div class="justify-end items-end gap-x-8 gap-y-4 float-right mr-5">
            
            <button
              class="bg-red-600 p-1 rounded-sm text-white hover:bg-red-900"
              @click="deleteDocu()"
            >
              Delete
            </button>
          </div>

          <br /><br /><br />
    
        </div>
      </div>
    </div>
    <!--todo end of information  -->
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const personalInformation = [
      {
        id: 1,
        email: "yared241993@gmail.com",
        feedback: "This is called type-based declaration.",
        Completed: true,
      },
      {
        id: 2,
        email: "sami241990@gmail.com",
        feedback: "This is called type-based declaration.",
        Completed: true,
      },

      {
        // id: 3,
        id: 3,
        email: "filmonredaei0@gmail.com",
        feedback: "This is called type-based declaration.",
        Completed: true,
      },
    ];
    const email = ref("");
    const feedback = ref("");
    const Completed = false;

    function addDocu() {
      this.personalInformation.push({
        email: this.email,
        feedback: this.feedback,
        id: this.personalInformation.length + 1,
        Completed: true,
      });
    }
    function deleteDocu(email) {
      // this.information = this.information.filter(
      //   (info) => info.email !== email
      // );
      alert("do u want delete this personal information");
    }
    function updateDocu() {}
    return { personalInformation, deleteDocu, addDocu };
  },
};
</script>

<style lang="scss" scoped></style>
