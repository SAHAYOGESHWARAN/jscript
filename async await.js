
const fetchUserDataFromAPI = async (userId) => {
    try {
        
        const response = await fetch(`saha${userId}`);
        
       
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

       
        const data = await response.json();
        return data;

    } catch (error) {
       
        console.error('Fetch error:', error);
        throw error; 
    }
};


const displayUserData = async (userId) => {
    try {
        const userData = await fetchUserDataFromAPI(userId);
        console.log('User Data:', userData);
    } catch (error) {
        console.error('Error:', error);
    }
};


displayUserData(1);
