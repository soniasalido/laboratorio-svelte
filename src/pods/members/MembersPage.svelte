<script>
    import { organization } from '../../core/stores/store.js';
    import {Link} from "svelte-navigator";

    const gitHubMembersUrl =  `https://api.github.com/orgs/${$organization}/members`;
    let members = [];

    $: {
        organization.subscribe(value => {
            fetch(`https://api.github.com/orgs/${value}/members`)
                .then(response => response.json())
                .then(data => {
                    members = data.map(member => {
                        return {
                            id: member.id,
                            login: member.login,
                            avatar_url: member.avatar_url
                        }
                    });
                }).catch(error => {
                    console.log(error);
                }
            );
        });
    }
</script>

<main>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>

    <h1>Listado de miembros de --> { $organization }</h1>

    <div class="container">
        <div class="row">
            {#each members as member}
                <div class="col-4">
                    <div class="card">
                        <img src={ member.avatar_url } class="card-img-top" alt={member.login}>
                        <div class="card-body">
                            <h5 class="card-title">{ member.login }</h5>
<!--                            <Link to={`/members/${member.login}`}>Leer +...</Link>-->
                            <Link to={`/${member.login}`}>Leer +...</Link>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>

</main>