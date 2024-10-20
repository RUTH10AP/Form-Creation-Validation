// Initialize the async function
async function fetchUserData() {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Select the Data Container Element
    const dataContainer = document.getElementById('api-data');

    // Fetch Data Using try-catch
    try {
        const response = await fetch(apiUrl); // Fetch the data from the API
        const users = await response.json(); // Convert response to JSON

        // Clear the Loading Message
        dataContainer.innerHTML = '';

        // Create and Append User List
        const userList = document.createElement('ul'); // Create a <ul> element

        // Loop through the users array
        users.forEach(user => {
            const listItem = document.createElement('li'); // Create a <li> element
            listItem.textContent = user.name; // Set the user's name as the content
            userList.appendChild(listItem); // Append <li> to the <ul>
        });

        // Append userList to dataContainer
        dataContainer.appendChild(userList);

    } catch (error) {
        // Error Handling: Clear the content and show an error message
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error); // Log error to the console
    }
}

// Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);
