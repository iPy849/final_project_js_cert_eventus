import { defineStore } from "pinia";
import type IUser from '@/api/type';
import utils from "../utils";

export const useAppStore = defineStore('appStore', {
    state: () => ({
        overlayOpen: false as boolean,
        isLoading: false as boolean,
    }),
    actions: {
        openOverlay(){
            this.overlayOpen = true;
            utils.disableScroll()
        },
        closeOverlay(){
            this.overlayOpen = false;
            utils.enableScroll()
        },
        showSpinner(){
            this.isLoading = true;
            this.openOverlay()
        },
        closeSpinner(){
            this.isLoading = false;
            this.closeOverlay()
        },
        closeOnlySpinner(){
            this.isLoading = false;
        }
    }
});

export const useUserStore = defineStore('userStore', {
    state: () => ({
        authToken: "" as string,
        userRegistrationInfo: null as IUser,
    }),
    getters: {
        isAuthenticated(state){
            return !!state.authToken
        }, 
    },
});