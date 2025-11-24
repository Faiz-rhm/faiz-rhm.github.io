'use client'

export function ReviewsSkeleton() {
  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px', overflow: 'hidden' }}>
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          style={{
            width: '250px',
            height: '300px',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '12px',
            animation: 'shimmer 1.5s infinite',
          }}
        />
      ))}
      <style jsx>{`
        @keyframes shimmer {
          0% { opacity: 0.5; }
          50% { opacity: 0.7; }
          100% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}
