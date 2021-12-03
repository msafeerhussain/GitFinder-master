const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".btn");
const nameContainer = document.querySelector(".profile_name");
const userContainer = document.querySelector(".profile_username");
const reposContainer = document.querySelector(".profile_repos");
const urlContainer = document.querySelector(".profile_url");
const followerContainer = document.querySelector(".profile_followers")
const followingContainer = document.querySelector(".profile_following")

// Using the application's tokens
const client_id = "Iv1.ca05a9878764193f";
const client_secret = "d8dd5d4d24c03db27fd3e1911fbfcc8d1a2b0b60";

// async await makes the http requests
const fetchUser = async (user) => {
    const api_call = await fetch(`https://api.github.com/users/${user}
    ?client_id=${client_id}&client_secret=${client_secret}`); // ES6 template strings

    // converts the given data into an json file
    const data = await api_call.json();
    return { data } // Key and the value are the same, so you can use { data } (ES6 feature) instead of { data: ... }    
};

// Fetch data
const showData = () => {
    fetchUser(inputValue.value)
        .then((res) => {
            const { name, login, public_repos, profile, followers, following, html_url } = res.data;
            nameContainer.innerHTML = `Name: <span class="profile">${name}</span>`;
            userContainer.innerHTML = `Username: <span class="profile">${login}</span>`;
            reposContainer.innerHTML = `Repositories: <span class="profile">${public_repos}</span>`;
            urlContainer.innerHTML = `URL: <a href="${html_url}"><span class="profile">${html_url}</span></a>`;
            followerContainer.innerHTML = `Followers: <span class="profile">${followers}</span>`;
            followingContainer.innerHTML = `Following: <span class="profile">${following}</span>`;
        })
        .catch((err) => { throw new Error(err) });
};

searchButton.addEventListener("click", () => {
    showData();
})
