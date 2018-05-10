(function(){

    function* getPosts() {
        return yield request()
    }

    function request() {
        return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            return response.json();
        })
    }

    let generator = getPosts();
    let result = generator.next()
    
    result.value.then((posts) => {
        console.log(posts)
    })
    
})()