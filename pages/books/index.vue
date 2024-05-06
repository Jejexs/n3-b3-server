<template>
    <div class="bg-gradient-to-tr from-slate-100 to-slate-300 min-h-screen">
        <div class="m-auto max-w-screen-sm py-12">
            <h3 class="text-3xl font-semibold mb-4">Generate BOOKS</h3>
            <div class="my-4">
                <input type="number" class="rounded-md py-1 text-center" v-model="count">
            </div>
            <button @click="refresh"
                class="bg-gradient-to-tl from-red-500 to-red-600 hover:to-red-700 px-8 rounded-lg shadow-lg text-white py-2">RE_GENERATE</button>
            <div v-if="loading" class="my-8">Loading...</div>
            <div v-if="error" class="my-8 text-red-600">{{ error }}</div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                <div v-for="(books, index) in data.books.slice(0, count)" :key="index"
                    class="bg-white shadow-md rounded-lg ">
                    <div class="p-4">
                        <h4 class="text-xl font-semibold mb-2">{{ person.name }}</h4>
                        <p class="text-gray-600 mb-2">{{ person.email }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- author: $faker.person.fullName(),
bio: $faker.person.bio(),
price: $faker.number.hex(255),
proverb: $faker.hacker.phrase(), -->




<script setup>
import { ref, onMounted, computed } from 'vue'

const count = ref(0)

const { data, loading, error, refresh } = useFetch('/api/books', {
    query: {
        count
    },
    headers: {
        'Authorization': 'secret'
    },
    watch: [count]
})

onMounted(() => {
})

</script>
