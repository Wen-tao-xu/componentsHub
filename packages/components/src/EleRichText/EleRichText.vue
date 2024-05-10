<template>
  <div
    ref="gioEleRickText"
    :value="props.modelValue"
    class="gie-input-rich-text"
    contenteditable="true"
    @input="onInput"
    @blur="onBlur"
  ></div>
</template>
<script setup lang="ts">
import { formItemContextKey } from "element-plus";
import { inject, onMounted, ref } from "vue";
import { EleRichTextEmits, EleRichTextProps } from "./EleRichText";

const gioEleRickText = ref()
const elFormItem = inject(formItemContextKey);
defineOptions({
  name: "GieEleRichText",
});

const props = withDefaults(defineProps<EleRichTextProps>(), {
  modelValue: "",
});

onMounted(() => {
  gioEleRickText.value.innerText = props.modelValue
});

const emit = defineEmits<EleRichTextEmits>();

const onInput = (e: any) => {};

const onBlur = (e: any) => {
  emit("update:modelValue", e.target.innerText);

  elFormItem!.validate?.("blur").catch((err) => console.warn(err));
};
</script>
