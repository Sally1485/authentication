// Get user profile
fetch('https://api.escuelajs.co/api/v1/auth/profile', {
    headers:{
        'Authorization': `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
    }
})
.then(response => response.json())
.then(data => {
    // Access user info div from DOM
    const userInfo = document.getElementById('user-info');
    // Create and append user name to user info div
    const userName = document.createElement('h1');
    userName.innerText = data.name;
    userName.classList.add('text-3xl', 'font-bold', 'underline');
    userInfo.appendChild(userName);
    // Create and append user avatar to user info div
    const userImg = document.createElement('img');
    userImg.src = data.avatar;
    userImg.classList.add('w-50');
    userInfo.appendChild(userImg);
})
.catch(error => console.log(error));
