<template>
  <div class="teal-background full-height">
    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-1 is-offset-4-desktop">
            <router-link :to="{ name: 'welcome' }">
              <figure class="image is-64x64">
                <img src="../../images/logos/social-prayer-logo-square.png">
              </figure>
            </router-link>
          </div>
          <div class="column" style="margin-left: -40px;">
            <router-link :to="{ name: 'welcome' }" class="has-text-white">
              <div class="title is-size-2-desktop is-size-3-touch has-text-white" style="font-weight: 100;">
                SocialPrayer
              </div>
            </router-link>
            <div class="is-size-7-desktop is-size-7-touch subtitle has-text-white">
              If we pray together, there is nothing we cannot accomplish
            </div>
          </div>

        </div>
      </div>
    </section>
    <child/>
  </div>
</template>

<script>
export default {
  name: 'auth-layout'
}
</script>
