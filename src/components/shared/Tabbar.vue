<template>
    <div class="tabbar">
        <a v-link="{path:'/',activeClass:'active'}" class="tabbar-item item-charging"></a>
        <a v-link="{path:'/finding',activeClass:'active'}" class="tabbar-item item-finding"></a>
        <a v-link="{path:'/follow',activeClass:'active'}" class="tabbar-item item-follow"></a>
        <a v-link="{path:'/me',activeClass:'active'}" class="tabbar-item item-me"></a>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .tabbar {
        height: 57px;
        background: #fff;
        border-top: 1px solid rgba(0,0,0,0.2);
        display: flex;
    }

    .tabbar-item {
        flex: 1;
        height: 100%;
        background-size: 44px;
        background-repeat: no-repeat;
        background-position:  center center;

        &.item-charging {
            background-image: url('~assets/images/home_ic_charge.png');

            &.active {
                background-image: url('~assets/images/home_ic_charge2.png');
            }
        }

        &.item-finding {
            background-image: url('~assets/images/home_ic_group.png');

            &.active {
                background-image: url('~assets/images/home_ic_group2.png');
            }
        }

        &.item-follow {
            background-image: url('~assets/images/home_ic_follow.png');
            
            &.active {
                background-image: url('~assets/images/home_ic_follow2.png');
            }
        }

        &.item-me {
            background-image: url('~assets/images/home_ic_me.png');

            &.active {
                background-image: url('~assets/images/home_ic_me2.png');
            }
        }
    }
</style>