<template>
  <div>
    <button @click="getCode" class="button-class" style="background-color: lightseagreen">Submit</button>
    <button @click="clearCodeEditor" class="button-class">Clear Code Editor</button>
    <button @click="clearOutputEditor" class="button-class">Clear Output Editor</button>
    <div :data-pym-src="embedSrc"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineEmits } from 'vue';

// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['submit']);
const embedSrc = "https://www.jdoodle.com/embed/v1/6318069ddf19fc47";
const code = ref("");

const loadJDoodleScript = () => {
  const script = document.createElement("script");
  script.src = "https://www.jdoodle.com/assets/jdoodle-pym.min.js";
  script.type = "text/javascript";
  document.body.appendChild(script);
  window.pym = {};
};

const handleMessage = (event) => {
  if (event.origin === "https://www.jdoodle.com") {
    if (event.data.script) {
      code.value = event.data.script;
        emit('submit', code.value);
    }
  }
};

const getCode = () => {
  code.value = window.pym.autoInitInstances[0].sendMessage("getCode");
  if(code.value)
  emit('submit', code.value);
};

const clearCodeEditor = () => {
  window.pym.autoInitInstances[0].sendMessage("clearCodeEditor");
  code.value = '';
};

const clearOutputEditor = () => {
  window.pym.autoInitInstances[0].sendMessage("clearOutputEditor");
};

onMounted(() => {
  loadJDoodleScript();
  window.addEventListener("message", handleMessage);
});
</script>

<style>
.button-class {
  padding: 10px;
  border: none;
  border-radius: 4px;
  color: white;
  background-color: rgb(171, 171, 192);
  margin: 0px 10px 10px 0;
  float: right;
  cursor: pointer;
}
</style>
