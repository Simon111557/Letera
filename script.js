
function submitPost() {
    var postContent = document.getElementById('post-content').value;
    if (postContent.trim() !== '') {
        var postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.textContent = postContent;
        document.getElementById('posts-container').appendChild(postElement);
        document.getElementById('post-content').value = '';
    }
}
 
 
