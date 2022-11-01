<script>
    import { Link } from 'svelte-navigator';
    import { isLoggedIn } from "../../stores/store.js";
</script>

<main>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>

    <nav class="navbar navbar-expand-sm navbar-dark bg-dark p-2">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">ECMYD</a>


            <div class="collapse navbar-collapse" id="navBar">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                    {#if !$isLoggedIn}
                        <li class="nav-item">
                            <Link
                                    class={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                                    to="/"
                            >
                                Home
                            </Link>
                        </li>


                        <li class="nav-item">
                            <Link
                                    class={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                                    to="/login"
                            >
                                Login
                            </Link>
                        </li>

                        <li class="nav-item">
                            <Link
                                    class={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                                    to="/about"
                            >
                                About
                            </Link>
                        </li>

                    {:else}
                        <li class="nav-item">
                            <Link
                                    class={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                                    to="/members"
                            >
                                Miembros
                            </Link>
                        </li>

                        <li class="nav-item">
                            <Link
                                    class={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                                    to="/logout"
                            >
                                Salir
                            </Link>
                        </li>

                    {/if}

                </ul>
            </div>

        </div>

    </nav>
</main>