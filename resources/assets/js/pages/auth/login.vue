<template>
  <form @submit.prevent="login" @keydown="form.errors.clear($event.target.name)">
  <div>
    <!-- <section class="section"> -->
      <div class="columns is-centered">
        <div class="column is-3">
          <div class="box">

            <has-error :form="form" field="email" class="notification is-danger has-text-centered"></has-error>

            <div class="field">
              <label class="label">Email Address</label>
              <div class="control has-icons-left">
                <input v-model="form.email" type="text" name="email" id="email" class="input is-medium">
                <span class="icon is-medium is-left">
                  <i class="fa fa-user"></i>
                </span>
              </div>
            </div>

            <div class="field">
              <label class="label">Password</label>
              <div class="control has-icons-left">
                <input v-model="form.password" type="password" name="password" id="password" class="input is-medium">
                <span class="icon is-medium is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
            </div>

            <div class="field">
              <div class="control">
                <input type="checkbox" value="1" v-model="form.remember">
                Remember Me
              </div>
            </div>

            <div class="field is-grouped is-grouped-centered">
              <p class="control">
                <button :disabled="form.busy" type="submit" class="button is-large is-success">
                  <span class="icon is-medium">
                    <i class="fa fa-sign-in"></i>
                  </span>
                  <span>Log In</span>
                </button>
              </p>
            </div>

            <!-- <div class="section">
              <div class="field is-grouped is-grouped-centered">
                <p class="control">
                  <a class="button is-info is-medium margin-sides-10">
                    <span class="icon is-medium">
                      <i class="fa fa-facebook"></i>
                    </span>
                    <span>Log In</span>
                  </a>
                  <a class="button is-danger is-medium margin-sides-10">
                    <span class="icon is-medium">
                      <i class="fa fa-google"></i>
                    </span>
                    <span>Log In</span>
                  </a>
                  <a class="button is-primary is-medium margin-sides-10">
                    <span class="icon is-medium">
                      <i class="fa fa-twitter"></i>
                    </span>
                    <span>Log In</span>
                  </a>
                </p>
              </div>
            </div> -->

            <div class="is-clearfix">
              <div class="is-pulled-left">
                <router-link :to="{ name: 'password.request' }">Forgot Your Password?</router-link>
              </div>
              <div class="is-pulled-right">
                <router-link :to="{ name: 'auth.register' }">Create Account</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    <!-- </section> -->
  </div>
  </form>
</template>

<script>
import Form from 'vform'

export default {
  name: 'login',

  layout: 'auth',

  metaInfo: { titleTemplate: 'Login | %s' },

  data: () => ({
    form: new Form({
      email: '',
      password: '',
      remember: false
    })
  }),

  methods: {
    login () {
      this.form.post('/api/login')
        .then(({ data }) => {
          this.$store.dispatch('saveToken', {
            token: data.token,
            remember: this.form.remember
          })

          this.$store.dispatch('fetchUser').then(() => {
            this.$router.push({ name: 'home' })
          })
        })
    }
  }
}
</script>
