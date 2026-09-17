import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { HomePage } from './HomePage'

describe('HomePage', () => {
  it('adds a task to the list', async () => {
    const user = userEvent.setup()
    render(<HomePage />)

    await user.type(screen.getByLabelText(/tasks/i), 'Buy milk')
    await user.click(screen.getByRole('button', { name: /add/i }))

    expect(screen.getByText('Buy milk')).toBeInTheDocument()
    expect(screen.getByText(/1 tasks/i)).toBeInTheDocument()
  })

  it('deletes a task', async () => {
    const user = userEvent.setup()
    render(<HomePage />)

    await user.type(screen.getByLabelText(/tasks/i), 'Walk the dog')
    await user.click(screen.getByRole('button', { name: /add/i }))
    await user.click(screen.getByRole('button', { name: /delete/i }))

    expect(screen.queryByText('Walk the dog')).not.toBeInTheDocument()
    expect(screen.getByText(/0 tasks/i)).toBeInTheDocument()
  })

  it('clears all tasks', async () => {
    const user = userEvent.setup()
    render(<HomePage />)

    await user.type(screen.getByLabelText(/tasks/i), 'Task one')
    await user.click(screen.getByRole('button', { name: /add/i }))
    await user.type(screen.getByLabelText(/tasks/i), 'Task two')
    await user.click(screen.getByRole('button', { name: /add/i }))
    await user.click(screen.getByRole('button', { name: /clear/i }))

    expect(screen.queryByText('Task one')).not.toBeInTheDocument()
    expect(screen.queryByText('Task two')).not.toBeInTheDocument()
  })
})