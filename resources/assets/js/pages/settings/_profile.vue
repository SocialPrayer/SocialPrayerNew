<template>
  <div class="card">
    <div class="card-header">
      Your Info
    </div>
    <div class="card-block">
      <form @submit.prevent="update" @keydown="form.errors.clear($event.target.name)">
        <alert-success :form="form" message="Your info has been updated!"></alert-success>

        <!-- Name -->
        <div class="form-group row" :class="{ 'has-danger': form.errors.has('name') }">
          <label class="col-sm-3 col-lg-3 col-form-label text-right">Name</label>
          <div class="col-sm-9 col-lg-6">
            <input v-model="form.name" type="text" name="name" class="form-control">
            <has-error :form="form" field="name"></has-error>
          </div>
        </div>

        <!-- Email -->
        <div class="form-group row" :class="{ 'has-danger': form.errors.has('email') }">
          <label class="col-sm-3 col-lg-3 col-form-label text-right">Email</label>
          <div class="col-sm-9 col-lg-6">
            <input v-model="form.email" type="text" name="email" class="form-control">
            <has-error :form="form" field="email"></has-error>
          </div>
        </div>

        <!-- Religion -->
        <div class="form-group row" :class="{ 'has-danger': form.errors.has('religion') }">
          <label class="col-sm-3 col-lg-3 col-form-label text-right">Relgion</label>
          <div class="col-sm-9 col-lg-6">
            <select v-model="form.religion" name="religion" class="form-control">
                <option>Catholic</option>
            </select>
            <has-error :form="form" field="religion"></has-error>
          </div>
        </div>

        <!-- Update Button -->
        <div class="form-group row">
          <div class="col-sm-9 offset-sm-3 col-lg-6 offset-lg-3">
            <button :disabled="form.busy" type="submit" class="btn btn-success">
              <icon v-if="form.busy" name="spinner"></icon>
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Form from 'vform'
import { mapGetters } from 'vuex'
import axios from 'axios'

export default {

  data: () => ({
    form: new Form({
      name: '',
      email: '',
      religion: '',
  })

  }),

  computed: {
      ...mapGetters({
          user: 'authUser'
    }),
    // console.log(this.user)
},

  created () {
    var vm = this;
    axios.get('/api/settings/profile/' + this.user.id)
    .then(function (response) {
        vm.userProfile = response.data[0];
        ['religion'].forEach(key => {
          vm.form[key] = vm.userProfile[key]
        })
    })
    .catch(function (e) {
        console.log(e);
    });
    ['name', 'email'].forEach(key => {
      this.form[key] = this.user[key]
    })
  },

  methods: {
    update () {
      this.form.patch('/api/settings/profile/' + this.user.id)
        .then(({ data }) => {
          this.$store.dispatch('updateUser', { user: data })
        })
    }
  }
}
</script>
