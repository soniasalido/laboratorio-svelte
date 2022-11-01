<script>
    import { Router, Route } from "svelte-navigator";
    import Login from "../../scenes/Login.svelte";
    import About from "../../scenes/About.svelte";
    import Home from "../../scenes/Home.svelte";
    import Members from "../../scenes/Members.svelte";
    import Logout from "../../scenes/Logout.svelte";
    import MemberDetails from "../../pods/members/MemberDetails.svelte";

</script>

<Router>
    <Route path="/">
        <Home />
    </Route>

    <Route path="/about">
        <About />
    </Route>

    <Route path="/login">
        <Login />
    </Route>

    <Route path="/members">
        <Members />
    </Route>

<!--    <Route path="/members/:login" >-->
<!--        <MemberDetails />-->
<!--    </Route>-->


    <Route path="/:login" >
        <MemberDetails />
    </Route>

    <Route path="/logout">
        <Logout />
    </Route>
</Router>
