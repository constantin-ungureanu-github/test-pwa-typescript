/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react'
import { AnalyticsProvider, useFirebaseApp, useAnalytics } from 'reactfire';
import { getAnalytics, logEvent } from 'firebase/analytics'

function Logger() {
  const analytics = useAnalytics()

  React.useEffect(() => {
    logEvent(analytics, 'page_view', { page_location: location.href });
  }, [location.href])

  return null
}

export function Analytics() {
  const app = useFirebaseApp();
  return (
    <AnalyticsProvider sdk={getAnalytics(app)}>
      <Logger />
    </AnalyticsProvider>
  );
}
