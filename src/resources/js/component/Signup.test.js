import { render, screen } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import Signup from './Signup.vue';
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
    it('SignUpボタンが存在する',()=>{
        render(Signup)
        expect(screen.get);
    })

    it('Signボタンは非活性になっている',()=>{
        render(Signup)
        expect(screen.getByRole('button',{ name: 'Sign Up'})).toBeDisabled();
    })








})
