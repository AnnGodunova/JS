import http from '@/netClient/config';

export async function doRegister(login, password, email){
    try{
        const response = await http.post('/auth/registration', {
            login,
            password,
            email
        })
        return response.data;
    } catch(error){
        console.error({ error })
        throw error;
    }
}

export async function doLogin(login, password){
    try{
        const response = await http.post('/auth/login', {
            login,
            password
        });
        const {accessToken} = response.data;
        localStorage.accessToken = accessToken;
        return accessToken;
    } catch(error){
        console.error({ error })
        throw error;
    }
}

export async function doLogoutClicked(){
    try{
        const response = await http.post('/users/logout', { });
        localStorage.removeItem('accessToken');
        return response.data;
    } catch(error){
        console.error({ error })
        throw error;
    }
}
