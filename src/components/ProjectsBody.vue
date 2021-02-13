<template>
  <main>
    <b-row>
      <b-col class="my-works">
        <b-row>
          <b-col>
            <h2 class="my-works__title">My Works</h2>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <transition-group name="animate" class="my-works__wrapper" tag="ul">
              <li
                class="my-works__item"
                v-for="(item, index) in toShow"
                :key="item.name"
                :href="item.link"
                data-aos="zoom-in-down"
              >
                <span class="my-works__item_order">{{ index + 1 }}</span>
                <h4 class="my-works__item_name">{{ item.name }}</h4>
                <a :href="item.link" target="blank"
                  ><b-img
                    fluid
                    :alt="item.name"
                    :href="item.link"
                    :src="require(`@/assets/projects/${item.image}`)"
                  />
                </a>
                <p>{{ item.description }}</p>
                <ul class="my-works__item_stack">
                  <li
                    class="my-works__item_stack__item"
                    v-for="icon in item.stack"
                    :key="icon"
                  >
                    <b-img :src="require(`@/assets/${icon}.png`)" alt="icon" />
                  </li>
                </ul>
              </li>
            </transition-group>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </main>
</template>

<script>
export default {
  name: "ProjectsBody",
  data() {
    return {
      works: [
        {
          name: "Catering",
          image: "firstSite.jpg",
          link: "https://medemis.github.io/FirstSite/index",
          stack: ["html", "css", "scss", "js"],
          description:
            "My first full adaptive landing page. Used languages - HTML, SCSS, JavaScript.",
        },
        {
          name: "Bussines",
          image: "secongSite.png",
          link: "https://medemis.github.io/SecondSite/index",
          stack: ["html", "css", "scss", "js"],
          description:
            "My second full adaptive landing page. Used languages - HTML, SCSS, JavaScript.",
        },
        {
          name: "Binary",
          image: "thirdSite.png",
          link: "https://medemis.github.io/ThirdSite/index",
          stack: ["html", "css", "scss", "js"],
          description:
            "My third full adaptive landing page. Used languages - HTML, SCSS, JavaScript.",
        },
        {
          name: "Wedding",
          image: "firstSite.jpg",
          link: "https://medemis.github.io/wedding/",
          stack: ["html", "css", "scss", "js"],
          description:
            "My fourth full adaptive landing page. Used languages - HTML, SCSS, JavaScript.",
        },
        {
          name: "LOGO",
          image: "LOGO.png",
          link: "https://medemis.github.io/webShop_one/",
          stack: ["html", "css", "scss", "js"],
          description:
            "My first web-shop. Used languages - HTML, SCSS, Java Script.",
        },
        {
          name: "Social Network",
          image: "LOGO.png",
          stack: ["html", "css", "scss", "js", "react", "redux"],
          link:
            "https://social-network-on-react.vercel.app/react-social-network/",
          description:
            "My first social network. Used languages - HTML, SCSS, JavaScript.  Frameworks - React, Redux",
        },
        {
          name: "LinkedIn",
          image: "LOGO.png",
          stack: ["html", "css", "scss", "js", "vue", "vuex", "bootstrap"],
          link: "https://vue-apps-collection.vercel.app/website/profile",
          description:
            "My first web-app with headless WordPress. Used languages - HTML, SCSS, Java Script.  Frameworks - Vue, Vuex, VueBootstrap",
        },
      ],
      toShow: [],
    };
  },
  methods: {
    displayWorks() {
      for (var x = 0, ln = this.works.length; x < ln; x++) {
        setTimeout(
          (i) => {
            this.toShow.push(this.works[i]);
            console.log("ssss");
          },
          x * 200,
          x
        );
      }
    },
  },
  mounted() {
    this.displayWorks();
  },
};
</script>

<style lang="scss">
.animate__bounceI {
  transition: 0.5s linear;
}
main {
  background: rgba(110, 103, 212, 0.473);
  margin: 10px 0;
  border-radius: 10px;
  overflow: hidden;
  transition: 0.5s linear;
}
.my-works {
  &__title {
    text-align: center;
    background: rgb(2, 52, 160);
    color: #fff;
  }

  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;
    --animate-duration: 3s;
    transition: 0.5s linear;
  }

  &__item {
    width: 290px;
    min-height: 250px;
    height: auto;
    background: rgba(161, 157, 157, 0.404);
    margin: 20px;
    border-radius: 15px;
    border-top: 10px solid rgb(10, 7, 211);
    position: relative;
    z-index: 5;
    text-align: center;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    &_order {
      position: absolute;
      top: -7px;
      left: 0;
      z-index: 10;
      width: 40px;
      height: 40px;
      background: rgb(8, 73, 158);
      border-radius: 5px 0 50% 0;
      color: #fff;
      line-height: 40px;
      font-size: 20px;
    }
    &_name {
      width: 100%;
      position: absolute;
      top: -30px;
      color: #fff;
    }
    p {
      padding: 5px;
      font-size: 18px;
      font-weight: 600;
    }
    &_stack {
      height: auto;
      background: rgb(10, 7, 211);
      width: 100%;
      margin: 0;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-around;
      &__item {
        border-radius: 50%;
        width: 35px;
        height: 35px;
        line-height: 30px;
        margin: 1px;
        img {
          width: 35px;
          height: 35px;
        }
      }
    }
  }
  .before-enter {
    opacity: 0.5;
  }
  .enter {
    opacity: 0.9;
  }
}
</style>