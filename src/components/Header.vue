<template>
    <div class="">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <router-link to="/" active-class="active" exact><a class="navbar-brand">Stock Trader</a></router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <router-link to="/portfolio" tag="li" active-class="active" class="nav-item" exact><a class="nav-link">portfolio</a></router-link>
                    <router-link to="/stocks" tag="li" active-class="active" class="nav-item" exact><a class="nav-link">stocks</a></router-link>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown link
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
    router-link{
        cursor: pointer;
    }
</style>