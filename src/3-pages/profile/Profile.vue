<template>
  <div class="profile page">
    <UserProfile/>
  </div>
</template>

<script>
import { UserProfile } from '@/4-widgets/user-profile';

export default {
  name: 'ProfilePage',
  components: {
    UserProfile,
  },
};
</script>

<style scoped lang="scss">

</style>
