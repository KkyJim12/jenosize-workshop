<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-success">
            <router-link class="navbar-brand" to="/">
                <img
                    src="https://www.jenosize.com/assets/imgs/header/logo-white.svg"
            /></router-link>
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/place"
                            >Place Api</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/map"
                            >Jenosize Map</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/series"
                            >Series</router-link
                        >
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input
                        class="form-control mr-sm-2"
                        type="search"
                        placeholder="ค้นหาร้านอาหาร"
                        aria-label="Search"
                        v-model="search"
                    />
                    <button
                        class="btn btn-primary my-2 my-sm-0"
                        type="button"
                        @click="searchPlace()"
                    >
                        ยืนยัน
                    </button>
                </form>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    data() {
        return {
            search: "",
            result: []
        };
    },
    methods: {
        searchPlace() {
            if (localStorage.getItem(this.search)) {
                var storage = JSON.parse(localStorage.getItem(this.search));
                this.result = storage;
                this.$store.commit("searchPlace", this.result);
                this.$router.push("/place");
            } else {
                axios
                    .post("/api/googleplace", {
                        search: this.search
                    })
                    .then(response => {
                        console.log(response.data);
                        this.result = response.data.data.results;
                        localStorage.setItem(
                            this.search,
                            JSON.stringify(response.data.data.results)
                        );
                        this.$store.commit("searchPlace", this.result);
                        this.$router.push("/place");
                    });
            }
        }
    }
};
</script>
