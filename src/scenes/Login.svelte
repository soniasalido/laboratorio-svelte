<script>
    import { user } from '../core/stores/store.js'
    import { isLoggedIn } from '../core/stores/store.js'

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
            isLoggedIn.update(n => !n)
            $user = {
                id: id,
                password: password,
            }
            navigate('members', { replace: true });
        }else{
            document.getElementById("errorMsg").innerText = "Contraseña incorrecta. Prueba de nuevo.";
            document.getElementById("id").value = "";
            document.getElementById("password").value = "";
        }
    }
</script>

<div>
    <NavBarPublic />
    <h1>Login</h1>
    <form>
        <input
                id= "id"
                type= "text"
                placeholder= "ID"
                bind:value={ id }
        >
        <input
                id= "password"
                type="text"
                placeholder="Password"
                bind:value={ password }
        >
        <button on:click|preventDefault={ handleSubmit }>Acceder</button>
        <p id="errorMsg"></p>
    </form>
</div>



