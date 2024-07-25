import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../type/userType";

const user: User = {
    email: 'lumierebuds@gmail.com',
    nickname: 'buds',
    profile : '/images/user3.jpg', 
} // 초기값을 지정해 주기 


let userSlice = createSlice({
    name: 'user',
    initialState: user, 
    reducers: {
        login: (state, action:PayloadAction<User>) => {
            return action.payload;
        }, 
        logout: (state) => {
            return {email:'', nickname:'', profile:''};
        }, 
        randomProfile: (state) => {
            let random = Math.floor(Math.random() * 6); // 0~5까지의 무작위 정수  
            // ?
            // state.profile = `/images/user${random}.jpg`;
            let user = { ...state }; 
            user.profile = `/images/user${random}.jpg`;
            return user;
        }
    }
})

export const { login, logout, randomProfile } = userSlice.actions;
export default userSlice.reducer;