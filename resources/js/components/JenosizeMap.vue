<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-md-12">
                <h1>แผนที่บริษัท Jenosize</h1>
            </div>
        </div>
        <hr />
        <div class="row">
            <div class="col-md-12">
                <GmapMap
                    class="w-100 jen-map"
                    :center="{ lat: 13.894016, lng: 100.5163 }"
                    :zoom="20"
                    map-type-id="terrain"
                >
                </GmapMap>
            </div>
        </div>
    </div>
</template>
<style scoped>
.jen-map {
    height: 500px;
}
</style>
<script>
export default {};
</script>
