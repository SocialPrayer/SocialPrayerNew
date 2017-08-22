<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="http://bulma.io/images/placeholders/96x96.png" alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <p class=" is-4">John Smith</p>
          <p class=" is-6">@johnsmith</p>
        </div>
      </div>
      <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus nec iaculis mauris. <a>@bulmaio</a>.
        <a>#css</a> <a>#responsive</a>
        <br>
        <small class="is-pulled-right">11:09 PM - 1 Jan 2016</small>
      </div>
    </div>
    <footer class="card-footer">
      <p class="card-footer-item">
        <span>
          Pray
        </span>
      </p>
      <p class="card-footer-item">
        <span>
          Save
        </span>
      </p>
    </footer>
  </div>
</template>

<script>
    export default {
        mounted() {
            // console.log('Component mounted.')
        }
    }
</script>
