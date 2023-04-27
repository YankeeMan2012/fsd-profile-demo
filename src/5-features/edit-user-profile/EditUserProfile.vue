<template>
  <div class="user-profile feature">
    <h3>{{ $t('editUserProfile.title') }}</h3>
    <form @submit.prevent="editUserProfile">
      <table>
        <tr>
          <td>{{ $t('editUserProfile.avatar') }}</td>
          <td>
            <img :src="profile.avatar" alt="avatar">
          </td>
        </tr>
        <tr>
          <td>{{ $t('editUserProfile.name') }}</td>
          <td>
            <Input v-model="edited.name"/>
          </td>
        </tr>
        <tr>
          <td>{{ $t('editUserProfile.email') }}</td>
          <td>
            <Input v-model="edited.email"/>
          </td>
        </tr>
        <tr>
          <td>{{ $t('editUserProfile.age') }}</td>
          <td>
            <Input v-model="edited.age"/>
          </td>
        </tr>
        <tr>
          <td>{{ $t('editUserProfile.gender') }}</td>
          <td>
            <Input v-model="edited.gender"/>
          </td>
        </tr>
      </table>
      <Button>{{ $t('editUserProfile.send') }}</Button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { Button, Input } from '@/7-shared/ui';
import { i18n } from './locales';

export default {
  name: 'EditUserProfile',
  computed: {
    ...mapGetters('user', ['profile']),
  },
  components: {
    Input,
    Button,
  },
  data() {
    return {
      edited: {},
    };
  },
  methods: {
    ...mapActions('user', ['updateProfile']),
    async editUserProfile() {
      await this.updateProfile(this.edited);
      this.$emit('updated');
    },
  },
  created() {
    this.edited = { ...this.profile };
  },
  i18n,
};
</script>

<style scoped lang="scss" src="./edit-user-profile.scss"/>
