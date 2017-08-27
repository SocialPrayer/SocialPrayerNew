<template>
  <form @submit.prevent="register" @keydown="form.errors.clear($event.target.name)">
  <div>
    <!-- <section class="section"> -->
      <div class="columns is-centered">
        <div class="column is-4">
          <div class="box">

            <div class="content has-text-centered has-text-primary">
              <p class="title has-text-primary">Create an account</p>
              <p class="subtitle is-size-7 has-text-grey">* All fields required</p>
            </div>

            <has-error :form="form" field="email" class="notification is-danger has-text-centered"></has-error>

            <div class="field">
              <label class="label">Name</label>
              <div class="control has-icons-left">
                <input v-model="form.name" type="text" name="name" id="name" class="input is-medium" placeholder="Name">
                <span class="icon is-medium is-left">
                  <i class="fa fa-user"></i>
                </span>
              </div>
            </div>

            <div class="field">
              <label class="label">Email Address</label>
              <div class="control has-icons-left">
                <input v-model="form.email" type="text" name="email" id="email" class="input is-medium" placeholder="Email Address">
                <span class="icon is-medium is-left">
                  <i class="fa fa-user"></i>
                </span>
              </div>
            </div>

            <div class="field is-horizontal">
              <div class="field-body">

                <div class="field">
                  <label class="label">Password</label>
                  <div class="control has-icons-left">
                    <input v-model="form.password" type="password" name="password" id="password" class="input is-medium" placeholder="Password">
                    <span class="icon is-medium is-left">
                      <i class="fa fa-lock"></i>
                    </span>
                  </div>
                </div>

                <div class="field">
                  <label class="label">Confirm Password</label>
                  <div class="control has-icons-left">
                    <input v-model="form.password_confirmation" type="password" name="password_confirmation" id="password_confirmation" class="input is-medium" placeholder="Confirm">
                    <span class="icon is-medium is-left">
                      <i class="fa fa-lock"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <section class="section">
              <div class="field is-grouped is-grouped-centered">
                <p class="control">
                  <button :disabled="form.busy" type="submit" class="button is-large is-success">
                    <!-- <icon :name="form.busy ? 'spinner'"></icon> -->
                    Create Account
                  </button>
                </p>
              </div>

              <!-- <div class="field is-grouped is-grouped-centered">
                <p class="control">
                  <a class="button is-info is-medium margin-tb-20-sides-10">
                    <span class="icon is-medium">
                      <i class="fa fa-facebook"></i>
                    </span>
                    <span>Log In</span>
                  </a>
                  <a class="button is-danger is-medium margin-tb-20-sides-10">
                    <span class="icon is-medium">
                      <i class="fa fa-google"></i>
                    </span>
                    <span>Log In</span>
                  </a>
                  <a class="button is-primary is-medium margin-tb-20-sides-10">
                    <span class="icon is-medium">
                      <i class="fa fa-twitter"></i>
                    </span>
                    <span>Log In</span>
                  </a>
                </p>
              </div> -->
            </section>

            <div class="has-text-centered">
              <router-link :to="{ name: 'auth.login' }">Already have an account?</router-link>
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
    name: 'register',

    layout: 'auth',
      metaInfo: { titleTemplate: 'Register | %s' },
      data: () => ({
        form: new Form({
          name: '',
          email: '',
          password: '',
          password_confirmation: ''
        })
      }),
      methods: {
        register () {
          this.form.post('/api/register')
            .then(() => this.login())
        },
        login () {
          this.form.post('/api/login')
            .then(({ data: { token }}) => {
              this.$store.dispatch('saveToken', { token })
              this.$store.dispatch('fetchUser').then(() => {
                this.$router.push({ name: 'home' })
              })
            })
        }
      }
    }
</script>
