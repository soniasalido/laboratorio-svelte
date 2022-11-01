<script>
    import { user } from '../core/stores/store.js'
    import NavBarPublic from "../core/layout/nav/NavBar.svelte";
    import { navigate } from "svelte-navigator";
    import { users } from "../data/users.MockData.js";

    let id = '';
    let password = '';

    const handleSubmit = () => {
        if(!id.trim() || !password.trim()){
            alert("Por favor, ingrese su nombre de usuario y contraseña");
            return
        }

        // Comprobamos que el usuario introducido es válido
        const myUser = users.find( user => user.id === id && user.password === password );
        if (myUser){
            user.setUser({
                id: id,
                password: password
            });
            navigate('members', { replace: true });
        }else{
            alert("Usuario o contraseña incorrectos");
        }
    }
</script>

<div>
    <NavBarPublic />
    <h1>Login</h1>
    <form on:submit|preventDefault={ handleSubmit } >
        <input
                type="text"
                placeholder="ID"
                bind:value={ id }
        >
        <input
                type="text"
                placeholder="Password"
                bind:value={ password }
        >
        <button type="submit">Acceder</button>
    </form>
</div>



