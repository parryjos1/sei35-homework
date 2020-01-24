<template>
  <div id="app">
    <header>
      <nav class="navbar fixed-top navbar-dark bg-dark">
        <form class="form-inline" id="searchForm" @submit.prevent="searchPhotos">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id="searchText"
                 v-model="searchText">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
    </header>
    <main>
      <div class="container" id="results" @click="clickPhoto">
        <div class="photo" v-for="photo in photos">
          <img :src="photo.url" :data-id="photo.id" :data-secret="photo.secret">
        </div>
      </div>
      <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true"
           id="overlay">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="photo-title">{{currentPhoto.title}}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body" id="large-photo">
              <img :src="currentPhoto.fullSizeURL" alt="full-sized photo">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  const generatePhotoURL = (photo, size = 'q') =>
      `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`;

  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        greetings: 'Hello World',
        baseURL: 'https://www.flickr.com/services/rest/',
        apiKey: '2f5ac274ecfac5a455f38745704ad084',
        searchText: 'coral ocean',
        currentPage: 0,
        photos: [],
        currentPhoto: {title: '', fullSizeURL: ''}
      };
    },
    methods: {
      searchPhotos() {
        this.currentPage = 0;
        this.photos = [];
        this.retrievePhotos();
      },
      retrievePhotos() {
        $.getJSON(this.baseURL, {
          method: 'flickr.photos.search',
          text: this.searchText,
          api_key: this.apiKey,
          format: 'json',
          nojsoncallback: 1,
          page: ++this.currentPage,
        }).done((data) => {
          this.photos = [
            ...this.photos,
            ...data.photos.photo.map(p => ({
              url: generatePhotoURL(p),
              fullSizeURL: generatePhotoURL(p, 'c'),
              id: p.id,
              secret: p.secret,
              title: p.title
            })),
          ];
        }).fail(console.warn);
      },
      clickPhoto(event) {
        if (event.target.tagName !== 'IMG') {
          return;
        }
        const $img = $(event.target);
        const id = $img.attr('data-id');
        this.currentPhoto = this.photos.find(p => p.id === id);
        $('#overlay').modal();
      }
    },
    created() {
      $(window).on('scroll', () => {
        if (($(window).scrollTop() + $(window).height()) === $(document).height()) {
          this.retrievePhotos();
        }
      });
    },
    destroyed() {
      $(window).off('scroll');
    },
  };
</script>

<style lang="scss">
  #results {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 4em;

    .photo {
      text-align: center;
      width: 150px;
      height: 150px;
      margin: 2px;
    }
  }

  .modal-dialog {
    min-width: 850px;
    vertical-align: center;
    text-align: center;
  }
</style>
