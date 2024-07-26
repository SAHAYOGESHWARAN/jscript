
const fetchUserData = async (userId) => {
    try {
        const response = await fetch(`${userId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('User Data:', data);
    } catch (error) {
        console.error('Fetch error:', error);
    }
};


fetchUserData(1);
