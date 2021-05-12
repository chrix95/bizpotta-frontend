<template>
    <ul class="settings_list">
        <li class="__list" v-for="(item, index) in menus" :key="index" :class="[currentRoute === item.code ? 'active' : '']">
            <div class="row">
                <div class="col-lg-1">
                    <img :src="item.icon">
                </div>
                <div class="col-lg-10">
                    <span class="__header">
                        {{ item.name }}
                    </span>
                    <br>
                    <p class="__subtext">{{ item.subtext }}</p>
                </div>
            </div>
        </li>
    </ul>
</template>
<script>
export default {
    name: "SettingsSidemenu",
    computed: {
        currentRoute() {
            return this.$route.meta.extraTitle
        }
    },
    data() {
        return {
            menus: [
                {
                    name: 'Account',
                    code: 'Account',
                    subtext: 'Update your personal and business profiles, privacy, and deactivation.',
                    icon: 'images/dashboard/icons/bx-user.svg'
                },
                {
                    name: 'Notifications',
                    code: 'Notifications',
                    subtext: 'Change settings regarding how, and when you receive notifications & messages.',
                    icon: 'images/dashboard/icons/bx-bell.svg'
                },
                {
                    name: 'Appearance & Preferrence',
                    code: 'Appearance',
                    subtext: 'Choose your appearance settings, colors scheme, display mode, etc.',
                    icon: 'images/dashboard/icons/bx-paint-roll.svg'
                },
                {
                    name: 'Security',
                    code: 'Security',
                    subtext: 'Password, two-factor authentication, token generation, etc.',
                    icon: 'images/dashboard/icons/bxs-key.svg'
                },
                {
                    name: 'Billing',
                    code: 'Billing',
                    subtext: 'Settings regarding payments, subscriptions, and billing cycle.',
                    icon: 'images/dashboard/icons/bx-money.svg'
                }
            ]
        }
    },
}
</script>
<style scoped>
.settings_list li.__list {
  padding: 20px 15px;
  border: 1px solid #E5E5E5;
}
.settings_list li.__list .__header {
  font-size: 16px;
  color: #13114F;
  font-weight: bold;
  margin-bottom: 15px;
}
.settings_list li .__subtext {
  font-size: 11px;
  color: #5C7198;
  margin-top: 10px;
  line-height: 17px;
}
.settings_list li.__list {
  padding: 20px 25px;
  border: 1px solid #E5E5E5;
  background: #FFF;
}
.settings_list li.__list.active {
  border-left: 4px solid #13114F;
  box-shadow: 0px 2px 4px rgb(19 17 79 / 30%);
}
</style>