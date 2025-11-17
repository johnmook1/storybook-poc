<script setup lang="ts">
defineProps<{
  label?: string;
  disabled?: boolean;
	isPill?: boolean;
}>();
</script>

<template>
	<button
		class="bg-green-500 px-4 py-2 font-bold text-white"
		:class="{
			'rounded-full': isPill,
			'hover:bg-green-700': !disabled,
			'bg-gray-400 cursor-not-allowed': disabled
		}"
		:disabled="disabled"
		>
			<slot>{{ label }}</slot>
	</button>
</template>