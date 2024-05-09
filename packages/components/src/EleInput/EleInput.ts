import EleInput from './EleInput.vue'

/**
 * 定义props类型
 */
export interface EleInputProps {
    modelValue: string;
    disabled?: boolean;
}

/**
 * 定义emit类型
 */
export type EleInputEmits = {
    'update:modelValue': [value: string];
};

/**
 * 定义instance类型
 */
export type EleInputInstance = InstanceType<typeof EleInput>;