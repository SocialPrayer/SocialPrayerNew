<template>
  <div class="container">
    <nav class="navbar">
      <div class="navbar-brand">
        <div class="navbar-item">
          <a href="/">
            <img src="/images/logos/social-prayer-logo-square.png">
            <div class="is-pulled-right has-text-primary title is-size-4" style="font-weight: 400;">
              &nbsp;&nbsp;SocialPrayer
            </div>
          </a>
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
            <a href="login">Login</a>
          </div>
          <div class="navbar-item">
            <a href="register">Register</a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
    export default {
        mounted() {
          document.addEventListener('DOMContentLoaded', function () {

          // Get all "navbar-burger" elements
          var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

          // Check if there are any nav burgers
          if ($navbarBurgers.length > 0) {

            // Add a click event on each of them
            $navbarBurgers.forEach(function ($el) {
              $el.addEventListener('click', function () {

                // Get the target from the "data-target" attribute
                var target = $el.dataset.target;
                var $target = document.getElementById(target);

                // Toggle the class on both the "navbar-burger" and the "navbar-menu"
                $el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

              });
            });
          }

          });
        }
    }
</script>
