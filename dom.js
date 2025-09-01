// 1. Change Paragraph Text
    function changeText() {
      document.getElementById("textPara").innerText = "Paragraph text has been changed!";
    }

    // 2. Add Hobby to List
    const hobbies = ["Reading", "Gaming", "Cooking", "Swimming", "Coding"];
    let index = 0;
    function addHobby() {
      if (index < hobbies.length) {
        const li = document.createElement("li");
        li.textContent = hobbies[index++];
        document.getElementById("hobbyList").appendChild(li);
      } else {
        alert("No more hobbies to add!");
      }
    }

    // 3. Set Background Color
    function setColor(color) {
      document.body.style.backgroundColor = color;
    }

    // 4. Toggle Theme
    function toggleTheme() {
      document.body.classList.toggle("night");
    }

    // 5. Clear Hobby List
    function clearList() {
      document.getElementById("hobbyList").innerHTML = "";
      index = 0; // Reset hobby index to allow re-adding
    }

    
  

