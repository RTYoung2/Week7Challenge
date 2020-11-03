var userResponse = prompt(`Hello, how are you today!? *stink meaners voice*`);

// var caps = alert(`Why are you talking so loud 😒`);
// var lowercase = alert(`I can't hear you 🥺`);
// const neither = `Why you no talk 😔`;

if (userResponse === userResponse.toUpperCase()) {
  console.log(`why are you shouting`);
  alert(`Why are you talking so loud 😒`);
} else if (userResponse === userResponse.toLowerCase()) {
  console.log(`why are you whispering`);
  alert(`I can't hear you 🥺`);
} else {
  console.log(`this is a good volume 😔`);
  alert(`this is a good volume 😔`);
}
//   } else {
//   alert(`Why you no talk 😔`);
