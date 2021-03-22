const startEngine = async () => {
  setTimeout(() => {
    changeBackground();
  }, 5000);
  await new Splide("#reviews", {
    perPage: 2,
    type: "loop",
    padding: 10,
    autowidth: true,
    focus: "center",
    autoHeight: true,
    pauseOnHover: true,
    autoplay: true,
    speed: 35000,
    interval: 0,

    padding: {
      left: "1rem",
      right: "1rem",
    },
    breakpoints: {
      1583: {
        perPage: 2,
      },
      1000: {
        perPage: 2,
      },
      577: {
        perPage: 1,
      },
    },
  }).mount();
};

const changeBackground = () => {
  let backgrounds = [
    "https://images.unsplash.com/photo-1601652074843-5aab6a74cd15?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80",
    "https://images.unsplash.com/photo-1565417814737-6b4097de8a3a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1566096650255-98ba2641071e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1226&q=80",
    "https://images.unsplash.com/photo-1585293878107-569e3ebdab53?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1596711684682-2f3ea5d2d739?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80",
    "https://images.unsplash.com/photo-1588692751659-69dbe7753acd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1377&q=80",
    "https://images.unsplash.com/photo-1592256410394-51c948ec13d5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1500360354950-e67ba739a7b9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1338&q=80",
    "https://images.unsplash.com/photo-1554961650-72faf113aa49?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
  ];
  const item = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  let boxes = document.querySelectorAll("#box");
  boxes.forEach((element) => {
    element.style.backgroundImage = `url(${item})`;
  });
  setTimeout(changeBackground, 10000);
};

const body = document.querySelector("body");
const main = document.querySelector("html");

const _bodyColorOnScroll = () => {
  const { scrollTop, scrollHeight, clientHeight } = main;
  const ratio = scrollTop / (scrollHeight - clientHeight);

  body.style.backgroundColor = `rgba(${ratio * 1 + 79}, ${ratio * 1 + 54},${
    ratio * 1 + 36
  }, ${ratio * 1.5})`;
};
window.onload = startEngine();
