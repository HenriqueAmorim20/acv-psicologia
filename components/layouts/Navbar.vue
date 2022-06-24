<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
interface MenuItem {
  name: string;
  path: string;
  id?: string;
}
let scrollPosition: number = 0;
let drawer: Boolean = false;
const menuItems: Array<MenuItem> = [
  {
    name: "sobre",
    id: "sobreSection",
    path: "/",
  },
  {
    name: "psicoterapia",
    id: "psicoterapiaSection",
    path: "/",
  },
  {
    name: "consultório",
    id: "consultorioSection",
    path: "/",
  },

  {
    name: "vídeos",
    id: "videosSection",
    path: "/",
  },
  {
    name: "publicações",
    id: "publicacoesSection",
    path: "/",
  },
];

onMounted(onInit);
onUnmounted(onDestroy);

function onInit() {
  handleNavbar();
  window.addEventListener("scroll", handleNavbar);
}

function onDestroy() {
  window.removeEventListener("scroll", handleNavbar);
}

function handleNavbar() {
  const navbarEl = document.querySelector(".navbar") as HTMLElement;

  navbarEl.style.backgroundColor =
    drawer || window.scrollY < window.innerHeight / 3
      ? "transparent"
      : "var(--background)";

  navbarEl.style.transform =
    // drawer opened
    drawer ||
    // drawer closed and current scroll is smaller than a third of the viewport height
    (!drawer && window.scrollY < window.innerHeight / 3) ||
    // drawer closed, scroll direction is up and current scroll is smaller than a third of the viewport height
    (!drawer &&
      scrollPosition >= window.scrollY &&
      window.scrollY > window.innerHeight / 3)
      ? "translateY(0)" // shows navbar
      : "translateY(-105%)"; // hides navbar

  scrollPosition = window.scrollY;
}

/**
 * Handles the drawer visibility and menu icon animation
 */
function toggleDrawer(): void {
  const bodyEl = document.querySelector("body");
  const menuIconBars: any = document.querySelectorAll(".menu-icon-bar");
  const drawerElement: any = document.querySelector(".drawer");
  const logoElement: any = document.querySelector(".navbar-logo");

  menuIconBars[0].classList.toggle("first-bar-active");
  menuIconBars[1].classList.toggle("second-bar-active");
  menuIconBars[2].classList.toggle("third-bar-active");
  drawerElement.classList.toggle("drawer-active");
  logoElement.classList.toggle("navbar-logo-active");

  drawer = !drawer;
  bodyEl.style.overflow = drawer ? "hidden" : "auto";
  handleNavbar();
}

/**
 * Handles page navigation navigation and scrolling to element
 */
function scrollTo(item: MenuItem): void {
  if (item.id) {
    setTimeout(() => {
      const element = document.getElementById(item.id);
      const y = element?.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }, 700);
  }
}
</script>

<template>
  <div class="navbarComponent">
    <nav class="navbar navbar-normal">
      <NuxtLink to="/">
        <img
          @click="scrollTo({ name: null, path: '/', id: 'homeSection' })"
          class="navbar-logo"
          id="navbar-logo"
          src="/logos/logo.png"
          alt="Ana Carolina Villaça" />
      </NuxtLink>
      <div class="menu-icon" @click="toggleDrawer()">
        <span class="menu-icon-bar"></span>
        <span class="menu-icon-bar"></span>
        <span class="menu-icon-bar"></span>
      </div>
    </nav>

    <div class="drawer">
      <NuxtLink
        v-for="(item, index) in menuItems"
        :key="index"
        :to="item.path"
        @click="[toggleDrawer(), scrollTo(item)]"
        class="menu-item">
        {{ item.name }}
      </NuxtLink>
      <NuxtLink to="/">
        <img
          @click="
            [
              toggleDrawer(),
              scrollTo({ name: null, path: '/', id: 'homeSection' }),
            ]
          "
          class="drawer-logo"
          id="drawer-logo"
          src="/logos/logo.png"
          alt="Ana Carolina Villaça" />
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.4rem 1.5rem 0.4rem 0;
  z-index: 4;
  transition: transform 0.4s ease-in-out, background-color 0.4s ease-in-out;
  height: 70px;

  .navbar-logo {
    width: 100px;
    cursor: pointer;
    visibility: visible;
    opacity: 1;
    transition: visibility 0.5s, opacity 0.5s ease-in-out;
    z-index: -1;
  }

  .navbar-logo-active {
    visibility: hidden;
    opacity: 0;
  }

  .menu-icon {
    cursor: pointer;
    .menu-icon-bar {
      height: 2px;
      width: 40px;
      background-color: rgba(0, 0, 0, 0.68);
      display: block;
      margin: 10px 0px;
      transition: transform 0.5s, opacity 0.5s ease-in-out;
      transform: none;
    }

    .first-bar-active {
      transform: translateY(0.7rem) rotate(-45deg);
    }
    .second-bar-active {
      transform: rotate(45deg);
    }
    .third-bar-active {
      transform: rotate(45deg);
      opacity: 0;
    }
  }
}
.drawer {
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  background-color: #dadada63;
  backdrop-filter: blur(10px);
  padding: 0 10%;
  visibility: hidden;
  opacity: 0;
  z-index: 3;
  transition: visibility 0.5s, opacity 0.5s ease-in-out;
  font-family: "WorkSansThin";

  .menu-item {
    font-size: 3rem;
    margin: 0.3rem 0;
    cursor: pointer;
    text-decoration: none;
    color: var(--primary);
  }
  .menu-item::after {
    display: block;
    content: "";
    width: 0px;
    height: 2px;
    background-color: var(--secondary);
    transition: all 0.5s ease-in-out;
  }
  .menu-item:hover {
    color: var(--secondary);
  }
  .menu-item:hover::after {
    width: 50px;
  }
  .drawer-logo {
    cursor: pointer;
    position: absolute;
    bottom: 3%;
    right: 3%;
    width: 110px;
  }
}

.drawer-active {
  visibility: visible;
  opacity: 1;
}

@media only screen and (max-width: 600px) {
  .navbar {
    height: 60px;
    .navbar-logo {
      width: 90px;
    }

    .menu-icon {
      cursor: pointer;
      .menu-icon-bar {
        width: 35px;
        margin: 7px 0px;
      }

      .first-bar-active {
        transform: translateY(0.55rem) rotate(-45deg);
      }
      .second-bar-active {
        transform: rotate(45deg);
      }
      .third-bar-active {
        transform: rotate(45deg);
        opacity: 0;
      }
    }
  }

  .drawer {
    .menu-item {
      font-size: 2.2rem;
    }
  }
}
</style>
