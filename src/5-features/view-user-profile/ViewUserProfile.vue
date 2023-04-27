<template>
  <div class="user-profile feature">
    <h3>{{ $t('viewUserProfile.title') }}</h3>
    <table>
      <tr>
        <td>{{ $t('viewUserProfile.avatar') }}</td>
        <td>
          <img :src="profile.avatar" alt="avatar">
        </td>
      </tr>
      <tr>
        <td>{{ $t('viewUserProfile.name') }}</td>
        <td>{{ profile.name }}</td>
      </tr>
      <tr>
        <td>{{ $t('viewUserProfile.email') }}</td>
        <td>{{ profile.email }}</td>
      </tr>
      <tr>
        <td>{{ $t('viewUserProfile.age') }}</td>
        <td>{{ profile.age }}</td>
      </tr>
      <tr>
        <td>{{ $t('viewUserProfile.gender') }}</td>
        <td>{{ profile.gender }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { i18n } from './locales';

export default {
  name: 'ViewUserProfile',
  computed: {
    ...mapGetters('user', ['profile']),
  },
  i18n,
};
</script>

<style scoped lang="scss" src="./view-user-profile.scss"/>
