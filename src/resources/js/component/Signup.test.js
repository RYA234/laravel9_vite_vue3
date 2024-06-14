import { render, screen } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import Signup from './Signup.vue';
import userEvent from '@testing-library/user-event'
//
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
