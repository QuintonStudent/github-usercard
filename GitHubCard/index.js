/* Step 1: using axios, send a GET request to the following URL
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/QuintonStudent')
  .then( response => {
    console.log(response.data);
    creatorFunction(response.data);
  })
  .catch( err => {
    console.log(err);
  });

axios.get('https://api.github.com/users/alasalle')
  .then( response => {
    console.log(response.data);
    creatorFunction(response.data);
  })
  .catch( err => {
    console.log(err);
  });

axios.get('https://api.github.com/users/tetondan')
  .then( response => {
    console.log(response.data);
    creatorFunction(response.data);
  })
  .catch( err => {
    console.log(err);
  });

axios.get('https://api.github.com/users/dustinmyers')
  .then( response => {
    console.log(response.data);
    creatorFunction(response.data);
  })
  .catch( err => {
    console.log(err);
  });

axios.get('https://api.github.com/users/justsml')
  .then( response => {
    console.log(response.data);
    creatorFunction(response.data);
  })
  .catch( err => {
    console.log(err);
  });

axios.get('https://api.github.com/users/luishrd')
  .then( response => {
    console.log(response.data);
    creatorFunction(response.data);
  })
  .catch( err => {
    console.log(err);
  });

axios.get('https://api.github.com/users/bigknell')
  .then( response => {
    console.log(response.data);
    creatorFunction(response.data);
  })
  .catch( err => {
    console.log(err);
  });

/* Step 2: Inspect and study the data coming back, this is YOUR
   github info! You will need to understand the structure of this
   data in order to use it to build your component function

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function,
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either
          follow this link in your browser https://api.github.com/users/<Your github name>/followers
          , manually find some other users' github handles, or use the list found
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.

          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/
// const something = document.querySelector('.cards');
// console.log(something);
//
// const test = document.querySelector('.test');
// console.log(test);

function creatorFunction(Obj) {
  // create elements
  let divCard = document.createElement('div');
  let imgUser = document.createElement('img');
  let divCardInfo = document.createElement('div');
  let headerName = document.createElement('h3');
  let paragraphUsername = document.createElement('p');
  let paragraphLocation = document.createElement('p');
  let paragraphProfile = document.createElement('p');
  let anchorProfile = document.createElement('a');
  let paragraphFollowers = document.createElement('p');
  let paragraphFollowing = document.createElement('p');
  let paragraphBio = document.createElement('p');

  // add classes to elements
  divCard.className = 'card';
  divCardInfo.className = 'card-info';
  headerName.className = 'name';
  paragraphUsername.className = 'username';

  // add content to elements
  imgUser.src = Obj.avatar_url;
  headerName.innerText = `${Obj.name}`;
  paragraphUsername.innerText = `${Obj.login}`;
  paragraphLocation.innerText = `Location: ${Obj.location}`;
  anchorProfile.href = Obj.html_url;
  anchorProfile.innerText = Obj.html_url;
  paragraphFollowers.innerText = `Followers: ${Obj.followers}`;
  paragraphFollowing.innerText = `Following: ${Obj.following}`;
  paragraphBio.innerText = `Bio: ${Obj.bio}`;

  // arrange elements
  divCard.appendChild(imgUser);
  divCard.appendChild(divCardInfo);
  divCardInfo.appendChild(headerName);
  divCardInfo.appendChild(paragraphUsername);
  divCardInfo.appendChild(paragraphLocation);
  divCardInfo.appendChild(paragraphProfile);
  paragraphProfile.appendChild(anchorProfile);
  divCardInfo.appendChild(paragraphFollowers);
  divCardInfo.appendChild(paragraphFollowing);
  divCardInfo.appendChild(paragraphBio);

  let cards = document.querySelector('.cards');
  cards.appendChild(divCard);
}

/* List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
