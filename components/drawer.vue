<template>
    <v-navigation-drawer
            dark
            right
            :mini-variant.sync="mini"
            v-model="drawer"
            hide-overlay
    >
        <v-toolbar flat class="transparent">
            <v-list class="pa-0">
                <v-list-tile avatar>
                    <v-list-tile-avatar>
                        <img src="https://randomuser.me/api/portraits/men/85.jpg">
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title>Hey Admin</v-list-tile-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                        <v-btn
                                icon
                                @click.stop="mini = !mini"
                        >
                            <v-icon>chevron_right</v-icon>
                        </v-btn>
                    </v-list-tile-action>

                </v-list-tile>
            </v-list>
        </v-toolbar>

        <v-list class="pt-0" dense>
            <v-divider></v-divider>

            <v-list-tile
                    v-for="item in items"
                    :key="item.title"
                    v-on:click="item.path !== null? undefined : logout()"
                    :to="item.path !== null ? '/'+item.path: undefined"
            >
                <v-list-tile-action>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    import {drawerItems} from "../data/constant";

    export default {
        name: "drawer",
        data() {
            return {
                drawer: true,
                items: drawerItems,
                mini: true,
                left: null
            }
        },
        methods: {
            logout: function () {
                this.$emit('logout')
            }
        }
    }
</script>

<style scoped>

</style>
