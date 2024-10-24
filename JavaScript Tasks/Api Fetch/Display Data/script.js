async function fetchPosts() {
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = '<p>Loading posts...</p>'; // Show loading message

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const posts = await response.json();
        postsContainer.innerHTML = ''; 

        // Create and display posts
        posts.forEach(post => {
            const postDiv = document.createElement('div');
            postDiv.classList.add('post');
            postDiv.innerHTML = `
                <h2>User ID: ${post.userId}</h2>
                <h3>Post ID: ${post.id}</h3>
                <h4>${post.title}</h4>
                <p>${post.body}</p>
            `;
            postsContainer.appendChild(postDiv);
        });
    } catch (error) {
        console.error('Error fetching posts:', error);
        postsContainer.innerHTML = '<p>Failed to load posts. Please try again later.</p>';
    }
}

// Call the fetchPosts function on page load
document.addEventListener('DOMContentLoaded', fetchPosts);
