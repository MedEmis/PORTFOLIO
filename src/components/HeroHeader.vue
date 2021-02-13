<template>
  <header>
    <b-row class="hero-header px-2">
      <b-col class="hero-header__info" xl="8" lg="8" md="12" sm="12" xs="12">
        <div class="hero-header__info_position">Junior Frontend Developer</div>
        <hr />
        <div class="hero-header__info_name">Maksym Drahanov</div>
        <hr />
        <div class="hero-header__info_stack">
          <h3 class="hero-header__info_stack__title">
            Used tchnologies stack:
          </h3>
          <div>
            <ul class="hero-header__info_stack__list">
              <li v-for="item in stack" :key="item.name">
                <b-img
                  fluid
                  :src="require(`@/assets/${item.image}`)"
                  alt="avatar"
                />
                <span>{{ item.name }}</span>
              </li>
            </ul>
          </div>
        </div>
      </b-col>
      <b-col
        class="hero-header__avatar p-5"
        xl="4"
        lg="4"
        md="10"
        sm="10"
        xs="10"
      >
        <b-img
          fluid
          class="hero-header__avatar_image"
          :src="require('@/assets/avatar.jpg')"
          alt="avatar"
        ></b-img>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="hero-header__about m-4">
        <h2>About me</h2>
        <article>
          <p>I'm a self-taught front-end developer.</p>
          <p>
            I want to start my carrer in Software Development as Junion
            Front-end-Developer.<br />
            I would like to get real experience in a real company with real
            projects.
          </p>
          <p>
            During my studying and practising I've got experience with HTML,
            CSS, JS, React, Redux, Vue, Vuex. <br />
            Also I have some experience with Wordpress as Headless CMS, which
            was been used as database.
          </p>
        </article>
      </b-col>
    </b-row>
  </header>
</template>

<script>
export default {
  name: "HeroHeader",
  data() {
    return {
      stack: [
        {
          name: "HTML",
          image: "html.png",
        },
        {
          name: "CSS",
          image: "css.png",
        },
        {
          name: "SCSS",
          image: "scss.png",
        },
        {
          name: "JS",
          image: "js.png",
        },
        {
          name: "React",
          image: "react.png",
        },
        {
          name: "Redux",
          image: "redux.png",
        },
        {
          name: "Vue",
          image: "vue.png",
        },
        {
          name: "Vuex",
          image: "vuex.png",
        },
        {
          name: "Bootstrap",
          image: "bootstrap.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
header {
  background: rgb(102, 134, 241);
  position: relative;
  margin: 10px 0;
  border-radius: 10px;
}
.hero-header {
  display: flex;
  align-items: center;
  justify-content: center;

  &__info {
    font-weight: 700;
    font-size: 34px;
    padding: 3%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
    hr {
      width: 100%;
      height: 5px;
      background: rgb(119, 119, 119);
      border-radius: 5px;
    }
    @media screen and (max-width: 769px) {
      padding: 7%;
    }

    &_position {
      color: rgb(204, 142, 9);
      margin-bottom: 10px;
    }

    &_name {
      color: rgb(4, 28, 94);
      margin-bottom: 10px;
    }

    &_stack {
      text-align-last: left;
      width: 100%;
      &__title {
      }

      &__list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        background: rgba(150, 143, 143, 0.295);
        padding: 10px;
        border-radius: 20px;
        li {
          margin: 10px;
          font-size: 20px;
          height: 70px;
          width: 70px;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          color: #fff;
          border-radius: 10px;
          position: relative;
          img {
            width: 100%;
            height: 100%;
          }
          span {
            position: absolute;
            bottom: -15px;
          }
          transition: 0.5s;
          &:hover {
            transform: scale(1.2);
          }
        }
      }
    }
  }

  &__avatar {
    @media screen and (min-width: 990px) {
      max-width: 400px;
    }

    &_image {
      border: 10px solid rgb(233, 228, 228);
      border-radius: 20px;
    }
  }
  &__about {
    background: rgba(102, 98, 98, 0.137);
    font-size: 20px;
    article {
      padding: 10px;
      text-align: left;
      font-weight: 700;
    }
  }
}
</style>