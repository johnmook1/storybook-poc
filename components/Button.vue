<script setup lang="ts">
const { label, disabled, type } = defineProps<{
	/**
	 * The text to display inside the button
	 */
	label?: string;
	/**
	 * Whether the button is disabled
	 */
	disabled?: boolean;
	/**
	 * The HTML button type attribute (button, submit, or reset)
	 */
	type?: 'button' | 'submit' | 'reset';
}>();
</script>

<template>
	<button
		:type='type'
		class="px-4 py-2 rounded-theme font-theme"
		:class="{
			'bg-primary hover:bg-primary-hover text-white': !disabled,
			'bg-gray-400 cursor-not-allowed text-gray-600': disabled
		}"
		:disabled="disabled"
		>
			<span>{{ label }}</span>
	</button>
</template>