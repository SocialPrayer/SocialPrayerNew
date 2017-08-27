<template>
  <div>
  <section class="hero is-fullheight is-primary">
    <div class="hero-body">
      <div class="container is-padded-top">
        <div class="columns is-centered is-multiline is-mobile">
          <div class="column is-12"></div>
          <div class="column is-12"></div>
          <div class="column is-12"></div>
          <div class="column is-12"></div>
          <div class="column is-12">
            <div class="is-size-1-desktop is-size-2-touch title has-text-centered" style="font-weight: 100;">
              SocialPrayer
            </div>
            <div class="is-size-5-desktop is-size-7-touch subtitle has-text-centered">
              If we pray together, there is nothing we cannot accomplish
            </div>
          </div>
          <div class="column is-12 has-text-centered">
            <img src="../../images/logos/social-prayer-logo-square.png" class="image-size-30-touch image-size-10-desktop">
          </div>
          <div class="column is-12">
            <div class="columns is-multiline is-centered">
              <div class="column is-2 has-text-centered is-size-3-desktop is-size-5-touch">
                <router-link :to="{ name: 'auth.login' }" class="has-text-white">
                  Log In
                </router-link>
              </div>
              <div class="column is-2 has-text-centered is-size-3-desktop is-size-5-touch">
                <router-link :to="{ name: 'auth.register' }" class="has-text-white">
                  Register
                </router-link>
              </div>
            </div>
          </div>
          <div class="column is-12"></div>
          <div class="column is-12"></div>
          <div class="column is-12"></div>
          <div class="column is-12"></div>
        </div>
      </div>
    </div>
  </section>
  <div class="container">
    <div class="columns is-centered is-multiline">
      <div class="column is-12"></div>
      <div class="column is-6">
        <prayer></prayer>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'welcome',

  layout: 'default',

  metaInfo: { titleTemplate: 'Welcome | %s' },

  computed: mapGetters({
      authenticated: 'authCheck'
    }),
  // computed: {
  //   logo () {
  //     return require('../../images/logos/social-prayer-logo-square.png')
  //   }
  // },


  data: () => ({
    title: 'SocialPrayer'
  })
}
</script>
