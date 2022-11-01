<script>
    import {isLoggedIn, organization, user} from '../core/stores/store.js'
    import { navigate } from "svelte-navigator";
    import { onMount } from 'svelte'
    import NavBar from "../core/layout/nav/NavBar.svelte";
    import MembersPage from "../pods/members/MembersPage.svelte";
    import SearchMembers from "../pods/members/SearchMembers.svelte";

    onMount(() => {
        if(!$isLoggedIn){
            navigate('/login', { replace: true })
        }
    })
</script>

<main>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>

    <NavBar />
    {#if $isLoggedIn}
        <p><b>Parte Privada --> </b>Bienvenid@: {$user?.id}</p>
        <hr>
        <SearchMembers />
        <MembersPage />
    {:else}
        <h1>Ingrese usuario</h1>
    {/if}
</main>