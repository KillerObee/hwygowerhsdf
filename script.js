fetch(`https://api.github.com/repos/${KillerObee}/${hwygowerhsdf}/commits`)
  .then(response => response.json())
  .then(data => {
    // Get the ul element
    const changelog = document.getElementById("changelog");

    // Iterate through the commit data
    data.forEach(commit => {
      // Create a new li element
      const li = document.createElement("li");
      li.innerHTML = `${commit.commit.committer.date} - ${commit.commit.message}`;
      changelog.appendChild(li);
    });
  })
  .catch(error => console.log(error));
