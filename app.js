// Init Github
const github = new Github;

//Init UI
const ui = new UI;

// Search Input
const searchUser = document.getElementById('searchUser');
const searchButton = document.getElementById('searchButton');

// Search Event Listener
searchButton.addEventListener('click', () => {
  // Get Input Text
  const userText = searchButton.parentElement.previousElementSibling.value;
  console.log(userText);

  if(userText !== ''){
    // Make http call
    github.getUser(userText)
      .then(data => {
        if(data.profile.message === 'Not Found') {
          // Show Alert 
          ui.showAlert('User not found', 'alert alert-danger');
        } else {
          // Show Profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      })
  } else {
    // Clear Profile
    ui.clearProfile();
  }
});

// Search Input Event Listener
// searchUser.addEventListener('keyup', (e) => {
//   // Get Input Text
//   const userText = e.target.value;

//   if(userText !== ''){
//     // Make http call
//     github.getUser(userText)
//       .then(data => {
//         if(data.profile.message === 'Not Found') {
//           // Show Alert 
//           ui.showAlert('User not found', 'alert alert-danger');
//         } else {
//           // Show Profile
//           ui.showProfile(data.profile);
//           ui.showRepos(data.repos);
//         }
//       })
//   } else {
//     // Clear Profile
//     ui.clearProfile();
//   }
// });