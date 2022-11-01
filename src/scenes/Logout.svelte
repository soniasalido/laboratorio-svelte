<script>
    import { isLoggedIn, organization } from '../core/stores/store.js'
    import NavBar from "../core/layout/nav/NavBar.svelte";


    isLoggedIn.update(n => !n);

    organization.reset();
</script>

<main>
    <NavBar />
    <h1>Has salido de la App.</h1>
</main>
