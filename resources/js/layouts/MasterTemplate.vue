<template>
    <div>
        <navbar-component></navbar-component>
        <div style="min-height:80vh;">
            <router-view></router-view>
        </div>
        <footer-component></footer-component>
    </div>
</template>
<script>
export default {};
</script>
