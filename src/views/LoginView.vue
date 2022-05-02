<script setup lang="ts">
import { ref, computed } from "vue";
import { ElMessage } from "element-plus";
import { useUser } from "@/composables/useUser";

const { loggedIn, login, loginModel, logout, user } = useUser();
</script>
<template>
  <div class="about">
    <h1>Login</h1>
    <p v-if="loggedIn">
      Welcome {{ user?.username }},
      <a href="#" @click.prevent="logout">Logout</a>
    </p>
    <el-form v-if="!loggedIn" ref="form" :model="loginModel" label-width="80px">
      <el-form-item label="Username">
        <el-input
          v-model="loginModel.username"
          placeholder="Username"
        ></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input
          v-model="loginModel.password"
          type="password"
          placeholder="Password"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
