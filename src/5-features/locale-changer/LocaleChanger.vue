<template>
  <div class="locale-changer feature">
    <Select v-model="$root.$i18n.locale" :options="locales"/>
  </div>
</template>

<script>
import { Select } from '@/7-shared/ui';
import { i18n } from './locales';

export default {
  name: 'LocaleChanger',
  components: {
    Select,
  },
  computed: {
    locales() {
      return [{
        value: 'en',
        label: this.$t('locale.en'),
      }, {
        value: 'ua',
        label: this.$t('locale.ua'),
      }];
    },
  },
  i18n,
};
</script>

<style scoped lang="scss" src="./locale-changer.scss"/>
