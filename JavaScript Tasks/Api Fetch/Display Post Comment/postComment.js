document.getElementById('fetchPostsBtn').addEventListener('click', async () => {
    const userId = document.getElementById('userId').value;
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = '';

    if (!userId) {
        alert('Please enter a User ID');
        return;
    }

    try {
        // Fetch posts for the given User ID
        const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const posts = await postsResponse.json();

        if (posts.length === 0) {
            postsContainer.innerHTML = '<p>No posts found for this User ID.</p>';
            return;
        }

        // Loop through each post to fetch comments
        for (const post of posts) {
            const postDiv = document.createElement('div');
            postDiv.classList.add('post');
            postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
            postsContainer.appendChild(postDiv);

            // Fetch comments for the current post
            const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`);
            const comments = await commentsResponse.json();

            if (comments.length > 0) {
                const commentsDiv = document.createElement('div');
                comments.forEach(comment => {
                    const commentDiv = document.createElement('div');
                    commentDiv.classList.add('comment');
                    commentDiv.innerHTML = `<strong>${comment.name}:</strong> ${comment.body}`;
                    commentsDiv.appendChild(commentDiv);
                });
                postDiv.appendChild(commentsDiv);
            } else {
                const noCommentsDiv = document.createElement('div');
                noCommentsDiv.classList.add('comment');
                noCommentsDiv.textContent = 'No comments available.';
                postDiv.appendChild(noCommentsDiv);
            }
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        postsContainer.innerHTML = '<p>Failed to fetch data. Please try again later.</p>';
    }
});
