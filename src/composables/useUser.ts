import { useStorage, StorageSerializers } from "@vueuse/core";
import { ElMessage } from "element-plus";
import { computed, ref } from "vue";

const user = useStorage('user', null, undefined, {
  serializer: StorageSerializers.object
});

export const useUser = () => {
  const loginModel = ref({
    username: "",
    password: "",
  });
  const login = async () => {
    user.value = { id: 1, username: loginModel.value.username };
    ElMessage.success("Login success");
  };
  const loggedIn = computed(() => user.value?.id);
  const logout = async () => {
    user.value = null;
    ElMessage.success("Logout success");
  };

  const registerModel = ref({})
  const register = async () => {
    ElMessage.success("Register success");
  }
  return {
    loginModel,
    user,
    login,
    loggedIn,
    logout,

    registerModel,
    register,
  };
};