document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.getElementById('name');
    const usernameElement = document.getElementById('username');
    const avatarElement = document.getElementById('avatar');
    const reposElement = document.getElementById('repos');
    const followersElement = document.getElementById('followers');
    const followingElement = document.getElementById('following');
    const linkElement = document.getElementById('link');

    fetch('https://api.github.com/users/t-moreira1982')
        .then(function(res) {
            return res.json();
        })
        .then(function(json){
            nameElement.innerText = json.name;
            usernameElement.innerText = json.login;
            avatarElement.src = json.avatar_url;
            repos.innerHTML = json.public_repos;
            followersElement.innerText = json.followers;
            followingElement.innerText = json.following;
            linkElement.href = json.html_url;
    })
    .catch(erro => {
        alert('Erro ao carregar os dados do usuário');
    })


});