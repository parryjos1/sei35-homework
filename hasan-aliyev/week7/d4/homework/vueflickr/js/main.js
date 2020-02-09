



const vm = new Vue({
  el: '#app',
  data: {
    photos: [],
    photoLink: [],
    searchText: '',
  },
  methods: {
    search() {
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&text=${this.searchText}&api_key=2f5ac274ecfac5a455f38745704ad084&format=json&nojsoncallback=1`)
        .then(response => {
          this.photos = response.data.photos.photo.map(photo => generatePhotoURL(photo));

        })
        .catch(error =>(
          console.log(error)
        ));
      console.log("Searching for: ", this.tag)
    }
  },

});


const generatePhotoURL = (photo, size='q') => {
  return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`;
};
