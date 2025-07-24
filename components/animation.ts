export const menuSlide = {
  initial:{
    x:"100%"
  },
  enter:{
    x:"0%",
    transition:{duration:0.99,ease:[0.78,0,0.24,1]}
  },
  exit:{
    x:"100%",
    transition:{duration:0.99,ease:[0.78,0,0.24,1]}
  }
};

export const slide= {
  initial:{
    x:"80px"
  },
  enter:{
    x:"0px",
    transition:{delay: 0.05,duration:0.99,ease:[0.78,0,0.24,1]}
  },
  exit:{
    x:"80px",
    transition:{delay:0.05,duration:0.99,ease:[0.78,0,0.24,1]}
  }
}
