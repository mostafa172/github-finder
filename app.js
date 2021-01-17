// Init Github
const github = new Github;

// Search Input
const searchUser = document.getElementById('searchUser');

// Search Input Event Listener
searchUser.addEventListener('keyup', (e) => {
  // Get Input Text
  const userText = e.target.value;

  if(userText !== ''){
    // Make http call
    github.getUser(userText)
      .then(data => {
        if(data.profile.message === 'Not Found') {
          // Show Alert 

        } else {
          // Show Profile
        }
      })
  } else {
    // Clear Profile
  }
});