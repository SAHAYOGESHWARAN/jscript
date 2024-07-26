
const createPost = async (title, body) => {
    try {
        const response = await fetch('', {
            method: 'POST',
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
        console.log('Created Post:', data);
    } catch (error) {
        console.error('Fetch error:', error);
    }
};


createPost('New Post', 'This is the body of the new post.');
