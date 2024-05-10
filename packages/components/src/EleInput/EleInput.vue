<template>
    <div class="gie-ele-input">
        <p class="gie-ele-p" v-if="props.isShowP">state: {{ state }}</p>
        <el-input v-model="state" ref="inputRef" v-bind="$attrs" type="text" :disabled="props.disabled" />
    </div>
</template>
<script setup lang="ts">
    import { computed, ref } from 'vue';
    import { ElInput } from 'element-plus';
    import type { EleInputEmits, EleInputProps } from './EleInput';

    defineOptions({
        name: 'GieEleInput',
    });

    const emit = defineEmits<EleInputEmits>();

    const props = withDefaults(defineProps<EleInputProps>(), {
        modelValue: '',
        disabled: false,
        isShowP: true,
    });

    const state = computed({
        get: () => props.modelValue,
        set: (val) => {
            emit('update:modelValue', val);
        },
    });

    const inputRef = ref<InstanceType<typeof ElInput>>();

    function focus() {
        inputRef.value?.focus();
    }

    defineExpose({
        focus,
    });
</script>