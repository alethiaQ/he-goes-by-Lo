// class User {
    
//     constructor(name, email, trees, id) {
//         this.name = name; 
//         this.email = email;
//         this.trees = trees;
//         this.user_id = id;
//     }
    
//     static setUp() {
//         let addUser = false;
//         const LoginBtn = document.getElementById('new-user-btn');
//         let userFormContainter = document.getElementById('login-container');
// // if someone clicks login button, form will drop drown
//         LoginBtn.addEventListener('click', () => {
//             //hide-seek user login 
//             addUser = !addUser
//             if (addUser) {
//                 userFormContainter.className = "ui active large modal"
//                 //      login form submit button starts event that will gather user data and allow the game to be played 
//                 userFormContainter.addEventListener('submit', (e) => {
//                     e.preventDefault();
//                     let name = e.target.name.value
//                     let email = e.target.email.value
//                     User.postUser(name, email);
        
//                 })
//             } else {
//                 userFormContainter.className = 'ui modal'
//             }
//         });
//     }
//     static postUser(name, email) {

//         fetch('http://localhost:3000/users', {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': "application/json"
//             },
//             body: JSON.stringify({
//                 'name':   name,
//                 'email': email,
//                 'trees': 0
//             })
//         })
//             .then(resp => resp.json())
//             .then(userData => {
//                 console.log(`user added`)
//                 let thisUsername = userData.name 
//                 let thisUseremail = userData.email
//                 let thisUsertrees = userData.trees
//                 let thisUserid = userData.id
//                 let newDomUser = new User(thisUsername, thisUseremail, thisUsertrees, thisUserid)
//                 renderGame(newDomUser)
//                 newDomUser.appendUser();
//             });
//     }
//     appendUser() {
//         let userFormContainter = document.getElementById('login-container');
//         userFormContainter.className = "ui modal"
//         let userSection = document.getElementById("user-section")
//         let userInfoContainer = document.createElement('div')
//         let username = this.name;
//         let amntOfTrees = this.trees; 
//         let p = document.createElement('p')
//          p.innerText = `${username}`
//         userInfoContainer.appendChild(p)
        
//         let treeContainer = document.createElement('div');
//         treeContainer.className = "ui large green horizontal statistic"
//         let valueCnt = document.createElement('div');
//         valueCnt.className = "value";
//         valueCnt.id = "tree-count";
//         valueCnt.innerText = `${amntOfTrees}`;
    
//         let labelCnt = document.createElement('div')
//         labelCnt.className = "label"
//         labelCnt.innerText = "Total Trees"
//         treeContainer.appendChild(valueCnt)
//         treeContainer.appendChild(labelCnt)
    
//         userInfoContainer.appendChild(treeContainer)
//         userSection.appendChild(userInfoContainer)
       


//     }
//      patchUser(newScore) {
//         fetch(`http://localhost:3000/users/` + `${this.user_id}`, {
//             method: "PATCH",
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 'trees': newScore
//             })
//         })
//         console.log(`user updated! id: ${this.user_id}`)
//       }
    
 
// }