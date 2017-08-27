<template>
    <div class="column is-8">
        <div class="card">
            <div class="card-content">
                <div class="media">
                  <!-- <div class="media-left">
                    <figure class="image is-48x48">
                      <img src="http://bulma.io/images/placeholders/96x96.png" alt="Image">
                    </figure>
                  </div> -->
                  <div class="media-content">
                    <p class="title is-5">{{prayer.user.name}}</p>
                  </div>
                </div>
                <div class="content">
                    {{ prayer.text }}
                </div>
            </div>
            <footer class="card-footer">
                <a class="card-footer-item">Save</a>
                <a class="card-footer-item">Edit</a>
                <a class="card-footer-item" v-on:click="$emit('delete-prayer')">Delete</a>
            </footer>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

 export default {
    name: 'prayer',
    props: ['prayer']
 }
</script>
