<template>

    <div class="column is-one-quarter-desktop is-half-tablet">
        <div class="card">
            <div class="card-image">
                <figure class="image is-3by2">
                    <img :src="image.thumbnailUrl" alt="">
                </figure>
                <div class="card-content is-overlay is-clipped">
              <span class="tag is-info">
               {{ image.title }}
              </span>
                </div>
            </div>
            <footer class="card-footer">
                <a class="card-footer-item">
                     <h4>{{ image.id }}</h4>
                </a>
            </footer>
        </div>
    </div>

</template>

<script>
    export default {
        name: "GalleryThumbnail",
        props:['idata'],
        data(){ return{ image:this.idata } }
    }
</script>

<style scoped>

</style>