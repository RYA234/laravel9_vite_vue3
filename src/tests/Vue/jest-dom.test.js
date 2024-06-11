import { render, screen } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import JestDom from './JestDom.vue';
describe('Sign Up', () => {
    it('has Sign Up header', () => {
      render(JestDom)
      const header = screen.getByRole('heading', { name: 'Hello' })
      expect(header).toBeInTheDocument()
    })

})
