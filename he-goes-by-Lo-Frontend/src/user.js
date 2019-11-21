class User {
    // only after the post fetch is made will a new instance of a user be created 
    constructor(name, email, trees, id) {
        this.name = name; 
        this.email = email;
        this.trees = trees;
        // id is used only to update user db table
        this.user_id = id;
    }
    // class function called by index to start the user login process which then triggers the game
    static setUp() {
        // logic for login in form modal popup, if false form is hidden
        let addUser = false;
        // button that triggers form
        const LoginBtn = document.getElementById('new-user-btn');
        // form is immediate child of container
        let userFormContainter = document.getElementById('login-container');
        
        LoginBtn.addEventListener('click', () => {
            //hide-seek user login 
            addUser = !addUser
            if (addUser) {
                userFormContainter.className = "ui active large modal"
                //      login form submit button starts event that will gather user data and allow the game to be played-- event on the container instead of button for easy input data access
                userFormContainter.addEventListener('submit', (e) => {
                    e.preventDefault();
                    let name = e.target.name.value
                    let email = e.target.email.value
                    // another class method, since we still havent "made" our user obj yet, we can still call function
                    User.postUser(name, email);
        
                })
            } else {
                // without active in class name modal stays hidden
                userFormContainter.className = 'ui modal'
            }
        });
    }
    static postUser(name, email) {
        // sending input to API create method-- 
        // api create endpoint uses find_or_create so new user instance won't be added each time and score will be properly tracked
        fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': "application/json"
            },
            body: JSON.stringify({
                'name':   name,
                'email': email,
                'trees': 0
            })
        })
            .then(resp => resp.json())
            .then(userData => {
                console.log(`user added`)
                // the endpoint returns to us the new/found user instance.. using that data we create a OOJS user instance
                let thisUsername = userData.name 
                let thisUseremail = userData.email
                let thisUsertrees = userData.trees
                let thisUserid = userData.id
                let newDomUser = new User(thisUsername, thisUseremail, thisUsertrees, thisUserid)
                // now that user is set up and scores are properly rendered, we can call on the game fn making "play" accessible
                renderGame(newDomUser)
                // append current users data to page
                newDomUser.appendUser();
            });
    }
    appendUser() {
        let userFormContainter = document.getElementById('login-container');
        userFormContainter.className = "ui modal"
        let userSection = document.getElementById("user-section")
        let userInfoContainer = document.createElement('div')
        // after post fetch, new user was created giving us access to this 
        let username = this.name;
        let amntOfTrees = this.trees; 
        let p = document.createElement('p')
         p.innerText = `${username}`
        userInfoContainer.appendChild(p)
        
        let treeContainer = document.createElement('div');
        treeContainer.className = "ui large green horizontal statistic"
        let valueCnt = document.createElement('div');
        valueCnt.className = "value";
        valueCnt.id = "tree-count";
        valueCnt.innerText = `${amntOfTrees}`;
    
        let labelCnt = document.createElement('div')
        labelCnt.className = "label"
        labelCnt.innerText = "Total Trees"
        treeContainer.appendChild(valueCnt)
        treeContainer.appendChild(labelCnt)
    
        userInfoContainer.appendChild(treeContainer)
        userSection.appendChild(userInfoContainer)

    }
     patchUser(newScore) {
        fetch(`http://localhost:3000/users/` + `${this.user_id}`, {
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'trees': newScore
            })
        })
        console.log(`user updated! id: ${this.user_id}`)
      }
    
 
}