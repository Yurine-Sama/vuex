<template>
  <div id="app">
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="info"
      class="navbar-horizontal"
    >
      <b-navbar-brand href="#"
        ><b-icon icon="cart"></b-icon> Amiya-Poster-Shop
      </b-navbar-brand>
      <img
        src="https://i.redd.it/vvuxyi4qadf41.jpg"
        class="d-inline-block align-top"
        alt="Amiya"
        height="60"
      />

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <li class="nav-item">
              <a
                class="nav-link nav-link-icon"
                href="https://twitter.com/RenYuriww"
                target="_black"
              >
                <b-icon icon=" twitter"> </b-icon> Twitter
              </a>
            </li>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
  </div>
</template>

<!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>-->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
