<template>
  <form method="POST" action="/login">
  <div>
    <section class="section is-large">
      <div class="columns is-centered">
        <div class="column is-3">
          <div class="box">
            <div class="field">
              <label class="label">Email Address</label>
              <div class="control has-icons-left">
                <input class="input is-medium" type="text" placeholder="Email Address" name="email">
                <span class="icon is-medium is-left">
                  <i class="fa fa-user"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control has-icons-left">
                <input class="input is-medium" type="password" placeholder="Password" name="password">
                <span class="icon is-medium is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <p class="control">
                <button class="button is-large is-success" type="submit">
                  Login
                </button>
              </p>
            </div>
            <div></div>
            <div class="field is-grouped is-grouped-centered">
              <p class="control">
                <a class="button is-info is-large">
                  <span class="icon is-medium">
                    <i class="fa fa-facebook"></i>
                  </span>
                  <span>Login</span>
                </a>
                <a class="button is-danger is-large">
                  <span class="icon is-medium">
                    <i class="fa fa-google"></i>
                  </span>
                  <span>Login</span>
                </a>
                <a class="button is-primary is-large">
                  <span class="icon is-medium">
                    <i class="fa fa-twitter"></i>
                  </span>
                  <span>Login</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  </form>
</template>

<script>
    export default {
        mounted() {

        }
    }
</script>
