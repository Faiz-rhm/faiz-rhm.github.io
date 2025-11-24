'use client'

export function ProjectsSkeleton() {
  return (
    <div style={{ padding: '20px 0' }}>
      {[1, 2].map((i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            gap: '30px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '50%',
              height: '400px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '16px',
              animation: 'shimmer 1.5s infinite',
            }}
          />
          <div style={{ width: '50%' }}>
            <div
              style={{
                width: '80%',
                height: '40px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '8px',
                marginBottom: '20px',
                animation: 'shimmer 1.5s infinite',
              }}
            />
            <div
              style={{
                width: '100%',
                height: '200px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '8px',
                animation: 'shimmer 1.5s infinite',
              }}
            />
          </div>
        </div>
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
