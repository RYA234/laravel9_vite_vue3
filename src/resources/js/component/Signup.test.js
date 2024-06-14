//vitest の機能
// 外部のライブラリ使うときは宣言しておく？？
vi.mock('axios')
import { render, screen } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import Signup from './Signup.vue';
import userEvent from '@testing-library/user-event'
import axios from 'axios';


describe('ユーザー作成画面', () => {
    it('ヘッダーが存在しているか', () => {
      render(Signup)
      const header = screen.getByRole('heading', { name: 'SignUp' })
      expect(header).toBeInTheDocument()
    })

    it('label要素の値をpasswordが存在する',()=>{
        render(Signup)
        expect(screen.getByLabelText('Password')).toBeInTheDocument();
    })

    it('passwordのtypeを確認',()=>{
        render(Signup)
        expect(screen.getByLabelText('Password')).toHaveAttribute('type','password');
    })
    it('',()=>{
        render(Signup)
        expect();
    })
    it('',()=>{
        render(Signup)
        expect();
    })

    it('passwordとpasswordrepeatに同じ値を入力してSignUpボタンが活性化する',async()=>{
        const user = userEvent.setup();
        render(Signup)
        const password = screen.getByLabelText('Password');
        const passwordRepeat = screen.getByLabelText('PasswordRepeat');

        await userEvent.type(password,'password11')
        await userEvent.type(passwordRepeat,'password11')
        expect(screen.getByRole('button',{ name: 'Sign Up'})).toBeEnabled();

    })

    it('初期状態だとSignボタンは非活性になっている',()=>{
        render(Signup)
        expect(screen.getByRole('button',{ name: 'Sign Up'})).toBeDisabled();
    })
})

describe('ユーザー作成API',()=>{
    it('正しい値を入力したうえで、ボタンを押すとURIにpostMethodが送られる',async()=>{
        const user = userEvent.setup();
        render(Signup);

        // testingライブラリから要素を取得する
        const usernameInput = screen.getByLabelText('Username');
        const emailInput = screen.getByLabelText('E-mail');
        const passwordInput = screen.getByLabelText('Password');
        const passwordRepeatInput = screen.getByLabelText('PasswordRepeat');

        // testing library/user-eventを使ってフォームに値を入力する
        // https://testing-library.com/docs/user-event/v13/#typeelement-text-options
        await user.type(usernameInput,'user1');
        await user.type(emailInput,'user@mail.com');
        await user.type(passwordInput,'P4ssword');
        await user.type(passwordRepeatInput,'P4ssword');
        const button = screen.getByRole('button',{name:'Sign Up'});

        await user.click(button);

        expect(axios.post).toHaveBeenCalledWith('/api/v1/user',{
            username:'user1',
            email:'user@mail.com',
            password:'P4ssword'
        })

    })


})
