const notRegistered = document.querySelector(".not-registered");

const getRegistrationData = async function () {
  const request = await fetch(`https://gist.githubusercontent.com/skillcrush-curriculum/4bfa96d3762f86d2327d389063b3ea8d/raw/86e50e48e98c662ead6d9bd191ef7db381e9f4b4/fieldtrip.json`);
  const data = await request.json();

  console.log("Json file retrieved");
  displayContactList(data);
}

const displayContactList = function(data) {
  notRegistered.innerHTML = "";

  for (const student of data) {
    const name = student.name;
    const registered = student.registered;
    console.log(`${name}`);
    console.log(`${registered}`);

    if (registered === "no") {
      let li = document.createElement("li");
      li.innerHTML = `${name}`;
      notRegistered.append(li);
    } 
  } 
}

getRegistrationData();
