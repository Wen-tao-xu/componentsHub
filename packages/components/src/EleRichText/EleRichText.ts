import EleRichText from './EleRichText.vue'

/**
 * 定义props类型
 */
export interface EleRichTextProps {
    modelValue: string;
}
/**
 * 定义emit类型
 */
export type EleRichTextEmits = {
    'update:modelValue': [value: string];
};

/**
 * 定义instance类型
 */
export type EleRichTextInstance = InstanceType<typeof EleRichText>;