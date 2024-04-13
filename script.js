let users = [
  {
    profile: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    dispalyPic: "https://images.unsplash.com/photo-1612904370392-d1dde7a8ddc8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pending: "4",
    location: "delhi,india",
    name:"shivangi",
    age: "21",
    interests: [
      {
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest: "painting"
      },
      {
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "music"
      }
    ],
    bio: "done it amet consectetur adipisicing elit. Inventore deserunt dignissimos labore saepe cum numquam, tempore aliquam distinctio quis fugiat vel maiores, iure aspernatur, maxime voluptates repudiandae provident et vitae!",
    isFriend: null
  },
  {
    profile: "https://images.unsplash.com/photo-1514626585111-9aa86183ac98?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    dispalyPic: "https://images.unsplash.com/photo-1496440737103-cd596325d314?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pending: "14",
    location: "bhopal,india",
    name: "nishi",
    age: "26",
    interests: [
      {
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "music"
      }
    ], 
    bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore deserunt dignissimos labore saepe cum numquam, tempore aliquam distinctio quis fugiat vel maiores, iure aspernatur, maxime voluptates repudiandae provident et vitae!",
    isFriend: null
  },
  {
    profile: "https://images.unsplash.com/photo-1496440737103-cd596325d314?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    dispalyPic: "https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pending: "4",
    location: "banglore,india",
    name: "avanya",
    age: "27",
    interests: [
      {
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest: "painting"
      },
      {
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "music"
      }
    ],    
    bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore deserunt dignissimos labore saepe cum numquam, tempore aliquam distinctio quis fugiat vel maiores, iure aspernatur, maxime voluptates repudiandae provident et vitae!",
    isFriend: null
  },
  {
    profile: "https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    dispalyPic: "https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pending: "4",
    location: "delhi",
    name: "harshita",
    age: "21",
    interests: [
      {
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest: "painting"
      },
      {
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "music"
      }
    ],
    bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore deserunt dignissimos labore saepe cum numquam, tempore aliquam distinctio quis fugiat vel maiores, iure aspernatur, maxime voluptates repudiandae provident et vitae!",
    isFriend: null
  }
]

function select(elem) {
  return document.querySelector(elem);
}

let curr = 0;

(function setInitial() {
  select(".maincard img").src = users[curr].dispalyPic;
  select(".incomingcard img").src = users[curr + 1]?.dispalyPic;
  select(".prfimg img").src = users[curr].profile;
  select(".badge h5").textContent = users[curr].pending;
  select(".location h3").textContent = users[curr].location;
  select(".name:nth-child(1)").textContent = users[curr].name;
  select(".name:nth-child(2)").textContent = users[curr].age;

  let cluster = ""
  users[curr].interests.forEach(function (interests) {
    cluster +=`<div class="tag flex items-center bg-white/30 px-3 py-1 rounded-full gap-3">
                ${interests.icon}<h3 class="text-sm tracking-tight">${interests.interest}</h3>
              </div>`
  })
  select(".tags").innerHTML = cluster;

  select(".bio p").textContent=users[curr].bio;
  curr = 2

})();
//https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D

//"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"



(function imageChange(){
  let deny = select(".deny")
  let accept = select(".accept")
  
  deny.addEventListener("click", function () {
    console.log("hey")
  })

  accept.addEventListener("click", function () {
    console.log("hey")
  })
}) ();