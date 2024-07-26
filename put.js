
const updatePost = async (postId, title, body) => {
    try {
        const response = await fetch(`${postId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: title,
                body: body,
                userId: 1,
            }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Updated Post:', data);
    } catch (error) {
        console.error('Fetch error:', error);
    }
};


updatePost(1, 'Updated Title', 'Updated body of the post.');
