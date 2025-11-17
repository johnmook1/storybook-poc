<script setup lang="ts">
const { label, disabled, isPill, type = 'button' } = defineProps<{
	label?: string;
	disabled?: boolean;
	isPill?: boolean;
	type?: 'button' | 'submit' | 'reset';
}>();
</script>

<template>
	<button
		:type='type'
		class="px-4 py-2 font-bold"
		:class="{
			'rounded-full': isPill,
			'bg-green-500 hover:bg-green-700 text-white': !disabled,
			'bg-gray-400 cursor-not-allowed text-gray-600': disabled
		}"
		:disabled="disabled"
		>
			<slot>{{ label }}</slot>
	</button>
</template>