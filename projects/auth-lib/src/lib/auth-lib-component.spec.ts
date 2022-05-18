import { render, screen, fireEvent } from '@testing-library/angular';
import { AuthLibComponent } from './auth-lib.component';

describe('the auth component', () => {
  it('has the right thing on the screen', async () => {
    await render(AuthLibComponent);

    //expect(screen.getByText('auth-lib works!')).toBeInTheDocument();

    const el = screen.getByRole('heading');
    expect(el).toHaveTextContent('auth-lib is go!');
  })

  describe('providing data with an input', () => {
    beforeEach(async () => {
      await render(AuthLibComponent, {
        componentProperties: {
          msg: 'Taco bell!'
        }
      })
    })
    it('you can change what the thing displays', async () => {
      const el = screen.getByRole('heading');
      expect(el).toHaveTextContent('Taco bell!');
    })

    it('you can change the message', async () => {
      const button = screen.getByRole('button');

      fireEvent.click(button);

      const el = screen.getByTestId('msg');
      expect(el).toHaveTextContent('Party time!');
    })
  })

})
