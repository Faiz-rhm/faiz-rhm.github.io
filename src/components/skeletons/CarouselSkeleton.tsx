'use client'

export function CarouselSkeleton() {
  return (
    <div style={{ padding: '50px 0' }}>
      <div
        style={{
          width: '100%',
          height: '400px',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '16px',
          animation: 'shimmer 1.5s infinite',
        }}
      />
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
