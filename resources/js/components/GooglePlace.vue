<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-md-12">
                <h1>ค้นหาร้านอาหารต่างๆรอบ jenosize ในระยะ 1 km.</h1>
            </div>
        </div>
        <hr />
        <div class="row">
            <div class="col-md-12" v-for="item in result" :key="item.id">
                <div class="mt-5 jen-card">
                    <div class="row">
                        <div
                            class="col-md-3 jen-card-header text-center w-100 h-100"
                        >
                            <img
                                class="w-100 jen-card-img"
                                :src="
                                    'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=' +
                                        item.photos[0].photo_reference +
                                        '&key=AIzaSyAhed0HbWB8GwMMy-b9Ghs288hKPuIlS4Y'
                                "
                            />
                        </div>
                        <div class="col-md-9 jen-card-body">
                            <h3>{{ item.name }}</h3>
                            <p>
                                {{ item.vicinity }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.jen-card {
    padding: 10px;
    border: 1px solid #e5e5e5;
}

.jen-card-header {
    border-right: 1px solid #e5e5e5;
}

.jen-card-img {
    height: 200;
    object-fit: cover;
}
</style>

<script>
export default {
    computed: {
        result: function() {
            return this.$store.getters.search;
        }
    }
};
</script>
