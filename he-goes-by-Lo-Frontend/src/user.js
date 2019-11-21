
// declared outside of main function to be used with other functions, but thats why I will be transitioning to class setup 
let user_id = "";
// when called via class method (next) will be User.setUp() from index.js
function setUp() {
    // control login form popup
    let addUser = false;    
    const LoginBtn = document.getElementById('new-user-btn');
    const userFormContainter = document.getElementById('login-container');
// if someone clicks login button, form will drop drown
    LoginBtn.addEventListener('click', () => {
        //hide-seek user login 
        addUser = !addUser
        if (addUser) {
            userFormContainter.className = "ui active large modal"
//      login form submit button starts event that will gather user data and allow the game to be played 
            userFormContainter.addEventListener('submit', (e) => {
                e.preventDefault();
                createUser(e.target)
    })
        } else {
            userFormContainter.className = "ui modal"
    }
})
// api endpoint create method will get instance by 
    function createUser(user) {
        let username = user.name.value
        let email = user.email.value
        
        postUser(username, email, 0)
        renderGame()
   
    }
    function postUser(username, email, trees) {
        fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
        'Content-Type': 'application/json',
        'Accept': "application/json"
    },
        body: JSON.stringify({
            'name': username,
            'email': email,
            'trees': trees
        })
    })
    
    .then(resp =>  resp.json())
            .then(userData => {
        
        console.log(`user added`)
        user_id = userData.id
        appendUser(username, trees);
    })
        
    }

    function appendUser(username, trees) {
        userFormContainter.className = "ui modal"
    let userSection = document.getElementById("user-section")
    let userInfoContainer = document.createElement('div')
    let name = username;
    let amntOfTrees = trees; 

    let p = document.createElement('p')
    p.innerText = `${name}`
    userInfoContainer.appendChild(p)


    let treeContainer = document.createElement('div')
    treeContainer.className = "ui large green horizontal statistic"
    let valueCnt = document.createElement('div')
        valueCnt.className = "value"
        valueCnt.id = "tree-count"
    valueCnt.innerText = `${amntOfTrees}`

    let labelCnt = document.createElement('div')
    labelCnt.className = "label"
    labelCnt.innerText = "Total Trees"
    treeContainer.appendChild(valueCnt)
    treeContainer.appendChild(labelCnt)

    userInfoContainer.appendChild(treeContainer)
    userSection.appendChild(userInfoContainer)
   
    }
}
function patchUser(newScore) {
    fetch(`http://localhost:3000/users/` + `${user_id}`, {
        method: "PATCH",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'trees': newScore
        })
    })
    console.log(`user updated! id: ${user_id}`)
  }


