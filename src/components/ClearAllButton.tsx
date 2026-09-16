interface ClearAllButtonProps {
  onClear: () => void
}

export function ClearAllButton({ onClear }: ClearAllButtonProps) {
  return <button onClick={onClear}>Clear All</button>
}
