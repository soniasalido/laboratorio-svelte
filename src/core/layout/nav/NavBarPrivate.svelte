<script>
    import { Link } from 'svelte-navigator';
    import { user } from "../../stores/store.js";
    import { navigate } from "svelte-navigator";

    const onLogout = () => {
        user.setUser(null);
        navigate("/", {replace: true});
    }
</script>

<main>
    <link rel="stylesheet" href="../../../../node_modules/bootstrap/dist/css/bootstrap.min.css">

    <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarPrivate">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <Link
                            class="navbar-brand"
                            to="/members"
                    >
                        Miembros
                    </Link>
                </li>

                <li class="nav-item">
                    <Link
                            class={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                            to="/search?q=lemoncode"
                    >
                        Buscar
                    </Link>
                </li>

                <li class="nav-item">
                    <button on:click={ onLogout }>Cerrar Sesión</button>
                </li>
            </ul>
        </div>
    </div>

</main>