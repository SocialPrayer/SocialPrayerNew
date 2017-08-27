<template>
  <div class="container">
      <div class="columns">
            <div class="column is-8 is-offset-2">
                <nav class="navbar">
                  <div class="navbar-brand">
                    <div class="navbar-item">
                      <router-link :to="{ name: 'home' }" class="navbar-brand">
                        <img src="../../images/logos/social-prayer-logo-square.png">
                        <div class="is-pulled-right has-text-primary title is-size-4" style="font-weight: 400;">
                          &nbsp;&nbsp;SocialPrayers
                        </div>
                      </router-link>
                    </div>
                    <div class="navbar-burger burger" data-target="navMenuMain">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div id="navMenuMain" class="navbar-menu">
                    <div class="navbar-end">
                      <div class="navbar-item">
                        <router-link :to="{ name: 'settings.profile' }" tag="li" class="nav-item">
                          <!-- <a class="nav-link">{{ user.name }}</a> -->
                        </router-link>
                      </div>
                      <div class="navbar-item">
                        <a @click.prevent="logout" class="nav-link" href="#">Logout</a>
                      </div>
                    </div>
                  </div>
                </nav>
                <div class="container">
                  <child/>
                </div>
              </div>
            </div>
      </div>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'app-layout',

  mounted() {
    document.addEventListener('DOMContentLoaded', function () {
      var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
      if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach(function ($el) {
          $el.addEventListener('click', function () {
            var target = $el.dataset.target;
            var $target = document.getElementById(target);
            $el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
          });
        });
      }
    });
  },

  computed: mapGetters({
    user: 'authUser',
    authenticated: 'authCheck'
  }),

  methods: {
    logout () {
      this.$store.dispatch('logout')
        .then(() => {
          this.$router.push({ name: 'auth.login' })
        })
    }
  }
}
</script>
