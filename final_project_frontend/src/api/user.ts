// import { axiosInstance } from '.'
import { IUser } from './types'

// NOTE: Recupera la información del usuario basado en su jwt token
function GetUserInfo(): IUser {
    return {
        name: "Alejandro",
        lastName: "Ortega",
        birthday: new Date(1999, 3, 13),
        isActive: true,
        imageUrl: "/img/landing_hero.jpg",
    };
}

// NOTE: Actualiza la información del usuario
function UpdateUserInfo(userInfo: IUser): IUser {
    return userInfo;
}

export default {
    GetUserInfo,
    UpdateUserInfo,
}