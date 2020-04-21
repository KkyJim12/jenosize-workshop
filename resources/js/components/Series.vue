<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-md-12">
                <h1>หาลำดับต่อไป</h1>
            </div>
        </div>
        <hr />
        <div class="row">
            <div class="col-md-12">
                <h5>โจทย์: 3,5,9,15</h5>
            </div>
            <div class="col-md-3">
                <input
                    type="text"
                    class="form-control"
                    placeholder="ลำดับที่ต้องการหา"
                    v-model="order"
                />
                <small>คำตอบ: {{ result }}</small>
            </div>
            <div class="col-md-1">
                <button
                    @click="findOrderSequence()"
                    type="button"
                    class="btn btn-primary w-100"
                >
                    ยืนยัน
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            order: null,
            result: ""
        };
    },
    methods: {
        findOrderSequence() {
            axios
                .post("/api/series", {
                    order: this.order
                })
                .then(response => {
                    this.result = response.data.data;
                });
        }
    }
};
</script>
