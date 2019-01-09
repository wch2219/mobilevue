<template>
    <div>
      <mt-swipe :auto="4000">
        <mt-swipe-item>
         1
        </mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
      </mt-swipe>
    </div>
</template>

<script>
    export default {
        name: "",
      data(){
          return {
            selecteds:'dsdasdsa',
            selecteddd:''
          }
      },
      methods(){

        this.$post(this.$api.loginapi, this.loginParams)
          .then((response) => {
            console.log(response);
            localStorage.setItem("token",response.result.token);
            console.log( localStorage.getItem("token"));
            if (response.code === 200){
              this.$router.push({path: '/home'})
            }

          })
      }



    }
</script>

<style scoped>

</style>
