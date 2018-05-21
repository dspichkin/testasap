

export class PostsService {
  static $inject = ['$http']
  service = null

  constructor ($http) {
    'ngInject'; 
    this.service = $http;
  }

  getPosts() {
    return this.service.get('https://jsonplaceholder.typicode.com/posts/');
  }

}
