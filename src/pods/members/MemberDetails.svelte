<script>

    import {onMount} from "svelte";
    import {isLoggedIn, user} from "../../core/stores/store.js";
    import { navigate, useParams } from "svelte-navigator";
    import NavBar from "../../core/layout/nav/NavBar.svelte";

    onMount(() => {
        if(!$isLoggedIn){
            navigate('/login', { replace: true })
        }
    })

    const params  = useParams();
    console.log('zzz',$params);
    const login = $params.login;
    console.log('----',login);

    let memberData = [];

    fetch(`https://api.github.com/users/${login}`)
        .then(response => response.json())
        .then(data => {
            memberData = data;
            console.log('memberData',memberData);
        })
        .catch(error => console.log(error));

</script>

<main>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>

    <NavBar />
    {#if $isLoggedIn}
        <p><b>Parte Privada --> </b>Bienvenid@: {$user?.id}</p>
        <hr>
        <p>Bienvenid@: {$user?.id}</p>

        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12 col-md-6 col-lg-3">
                    <div class="card">
                        <img src={ memberData.avatar_url } class="card-img-top" alt={memberData.login}>
                        <div class="card-body">
                            <h5>Name: {memberData.name}</h5>
                            <h7>Login: {memberData.login}</h7>
                            <h7>Bio: {memberData.bio}</h7>
                            <h7>Location: {memberData.location}</h7>
                            <h7>Company: {memberData.company}</h7>
                            <h7>Organitions Url: {memberData.organizations_url}</h7>
                            <h7>Email: {memberData.email}</h7>
                            <h7>Twitter User Name: {memberData.twitter_username}</h7>
                            <h7>Html Url: {memberData.html_url}</h7>
                        </div>
                        <button  type="button" class="btn btn-primary" on:click={() => navigate('/members')}>Volver</button>
                    </div>
                </div>

            </div>
        </div>
    {:else}
        <h1>Ingrese usuario</h1>
    {/if}
</main>