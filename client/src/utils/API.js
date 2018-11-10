import axios from "axios"

// const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";


export default {
    
    getBooks: function() {
      return axios.get("/api/books/");
    },
    deleteBook: function(id) {
      return axios.delete("/api/books/" + id);
    },
    saveBooks: function(BookData) {
      // console.log("inside the save article in API js");
      return axios.post("/api/books/", BookData);
    },
    postClubs: function(ClubData){
      // console.log("inside the postclubs in API js");
      return axios.post("/api/bookclubs/", ClubData);
    },
    getClubs: function(){
      // console.log("inside the getClubs in API js");
      return axios.get("/api/bookclubs/");
    },
    searchAllClubs: function(data){
      return axios.post('/api/bookclubs/searchall', data);
    },

    searchAllClubs2: function(data){
      return axios.post('/api/bookclubs/searchall2', data);
    }
    ,
    searchClubsByBook: function(info) {
      return axios.post('/api/bookclubs/search', info);
    },
    searchClubsByName: function(info) {
      return axios.post('/api/bookclubs/search2', info);
    },
    updateClubs: function(clubChangeData){
      // console.log("inside the getclubs in API js", clubChangeData);
      return axios.post("/api/bookclubs/addClub", clubChangeData);
    },
    updateDiscussions: function(clubChangeData){
      // console.log("inside the getclubs in API js", clubChangeData);
      return axios.post("/api/bookclubs/discussionadd", clubChangeData);
    }
  };
