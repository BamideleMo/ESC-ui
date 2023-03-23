<script setup lang="ts">
import CustomButton from './CustomButton.vue'
</script>

<template>
  <div class="footer">
    <div class="flex flex-wrap justify-around items-center p-10">
      <CustomButton color="white" to="/membership" link-text="Become a member" />
      <CustomButton color="white" to="/contactus" link-text="Contact us" />
      <CustomButton color="white" to="/newsletter" link-text="Newsletter" />
    </div>
    <div class="flex flex-wrap justify-center text-center p-5" style="color: white">
      ECWA SEMINARY CHURCH <br />
      GOODLUCK EBELE JONATHAN ROAD<br />
      JOS, PLATEAU STATE
    </div>
    <div class="flex flex-wrap justify-center pb-10">
      <a href="">
        <img
          src="/assets/images/Facebook_logo__square_-removebg-preview 1.png"
          style="height: 30px"
        />
      </a>
      <a href="">
        <img src="/assets/images/YouTube-Logo 1.png" class="px-1" style="height: 50px" />
      </a>
    </div>
  </div>
</template>

<style>
.footer {
  background-color: #071060;
  width: 100%;
}
</style>
