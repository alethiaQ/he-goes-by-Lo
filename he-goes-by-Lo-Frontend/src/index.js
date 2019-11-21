
document.addEventListener("DOMContentLoaded", () => {
    User.setUp();    
});
function updateUserTrees(score, user) {
    let treeCntr = document.getElementById("tree-count")
    // we can rely on innerText value since it was gathered from our DB find_or_create method upon page start
    let prevScore = treeCntr.innerText
    let newScore = score + parseInt(prevScore, 10);
    treeCntr.innerText = `${newScore}`
     user.patchUser(newScore);

}
