export class PostService {
  static $inject = ['$http']
  service = null

  constructor ($http) {
    'ngInject'; 
    this.service = $http;
  }

  getPost(postId) {
    return this.service.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  }
}
