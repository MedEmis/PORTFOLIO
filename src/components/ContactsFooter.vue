<template>
  <footer>
    <b-row class="p-4">
      <b-col class="px-4" xl="6" lg="6" md="12" sm="12" xs="12">
        <form
          action="https://formspree.io/draganovmaksim9@gmail.com"
          method="post"
          id="scrolltarget"
          class="conacts-form"
        >
          <fieldset>
            <legend class="legend">
              You can send message to me via this form
            </legend>
            <b-form-group
              id="input-group-1"
              label="Email address:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                type="email"
                placeholder="Enter email"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Your Message:"
              label-for="input-2"
            >
              <b-form-textarea
                id="input-2"
                placeholder="...message"
                required
              ></b-form-textarea>
            </b-form-group>

            <b-button block type="submit" variant="primary">Submit</b-button>
          </fieldset>
        </form>
      </b-col>
      <b-col class="contacts mt-2" xl="6" lg="6" md="12" sm="12" xs="12">
        <div v-for="item in myContacts" :key="item.name" class="contacts__item">
          <h4 class="contacts__title">{{ item.name }}</h4>
          <a target="_blank" :href="item.href" class="contacts__link">{{
            item.value
          }}</a>
          <b-icon
            class="contacts__icon"
            :icon="item.icon"
            scale="2"
            variant="primary"
          />
        </div>
        <a href="#" class="return-up">
          <b-icon icon="arrow-up" scale="2.5" variant="primary"
        /></a>
      </b-col>
    </b-row>
  </footer>
</template>

<script>
export default {
  name: "ContactsFooter",
  data() {
    return {
      myContacts: [
        {
          name: "My phone",
          href: "tel:+380681397549",
          value: "+38 068 139-75-49",
          icon: "telephone",
        },
        {
          name: "My mail",
          href: "mailto:draganovmaksim9@gmail.com",
          value: "draganovmaksim9@gmail.com",
          icon: "envelope",
        },
        {
          name: "Facebook",
          href: "https://www.facebook.com/profile.php?id=100025795330285",
          value: "https://www.facebook.com",
          icon: "facebook",
        },
        {
          name: "Git Hub",
          href: "https://github.com/MedEmis",
          value: "https://github.com/MedEmis",
          icon: "github",
        },
        {
          name: "Linkedin",
          href: "https://www.linkedin.com/in/maksym-drahanov-41588b1a9/",
          value: "https://www.linkedin.com",
          icon: "linkedin",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
footer {
  background: rgba(190, 144, 144, 0.329);
  margin: 10px 0;
  border-radius: 10px;
}
.conacts-form {
}
.contacts {
  padding: 1vh 4vw;
  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    background: rgba(138, 134, 134, 0.315);
    margin-bottom: 10px;
    padding: 5px 5px;
    border-radius: 5px;
    padding-right: 35px;
    @media screen and (max-width: 770px) {
      display: block;
    }
  }

  &__title {
    font-weight: 700;
  }
  &__icon {
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(-50%, 50%);
  }
  &__link {
    font-size: 18px;
    color: #fff;
    @media screen and (max-width: 480px) {
      margin-right: 20px;
    }
    @media screen and (max-width: 350px) {
      font-size: 16px;
    }
  }
  .return-up {
    position: absolute;
    right: 0;
    bottom: 0;
    background: rgb(112, 112, 112);
    height: 50px;
    width: 50px;
    text-align: center;
    border-radius: 50% 0 10px 0;
    line-height: 50px;
    transform: translate(20%, 50%);
  }
}
</style>