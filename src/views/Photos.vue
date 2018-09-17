<template>
  <div class="about">
    {{ pagers.length+"  index:"+index }}
    <div class="columns is-multiline">


      <GalleryThumbnail v-for="image in currentPage" :key="image.id" :idata="image"></GalleryThumbnail>


    </div>
    <hr>
    <nav class="pagination is-centered is-small" role="navigation" aria-label="pagination">
      <a @click="prevP" class="pagination-previous">Previous</a>
      <a @click="nextP" class="pagination-next">Next page</a>
      <!--<a @click="(index>0 ? index&#45;&#45; && nextKeySets(index) : '')" class="pagination-previous">Previous</a>-->
      <!--<a @click="(index<=images.length ? index++ && nextKeySets(index) : '')" class="pagination-next">Next page</a>-->

      <ul class="pagination-list">
        <li v-for="pager in currentPager" :key="pager"><a @click="setCurrent(pager)" :class="{ 'is-current' : isCurrent(pager) }" class="pagination-link" aria-label="Goto page n">{{ pager+1 }}</a></li>
      </ul>
    </nav>
    <hr>

  </div>
</template>

<script>
    import GalleryThumbnail from '@/components/GalleryThumbnail.vue'
    export default {
        name: "Photos",
        data(){
          return{
              images:[],
              index:0,
              pagers:[],
              pagerIndex:0

          }
        },
        components:{ GalleryThumbnail },
        methods:{
            getImages:function(){
                this.axios.get("https://jsonplaceholder.typicode.com/photos").then((response) => {
                     this.images = this.chunker(response.data, 8);
                     this.pagers =  this.chunker(Array.from(Array(this.images.length).keys()),10);
                      console.log(this.pagers.length);
                })

            },
            chunker:function(arr, chunkSize) {
                var groups = [], i;
                for (i = 0; i < arr.length; i += chunkSize) {
                    groups.push(arr.slice(i, i + chunkSize));
                }
                return groups;
            },
            isCurrent:function (currentIndex) {
                return this.index === currentIndex;
            },
            setCurrent:function (current) {
              this.index = current;
              this.nextKeySets(current);
            },
            nextKeySets:function (current) {
                let pageSetIndex = this.currentPager.indexOf(current);
                if(pageSetIndex === -1){ pageSetIndex = pageSetIndex+1; }

                if(this.pagerIndex != (this.pagers.length-1) && pageSetIndex === (this.currentPager.length -1)){
                    this.pagerIndex++
                }

                if(this.pagerIndex !=0 && pageSetIndex === -1){
                    this.pagerIndex--
                }

                console.log(current +" index  "+this.currentPager.indexOf(current)    +"  pe: "+ this.pagerIndex);
            },
            nextP:function () {
                if(this.index<=this.images.length){
                    let key = this.index++;
                    let pageSetIndex = this.currentPager.indexOf(key);
                    if(pageSetIndex === -1){ pageSetIndex = pageSetIndex+1; }
                    if(this.pagerIndex != (this.pagers.length-1) && pageSetIndex === (this.currentPager.length -1)){
                        this.pagerIndex++
                    }
                }
            },
            prevP:function () {
                if(this.index>0){
                    let keyM = this.index--;
                    let pageSetIndex = this.currentPager.indexOf(keyM);
                    if(pageSetIndex === -1){ pageSetIndex = pageSetIndex+1; }
                    if(this.pagerIndex !=0 && pageSetIndex === 0){
                        this.pagerIndex--
                    }
                }
            }
        },
        mounted: function () {
            this.$nextTick(function () {
                this.getImages()
            })
        },
        created:function() {

        },
        computed:{
            currentPage : function () {
                return this.images[this.index]
            },
            currentPager: function(){
                return this.pagers[this.pagerIndex];
            }
        },
        watch:{

        }



    }
</script>

<style scoped>
  .about{
    max-width: 98%;
    margin: 0.5rem auto;
  }

</style>