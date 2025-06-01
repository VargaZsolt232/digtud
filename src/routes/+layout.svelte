<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<style>
    .container {
        max-width: 960px;
        margin: 0 auto;
        padding: 2rem 1rem;
    }

    footer {
        background-color: #1e293b;
        color: #cbd5e1;
        text-align: center;
        padding: 1.5rem 1rem;
        font-size: 0.9rem;
    }
</style>
{@render children()}
<footer>
    <div class="container">
        DigiTud™ KFT ADATOK | info@digitud.hu | +36 25 506 9306 | 2400 Dunaújváros Görbe utca 1. fszt. 3. | ©2025
    </div>
</footer>
