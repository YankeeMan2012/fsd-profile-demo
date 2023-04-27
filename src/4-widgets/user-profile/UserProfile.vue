<template>
  <div class="user-profile widget">
    <Button @click="toggleEdit">
      {{ edit ? $t('userProfile.view') : $t('userProfile.edit') }}
    </Button>
    <EditUserProfile v-if="edit" @updated="toggleEdit"/>
    <ViewUserProfile v-else/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { Button } from '@/7-shared/ui';
import { ViewUserProfile } from '@/5-features/view-user-profile';
import { EditUserProfile } from '@/5-features/edit-user-profile';
import { i18n } from './locales';

export default {
  name: 'UserProfile',
  components: {
    Button,
    ViewUserProfile,
    EditUserProfile,
  },
  data() {
    return {
      edit: false,
    };
  },
  methods: {
    ...mapActions('user', ['getProfile']),
    toggleEdit() {
      this.edit = !this.edit;
    },
  },
  created() {
    this.getProfile();
  },
  i18n,
};
</script>

<style scoped lang="scss" src="./user-profile.scss"/>
