
document.addEventListener("DOMContentLoaded", () => {

    setUp();


    
});
function updateUserTrees(score) {
    let treeCntr = document.getElementById("tree-count")
    let prevScore = treeCntr.innerText
    let newScore = score + parseInt(prevScore, 10);
    treeCntr.innerText = `${newScore}`
    //   treeCntr.innerText = `${newScore}`
     patchUser(newScore);

}


//     //   let prevScore;
//     //   let uname;
//     //   
//     // }
    