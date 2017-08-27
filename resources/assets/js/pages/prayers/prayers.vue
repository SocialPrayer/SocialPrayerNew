<template>
    <div>
        <div class="section">
            <form @submit.prevent="update" @keydown="form.errors.clear($event.target.name)">
            <div class="columns">
                <div class="column is-8">
                    <div class="field">
                        <div class="control">
                            <input class="input is-large" type="text" v-model.trim="form.newPrayer" name="newPrayer" placeholder="New Prayer...">
                        </div>
                    </div>
                </div>
            </div>
            </form>
        </div>
        <div class="section">
            <div class="columns" v-for="prayer in prayers">
                <prayer :prayer="prayer" v-on:delete-prayer="deletePrayer(index, prayer.id)"></prayer>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Form from 'vform'

export default {
    data() {
        return {
            prayers: [],
            form: new Form({
                newPrayer: '',
            })
        }

    },
    created() {
        this.getPrayers()
    },
    methods: {
        update () {
          this.form.post('/api/prayer')
            .then(({ data }) => {
                this.form.newPrayer = '';
              this.getPrayers();
            })
        },
        getPrayers() {
            axios.get('/api/prayer').then((response) => {
                this.prayers = response.data;
                console.log(this.prayers)
            }).catch ( error => {
                console.log(error);
            });
        },
        deletePrayer(index, id) {
            this.prayers.splice(index, 1);
            axios.delete('/api/prayer/' + id).then((response) => {
            }).catch ( error => {
                console.log(error);
            });
        }
    }
}
</script>
