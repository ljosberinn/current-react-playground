import React, { Suspense } from 'react';

export default function withSuspense(Component, fallback = null) {
  const displayName = `withSuspense(${Component.displayName ||
    Component.name ||
    'UnknownComponent'})`;

  const C = props => (
    <Suspense fallback={fallback}>
      <Component {...props} />
    </Suspense>
  );

  C.displayName = displayName;
  C.WrappedComponent = Component;

  return C;
}
