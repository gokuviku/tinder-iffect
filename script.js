let users = [
  {
    profile: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    dispalyPic: "https://images.unsplash.com/photo-1612904370392-d1dde7a8ddc8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pending: "4",
    location: "delhi,india",
    name: "shivangi",
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
    bio: "done it ame  elkfnwqto w4kg[k j t4tj4[t ktn  WJKRQNR S DQJ",
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
let isAnimating = false;
function setData(index) {
  select(".prfimg img").src = users[index].profile;
  select(".badge h5").textContent = users[index].pending;
  select(".location h3").textContent = users[index].location;
  select(".name h1").textContent = users[index].name;
  select(".name h2").textContent = users[index].age;

  let cluster = ""
  users[index].interests.forEach(function (interests) {
    cluster += `<div class="tag flex items-center bg-white/30 px-3 py-1 rounded-full gap-3">
                ${interests.icon}<h3 class="text-sm tracking-tight">${interests.interest}</h3>
              </div>`
  })
  select(".tags").innerHTML = cluster;

  select(".bio p").textContent = users[index].bio;

}
(function setInitial() {
  select(".maincard img").src = users[curr].dispalyPic;
  select(".incomingcard img").src = users[curr + 1]?.dispalyPic;
  setData(curr)
  curr = 2

})()



  (function imageChange() {
    if (!isAnimating) {
      isAnimating = true
      let tl = gsap.timeline({
        onComplete: function () {
          isAnimating = false;
          let main = select(".maincard")
          let incoming = select(".incomingcard")

          incoming.classList.remove("z-[2]")
          incoming.classList.add("z-[3]")
          incoming.classList.remove("incomingcard")

          main.classList.remove("z-[3]")
          main.classList.add("z-[2]")

          gsap.set(main, {
            scale: 1,
            opacity: 1
          })
          if (curr === users.length) curr = 0
          select(".maincard img").src = [curr].dispalyPic
          curr++

          main.classList.remove("maincard")
          main.classList.add("incomingcard")
          incoming.classList.add("maincard")


        }
      })
      tl.to(".maincard", {
        scale: 1.1,
        opacity: 0,
        ease: Circ,
        duration: 0.9
      }, "flag")

        .from(".incomingcard", {
          scale: 0.9,
          opacity: 1,
          ease: Circ,
          duration: 1.1
        }, "flag")
    }
  })()




let deny = select(".deny")
let accept = select(".accept")

deny.addEventListener("click", function () {
  imageChange();
  setData(curr-1)
  gsap.to(".details .ee", {
    y: "100%",
    opacity: 0,
    duration: .7,
    stagger: .1,
    ease: Power4.easeInOut
  })
})
accept.addEventListener("click", function () {
  imageChange();
  setData(curr-1)
  gsap.to(".details .ee", {
    y: "100%",
    opacity: 0,
    duration: .7,
    stagger: .1,
    ease: Power4.easeInOut
  })
})


function containerCreator() {
  document.querySelectorAll(".ee").forEach(function (elem) {
    let div = document.createElement("div");
    dispatchEvent.classList.add(`${ee.classList[1]}container`, 'overflow-hidden')
    div.appendChild(elem);
    select(".details").appendChild(div)

  })
}
containerCreator()
