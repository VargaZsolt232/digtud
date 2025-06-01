<script lang="ts">
    import { onMount } from 'svelte';

    let questions = [];
    let currentIndex = 0;
    let current = null;
    let selected = '';
    let score = 0;
    let finished = false;

    async function loadQuiz() {
        const res = await fetch('/api/check');
        const data = await res.json();
        questions = data.questions;
        currentIndex = 0;
        loadCurrent();
    }

    function loadCurrent() {
        const q = questions[currentIndex];
        current = q;
        selected = '';
    }

    function answer(id: string) {
        selected = id;
        if (current.correctMap[id] === current.correct) score++;
        setTimeout(() => {
            currentIndex++;
            if (currentIndex < questions.length) {
                loadCurrent();
            } else {
                finished = true;
            }
        }, 500);
    }

    function restart() {
        score = 0;
        finished = false;
        loadQuiz();
    }


    onMount(loadQuiz);
</script>

<main class="pb-20 min-h-screen">
    {#if !finished && current}
        <div class="p-4 max-w-xl mx-auto">
            <h2 class="text-xl font-bold mb-4 text-center">{current.text}</h2>
            <div class="grid grid-cols-2 gap-4">
                {#each current.options as opt}
                    <button
                            class="border rounded overflow-hidden disabled:opacity-50"
                            on:click={() => answer(opt.id)}
                            disabled={selected}
                    >
                        <img src={opt.image} alt="option" class="w-full h-80 object-cover" />
                    </button>
                {/each}
            </div>
        </div>
    {:else if finished}
        <div class="p-4 text-center">
            <h2 class="text-2xl font-bold mb-2">Sikeres kitöltés</h2>
            <p class="mb-4">Elért pontszám: {score} / {questions.length}</p>
            <button on:click={restart} class="bg-blue-500 text-white px-4 py-2 rounded">Újra</button>
        </div>
    {/if}
</main>