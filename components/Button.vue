<script setup lang="ts">
const { label, disabled, isPill, type = 'button' } = defineProps<{
	/**
	 * The text to display inside the button
	 */
	label?: string;
	/**
	 * Whether the button is disabled
	 */
	disabled?: boolean;
	/**
	 * Whether the button should have rounded styling
	 */
	isPill?: boolean;
	/**
	 * The HTML button type attribute (button, submit, or reset)
	 */
	type?: 'button' | 'submit' | 'reset';
}>();
</script>

<template>
	<button
		:type='type'
		class="px-4 py-2 font-bold"
		:class="{
			'rounded-full': isPill,
			'bg-green-700 hover:bg-green-900 text-white': !disabled,
			'bg-gray-400 cursor-not-allowed text-gray-600': disabled
		}"
		:disabled="disabled"
		>
			<slot>{{ label }}</slot>
	</button>
</template>