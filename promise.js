
const fetchUserData = (userId) => {
    return new Promise((resolve, reject) => {
       
        setTimeout(() => {
            const apiResponse = {
                success: true,
                data: {
                    id: userId,
                    name: 'saha',
                    email: 'saha@example.com'
                }
            };
            
            if (apiResponse.success) {
                resolve(apiResponse.data);
            } else {
                reject('Failed to fetch user data');
            }
        }, 2000); 
    });
};


fetchUserData(1)
    .then((userData) => {
        console.log('User Data:', userData);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
