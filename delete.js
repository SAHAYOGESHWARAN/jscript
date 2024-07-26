
const deletePost = async (postId) => {
    try {
        const response = await fetch(`${postId}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        console.log('Post deleted successfully.');
    } catch (error) {
        console.error('Fetch error:', error);
    }
};


deletePost(1);
