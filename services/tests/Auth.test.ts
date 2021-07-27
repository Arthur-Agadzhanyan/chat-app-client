import AuthService from "../AuthService";

describe('Тестирование метода login', () => {
    test('При правильных данных и подтверждённом аккаунте', async () => {
        const response = await AuthService.login("v@mail.ru","aaaaaa")

        expect(response.data.refreshToken).toBeDefined()
    });

    test('Если не введена почта', async () => {
        try{
            const response = await AuthService.login("","aaaaaa")
        }catch(e: any){
            expect(e.response.data.data.emailError).toBeTruthy()
            expect(e.response.status).toBe(422)
        }
    });

    test('Если не введён пароль', async () => {
        try{
            const response = await AuthService.login("v@mail.ru","")
        }catch(e: any){
            expect(e.response.data.data.passwordError).toBeTruthy()
            expect(e.response.status).toBe(422)
        }
    });

    test('Если введён не правильный пароль', async () => {
        try{
            const response = await AuthService.login("v@mail.ru","asdasd")
        }catch(e: any){
            expect(e.response.data.data.authError).toBe("Неправильный логин или пароль")
            expect(e.response.status).toBe(401)
        }
    });

    test('Если пользователь не найден', async () => {
        try{
            const response = await AuthService.login("asdasdasd@mail.ru","asdasd")
        }catch(e: any){
            expect(e.response.data.data.authError).toBe("Такой пользователь не найден")
            expect(e.response.status).toBe(404)
        }
    });

    test('Если аккаунт не подтверждён', async () => {
        try{
            const response = await AuthService.login("v42@mail.ru","aaaaaa")
        }catch(e: any){
            expect(e.response.data.data.authError).toBe("Вы не можете войти в свой аккаунт до тех пор, пока не подтвердите его")
            expect(e.response.status).toBe(403)
        }
    });
});