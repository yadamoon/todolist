<template>
  <div>
    <div>
      <headerApp />
    </div>
    <br />
    <div>
      <todoForm  :personslInformation="personalInformation" @addDocu="addDocu"/>
    </div>
    <br /><br />
    <div>
      <footerApp />
    </div>
  </div>
</template>

<script>
import footerApp from "./components/footerApp.vue";
import todoForm from "./components/todoForm.vue";
import headerApp from "./components/headerApp.vue";
import Card from "./components/card.vue";

export default {
  name: "App",
  components: {
    footerApp,
    todoForm,
    headerApp,
    Card,
  },
  data() {
    return {
      
   personalInformation : [
      {
        id: 1,
        email: "yared241993@gmail.com",
        feedback: "This is called type-based declaration.",
      
      },
      {
        id: 2,
        email: "sami241990@gmail.com",
         feedback: "This is called type-based declaration.",
     
      },

      {
        // id: 3,
        id: 3,
        email: "filmonredaei0@gmail.com",
        feedback: "This is called type-based declaration.",
     
      },
   ],
    }
  },
  methods: {
  addDocu(email,feedback){
  
        const newMember = {
          email: email,
        feedback:feedback,
          id: this.personalInformation.length + 1,
        
        }
       this.personalInformation.push(newMember)
    }
 }
};
</script>

<style></style>
