interface HighlightProps {
  children: React.ReactNode;
  color?: 'blue' | 'red' | 'green' | 'default';
}

export function Highlight({ children, color = 'default' }: HighlightProps) {
  const colorClasses = {
    blue: 'text-blue-600',
    red: 'text-red-600',
    green: 'text-green-600',
    default: 'text-gray-900',
  };

  return (
    <strong className={`font-bold ${colorClasses[color]}`}>
      {children}
    </strong>
  );
}