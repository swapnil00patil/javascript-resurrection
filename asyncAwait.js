(function () {
    async function getPosts(cb) {
        try {
            // await response of fetch call
            let response = await fetch('https://ssjsonplaceholder.typicode.com/posts');
            // only proceed once promise is resolved
            let postData = await response.json();
            return postData;
        } catch (error) {
            throw new Error(error);
        }
    }

    getPosts()
        .then(data => console.log(data))
        .catch(reason => console.log(reason));
})();